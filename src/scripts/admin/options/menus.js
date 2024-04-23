jQuery(document).ready(function($) {


    // Correct menu types when design system mode is changed.
    $('select[id$="cagov_design_system_mode"]').on('change', function(){
        let menuSelector = $('select[id$="ca_default_navigation_menu"]');
        let currentMenu = menuSelector.val();

        menuSelector.empty();

        for(const [t, l] of Object.entries(cagov_design_system_admin_args.nav_menu_types[this.value])){
            let o = document.createElement('OPTION');

            o.value = t;
            o.text = l;

            if( t === currentMenu ){
                o.selected = true;
            }

            menuSelector.append( o )
        }
        
      })

});
