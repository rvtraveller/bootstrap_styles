/**
 * @file
 * Behaviors Bootstrap styles tabs scripts.
 */

(function ($, _, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.bootstrapStylesTabs = {
    attach: function (context) {

      $("#bs_nav-tabs li a", context).each(function() {
        $(this).on('click', function () {
          $('#bs_nav-tabs li a').removeClass('active');
          $(this).toggleClass('active');
          var href = $(this).attr('data-target');
          if(href && $('#bs_tabContent').length) {
            $('.bs_tab-pane').removeClass('active');
            $('.bs_tab-pane--' + href).addClass('active');
          }
        });
      })

    }
  };

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
