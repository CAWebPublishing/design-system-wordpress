<? 
  $block_wrapper_attributes = get_block_wrapper_attributes();
  $image_uri = wp_get_attachment_image_url($attributes['mediaID'] ?? 0, "large");
  $title = isset( $attributes['title'] ) ? $attributes['title'] : '';
?>

<li <? echo $block_wrapper_attributes; ?>>
<img src="<? echo $image_uri; ?>" />
  <div class='card-text'>
    <h2>
      <? echo $title; ?>
    </h2>
    <div class='card-body-content'>
      <? echo $content; ?>
    </div>
  </div>
</li>