<?php
$folder = 'img/';
$allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

$files = array_filter(scandir($folder), function($file) use ($folder, $allowed_extensions) {
    $path = $folder . $file;
    $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
    return is_file($path) && in_array($ext, $allowed_extensions);
});

$images = array_map(function($file) use ($folder) {
    return $folder . $file;
}, $files);

header('Content-Type: application/json');
echo json_encode($images);
