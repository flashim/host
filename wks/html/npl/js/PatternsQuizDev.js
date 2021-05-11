//template variables
var sounds_path;
var images_path;

var activity_base = ".";
var activity_filename = "PatternsQuiz";

var templateWidth = 1000;
var templateHeight = 739;

// setup variables
var canvas, stage, exportRoot;
var canvasStageRef; 
var images;

// preloader variables
var loaderBar;
var txt;
var bar;
var loaderWidth;
var loaderColor;


// development variables

var data_str;


var introSnd;
var panelButtons;
var startBtn, practice_session_arr, ps_container, it, tmpScreen, tmpSnd, tmp_var, tmp_sfx, tmp_arr, tmp_obj, tmp_mc, tmp_img, tmp_bg, tmp_container;
var activity_arr, activitySound_arr, question_arr, unAttempted_arr, user_response, interactiveRef;
var tweens;
var score;
var scoreTxt, qLeftTxt;
var questionsRemaining = 0;
var parrot_clicked = 0
var qRepeated = false;

var countDownValue=60;

var greenlight, redlight, yellowlight;

var act_completed="n";
var act_time = 0;

var game_history_obj;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	stage = new createjs.Stage(canvas);
	stage.enableMouseOver(20);


    loaderWidth = 300;


    var barHeight = 20;
    loaderColor = createjs.Graphics.getRGB(0,0,247);
    loaderBar = new createjs.Container();

    bar = new createjs.Shape();
    bar.graphics.beginFill(loaderColor).drawRect(0, 0, 1, barHeight).endFill();

    var bgBar = new createjs.Shape();
    var padding = 3
    bgBar.graphics.setStrokeStyle(1).beginStroke(loaderColor).drawRect(-padding/2, -padding/2, loaderWidth+padding, barHeight+padding).beginFill("#999").drawRect(0, 0, loaderWidth, barHeight).endFill();

    txt = new createjs.Text();
    txt.x = 85;
    txt.y = 3;
    txt.font = ("16px Verdana");
    txt.color = ("#FFFFFF");

    loaderBar.x = canvas.width - loaderWidth>>1;
    loaderBar.y = canvas.height - barHeight>>1;
	loaderBar.addChild(bgBar, bar, txt);

    stage.addChild(loaderBar);
    stage.update();

    var manifest = [
        {src:activity_base+"/images/"+activity_filename+"/Bitmap1.png", id:"Bitmap1"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Bar.png", id:"Bottom_Activity_Bar"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Exit.png", id:"Bottom_Activity_Button_Exit"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Home.png", id:"Bottom_Activity_Button_Home"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Replay.png", id:"Bottom_Activity_Button_Replay"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Skip.png", id:"Bottom_Activity_Button_Skip"},
        {src:activity_base+"/images/"+activity_filename+"/patternsquiz.jpg", id:"patternsquiz"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0002_bigstockSportycutepositivekidplay15442268.png", id:"patternsquiz_0002_bigstockSportycutepositivekidplay15442268"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0003_bigstocksummerholidaysfamilychild52080136.png", id:"patternsquiz_0003_bigstocksummerholidaysfamilychild52080136"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0004_Shape9.png", id:"patternsquiz_0004_Shape9"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0005_Shape10.png", id:"patternsquiz_0005_Shape10"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0007_Shape8copy2.png", id:"patternsquiz_0007_Shape8copy2"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0008_Shape8.png", id:"patternsquiz_0008_Shape8"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0009_bigstockBulldozer122493.png", id:"patternsquiz_0009_bigstockBulldozer122493"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0010_7318313824_bfef1bdd86_o.png", id:"patternsquiz_0010_7318313824_bfef1bdd86_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0011_6949371740_b9fb597f91_o.png", id:"patternsquiz_0011_6949371740_b9fb597f91_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0013_245657047_4073ce96e0_o.png", id:"patternsquiz_0013_245657047_4073ce96e0_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0014_227693178_87a80c64d0_o.png", id:"patternsquiz_0014_227693178_87a80c64d0_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0015_4052539031_fe78943286_o.png", id:"patternsquiz_0015_4052539031_fe78943286_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0016_2645428421_8d574127a5_ocopy2.png", id:"patternsquiz_0016_2645428421_8d574127a5_ocopy2"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0017_8115274748_5734a819b4_o.png", id:"patternsquiz_0017_8115274748_5734a819b4_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0019_7578778996_af7cf68566_o.png", id:"patternsquiz_0019_7578778996_af7cf68566_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0020_14213434134_080c479894_o.png", id:"patternsquiz_0020_14213434134_080c479894_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0021_8727060570_81c2057890_o.png", id:"patternsquiz_0021_8727060570_81c2057890_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0022_8724593232_3ebabc574f_o.png", id:"patternsquiz_0022_8724593232_3ebabc574f_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0024_14451847684_363531fc84_o.png", id:"patternsquiz_0024_14451847684_363531fc84_o"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0025_Shape7.png", id:"patternsquiz_0025_Shape7"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0026_Shape6.png", id:"patternsquiz_0026_Shape6"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0027_3.png", id:"patternsquiz_0027_3"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0028_1copy2.png", id:"patternsquiz_0028_1copy2"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0028_2.png", id:"patternsquiz_0028_2"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0029_1copy.png", id:"patternsquiz_0029_1copy"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0030_5.png", id:"patternsquiz_0030_5"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0031_4.png", id:"patternsquiz_0031_4"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0032_1.png", id:"patternsquiz_0032_1"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0033_Shape4.png", id:"patternsquiz_0033_Shape4"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0035_Shape3.png", id:"patternsquiz_0035_Shape3"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0036_Shape2copy2.png", id:"patternsquiz_0036_Shape2copy2"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0039_Shape2.png", id:"patternsquiz_0039_Shape2"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0040_red.png", id:"patternsquiz_0040_red"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0041_green.png", id:"patternsquiz_0041_green"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0042_black.png", id:"patternsquiz_0042_black"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0043_animatedtrafficlightsppt.png", id:"patternsquiz_0043_animatedtrafficlightsppt"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0044_questionDisplayBg.png", id:"patternsquiz_0044_questionDisplayBg"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0046_optionBox.png", id:"patternsquiz_0046_optionBox"},
		{src:activity_base+"/images/"+activity_filename+"/patternsquiz_0048_2883022553_b5071091c5_o.png", id:"patternsquiz_0048_2883022553_b5071091c5_o"},
		{src:activity_base+"/sounds/"+activity_filename+"/Conclusion.mp3", id:"Conclusion"},
		{src:activity_base+"/sounds/"+activity_filename+"/Introduction.mp3", id:"Introduction"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_01.mp3", id:"SFX_correct_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_02.mp3", id:"SFX_correct_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_03.mp3", id:"SFX_correct_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_04.mp3", id:"SFX_correct_04"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_01.mp3", id:"SFX_incorrect_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_02.mp3", id:"SFX_incorrect_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_03.mp3", id:"SFX_incorrect_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_mouse_click.mp3", id:"SFX_mouse_click"}
    ];

    
	var loader = new createjs.LoadQueue(false);
	//createjs.Sound.alternateExtensions = ["ogg"];
	loader.installPlugin(createjs.Sound);
	loader.on("progress", handleProgress);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);


	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stage);
}

