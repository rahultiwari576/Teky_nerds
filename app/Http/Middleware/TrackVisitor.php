<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackVisitor
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        try {
            $visitorData = [
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'referrer' => $request->header('referer'),
                'landing_page' => $request->fullUrl(),
            ];

            Visitor::trackVisitor($visitorData);

            if (Visitor::shouldSendVisitorNotification()) {
                $this->sendVisitorNotification();
            }
        } catch (\Exception $e) {
            \Log::error('Visitor tracking failed: ' . $e->getMessage());
        }

        return $response;
    }

    private function sendVisitorNotification()
    {
        $totalVisitors = Visitor::getTotalVisitors();
        $emailVisitors = Visitor::getVisitorsWithEmail();

        $visitorData = [
            'total_visitors' => $totalVisitors,
            'email_visitors' => $emailVisitors,
            'subject' => "Milestone: {$totalVisitors} Visitors Reached!",
        ];

        try {
            \Mail::send('emails.visitor_notification', $visitorData, function ($message) use ($visitorData) {
                $message->to('hello@tekynerds.com')
                        ->subject($visitorData['subject'])
                        ->from('noreply@tekynerds.com', 'Tekynerds Website');
            });
        } catch (\Exception $e) {
            \Log::error('Failed to send visitor notification: ' . $e->getMessage());
        }
    }
}
