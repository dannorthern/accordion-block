<?php

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'accordion',
]);
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo wp_kses_post($content); ?>
</div>