function handleProgress(evt) {
    bar.scaleX = evt.loaded * loaderWidth;
    txt.text = ("Loading " + (100*(evt.loaded / evt.total)).toFixed() + "%");
    //console.log(evt.loaded*100);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {

    // remove loader
    stage.removeChild(loaderBar);
	
    exportRoot = new lib[activity_filename]();
    stage.addChild(exportRoot);

    exportRoot.home.id = "home";
    exportRoot.skip.id = "skip";
    exportRoot.replay.id = "replay";
    exportRoot.exit.id = "exit";

	panelButtons = [exportRoot.home, exportRoot.skip, exportRoot.replay, exportRoot.exit];
    configClickListeners(panelButtons, true);

    ps_container = new createjs.Container();
    stage.addChild(ps_container);

    
    activity_arr = [];
    activity_arr[0] = new QuestionVO("1", 
									 ["patternsquiz_0039_Shape2", "patternsquiz_0035_Shape3", "patternsquiz_0039_Shape2", "patternsquiz_0035_Shape3", "patternsquiz_0039_Shape2"],
									 4, 1,
									 175);
    activity_arr[1] = new QuestionVO("2", 
									 ["patternsquiz_0026_Shape6", "patternsquiz_0025_Shape7", "patternsquiz_0008_Shape8", "patternsquiz_0008_Shape8", "patternsquiz_0026_Shape6"],
									 4, 2,
									 175);
	activity_arr[2] = new QuestionVO("3", 
									 ["patternsquiz_0007_Shape8copy2", "patternsquiz_0004_Shape9", "patternsquiz_0005_Shape10", "patternsquiz_0004_Shape9", "patternsquiz_0007_Shape8copy2", "patternsquiz_0004_Shape9", "patternsquiz_0005_Shape10"],
									 6, 0,
									 125);								 
    activity_arr[3] = new QuestionVO("4", 
									 ["patternsquiz_0024_14451847684_363531fc84_o", "patternsquiz_0020_14213434134_080c479894_o", "patternsquiz_0024_14451847684_363531fc84_o", "patternsquiz_0022_8724593232_3ebabc574f_o", "patternsquiz_0024_14451847684_363531fc84_o"],
									 4, 1,
									 185);	
	activity_arr[4] = new QuestionVO("5", 
									 ["patternsquiz_0015_4052539031_fe78943286_o", "patternsquiz_0015_4052539031_fe78943286_o", "patternsquiz_0019_7578778996_af7cf68566_o", "patternsquiz_0019_7578778996_af7cf68566_o", "patternsquiz_0016_2645428421_8d574127a5_ocopy2", "patternsquiz_0016_2645428421_8d574127a5_ocopy2"],
									 5, 1,
									 150);	
	activity_arr[5] = new QuestionVO("6", 
									 ["patternsquiz_0014_227693178_87a80c64d0_o", "patternsquiz_0013_245657047_4073ce96e0_o", "patternsquiz_0010_7318313824_bfef1bdd86_o", "patternsquiz_0009_bigstockBulldozer122493", "patternsquiz_0014_227693178_87a80c64d0_o", "patternsquiz_0013_245657047_4073ce96e0_o"],
									 4, 2,
									 150);								 
    activity_arr[6] = new QuestionVO("7", 
									 ["patternsquiz_0032_1", "patternsquiz_0032_1", "patternsquiz_0028_2", "patternsquiz_0028_2", "patternsquiz_0027_3", "patternsquiz_0027_3"],
									 5, 0,
									 150);
	activity_arr[7] = new QuestionVO("8", 
									 ["patternsquiz_0032_1", "patternsquiz_0027_3", "patternsquiz_0032_1", "patternsquiz_0031_4", "patternsquiz_0032_1", "patternsquiz_0030_5"],
									 5, 0,
									 150);								 
    
									 
	//data_str = document.getElementById('game_history').value; //local

    //mock data_str
    //data_str = "1:C,T,I;2:T;4:I,C;5:I,C;score:10";
}

