<? 
  $block_wrapper_attributes = get_block_wrapper_attributes();
  $cardType = isset( $attributes['cardType'] ) ? $attributes['cardType'] : '';
  $imageLocation = isset( $attributes['imageLocation'] ) ? $attributes['imageLocation'] : '';
?>

<ul class='cards'
  <? echo $block_wrapper_attributes; ?>
  <?php echo $cardType === 'interactive' ? ' data-action="interactive"' : '' ?>
  <?php echo $cardType === 'interactive' ? " data-orientation=\"media-\"" : '';?>
>
    <? echo $content; ?>
</ul>