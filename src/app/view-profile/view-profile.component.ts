var generic = generic || {},
Drupal = Drupal || {};
(function($) {
  Drupal.behaviors.bopis_store_delivery_v1 = {
    attach: function(context, settings) {
      if ($('body').hasClass('device-mobile')) {
        $("#map").googleMap({});
      }
    }
  };
})(jQuery);