function QuestionVO(id, p_images, correct_index, incorrect_index, gap){
    this.id = id;
    this.p_images = p_images;
    this.correct_index = correct_index;
    this.incorrect_index = incorrect_index;
	this.gap = gap
    this.answered = "na";
}

function addElement(img, x, y, a, n){
	if(a == undefined) a = 1;
	tmp_var = getMCWrap(new lib[img]());
	centerRegPoint(tmp_var);
	tmp_var.name = (n != undefined) ? n : "";
	tmp_var.x = x;
	tmp_var.y = y;
	tmp_var.alpha = a;
	ps_container.addChild(tmp_var);
}

function buildQuestions(){
    var tmpArr=[];
    var alphabet;
    question_arr = [];


    if (data_str) {
        
        question_arr = activity_arr;

        game_history_obj = queryToObject();
        //console.dir( game_history_obj );
        
        for (var i = 0; i < question_arr.length; i++) {
            
            if((game_history_obj[question_arr[i].id] == "C") || (game_history_obj[question_arr[i].id] == "I")) {
                //console.log( question_arr[i].id + " match found --> "+game_history_obj[question_arr[i].id]); //question_arr.locatePropValIndex("id", i, false)
            }else{
                //console.log (question_arr[i].id+" added ");
                tmpArr.push(question_arr[i]);
            }
            
        }
        question_arr = [];
        question_arr = tmpArr.copyArray().shuffleArray();
        
        score = parseInt(game_history_obj["score"]);

        console.log(score+ ": score :: returning user-->"+data_str);
    }else{
        console.log("game_history else --> first time user");

        question_arr = activity_arr.copyArray().shuffleArray();
        score = 0;
    }  

    questionsRemaining = question_arr.length;
    //console.log(score+ " score :: -> "+data_str);

    startActivity();
    
}

