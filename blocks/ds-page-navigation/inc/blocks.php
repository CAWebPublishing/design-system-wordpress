<?php
/**
 * Ds Page Navigation Child Blocks
 *
 * @package caweb
 */

foreach ( glob( __DIR__ . '/blocks/*' ) as $file ) {
	$h = basename($file);
	require_once sprintf('%1$s/blocks/%2$s/%2$s.php', __DIR__ , $h);
}