/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/* CAWeb Options Javascript */
jQuery(document).ready(function ($) {
  let currentMode = cagov_design_system_admin_args.mode || 'default';
  console.log(cagov_design_system_admin_args);
  // Correct CAWeb Options. 
  correct_options();
  function correct_options() {
    // Change State Template Version option to Design System Mode option.
    if ($('select[id$="ca_site_version"]').length) {
      // remove the onChange event handler.
      $('select[id$="ca_site_version"]').off('change');

      // Update label.
      let lbl = $('select[id$="ca_site_version"]').prev().prev();
      $(lbl).attr('for', 'cagov_design_system_mode');
      $(lbl).children()[0].innerHTML = 'Design System Mode';

      // Update descriptive text.
      $('select[id$="ca_site_version"]').prev().html('Select a Design System Mode.');

      // Clear Template Version
      $('select[id$="ca_site_version"]').empty();

      // Add Design System Mode options.
      cagov_design_system_admin_args.modes.forEach(mode => {
        let o = document.createElement('OPTION');
        o.value = mode.toLowerCase();
        o.innerHTML = mode;
        o.selected = currentMode === mode.toLowerCase();
        $('select[id$="ca_site_version"]').append(o);
      });
      $('select[id$="ca_site_version"]').attr('name', 'cagov_design_system_mode');
      $('select[id$="ca_site_version"]').attr('id', 'cagov_design_system_mode');
    }

    // Hide Menu Home Link option.
    if ($('label[for="ca_home_nav_link"]').length) {
      $('label[for="ca_home_nav_link"]').parent().parent().addClass('d-none');
    }

    // Hide Menu Sticky Navigation option.
    if ($('label[for="ca_sticky_navigation"]').length) {
      $('label[for="ca_sticky_navigation"]').parent().parent().addClass('d-none');
    }

    // Hide Show Search on Front Page option.
    if ($('label[for="ca_frontpage_search_enabled"]').length) {
      $('label[for="ca_frontpage_search_enabled"]').parent().parent().addClass('d-none');
    }

    // Utility Header Options.
    if ($('#utility-header-settings').length) {
      $('#utility-header-settings').addClass('d-none');
      $('#utility-header-settings').prev().addClass('d-none');
    }

    // iteration over Social Media Links
    if ($('div[id^="ca_social_"][id$="-settings"]').length) {
      $('div[id^="ca_social_"][id$="-settings"]').each(function (index) {
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
/******/ })()
;