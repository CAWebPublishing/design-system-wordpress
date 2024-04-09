jQuery(document).ready(function($) {
    let cawebColorSchemePicker = $('#ca_site_color_scheme');

    // hide State Template version option.
    if( $('select[id$="ca_site_version"]').length ){
        $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
    }

    // hide colorscheme options if in campaign mode.
    $('select[id$="cagov_design_system_mode"]').on('change', function(){
        // if the CAWeb Colorscheme Picker option doesn't exist don't do anything.
        if( ! cawebColorSchemePicker ){
            return;
        }

        if( 'default' === this.value ){
          // show colorscheme options
          cawebColorSchemePicker.parent().removeClass('d-none')
        }else{
          
          // hide colorscheme options
          cawebColorSchemePicker.parent().addClass('d-none')
        }
      })

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
        $('div[id^="ca_social_"][id$="-settings"]').each(function(index){
                var optionName = this.id.substring(0, this.id.indexOf('-'));
            // Make sure options are visible.
            $(this).removeClass('d-none');
                    $(this).prev().removeClass('d-none');

            // Hide Social Media Link Header options.
            $(`#${optionName}_header`).parent().parent().addClass('d-none');
        });
    }
});
