/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.storage.pools', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('storage.pools', {
        url: '/pool',
        template: '<p>this is for pool</p>',
        // templateUrl: 'pages/components/timeline/pools.html',
          title: 'Pool',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();