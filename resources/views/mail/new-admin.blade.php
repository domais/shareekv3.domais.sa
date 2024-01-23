<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>رسالة ترحبية</title>
</head>
<body>
    <p>مرحبا {{ $username }},</p>
    <p>مرحبا بك في موقعنا. يمكنك تسجيل الدخول باستخدام الرابط أدناه:</p>
    <p>رابط الدخول: <a href="{{ url('login') }}">تسجيل الدخول</a></p>
    <p>كلمة المرور الخاصة بك هي: {{ $password }}</p>
</body>
</html>