function startActivity(){
    it = Iterator(question_arr);
    it.reset();
    it.next();
    loadActivityScreen(it);
}

function loadActivityScreen(it){

    var tmp_img;
    var layout = [{x:210, y:100}, {x:210, y:335}];

    tweens = [];
	interactiveRef = [];
	
    user_response = "T";
	
	clearActivityContainer();
	
	//.. current object
    tmp_obj = it.currentObj();
	
	var optXY = [{x:250,y:540}, {x:750,y:540}];
	
	//.. pattern display bg
	addElement("patternsquiz_0044_questionDisplayBg", 500, 190);

	//..create place for left Option
	addElement("patternsquiz_0046_optionBox", optXY[0].x, optXY[0].y);
	
	//..create place for right Option
	addElement("patternsquiz_0046_optionBox", optXY[1].x, optXY[1].y);
	
	//.. traffic signal
	addElement("patternsquiz_0043_animatedtrafficlightsppt", 560, 520);
	
	
	var dw = tmp_obj.gap;
	
	var randomTrue = (Math.random() > 0.5) ? 1 : 0;

	//set event for options & switch option
	
	
	//.. this is the Correct clickable
	tmp_img = new lib[tmp_obj.p_images[tmp_obj.correct_index]]();
	centerRegPoint(tmp_img);
	
	tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
	tmp_mc.addChild(tmp_img);
	ps_container.addChild(tmp_mc);
	
	if(randomTrue){
		tmp_mc.x = optXY[0].x;
		tmp_mc.y = optXY[0].y;
	}else{
		tmp_mc.x = optXY[1].x;
		tmp_mc.y = optXY[1].y;
	}

	//tmp_mc.isCorrect = tmp_arr[i].isCorrect;
	tmp_mc.cursor = "pointer";
	tmp_mc.mouseChildren = false;
	tmp_mc.mouseEnabled = true;
	
	tmp_mc.on("mouseover", function(evt) {
		//console.log("mouseover");
		createjs.Tween.get(evt.target).to({alpha:0.5}, 150);
	});
	tmp_mc.on("mouseout", function(evt) {
		//evt.target.shadow = null;
		createjs.Tween.get(evt.target).to({alpha:1}, 300);
	}); 
	tmp_mc.on("click", function(evt) {
		//ps_container.getChildByName("correct").alpha = 1;
		onClicked("C");
	});
	interactiveRef.push(tmp_mc);
	
	//.. this is the inCorrect clickable
	tmp_img = new lib[tmp_obj.p_images[tmp_obj.incorrect_index]]();
	centerRegPoint(tmp_img);
	
	tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
	tmp_mc.addChild(tmp_img);
	ps_container.addChild(tmp_mc);
	
	if(randomTrue){
		tmp_mc.x = optXY[1].x;
		tmp_mc.y = optXY[1].y;
	}else{
		tmp_mc.x = optXY[0].x;
		tmp_mc.y = optXY[0].y;
	}

	//tmp_mc.isCorrect = tmp_arr[i].isCorrect;
	tmp_mc.cursor = "pointer";
	tmp_mc.mouseChildren = false;
	tmp_mc.mouseEnabled = true;
	
	tmp_mc.on("mouseover", function(evt) {
		//console.log("mouseover");
		createjs.Tween.get(evt.target).to({alpha:0.5}, 150);
	});
	tmp_mc.on("mouseout", function(evt) {
		//evt.target.shadow = null;
		createjs.Tween.get(evt.target).to({alpha:1}, 300);
	});  
	tmp_mc.on("click", function(evt) {
		//ps_container.getChildByName("correct").alpha = 1;
		onClicked("I");
	});
	interactiveRef.push(tmp_mc);
	
	
	//.. add the pattern images
	for(var i=0; i<tmp_obj.p_images.length; i++){
		if(tmp_obj.correct_index == i){
			console.log(tmp_obj.correct_index + "correct index "+i);
			addElement("patternsquiz_0033_Shape4", (i * dw)+ 120, 255);
			addElement(tmp_obj.p_images[tmp_obj.correct_index], (i * dw)+ 120, 190, 0, "correct");
			addElement(tmp_obj.p_images[tmp_obj.incorrect_index], (i * dw)+ 120, 190, 0, "incorrect");

		}else{	
			addElement(tmp_obj.p_images[i], (i * dw)+ 120, 190);
		}
	}
	
	//.. add the traffic lights
	addElement("patternsquiz_0040_red", 498, 433, 0, "redlight");
	redlight = ps_container.getChildByName("redlight");
	
	addElement("patternsquiz_0042_black", 498, 520, 1, "yellowlight");
	yellowlight = ps_container.getChildByName("yellowlight");
	
	addElement("patternsquiz_0041_green", 498, 608, 0, "greenlight");
	greenlight = ps_container.getChildByName("greenlight");
	
	delayCall(function (){
		yellowlight.alpha = 0;
	}, 250);
	

	addCountDownTimer(countDownValue, timeUpNextActivityScreen);
    updateScore();

}

