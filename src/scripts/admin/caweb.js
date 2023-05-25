/* CAWeb Options Javascript */
jQuery(document).ready(function($) {
    "use strict";
  
    // Remove State Template Version option.
    if( $('select[id$="ca_site_version"]').length ){
      $('select[id$="ca_site_version"]').parent().parent().remove();
    }
  
    // Remove Social Media Link Header options.
    if( $('label[for ^="ca_social_"][for $="_header"]').length ){
      $('label[for ^="ca_social_"][for $="_header"]').each((i, element) => {
          $(element).parent().remove();
      });
    }

    // Remove Menu Home Link option.
    if( $('label[for="ca_home_nav_link"]').length ){
      $('label[for="ca_home_nav_link"]').parent().remove();
    }

    // Remove Menu Sticky Navigation option.
    if( $('label[for="ca_sticky_navigation"]').length ){
      $('label[for="ca_sticky_navigation"]').parent().remove();
    }

    // Remove Show Search on Front Page option.
    if( $('label[for="ca_frontpage_search_enabled"]').length ){
      $('label[for="ca_frontpage_search_enabled"]').parent().remove();
    }

});
  