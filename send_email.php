php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "cekpet72@gmail.com"; // Замените на свой адрес электронной почты
    $subject = "Сообщение с контактной формы";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Имя: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Сообщение: \n" . $message;

    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>