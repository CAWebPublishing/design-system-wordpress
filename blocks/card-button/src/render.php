<?php 

if(!function_exists('ensureHttpsPrefix')){
function ensureHttpsPrefix($url) {
  // Check if the input is a string
  if (!is_string($url)) {
      throw new InvalidArgumentException('Input must be a string');
  }

  // Trim any leading or trailing whitespace
  $url = trim($url);

  // Remove any existing 'www.' prefix
  if (strpos($url, 'www.') === 0) {
      $url = substr($url, 4); // Remove 'www.' from the beginning
  }

  // Check if the URL already starts with 'https://'
  if (strpos($url, 'https://') !== 0) {
      // Prepend 'https://www.' to the URL
      $url = 'https://www.' . $url;
  } else {
      // If it starts with 'https://', just ensure it has 'www.'
      if (strpos($url, 'https://www.') !== 0) {
          $url = str_replace('https://', 'https://www.', $url);
      }
  }

  return $url;
}
}

  $block_wrapper_attributes = get_block_wrapper_attributes();
  $labelText = isset( $attributes['labelText'] ) ? $attributes['labelText'] : '';
  $cardType = isset( $attributes['cardType'] ) ? $block->context['card-group/cardType'] : '';

  if($attributes['linkedPost'] ?? null){
    $post_uri = get_permalink($attributes['linkedPost']);
  }

  if($attributes['externalUrl'] ?? null){
    $post_uri = ensureHttpsPrefix($attributes['externalUrl']);
  }
?>

<div <? echo $block_wrapper_attributes; ?>>
  <?php  if($labelText):  ?>
    <a class="action" href="<? echo $post_uri ?? "#" ?>" <? echo $block_wrapper_attributes ?>>
      <?php echo $labelText ?>
    </a>
  <?php endif; ?>
</div>