<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\BlogController;

Route::prefix('v1')->group(function () {
    // Contact routes
    Route::post('/contact', [ContactController::class, 'sendEmail']);
    
    // Blog routes
    Route::get('/blog', [BlogController::class, 'index']);
    Route::get('/blog/featured', [BlogController::class, 'featured']);
    Route::get('/blog/categories', [BlogController::class, 'categories']);
    Route::get('/blog/{slug}', [BlogController::class, 'show']);
});

