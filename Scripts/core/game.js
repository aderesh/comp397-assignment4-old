/// <reference path="_reference.ts"/>
// make a reference to the canvas element
var canvas = document.getElementById("canvas");
// create a reference to a stage container
var stage;
var helloLabel;
var startButton; // reference to our button class
function init() {
    stage = new createjs.Stage(canvas); // instatiate the stage container
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
    main(); // call the main game function
}
function gameLoop() {
    stage.update(); // refreshes the stage
}
function startButtonClick(event) {
    helloLabel.text = "clicked!";
}
/**
 * This is the main game method
 *
 * @method main
 * @returns {void}
 */
function main() {
    helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
    startButton = new objects.Button("../../Assets/images/startButton.png", 320, 340, true);
    stage.addChild(startButton);
    startButton.on("click", startButtonClick);
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map