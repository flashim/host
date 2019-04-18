var canvas, stage;
var canvasStageRef; 

var grey1, grey2, inst;
var arc_01, arc_02, arc_03, arc_04, arc_05, arc_06, arc_07, arc_08, arc_09, arc_10;
var allArr, mcArr;
var animationCounter = 0;

var dev = false;
var devNum = 39;

var _x = 310;
var _y = 880;


var openLinks;
var arcClicked;
var linkId;
var isQuickDraw = false;

function init() {


	// --------- BROWSER DETECTION ---------

    var isOpera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome;                          // Chrome 1+
    var isIE = /*@cc_on!@*/false;
    
    /*
    console.log("isOpera: " + isOpera);
    console.log("isFirefox: " + isFirefox);
    console.log("isSafari: " + isSafari);
    console.log("isChrome: " + isChrome);
    console.log("isIE: " + isIE);
	*/

    // ------ BROWSER DETECTION ENDS -------

	canvas = document.getElementById("canvas");

	stage = new createjs.Stage(canvas);
	stage.enableMouseOver(10);


	grey1 = new lib.grey1();
	grey1.stage_bg.addEventListener("click", onStageClick);
	
	arc_01 = new lib._01();	
	arc_02 = new lib._02();
	arc_03 = new lib._03();
	arc_04 = new lib._04();
	arc_05 = new lib._05();
	arc_06 = new lib._06();
	arc_07 = new lib._07();
	arc_08 = new lib._08();
	arc_09 = new lib._09();
	arc_10 = new lib._10();

	grey2 = new lib.grey2();

	inst = new lib.instruction();

	allArr = [grey1, arc_01, arc_02, arc_03, arc_04, arc_05, arc_06, arc_07, arc_08, arc_09, arc_10, grey2];
	mcArr = [arc_01, arc_02, arc_03, arc_04, arc_05, arc_06, arc_07, arc_08, arc_09, arc_10];

	moveObjectTo(_x, _y);

	startAnimation();
	
	createjs.Ticker.setFPS(1000);
	createjs.Ticker.addEventListener("tick", stage);
	
	stage.update();

	
}

// ======= LISTENERS ======= //

canvasStageRef = new createjs.Container();
canvasStageRef.onTimelineTweenComplete = function(param){
	//
	stage.addChild(mcArr[animationCounter]);
	if(animationCounter<mcArr.length) {
		if (!isQuickDraw) {
			console.log(animationCounter+ " onTimelineTweenComplete " + mcArr[animationCounter]);
			mcArr[animationCounter].gotoAndPlay(0);//
			configClickListener(mcArr[animationCounter], true);
		}
	}
	
	if(animationCounter == mcArr.length){
		
		endAnimation();
	}

	animationCounter++;
}
canvasStageRef.onStart = function(){

	setup(false);
	clearTimer();

	restartAnimation();
}
canvasStageRef.onItemClick = function(param){
	console.log("onItemClick");
	linkId = param;
}

function onStageClick(){
	console.log("onStageClick");
	dimAll(false);
	openLinks = false;
	arcClicked = null;
}

function endAnimation(){
	stage.addChild(grey2);
	setup(true); //for inactivity showInstruction screen
}

function dimAll(p){
	var val = (p) ? 0.18 : 1;
	for (var i = 0; i < allArr.length; i++) {
		allArr[i].alpha = val;
	}
}

function quickDraw(){
	for (var i = 0; i < mcArr.length; i++) {
	
		mcArr[i].gotoAndStop(mcArr[i].timeline.duration - 1);
		configClickListener(mcArr[i], true);
	}
	endAnimation();
	grey2.gotoAndStop(grey2.timeline.duration - 1);
}


function restartAnimation(){
	//console.log("restartAnimation");

	configClickListeners(false);
	stage.removeAllChildren();

	dimAll(false);
	startAnimation();	
}

function startAnimation(){
	openLinks = false;
	linkId = "";
	arcClicked = null;
	animationCounter = 0;

	stage.addChild(grey1);
	grey1.gotoAndPlay(0);	
}

function showInstruction(){
	configClickListeners(false);
	inst.x = - 100;
	stage.addChild(inst);	
}

function resetClipProp(){
	for (var i = 0; i < allArr.length; i++) {
		allArr[i].gotoAndStop(0);
	}
}

function configClickListener(mc, p){
	if(p){
		mc.on("click", handleClick);
		mc.cursor = "pointer";
	}else{
		mc.cursor = null;
		mc.removeAllEventListeners("click");
	}	
}


function configClickListeners(p){
	for (var i = 0; i < mcArr.length; i++) {
		configClickListener(mcArr[i], p);
	}
}

function handleClick(event){
	console.log("handleClick");
	console.log("arcClicked " + arcClicked+" :: openLinks"+openLinks+ " linkId "+linkId);
	
	if(openLinks && (arcClicked == this)){
		imageOpen(linkId);
	}
	arcClicked = this;
	openLinks = true;
	if(arcClicked != this) openLinks = false;
	isQuickDraw = true;
	quickDraw();

	dimAll(true);
	this.alpha = 1;
}

// ======= LISTENERS ======= //

// ======== UTILITY ========= //
function moveObjectTo(x, y){
	for (var i = 0; i < allArr.length; i++) {
		allArr[i].x = x;
		allArr[i].y = y;
		allArr[i].scaleX = 0.93;
	}

}


// ====== TIMER SCRIPT ++++++++++++

var timeoutID;
 
function setup(p) {

	var config = (p) ? "addEventListener" : "removeEventListener";

    this[config]("mousemove", resetTimer, false);
    this[config]("mousedown", resetTimer, false);
    this[config]("keypress", resetTimer, false);
    this[config]("DOMMouseScroll", resetTimer, false);
    this[config]("mousewheel", resetTimer, false);
    this[config]("touchmove", resetTimer, false);
    this[config]("MSPointerMove", resetTimer, false);
 
    if(p) startTimer();
}
//setup();
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 15000);
    //console.log("startTimer");
}
 
function resetTimer(e) {
    clearTimer();
    goActive();
}

function clearTimer(){
	window.clearTimeout(timeoutID);
}
 
function goInactive() {
    // do something
    showInstruction();
    //console.log("goInactive");
}
 
function goActive() {
    // do something    
    startTimer();
    //console.log("goActive");
}