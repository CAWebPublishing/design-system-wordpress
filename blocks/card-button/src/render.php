<? 
  $block_wrapper_attributes = get_block_wrapper_attributes();
  $buttonText = isset( $attributes['buttonText'] ) ? $attributes['buttonText'] : '';
  $cardType = isset( $attributes['cardType'] ) ? $block->context['card-group/cardType'] : '';
  echo $cardType;
  // var_dump($block);
  // print_r($block);
?>

<div <? echo $block_wrapper_attributes; ?>>
  <?php  if($buttonText):  ?>
		<button class='action'>
      <?php echo $buttonText ?>
    </button>
  <?php endif; ?>
</div>