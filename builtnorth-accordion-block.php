<?php

/**
 * Plugin Name:       Accordion Block
 * Description:       This is an experiment to explore the Interactivity API. Contains an accordion block + accordion item block.
 * Version:           0.2.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Dan Northern
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       builtnorth-accordion-block
 *
 * @package           builtnorth-accordion-block
 */

// Namespace the file.
namespace BuiltNorth\AccordionBlock;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;


/**
 * Register parent blocks and their immediate children.
 */
function register_blocks()
{
	$build_dir = __DIR__ . '/build';

	// Register parent blocks
	$parent_blocks = glob($build_dir . '/*/block.json');
	foreach ($parent_blocks as $block_json) {
		register_block_type(dirname($block_json));
	}

	// Register child blocks
	$child_blocks = glob($build_dir . '/*/*/block.json');
	foreach ($child_blocks as $block_json) {
		register_block_type(dirname($block_json));
	}
}
add_action('init', __NAMESPACE__ . '\register_blocks');
