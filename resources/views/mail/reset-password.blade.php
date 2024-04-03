<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reset Password</title>
</head>
<body style="margin: 0; padding: 0; font-family: sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
<main>
    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background: #f3f4f6; border-radius: 14px;">
        <h1 style="font-size: 28px; line-height: 32px; color: #374155; text-align: center;">Reset Password</h1>
        <p style="font-size: 18px; line-height: 24px; color: #6b7280; text-align: center; margin-top: 20px; margin-bottom: 20px;">
            If you've lost your password or wish to reset it, use the link below to get started.
        </p>
        <a href="{{ route('password.reset', ['token' => $token, 'email' => $email ]) }}" style="display: inline-block; padding: 10px 20px; background: #10b981; color: white; text-decoration: none; font-size: 18px; margin-left: auto; margin-right: auto; border-radius: 4px; transition: all;">Reset Password</a>
        <p style="font-size: 14px; line-height: 20px; color: #d1d5db; text-align: center;">
            If you did not request a password reset, you can safely ignore this email. Only a person with access to your email can reset your account password.
        </p>
    </div>
</main>
</body>
</html>
