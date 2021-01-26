(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(100, 460); // normal platform (bottom middle)
        createPlatform(600, 570, 0.5); // small platform with 50% the normal width (bottom right)
        createPlatform(600, 380,); // medium platform (bottom-mid right towards)
        createPlatform(140, 274,); // medium platform (big middle) 
        createPlatform(180, 73, 0.45); // medium platform with 30% the normal width
        createPlatform(20, 150, 0.2); // tiny platform with 20% the normal width
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);