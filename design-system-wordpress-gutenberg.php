<?php
/**
 * Plugin Name: ca.gov Design System Gutenberg Blocks
 *
 * @source https://github.com/cagov/design-system/
 * Plugin URI: https://github.com/cagov/design-system-wordpress-gutenberg
 * Description: Integrates the <a href="https://designsystem.webstandards.ca.gov">State of California Design System</a> into the WordPress.
 * Author: Office of Digital Innovation
 * Author URI: https://digital.ca.gov
 * Version: 1.3.4
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: cagov-design-system
 * Requires at least: 5.8
 *
 * @package  cagov-design-system
 * @author   Office of Digital Innovation <info@digital.ca.gov>
 * @license  https://opensource.org/licenses/MIT MIT
 * @link     https://github.com/cagov/design-system-wordpress-gutenberg#README
 * @docs https://designsystem.webstandards.ca.gov
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG', __DIR__ );

foreach ( glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*' ) as $file ) {
	$h = basename($file);
	require_once sprintf('%1$s/blocks/%2$s/%2$s.php', CAGOV_DESIGN_SYSTEM_GUTENBERG , $h);
}