/* CAWeb Options Javascript */
jQuery(document).ready(function($) {
  let social_links = cagov_design_system_admin_args.social_links;

  // Correct CAWeb Options. 
	correct_options();

  function correct_options(){
    // Hide State Template Version option.
    if( $('select[id$="ca_site_version"]').length ){
      $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
    }

    // Hide Menu Home Link option.
    if( $('label[for="ca_home_nav_link"]').length ){
      $('label[for="ca_home_nav_link"]').parent().parent().addClass('d-none');
    }

    // Hide Menu Sticky Navigation option.
    if( $('label[for="ca_sticky_navigation"]').length ){
      $('label[for="ca_sticky_navigation"]').parent().parent().addClass('d-none');
    }

    // Hide Show Search on Front Page option.
    if( $('label[for="ca_frontpage_search_enabled"]').length ){
      $('label[for="ca_frontpage_search_enabled"]').parent().parent().addClass('d-none');
    }

    // iteration over Social Media Links
    if( $('div[id^="ca_social_"][id$="-settings"]').length ){
      $('div[id^="ca_social_"][id$="-settings"]').each(function(index){
			  var optionName = this.id.substring(0, this.id.indexOf('-'));
          // Make sure options are visible.
          $(this).removeClass('d-none');
				  $(this).prev().removeClass('d-none');

          // Hide Social Media Link Header options.
          $(`#${optionName}_header`).parent().parent().addClass('d-none');

      });
    }


  }

});
  