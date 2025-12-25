<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'ip_address',
        'user_agent',
        'referrer',
        'landing_page',
        'email',
        'page_views',
        'last_activity_at',
    ];

    protected $casts = [
        'last_activity_at' => 'datetime',
    ];

    public static function trackVisitor($data)
    {
        $sessionId = session()->getId();
        
        return self::updateOrCreate(
            ['session_id' => $sessionId],
            [
                'ip_address' => $data['ip_address'] ?? request()->ip(),
                'user_agent' => $data['user_agent'] ?? request()->userAgent(),
                'referrer' => $data['referrer'] ?? request()->header('referer'),
                'landing_page' => $data['landing_page'] ?? request()->fullUrl(),
                'email' => $data['email'] ?? null,
                'page_views' => \DB::raw('page_views + 1'),
                'last_activity_at' => now(),
            ]
        );
    }

    public static function getTotalVisitors()
    {
        return self::count();
    }

    public static function getVisitorsWithEmail()
    {
        return self::whereNotNull('email')->get();
    }

    public static function shouldSendVisitorNotification()
    {
        $totalVisitors = self::getTotalVisitors();
        return $totalVisitors > 0 && $totalVisitors % 10 === 0;
    }
}
