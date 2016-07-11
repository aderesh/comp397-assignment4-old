/// <reference path="_reference.ts"/>
var canvas = document.getElementById("canvas");
var stage;
var helloLabel;
function init() {
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameloop);
    main();
}
function gameloop() {
    helloLabel.rotation += 5;
    stage.update();
}
function main() {
    helloLabel = new createjs.Text("goodbye", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map