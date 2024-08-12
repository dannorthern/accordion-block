<?php

$unique_id = wp_unique_id('item-');
$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'accordion__item',
	'data-wp-interactive' => 'interactive-tabs-experiment',
	'data-wp-watch' => 'callbacks.logIsActive',
	'data-wp-class--is-active' => 'context.isActive',
]);

// Block title attributes
$title = !empty($attributes['title']) ? wp_kses_post($attributes['title']) : null;

// Get the default state
$default_state = isset($attributes['defaultState']) ? $attributes['defaultState'] : false;
?>

<div
	<?php echo $wrapper_attributes; ?>
	<?php echo wp_interactivity_data_wp_context(array('isActive' => $default_state)); ?>>
	<button
		class="accordion__title"
		data-wp-on--click="actions.toggle"
		data-wp-bind--aria-expanded="context.isActive"
		aria-controls="<?php echo esc_attr($unique_id); ?>">
		<?php echo $title; ?>
		<span class="accordion__toggle" aria-label="Toggle icon"></span>
	</button>

	<div
		class="accordion__content"
		id="<?php echo esc_attr($unique_id); ?>"
		data-wp-bind--hidden="!context.isActive">
		<?php echo $content; ?>
	</div>
</div>