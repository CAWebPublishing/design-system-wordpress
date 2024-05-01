jQuery(document).ready(function($) {

    // hide colorscheme options if in campaign mode.
    $('select[id$="cagov_design_system_mode"]').on('change', function(){
        let cawebColorSchemePicker = $('#ca_site_color_scheme');
        let menuSelector = $('select[id$="ca_default_navigation_menu"]');
        let currentMenu = menuSelector.val();

        // clear menu options
        menuSelector.empty();

        // add appropriate menu types for the selected mode
        for(const [t, l] of Object.entries(cagov_design_system_admin_args.nav_menu_types[this.value])){
          let o = document.createElement('OPTION');

          o.value = t;
          o.text = l;

          if( t === currentMenu ){
              o.selected = true;
          }

          menuSelector.append( o )
        }

        // if the CAWeb Colorscheme Picker option doesn't exist don't do anything else.
        if( ! cawebColorSchemePicker ){
            return;
        }

        // show/hide options
        let displayDefaultOption = 'default' === this.value ? "removeClass" : "addClass";

        cawebColorSchemePicker.parent()[displayDefaultOption]('d-none');

        // Default Specific Social Media Links
        let socialOptions = [
          'ca_social_email', 
          'ca_social_flickr', 
          'ca_social_github',
          'ca_social_linkedin',
        ]; 

        for(let social of socialOptions ){
          $(`a[aria-controls="${social}-settings"]`)[displayDefaultOption]('d-none');
        }
        
      })

});