function onClicked(state){

    removeCountDownTimer();
    playSound("SFX_mouse_click");
	disableClicks(true, true);
	yellowlight.alpha = 1;
    //it.arr()[it.current()].answered = state;
    user_response = state;
    if(state == "C"){
		score += 5;
        tmp_var = "SFX_correct_0"+getRandomNumber(1, 4);
		createjs.Tween.get(ps_container.getChildByName("correct")).to({alpha:1}, 1000);
		greenlight.alpha = 1;
    }else{
        tmp_var = "SFX_incorrect_0"+getRandomNumber(1, 3);
		createjs.Tween.get(ps_container.getChildByName("incorrect")).to({alpha:1}, 1000);
		redlight.alpha = 1;
    }
    
    tmpSnd = new createjs.Sound.createInstance(tmp_var);
	tmpSnd.addEventListener("complete", function(){
		delayCall(gotoNextActivityScreen, 1000);
	});
	delayCall(function (){
		tmpSnd.play();
	}, 200);
	
	
	questionsRemaining--;

    canvasStageRef.onQuestionEnd(tmp_obj.id, (countDownValue - seconds), user_response, parrot_clicked); 
}


function gotoNextActivityScreen(){
    if(it.hasNext()) { 
        it.next();
        loadActivityScreen(it);
    }else{
        if(qRepeated) {
            canvasStageRef.onEnd();
            //console.log("end");
        }else{
            qRepeated = true;
            //console.log("repeat");
            repeatUnattempted();
        }
    }
}

function timeUpNextActivityScreen(){

	questionsRemaining--;
	
	canvasStageRef.onQuestionEnd(tmp_obj.id, (countDownValue - seconds), user_response, parrot_clicked);

    gotoNextActivityScreen();
    
}

function clearContainer(){
    clearTimer();
    ps_container.removeAllChildren();
}

function clearActivityContainer(){
   // clear the container
    removeCountDownTimer();
    clearContainer();
}

function repeatUnattempted(){
    unAttempted_arr = [];
    for (var i = 0; i < question_arr.length; i++) {
        if((question_arr[i].answered == "na") || (question_arr[i].answered == "T")){
          unAttempted_arr.push(question_arr[i]);
        }
    }
	
    questionsRemaining = unAttempted_arr.length;
	console.log("questionsRemaining "+questionsRemaining);

    question_arr = [];
    question_arr = unAttempted_arr;

    if(questionsRemaining > 0){
        startActivity();
    }else{
        canvasStageRef.onEnd();
    }
}

function isCompleted(){
var corrects = 0;
	var incorrects = 0;
	for (var i = 0; i < question_arr.length; i++) {
		if(question_arr[i].answered == "C"){
			//tmp_arr.push(i);
			corrects++;
		}
		if(question_arr[i].answered == "I"){
			incorrects++;
			//tmp_arr.push(i);
		}
	}
	//console.log(corrects, " corrects : question_arr.length ", question_arr.length);
	return ((corrects+incorrects) == question_arr.length) ? "y" : "n" 
}

