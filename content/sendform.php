<?php

$config = array('to' => 'annetalachoneta@gmail.com',
    "subject" => 'Formulario de contacto enviado',
    "from-name" => "El sitio",
    "from-email" => "info@g-vial.com"
);

$handle = fopen(".env", "r");

if ($handle) {
  while (($buffer = fgets($handle, 4096)) !== false) {
    $buffer = explode('=', $buffer);
    $config[trim(strtolower($buffer[0]))] = trim($buffer[1]);
  }
  if (!feof($handle)) {
    echo "Error: unexpected fgets() fail\n";
  }
  fclose($handle);
}

$to      = $config['to'];
$subject = $config['subject'];


$message = '
<html>
<head>
  <title>' . $subject . '</title>
</head>
<body>
  <p>'. $_POST["name"] . ' envio un formulario con el siguiente mensaje:</p>
  <blockquote>' . $_POST["message"] . '</blockquote>
  <p>Responder a ' . $_POST["email"] . '
    ' . (isset($_POST["phone"]) ? ' o al siguiente numero '. $_POST["phone"] : '') . '</p>
  <p>Mensaje enviado el ' . date("d/m/Y \a \l\a\s H:i", time()) . '</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'From: ' . $config['from-name'] . ' <'. $config['from-email'].'>';

// Mail it
echo mail($to, $subject, $message, implode("\r\n", $headers));