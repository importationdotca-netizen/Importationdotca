<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars(trim($_POST['name'] ?? ''));
  $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars(trim($_POST['message'] ?? ''));

  if (empty($name) || empty($email) || empty($message)) {
    header("Location: /contact/?error=missing");
    exit;
  }

  $to = "info@importationdot.ca, reubencredit@gmail.com";
  $subject = "New Inquiry via ImportationDotCA Website";
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";

  mail($to, $subject, $body, $headers);
  header("Location: /thank-you/");
  exit;
}
?>
