jQuery(document).ready(function($) {
    let isDefault = 'default' === $('select[id$="cagov_design_system_mode"]').val();
    
    // hide State Template version option.
    if( $('select[id$="ca_site_version"]').length ){
        $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
    }

    // hide colorscheme options if in campaign mode.
    if( 'default' === isDefault ){
        // show colorscheme options
        $('#ca_site_color_scheme').parent().removeClass('d-none')
      }else{
        
        // hide colorscheme options
        $('#ca_site_color_scheme').parent().addClass('d-none')
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

    // Utility Header Options.
    if( $('#utility-header-settings').length ){
        $('#utility-header-settings').addClass('d-none');
        $('#utility-header-settings').prev().addClass('d-none');
    }

    
    // iteration over Social Media Links
    if( $('div[id^="ca_social_"][id$="-settings"]').length ){
        
        // Default Specific Social Media Links
        let socialOptions = [
            'ca_social_email', 
            'ca_social_flickr', 
            'ca_social_github',
            'ca_social_linkedin',
          ]; 

        $('div[id^="ca_social_"][id$="-settings"]').each(function(index){
            var optionName = this.id.substring(0, this.id.indexOf('-'));
            // Make sure options are visible.
            $(this).removeClass('d-none');
            $(this).prev().removeClass('d-none');
            // Hide Social Media Link Header options.
            $(`#${optionName}_header`).parent().parent().addClass('d-none');

            // if not default mode hide default specific links
            if( ! isDefault && socialOptions.includes(optionName) ){
                $(`a[aria-controls="${optionName}-settings"]`).addClass('d-none');
            }
        });
    }
});
