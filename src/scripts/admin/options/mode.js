jQuery(document).ready(function($) {
    let cawebColorSchemePicker = $('#ca_site_color_scheme');

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

});
