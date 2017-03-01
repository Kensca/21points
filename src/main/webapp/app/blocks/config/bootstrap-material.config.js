(function() {
    'use strict';

    angular
        .module('21PointsApp')
        .config(bootstrapMaterialDesignConfig);

    compileMaterialDesignConfig.$inject = [];

    function bootstrapMaterialDesignConfig() {
        $.material.init();

    }
})();
