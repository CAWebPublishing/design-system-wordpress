/* CAWeb Options Javascript */
jQuery(document).ready(function($) {
    "use strict";
  
    // Hide State Template Version option.
    if( $('select[id$="ca_site_version"]').length ){
      $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
    }
  
});
  