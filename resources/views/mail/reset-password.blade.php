<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite(['resources/css/app.css'])
    </head>
    <body class="font-sans antialiased">
        <main class="bg-gray-300 w-full p-6 space-y-6">
            <div class="w-fit h-fit p-4 bg-white">

                <h1 class="text-2xl text-gray-700 text-center">Reset Password</h1>
                <p class="text-gray-500 text-center text-md">
                    If you've lost your password or wish to reset it, use the link below 
                    to get started. 
                </p>
                <a href="{{ url('/reset-password/{token}', ['token' => $token ]) }}" class="text-white px-5 py-2 bg-secondary hover:bg-secondary/80">Reset Password</a>
                <p class="text-gray-300 text-center text-sm">
                    If you did not request a password reset, you can safely ignore this email. Only
                    a person with access to your email can reset your account password.
                </p>
            </div>
        </main>
    </body>
</html>