function updateScore(){

    stage.removeChild(scoreTxt, qLeftTxt);

    scoreTxt = new createjs.Text();
    scoreTxt.x = 675;
    scoreTxt.y = 25;
    scoreTxt.font = ("bold 20px Verdana");
    scoreTxt.color = ("#000000");
    scoreTxt.text = score;
    scoreTxt.textAlign = "center";
    stage.addChild(scoreTxt);

    qLeftTxt = new createjs.Text();
    qLeftTxt.x = 750;
    qLeftTxt.y = 25;
    qLeftTxt.font = ("bold 20px Verdana");
    qLeftTxt.color = ("#000000");
    scoreTxt.textAlign = "center";
    qLeftTxt.text = questionsRemaining; //
    stage.addChild(qLeftTxt);

}


// ======= LISTENERS ======= //

canvasStageRef = new createjs.Container();

canvasStageRef.onStart = function(param){
    //alert("onStart");
    
    tmpSnd = new createjs.Sound.createInstance("Introduction");
    tmpSnd.addEventListener("complete", function(){

    });    
    delayCall(function (){
        tmpSnd.play();
        param.play();
    }, 50);
    
    //exportRoot.gotoAndPlay("activity"); // for testing
	
}

canvasStageRef.onActivity = function(param){

    //console.log("onActivity");
    param.stop();
    
    clearContainer();
	ps_container.x = ps_container.y = 0;
    
    /*if(startBtn) stage.removeChild(startBtn);


    startBtn = new lib.start();
    startBtn.x = 400;
    startBtn.y = 365;
    stage.addChild(startBtn);

    configClickListener(startBtn, true);
    startBtn.on("click", function(event){
        stage.removeChild(startBtn);*/
        buildQuestions();
    /*});*/
    
    configClickListener(exportRoot.skip, false);
    exportRoot.skip.gotoAndStop("disabled");
    configClickListener(exportRoot.replay, false);
    exportRoot.replay.gotoAndStop(3);
    
}

canvasStageRef.onEnd = function(param){

	//exportRoot.stop();
	
    //alert("activity ends "+ report());
    tmpSnd = new createjs.Sound.createInstance("Conclusion");
    tmpSnd.addEventListener("complete", function(){
        window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
		
    });    
    delayCall(function (){
		stage.removeChild(scoreTxt, qLeftTxt);
		clearActivityContainer();
		
		tmpSnd.play();
		exportRoot.play();
	}, 500);
}

canvasStageRef.onActivityClose = function(param){
    window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
}

canvasStageRef.onQuestionEnd = function (ID,TIME,RESULT,PARROTS) {
	
	PARROTS = 0;
	
	//local
	question_arr[question_arr.locatePropValIndex("id", ID, false)].answered = RESULT;
/*
    $.post('/emm/log_response/',
        {
            i:              document.getElementById('play_token').value, //m.activity.play_token,  // the session ID
            c:              '',       // the choice they made for the question
            q:              ID,   //  the question number (questions must be numbered sequentially, starting from 1)
            t:              TIME*1000, // the time it took them to answer the question (milliseconds)
            r:              RESULT,  // 'C' for Correct, 'I' for Incorrect, 'T' for Timed Out before answering
            p:              PARROTS, // number of times they clicked the parrot
            act_completed:  isCompleted(), //m.activity.is_completed,  // boolean -- if they are finished with the activity when this is sent, 'y', else 'n'
            act_time:       act_time*1000 //m.activity.time  // time in activity so far (milliseconds)
        }
    );//end post
*/
    updateScore();

    console.log(document.getElementById('play_token').value+ ">>id "+ID+">>result "+ RESULT+">>parrot "+PARROTS+">>completed "+isCompleted()+ ">>time " + TIME + ">>totaltime " +act_time);
}

// ======= LISTENERS ======= //

function configClickListener(mc, p){
    if(p){
        //mc.on("mouseover", onBtnOver);
        //mc.on("mouseout", onBtnOut);
        mc.on("click", onBtnClick);
        mc.cursor = "pointer";
		mc.mouseChildren = false;
    }else{
        mc.cursor = null;
        mc.removeAllEventListeners();
    }   
}

