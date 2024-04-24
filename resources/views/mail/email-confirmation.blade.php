<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
<main>
    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background: #f3f4f6; border-radius: 14px;">
        <h1 style="font-size: 28px; line-height: 32px; color: #374155; text-align: center;">Email Confirmation</h1>
        <p style="font-size: 18px; line-height: 24px; color: #6b7280; text-align: center; margin-top: 20px; margin-bottom: 20px;">
            If you've request a email confirmation, use the link below to confirm. 
        </p>
        <a href="{{ route('email.confirmation', ['employee_id' => $employee_id ]) }}" style="display: block; padding: 10px 20px; background: #10b981; color: white; text-decoration: none; text-align: center; font-size: 18px; margin-left: auto; margin-right: auto; border-radius: 4px; transition: all;">Confirm</a>
        <p style="font-size: 14px; line-height: 20px; color: #d1d5db; text-align: center;">
            If you did not request a email confirmation, you can safely ignore this email.
        </p>
    </div>
</main>
</body>
</html>