<?php
$folder = 'img/';
$allowed_extensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

$images = array_values(array_filter(
  scandir($folder),
  fn($file) => is_file($folder . $file) && in_array(strtolower(pathinfo($file, PATHINFO_EXTENSION)), $allowed_extensions)
));

header('Content-Type: application/json');
echo json_encode(array_map(fn($f) => $folder . $f, $images));