function configClickListeners(arr, p){
	var obj;
    for (var i = 0; i < arr.length; i++) {
        obj = arr[i];
        configClickListener(obj, p);
		//obj.mouseEnabled = p;
        obj.mouseChildren = false;
    }
}

function disableClicks(value, forceOverride){
    var obj;
    for (var i = 0; i < interactiveRef.length; i++) {
        obj = interactiveRef[i];
        obj.mouseChildren = false;
		
		if(!obj.disabled){
			if(forceOverride){
			   obj.mouseEnabled = !value; 
			   obj.clicked = false;
			}else{
				if(obj.clicked){
					//dont do anything     
				}else{
					obj.mouseEnabled = !value;
				}
			}
		}
    }
}



function onBtnClick(event){ 
    //event.target.gotoAndStop(2); 

    switch(event.target.id){
        case "home":
            window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
            //alert("/emm/map.php?play_token="+document.getElementById('play_token').value+"&a=[236]&act_completed="+act_completed+"&act_time="+act_time);
        break;
        
        case "skip":
            stopSound("Introduction");
            exportRoot.gotoAndStop("activity"); //
        break;

        case "replay":
            stopSound("Introduction");
            exportRoot.gotoAndPlay(0);

        break;

        case "exit":
            window.location = "/emm/login/";
        break;

        default :
            
        break;    
    }
}

function onBtnOver(event){ 
    event.target.gotoAndStop(1); 
}

function onBtnOut(event){ 
    event.target.gotoAndStop(0); 
}

function playSound(id, loop) {	
    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop); 
}

function pauseSound(id) {
    createjs.Sound.pause(id);
}

function resumeSound(id) {
    createjs.Sound.resume(id);
}

function stopSound(id) {
    createjs.Sound.stop(id);   
}


// =============================================
// ====== PARROT FUNCTIONS =====================

//======== PARROT ========== //

function addParrot(){
    parrot_clicked = 0;
    bird = new lib["parrot"]();
    ps_container.addChild(bird);
	bird.x = 32;
    bird.y = 70;
	bird.scaleX = -0.8;
	bird.scaleY = 0.8;
    //bird.mouseChildren = false;
    bird.cursor = "pointer";
    bird.on("click", function(event){
        parrot_clicked++;
        
		playSound("SFX_parrot_0"+getRandomNumber(1, 4));
		bird.play();

		createjs.Tween.get(tmp_obj.mc)
			.to({alpha:1}, 1000)
			.to({alpha:0}, 200);
		
		/*
		tmpSnd = new createjs.Sound.createInstance(tmp_obj.mp3);
		tmpSnd.addEventListener("complete", function(){
			//if(parrot_clicked > 4){
				//removeParrot();
			//}else{
				bird.play();
			//}
		});
		delayCall(function (){
			tmpSnd.play();
			bird.play();
		}, 500);
		*/
    });
	
	bird.play();
}

function removeParrot(){
    if(bird != undefined) bird.removeAllEventListeners("click");
	ps_container.removeChild(bird);
}

canvasStageRef.onParrotAnimComplete = function(param){
    param.gotoAndStop(0);
    //enableParrot(true);
}
// =============================================

var blinkBool = false;

function blink(){

    blinkBool = !blinkBool;
    tmp_mc = tmp_obj.mc;//ps_container.getChildByName(it.arr()[it.current()].blendCorrect);
    if(blinkBool){
        tmp_mc.filters = [new createjs.ColorFilter(0,1,0,1)];
        tmp_mc.cache(0,0, tmp_mc.getBounds().width, tmp_mc.getBounds().height);
    }else{
        tmp_mc.filters = [new createjs.ColorFilter(1,1,0,1)];
        tmp_mc.cache(0,0, tmp_mc.getBounds().width, tmp_mc.getBounds().height); 
    }
}

function clearBlink(){
	clearInterval(blinkVar);
	tmp_mc = tmp_obj.mc;
	tmp_mc.filters = [new createjs.ColorFilter(1,1,1,1)];
    tmp_mc.cache(0,0, tmp_mc.getBounds().width, tmp_mc.getBounds().height);
}
// ====== VISUAL COUNTDOWN TIMER ++++++++++++
var countdownTimer;
var seconds;

