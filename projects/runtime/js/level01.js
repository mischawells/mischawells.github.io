var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -4,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 52},
                { "type": "sawblade", "x": 1000, "y": groundY - 52},
                { "type": "sawblade", "x": 1800, "y": groundY - 52},
                { "type": "sawblade", "x": 2300, "y": groundY - 52},
                { "type": "enemy", "x": 750, "y": groundY - 50},
                { "type": "enemy", "x": 1500, "y": groundY - 50},
                { "type": "enemy", "x": 1900, "y": groundY - 50},
                { "type": "enemy", "x": 2600, "y": groundY - 50},
                { "type": "blob", "x": 490, "y": groundY - 50},
                { "type": "blob", "x": 1110, "y": groundY - 50},
                { "type": "blob", "x": 2200, "y": groundY - 50},
                { "type": "blob", "x": 2800, "y": groundY - 50},
                { "type": "reward", "x": 900, "y": groundY - 60},
                { "type": "reward", "x": 1400, "y": groundY - 60},
                { "type": "reward", "x": 2400, "y": groundY - 60},
                { "type": "reward", "x": 3000, "y": groundY - 60}
            ]
        };

        for (var i = 0; i < levelData.gameItems.length; i++){
            obj = levelData.gameItems[i];
            objX = obj.x;
            objY = obj.y;
            objType = obj.type;
            if (objType === "sawblade"){
                createSawBlade(objX, objY);
            } else if (objType === "enemy"){
                createEnemy(objX, objY);
            } else if (objType === "blob"){
                createBlob(objX, objY);
            } else {
                createReward(objX, objY);
            }
        }


        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        

        function createSawBlade(x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y + Math.floor(Math.random() * 20);

            game.addGameItem(sawBladeHitZone);
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -45;
            obstacleImage.y = -25;
            obstacleImage.scaleX = -2;
            obstacleImage.scaleY = -2;

            
        };                 

        function createEnemy(x,y) {
      
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'#FE008E');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;

            game.addGameItem(enemy);

            enemy.velocityX = -2;

            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-20)
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                console.log('Hale has hit the enemy');
                game.changeIntegrity(20);
                game.increaseScore(100);
                enemy.flyTo(x,y);
            };
    };

        function createBlob(x,y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var blobhitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            blobhitZone.x = x;
            blobhitZone.y = y;

            game.addGameItem(blobhitZone);
            
            var obstacleImage = draw.bitmap('img/madblob.png');
            blobhitZone.addChild(obstacleImage);
            obstacleImage.x = -10;
            obstacleImage.y = -30;
            obstacleImage.scaleX = .15;
            obstacleImage.scaleY = .15;
    }
    

        function createReward (x,y) {
            var reward = game.createGameItem('reward', 17);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -2;

            game.addGameItem(reward);
            
            var milk = draw.bitmap('img/milk2.png');
            reward.addChild(milk);
            milk.x = -20;
            milk.y = -20;
            milk.scaleX = .25;
            milk.scaleY = .25;

             reward.onPlayerCollision = function() {
                game.changeIntegrity(30);
                game.increaseScore(100);
                reward.fadeOut();
            };

        }
        

        // DO NOT EDIT CODE BELOW HERE
    }

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
