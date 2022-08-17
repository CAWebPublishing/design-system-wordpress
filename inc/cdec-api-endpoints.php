<?php
/**
 * Design System CDEC REST API
 *
 * @package cagov-design-system
 */

/**
 * Retrieve data from the CDEC Reservoir API
 *
 * @see https://cdec.water.ca.gov/resapp/service/res/conditions
 * @param  string $station_id Major reservoirs station that were recommended by CDEC.
 * @return string
 */
function cagov_ds_cdec_reservoir_conditions_api( $station_id = '' ) {

	if ( empty( $station_id ) ) {
		return $result;
	}

	$date   = gmdate( 'Y-m-d' );
	$result = 'No Results';

	$url = "https://cdec.water.ca.gov/resapp/service/res/conditions?date=$date&stationIds=$station_id";

	$args = array(
		'headers' => array(
			'Content-Type' => 'application/json',
		),
	);

	$response = wp_remote_get( $url );

	if ( '200' === wp_remote_retrieve_response_code( $response ) ) {
		$result = wp_remote_retrieve_body( $response );

		return json_decode( $result, true )[0];
	}

}
