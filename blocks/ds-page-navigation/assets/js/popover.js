jQuery( document ).ready( function ( $ ) {
	// eslint-disable-line
	$( document ).on( 'mouseover', '.popover', function ( ele ) {
		togglePopover( ele.currentTarget.id );
	} );

	$( document ).on( 'mouseout', '.popover', function ( ele ) {
		togglePopover( ele.currentTarget.id, false );
	} );

	function togglePopover( id, popin = true ) {
		if ( undefined !== id ) {
			const current = $( '#' + id );
			const popver = $( '#' + id + '-popover' );

			if ( popin ) {
				current.addClass( 'highlighted' );

				if ( undefined !== popver ) {
					$( popver ).addClass( 'popover-revealed' );
				}
			} else {
				current.removeClass( 'highlighted' );

				if ( undefined !== popver ) {
					$( popver ).removeClass( 'popover-revealed' );
				}
			}
		}
	}
} );