function addCountDownTimer(time, callbackFunc){
    /*txt = new createjs.Text();//change-local
    txt.x = 500;
    txt.y = 120;
    txt.font = ("20px Times Roman");
    txt.color = ("#FF0000");
    txt.textAlign = "center";
    stage.addChild(txt);*/

    seconds=time;
    countdownTimer = setInterval(function(){
        if(seconds < 1){
            //txt.text = "Time's up!";
            removeCountDownTimer();
            delayCall(callbackFunc, 1000);
        }else{
            //txt.text = "WIP: CoolBlends v.1 \n"+seconds; //++(act_time);
            seconds--;
        }
        act_time++;
    }, 1000);
}

function removeCountDownTimer(){
    clearInterval(countdownTimer);
    stage.removeChild(txt);
}


//--------UTILITY SCRIPTS--------------
function getMCWrap(bmp){
	var mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
	mc.addChild(bmp);
	return mc
}

function alignElement(element, xy, wh, objWH, regAdjust){
    //var twh = (wh == "width") ? templateWidth : templateHeight;
    element[xy] = (objWH - element.getBounds()[wh])/2;
    if(regAdjust) element[xy] -= element.getBounds()[wh]/2; 
}

function centerRegPoint(mc){
    mc.regX = mc.getBounds().width/2;
    mc.regY = mc.getBounds().height/2;  
}

var queryToObject = function(){
    var
    i = 0,
    retObj = {},
    pair = null,
    qArr = data_str.split(';');
    //qArr.pop();
    //console.log("-----------------------------");
    //console.log("queryToObject --> len "+qArr.length);
    for (; i < qArr.length; i++){
        pair = qArr[i].split(':');
        if(pair[0] == "score"){
            retObj[pair[0]] = pair[1];
        }else{
            retObj[pair[0]] = pair[1][pair[1].length-1]; //pair[1];   
        }
        
        //console.log(pair[0]+" = "+retObj[pair[0]]);
    };
    //console.log("-----------------------------");

    return retObj;
};

function getRandomNumber(lower, upper){
    return (Math.round(Math.random()*(upper-lower))+lower);
}

function applyClipColor(clip, color){
    clip.filters = color;
    clip.cache(0,0, clip.getBounds().width, clip.getBounds().height);
}

function removeClipColor(clip){
	clip.filters = [new createjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0)];
    clip.cache(-clip.getBounds().width/2,-clip.getBounds().height/2, clip.getBounds().width, clip.getBounds().height);
}
// ====== TIMER SCRIPT ++++++++++++

var timeoutID;
 
function startTimer(target) {
    timeoutID = window.setTimeout(callFunc, 2000, target);
}

function clearTimer(){
    window.clearTimeout(timeoutID);
}
 
function callFunc(t) {
    // do something
    clearTimer();
    //configClickListeners(true);
    //t.gotoAndStop(0);
}

function delayCall(myFunc, time){
    timeoutID = window.setTimeout(myFunc, time);
}
 
// Iterator class
function Iterator(o, keysOnly) {
    if(!(this instanceof arguments.callee))
      return new arguments.callee(o, keysOnly);
    var index = -1, keys = [];
    
    if(!o || typeof o != "object") return;
    if('splice' in o && 'join' in o) {
        while(keys.length < o.length) keys.push(keys.length);
    } else {
        for(p in o) if(o.hasOwnProperty(p)) keys.push(p);
    }
    this.next = function next() {
        if(index+1 < keys.length) {
            var key = keys[index++];
            return keysOnly ? key : [key, o[key]];
        } else throw { name: "StopIteration" };
    };
    this.prev = function prev() {
        if((index-1) >= 0) {
            var key = keys[index--];
            return keysOnly ? key : [key, o[key]];
        } else throw { name: "StopIteration" };
    };
    this.hasNext = function hasNext() {
        return index+1 < keys.length;
    };
    this.hasPrev = function hasPrev() {
        return (index-1) >= 0;
    };
    this.reset = function reset(){
        index = -1;
    }
    this.current = function current(){
        return index;
    }
    this.arr = function arr(){
        return o;
    }
    this.currentObj = function currentObj(){
        return o[index];
    }
}

