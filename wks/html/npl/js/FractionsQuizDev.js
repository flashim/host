//template variables
var sounds_path;
var images_path;

var activity_base = ".";
var activity_filename = "FractionsQuiz";

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

var bird;
var birdSnd;
var parrot_clicked = 0;

var introSnd;
var panelButtons;
var startBtn, practice_session_arr, ps_container, it, tmpScreen, tmpSnd, tmp_var, tmp_sfx, tmp_arr, tmp_obj, tmp_str, tmp_mc, tmp_img, tmp_bg, tmp_container;
var activity_arr, activitySound_arr, question_arr, unAttempted_arr, user_response, interactiveRef;
var tweens;

var questionsLeft = 0;
var score, scoreTxt, qLeftTxt;
var questionsRemaining = 0;
var qRepeated = false;
var countDownValue=60; //local
var act_completed="n";
var act_time = 0;
var game_history_obj;

//.. below activity related variables
var move;
var moveTarget = null;
var partsClicked;
var checkButton;
var oldPt, oldMidPt, color, stroke, drawingCanvas;
var colors = ["#828b20", "#b0ac31", "#cbc53d", "#fad779", "#f9e4ad", "#faf2db", "#563512", "#9b4a0b", "#d36600", "#fe8a00", "#f9a71f"];


var optionArr;

//var collisionMethod = ndgmr.checkRectCollision; //ndgmr.checkPixelCollision;

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
		
		{src:activity_base+"/images/"+activity_filename+"/checkmarkfractionsquiz.png", id:"checkmarkfractionsquiz"},
		{src:activity_base+"/images/"+activity_filename+"/cursor.png", id:"cursor"},
		{src:activity_base+"/images/"+activity_filename+"/eig1.png", id:"eig1"},
		{src:activity_base+"/images/"+activity_filename+"/eig2.png", id:"eig2"},
		{src:activity_base+"/images/"+activity_filename+"/eig3.png", id:"eig3"},
		{src:activity_base+"/images/"+activity_filename+"/eig4.png", id:"eig4"},
		{src:activity_base+"/images/"+activity_filename+"/eig5.png", id:"eig5"},
		{src:activity_base+"/images/"+activity_filename+"/eig6.png", id:"eig6"},
		{src:activity_base+"/images/"+activity_filename+"/eig7.png", id:"eig7"},
		{src:activity_base+"/images/"+activity_filename+"/eig8.png", id:"eig8"},
		{src:activity_base+"/images/"+activity_filename+"/f1.png", id:"f1"},
		{src:activity_base+"/images/"+activity_filename+"/f2.png", id:"f2"},
		{src:activity_base+"/images/"+activity_filename+"/f3.png", id:"f3"},
		{src:activity_base+"/images/"+activity_filename+"/f4.png", id:"f4"},
		{src:activity_base+"/images/"+activity_filename+"/fi1.png", id:"fi1"},
		{src:activity_base+"/images/"+activity_filename+"/fi2.png", id:"fi2"},
		{src:activity_base+"/images/"+activity_filename+"/fi3.png", id:"fi3"},
		{src:activity_base+"/images/"+activity_filename+"/fi4.png", id:"fi4"},
		{src:activity_base+"/images/"+activity_filename+"/fi5.png", id:"fi5"},
		{src:activity_base+"/images/"+activity_filename+"/fours1.png", id:"fours1"},
		{src:activity_base+"/images/"+activity_filename+"/fours2.png", id:"fours2"},
		{src:activity_base+"/images/"+activity_filename+"/fours3.png", id:"fours3"},
		{src:activity_base+"/images/"+activity_filename+"/fours4.png", id:"fours4"},
		{src:activity_base+"/images/"+activity_filename+"/fours5.png", id:"fours5"},
		{src:activity_base+"/images/"+activity_filename+"/fours6.png", id:"fours6"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz.jpg", id:"fractionsquiz"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0000_2_8.png", id:"fractionsquiz_0000_2_8"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0000_Layer1.png", id:"fractionsquiz_0000_Layer1"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0001_2_3.png", id:"fractionsquiz_0001_2_3"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0001_Layer2.png", id:"fractionsquiz_0001_Layer2"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0002_Layer3.png", id:"fractionsquiz_0002_Layer3"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0004_Layer4.png", id:"fractionsquiz_0004_Layer4"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0005_Layer5.png", id:"fractionsquiz_0005_Layer5"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0006_Layer6.png", id:"fractionsquiz_0006_Layer6"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg.png", id:"fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0008_fabfracts_0052_pie_0109a_40600_lg.png", id:"fractionsquiz_0008_fabfracts_0052_pie_0109a_40600_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg.png", id:"fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg.png", id:"fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0011_fabfracts_0044_pie_0105a_40551_lg.png", id:"fractionsquiz_0011_fabfracts_0044_pie_0105a_40551_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0012_fabfracts_0043_pie_0108a_40582_lg.png", id:"fractionsquiz_0012_fabfracts_0043_pie_0108a_40582_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg.png", id:"fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0016_1_7.png", id:"fractionsquiz_0016_1_7"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0018_1_6.png", id:"fractionsquiz_0018_1_6"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0021_3_7.png", id:"fractionsquiz_0021_3_7"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0022_5_10.png", id:"fractionsquiz_0022_5_10"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0023_4_6.png", id:"fractionsquiz_0023_4_6"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0024_2_4.png", id:"fractionsquiz_0024_2_4"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0027_1_10.png", id:"fractionsquiz_0027_1_10"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0029_5_10.png", id:"fractionsquiz_0029_5_10"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0030_3_7.png", id:"fractionsquiz_0030_3_7"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0031_1_9.png", id:"fractionsquiz_0031_1_9"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0033_2_4.png", id:"fractionsquiz_0033_2_4"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0034_1_8.png", id:"fractionsquiz_0034_1_8"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0035_1_5.png", id:"fractionsquiz_0035_1_5"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0037_1_3.png", id:"fractionsquiz_0037_1_3"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0039_1_4.png", id:"fractionsquiz_0039_1_4"},
		
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0041_1_2.png", id:"fractionsquiz_0041_1_2"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0042_bigstockKidsDoingMathExercisesWith6664485.png", id:"fractionsquiz_0042_bigstockKidsDoingMathExercisesWith6664485"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0043_bigstockFriendsoutdoor15439775.png", id:"fractionsquiz_0043_bigstockFriendsoutdoor15439775"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg.png", id:"fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0045_Shape1.png", id:"fractionsquiz_0045_Shape1"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0046_Shape2.png", id:"fractionsquiz_0046_Shape2"},
		{src:activity_base+"/images/"+activity_filename+"/fractionsquiz_0048_3525054487_8cfe37a361_o.png", id:"fractionsquiz_0048_3525054487_8cfe37a361_o"},
		{src:activity_base+"/images/"+activity_filename+"/half.png", id:"half"},
		{src:activity_base+"/images/"+activity_filename+"/half1.png", id:"half1"},
		{src:activity_base+"/images/"+activity_filename+"/half2.png", id:"half2"},
		{src:activity_base+"/images/"+activity_filename+"/nin1.png", id:"nin1"},
		{src:activity_base+"/images/"+activity_filename+"/nin2.png", id:"nin2"},
		{src:activity_base+"/images/"+activity_filename+"/nin3.png", id:"nin3"},
		{src:activity_base+"/images/"+activity_filename+"/nin4.png", id:"nin4"},
		{src:activity_base+"/images/"+activity_filename+"/nin5.png", id:"nin5"},
		{src:activity_base+"/images/"+activity_filename+"/nin6.png", id:"nin6"},
		{src:activity_base+"/images/"+activity_filename+"/nin7.png", id:"nin7"},
		{src:activity_base+"/images/"+activity_filename+"/nin8.png", id:"nin8"},
		{src:activity_base+"/images/"+activity_filename+"/nin9.png", id:"nin9"},
		{src:activity_base+"/images/"+activity_filename+"/sev1.png", id:"sev1"},
		{src:activity_base+"/images/"+activity_filename+"/sev2.png", id:"sev2"},
		{src:activity_base+"/images/"+activity_filename+"/sev3.png", id:"sev3"},
		{src:activity_base+"/images/"+activity_filename+"/sev4.png", id:"sev4"},
		{src:activity_base+"/images/"+activity_filename+"/sev5.png", id:"sev5"},
		{src:activity_base+"/images/"+activity_filename+"/sev6.png", id:"sev6"},
		{src:activity_base+"/images/"+activity_filename+"/sev7.png", id:"sev7"},
		{src:activity_base+"/images/"+activity_filename+"/si1.png", id:"si1"},
		{src:activity_base+"/images/"+activity_filename+"/si2.png", id:"si2"},
		{src:activity_base+"/images/"+activity_filename+"/si3.png", id:"si3"},
		{src:activity_base+"/images/"+activity_filename+"/si4.png", id:"si4"},
		{src:activity_base+"/images/"+activity_filename+"/si5.png", id:"si5"},
		{src:activity_base+"/images/"+activity_filename+"/si6.png", id:"si6"},
		{src:activity_base+"/images/"+activity_filename+"/te1.png", id:"te1"},
		{src:activity_base+"/images/"+activity_filename+"/te10.png", id:"te10"},
		{src:activity_base+"/images/"+activity_filename+"/te2.png", id:"te2"},
		{src:activity_base+"/images/"+activity_filename+"/te3.png", id:"te3"},
		{src:activity_base+"/images/"+activity_filename+"/te4.png", id:"te4"},
		{src:activity_base+"/images/"+activity_filename+"/te5.png", id:"te5"},
		{src:activity_base+"/images/"+activity_filename+"/te6.png", id:"te6"},
		{src:activity_base+"/images/"+activity_filename+"/te7.png", id:"te7"},
		{src:activity_base+"/images/"+activity_filename+"/te8.png", id:"te8"},
		{src:activity_base+"/images/"+activity_filename+"/te9.png", id:"te9"},
		{src:activity_base+"/images/"+activity_filename+"/th1.png", id:"th1"},
		{src:activity_base+"/images/"+activity_filename+"/th2.png", id:"th2"},
		{src:activity_base+"/images/"+activity_filename+"/th3.png", id:"th3"},
		{src:activity_base+"/images/"+activity_filename+"/threes1.png", id:"threes1"},
		{src:activity_base+"/images/"+activity_filename+"/threes2.png", id:"threes2"},
		{src:activity_base+"/images/"+activity_filename+"/threes3.png", id:"threes3"},
		{src:activity_base+"/images/"+activity_filename+"/threes4.png", id:"threes4"},
		{src:activity_base+"/images/"+activity_filename+"/threes5.png", id:"threes5"},
		{src:activity_base+"/images/"+activity_filename+"/threes6.png", id:"threes6"},
		{src:activity_base+"/images/"+activity_filename+"/threes7.png", id:"threes7"},
		{src:activity_base+"/images/"+activity_filename+"/twof1.png", id:"twof1"},
		{src:activity_base+"/images/"+activity_filename+"/twof2.png", id:"twof2"},
		{src:activity_base+"/images/"+activity_filename+"/twof3.png", id:"twof3"},
		{src:activity_base+"/images/"+activity_filename+"/twof4.png", id:"twof4"},
		{src:activity_base+"/sounds/"+activity_filename+"/Conclusion.mp3", id:"Conclusion"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_10.mp3", id:"Content_1_10"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_2.mp3", id:"Content_1_2"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_4.mp3", id:"Content_1_4"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_5.mp3", id:"Content_1_5"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_6.mp3", id:"Content_1_6"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_7.mp3", id:"Content_1_7"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_1_9.mp3", id:"Content_1_9"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_2_3.mp3", id:"Content_2_3"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_2_4.mp3", id:"Content_2_4"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_2_8.mp3", id:"Content_2_8"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_3_7.mp3", id:"Content_3_7"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_4_6.mp3", id:"Content_4_6"},
		{src:activity_base+"/sounds/"+activity_filename+"/Content_5_10.mp3", id:"Content_5_10"},
		{src:activity_base+"/sounds/"+activity_filename+"/Introduction.mp3", id:"Introduction"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_answer_highlight.mp3", id:"SFX_answer_highlight"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_01.mp3", id:"SFX_correct_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_02.mp3", id:"SFX_correct_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_03.mp3", id:"SFX_correct_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_04.mp3", id:"SFX_correct_04"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_correct_05.mp3", id:"SFX_correct_05"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_01.mp3", id:"SFX_incorrect_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_02.mp3", id:"SFX_incorrect_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_03.mp3", id:"SFX_incorrect_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_04.mp3", id:"SFX_incorrect_04"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_05.mp3", id:"SFX_incorrect_05"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_mouse_click.mp3", id:"SFX_mouse_click"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_paint_drip_01.mp3", id:"SFX_paint_drip_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_paint_drip_02.mp3", id:"SFX_paint_drip_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_paint_drip_03.mp3", id:"SFX_paint_drip_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_2_4.mp3", id:"W_2_4"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_3_7.mp3", id:"W_3_7"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_4_6.mp3", id:"W_4_6"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_5_10.mp3", id:"W_5_10"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_eighth.mp3", id:"W_eighth"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_fifth.mp3", id:"W_fifth"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_forth.mp3", id:"W_forth"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_half.mp3", id:"W_half"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ninth.mp3", id:"W_ninth"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_seventh.mp3", id:"W_seventh"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_sixth.mp3", id:"W_sixth"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tenth.mp3", id:"W_tenth"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_third.mp3", id:"W_third"}    ];

	var loader = new createjs.LoadQueue(false);
	//createjs.Sound.alternateExtensions = ["ogg"];
	loader.installPlugin(createjs.Sound);
	loader.on("progress", handleProgress);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);

	//createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stageTick);
	
}

function stageTick(evt){

	if(move){
		moveTarget.x = stage.mouseX;
		moveTarget.y = stage.mouseY;
		//console.log(moveTarget+ " > move "+this+" >> "+ evt);
	}
	stage.update();
}

function handleProgress(evt) {
    bar.scaleX = evt.loaded * loaderWidth;
    txt.text = ("Loading " + (100*(evt.loaded / evt.total)).toFixed() + "%");
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

	optionArr = [
				 new OptionVO("fractionsquiz_0001_Layer2", [new createjs.ColorFilter(0, 1, 0, 1, 71, 180, 73, 1)]),
				 new OptionVO("fractionsquiz_0002_Layer3", [new createjs.ColorFilter(1, 1, 0, 1, 250, 220, 8, 1)]),
				 new OptionVO("fractionsquiz_0000_Layer1", [new createjs.ColorFilter(0, 0, 1, 1, 200, 18, 50, 1)]),
				 new OptionVO("fractionsquiz_0004_Layer4", [new createjs.ColorFilter(1, 0, 0, 1, 85, 10, 13, 1)]),
				 new OptionVO("fractionsquiz_0005_Layer5", [new createjs.ColorFilter(0, 0, 1, 1, 18, 20, 142, 1)]),
				 new OptionVO("fractionsquiz_0006_Layer6", [new createjs.ColorFilter(1, 0, 1, 1, 232, 36, 100, 1)])
				];
	
    activity_arr = []; 				//id, fraction_word, fraction_number, fraction_img, mp3, fClicks
    activity_arr[0] = new QuestionVO("1",
									 "half_mc",
									 "fractionsquiz_0041_1_2",
									 "half",
									 "Content_1_2",
									 1, 2);								 
    activity_arr[1] = new QuestionVO("2",
									 "fourth_mc",
									 "fractionsquiz_0039_1_4",
									 "fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg",
									 "Content_1_4",
									 1, 4);
	activity_arr[2] = new QuestionVO("3",
									 "third_mc",
									 "fractionsquiz_0001_2_3",
									 "fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg",
									 "Content_2_3",
									 2, 3);							 
    activity_arr[3] = new QuestionVO("4",
									 "fifth_mc",
									 "fractionsquiz_0035_1_5",
									 "fractionsquiz_0011_fabfracts_0044_pie_0105a_40551_lg",
									 "Content_1_5",
									 1, 5); 
    activity_arr[4] = new QuestionVO("5",
									 "sixth_mc",
									 "fractionsquiz_0018_1_6",
									 "fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg",
									 "Content_1_6",
									 1, 6);
    activity_arr[5] = new QuestionVO("6",
									 "seventh_mc",
									 "fractionsquiz_0016_1_7",
									 "fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg",
									 "Content_1_7",
									 1, 7);
    activity_arr[6] = new QuestionVO("7",
									 "eighth_mc",
									 "fractionsquiz_0000_2_8",
									 "fractionsquiz_0012_fabfracts_0043_pie_0108a_40582_lg",
									 "Content_2_8",
									 2, 8);
    activity_arr[7] = new QuestionVO("8",
									 "ninth_mc",
									 "fractionsquiz_0031_1_9",
									 "fractionsquiz_0008_fabfracts_0052_pie_0109a_40600_lg",
									 "Content_1_9",
									 1, 9);
    activity_arr[8] = new QuestionVO("9",
									 "tenth_mc",
									 "fractionsquiz_0027_1_10",
									 "fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg",
									 "Content_1_10",
									 1, 10);
	activity_arr[9] = new QuestionVO("10",
									 "twofourth_mc",
									 "fractionsquiz_0024_2_4",
									 "fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg",
									 "Content_2_4",
									 2, 4);
    activity_arr[10] = new QuestionVO("11",
									 "foursixth_mc",
									 "fractionsquiz_0023_4_6",
									 "fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg",
									 "Content_4_6",
									 4, 6);
    activity_arr[11] = new QuestionVO("12",
									 "threeseventh_mc",
									 "fractionsquiz_0030_3_7",
									 "fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg",
									 "Content_3_7",
									 3, 7);
	activity_arr[12] = new QuestionVO("13",
									 "fivetenth_mc",
									 "fractionsquiz_0029_5_10",
									 "fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg",
									 "Content_5_10",
									 5, 10);
    
	
	//data_str = document.getElementById('game_history').value; // local

    //mock data_str
    //data_str = "1:C,T,I;2:T;4:I,C;5:I,C;score:10";

    ps_container = new createjs.Container();
    stage.addChild(ps_container);

}


//----------- ACTIVITY FUNCTIONS ------------------------------
function QuestionVO(id, mc_name, fraction_number, fraction_img, mp3, correctClicks, totalClicks){
    this.id = id;
	this.mc_name = mc_name;
	this.fraction_number = fraction_number;
	this.fraction_img = fraction_img;
    this.mp3 = mp3;
	this.correctClicks = correctClicks;
	this.totalClicks = totalClicks;
    this.answered = "na";
}

function OptionVO(img, color){
	this.img = img;
	this.color = color;
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
                console.log( question_arr[i].id + " match found --> "+game_history_obj[question_arr[i].id]); //question_arr.locatePropValIndex("id", i, false)
            }else{
                console.log (question_arr[i].id+" added ");
                tmpArr.push(question_arr[i]);
            }
            
        }
		
		tmp_arr = tmpArr;//.copyArray().shuffleArray();

        question_arr = [];
        question_arr = tmp_arr;
        
        score = parseInt(game_history_obj["score"]);

		qRepeated = true; // as already attempted....
        console.log(score+ ": score :: returning user-->"+data_str);
    }else{
        console.log("first time user");

		tmp_arr = activity_arr;//.copyArray().shuffleArray();
        question_arr = tmp_arr;
        score = 0;
    }  
	questionsRemaining = question_arr.length;

    startActivity();
}

function startActivity(){
    it = Iterator(question_arr);
    it.reset();
    it.next();
    loadActivityScreen(it);
}

function loadActivityScreen(it){
	//tmpSnd.stop();
	
    tweens = [];
	//optionArr = [];
	interactiveRef = [];
    user_response = "T";
	
	partsClicked = 0;

    clearActivityContainer();

	//.. current object
    tmp_obj = it.currentObj();
	
	addElement(tmp_obj.fraction_number, 150, 325);
	addElement(tmp_obj.fraction_number, 850, 325);
	
	//.. addChild check button
	checkButton = addElement("checkmarkfractionsquiz", 500, 650);
	checkButton.mouseEnabled = false;
	checkButton.cursor = "pointer";
	//checkButton.mouseChildren = true;
	applyClipColor(checkButton, [new createjs.ColorFilter(0, 0, 0, 1, 100, 100, 100, 1)], false);
	checkButton.on("mouseover", function(evt) {
		//console.log("mouseover");
		var o = evt.target;
		o.alpha = 0.7;
		if(move){
			move = false;
			tweenBack(moveTarget);
		}
	});
	checkButton.on("mouseout", function(evt) {
		//evt.target.shadow = null;
		evt.target.alpha = 1;
		//move = true;
	});     
	
	checkButton.on("click", function(evt) {
		
		evt.target.mouseEnabled = false;
		applyClipColor(checkButton, [new createjs.ColorFilter(0, 0, 0, 1, 150, 150, 150, 1)], false);
		
		var state = (tmp_obj.correctClicks == partsClicked) ? true : false;
		
		if(state){
			user_response = "C";
			tmp_sfx = "SFX_correct_0"+getRandomNumber(1, 5);
			score += 5;
		}else{
			user_response = "I";
			tmp_sfx = "SFX_incorrect_0"+getRandomNumber(1, 5);
			showCorrectDiagram();
		}
		
		questionsRemaining--;
		
		tmpSnd = new createjs.Sound.createInstance(tmp_sfx);
		tmpSnd.addEventListener("complete", function(){
			if(state){
				delayCall(gotoNextActivityScreen, 500);
			}else{
				delayCall(gotoNextActivityScreen, 1200);
			}
		});    
		delayCall(function (){
			tmpSnd.play();
		}, 250);
		
		removeCountDownTimer();
		canvasStageRef.onQuestionEnd(it.arr()[it.current()].id, (countDownValue - seconds), user_response, parrot_clicked);
		
	});	
	//.. add coloring brush 
	getOptions();
	
	//.. add the diagram
	addDiagram(tmp_obj);
	
	//.. Sound triggerin the 
	tmpSnd = new createjs.Sound.createInstance(tmp_obj.mp3);
    tmpSnd.addEventListener("complete", function(){

		disableClicks(false, false);
		
    });
    delayCall(function (){tmpSnd.play();}, 500);

	
    addCountDownTimer(countDownValue, timeUpNextActivityScreen);
    disableClicks(true, true);
	updateScore();
	
}

function showCorrectDiagram(){
	tmp_mc = exportRoot[tmp_obj.mc_name];
	for(var i=0; i < tmp_obj.totalClicks; i++){
		tmp_var = tmp_mc["p"+(i+1)];
		removeClipColor(tmp_var, true);
	}	
	for(var i=0; i < tmp_obj.correctClicks; i++){
		tmp_var = tmp_mc["p"+(i+1)];
		applyClipColor(tmp_var, moveTarget.color, true);
	}
}

function addDiagram(o){
	
	//tmp_mc.cursor = "pointer";
    //tmp_mc.mouseChildren = false;
	//tmp_mc.mouseEnabled = true;
	tmp_mc = exportRoot[o.mc_name]; //addElement("half_mc", 500, 325, 1, "p"); // 

	tmp_mc.x = 500;
	tmp_mc.y = 325;
	
	for(var i=0; i < o.totalClicks; i++){
		tmp_var = tmp_mc["p"+(i+1)];
		console.log(tmp_var);
		tmp_var.mouseChildren = false;
		tmp_var.on("click", function(evt) {
			//console.log(this, " >> ", selectedColor);
			if(move) {
				partsClicked++;
				applyClipColor(evt.target, moveTarget.color, true);
				checkButton.mouseEnabled = true;
				removeClipColor(checkButton);
			}
		});		
	}	
}

function getOptions(){
	
	move = false;
	
	tmp_arr = optionArr;//.copyArray().shuffleArray();
	
	var ix;
	
	for(var i=0; i<tmp_arr.length; i++){
		
		tmp_img = new lib[tmp_arr[i].img]();
		centerRegPoint(tmp_img);
		//tmp_img.x += 100; 
		
		tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
		tmp_mc.color = optionArr[i].color;
		tmp_mc.addChild(tmp_img);
		tmp_mc.cursor = "pointer";
	
		ix = (i>2)? 330 : 170;
			
		tmp_mc.x = tmp_mc.initX = (100*i)+ix;
		tmp_mc.y = tmp_mc.initY = 650;

        tmp_mc.cursor = "pointer";
        tmp_mc.mouseChildren = false;
		tmp_mc.mouseEnabled = true;
		
		ps_container.addChild(tmp_mc);
		
		var hit1 = new createjs.Shape();
		hit1.graphics.beginFill("#000").dc(0, 0, 42);
		tmp_mc.hitArea = hit1;
		
		tmp_mc.on("mouseover", function(evt) {
            console.log("mouseover");
			var o = evt.target;
            o.alpha = 0.7;
        });
        tmp_mc.on("mouseout", function(evt) {
            //evt.target.shadow = null;
			evt.target.alpha = 1;
        });            
        
        tmp_mc.on("click", function(evt) {
            
			
			if(evt.target != moveTarget){
				move = true;
				
				if(moveTarget != null) tweenBack(moveTarget); //set back to its original position
				
				moveTarget = evt.target;
				moveTarget.color = evt.target.color
				moveTarget.mouseChildren= false;
				moveTarget.mouseEnabled= false;
				// bump the target in front of its siblings:
				ps_container.addChild(moveTarget);
				ps_container.setChildIndex(moveTarget, ps_container.getNumChildren()-1);
				//disableClicks(true, true);
			}
        });
		interactiveRef.push(tmp_mc);
	}
}

function tweenBack(mc){
	console.log("tweenback");
	mc.x = mc.initX;
	mc.y = mc.initY;
	mc.alpha = 0;
    createjs.Tween.get(mc).to({alpha:1}, 1500, createjs.Ease.cubicOut).call(function(){
        //disableClicks(false, true);
		mc.mouseEnabled = true;
    });
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
            repeatUnattempted();
        }
    }
}

function timeUpNextActivityScreen(){
	questionsRemaining--;
	
	//if(qRepeated){
		canvasStageRef.onQuestionEnd(tmp_obj.id, (countDownValue - seconds), user_response, parrot_clicked);
	//}
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
	//removeParrot();
	
	if(tmp_obj != null){
		tmp_mc = exportRoot[tmp_obj.mc_name];
		tmp_mc.x = 1500;
		tmp_mc.y = 325;
	}
}

function repeatUnattempted(){
    //console.log("repeat");
	
	unAttempted_arr = [];
    for (var i = 0; i < question_arr.length; i++) {
        if((question_arr[i].answered == "na") || (question_arr[i].answered == "T")){
          unAttempted_arr.push(question_arr[i]);
        }
    }
	
    questionsRemaining = unAttempted_arr.length;
	//console.log("questionsRemaining "+questionsRemaining);

    question_arr = [];
    question_arr = unAttempted_arr;

    if(questionsRemaining > 0){
        startActivity();
    }else{
        canvasStageRef.onEnd();
    }
}

function isCompleted(){
	//tmp_arr = [];
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
	console.log(corrects, " corrects : question_arr.length ", question_arr.length);
	return ((corrects+incorrects) == question_arr.length) ? "y" : "n" 

}

function updateScore(){

    stage.removeChild(scoreTxt, qLeftTxt);

    scoreTxt = new createjs.Text();
    scoreTxt.x = 672;
    scoreTxt.y = 25;
    scoreTxt.font = ("bold 20px Verdana");
    scoreTxt.color = ("#000000");
    scoreTxt.text = score;
    scoreTxt.textAlign = "center";
    stage.addChild(scoreTxt);

    qLeftTxt = new createjs.Text();
    qLeftTxt.x = 745;
    qLeftTxt.y = 25;
    qLeftTxt.font = ("bold 20px Verdana");
    qLeftTxt.color = ("#000000");
    scoreTxt.textAlign = "center";
    qLeftTxt.text = questionsRemaining; //
    stage.addChild(qLeftTxt);

}

//----------- ACTIVITY FUNCTIONS ENDS --------------------------



// ======= LISTENERS ======= //

canvasStageRef = new createjs.Container();

canvasStageRef.onStart = function(param){
	param.stop();
    console.log("onStart");
	tmpSnd = new createjs.Sound.createInstance("Introduction");
    tmpSnd.addEventListener("complete", function(){

    });    
    delayCall(function (){
		tmpSnd.play();
		param.play();
	}, 500);
	
    //exportRoot.gotoAndPlay("activity"); // for testing
}

canvasStageRef.onActivity = function(param){

    console.log("onActivity");
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
        stage.removeChild(startBtn);
        buildQuestions();
    });
    */
	
	buildQuestions();
	
	
    configClickListener(exportRoot.skip, false);
    exportRoot.skip.gotoAndStop("disabled");
    configClickListener(exportRoot.replay, false);
    exportRoot.replay.gotoAndStop(3);
    
}

canvasStageRef.onEnd = function(param){

	stage.removeChild(scoreTxt, qLeftTxt);
	clearActivityContainer();

    //alert("activity ends "+ report());
    tmpSnd = new createjs.Sound.createInstance("Conclusion");
    tmpSnd.addEventListener("complete", function(){
        window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
    });    
    delayCall(function (){
		tmpSnd.play();
		exportRoot.play();
	}, 500);
}

canvasStageRef.onActivityClose = function(param){
    window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
}

canvasStageRef.onQuestionEnd = function (ID,TIME,RESULT,PARROTS) {
    //change-local
	PARROTS = 0;
	//if(!qRepeated) question_arr[ID - 1].answered = RESULT; 
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
	bird.x = (templateWidth)-45;
    bird.y = 550;
    //bird.mouseChildren = false;
    bird.cursor = "pointer";
    bird.on("click", function(event){
		
		if(!parrot_clicked) ps_container.swapChildrenAt(0, 2);
		
		//flash the image for 2 seconds
		createjs.Tween.get(image).to({alpha:1}, 500).call(function(){
			delayCall(function(){
				createjs.Tween.get(image).to({alpha:0}, 500).call(function(){
					
				});
			}, 1500);
		});
		
        parrot_clicked++;
        
		tmpSnd = new createjs.Sound.createInstance(tmp_obj.mp3);
		tmpSnd.addEventListener("complete", function(){
			if(parrot_clicked > 4){
				removeParrot();
			}else{
				bird.play();
			}
		});
		delayCall(function (){
			tmpSnd.play();
			bird.play();
		}, 800);
    });
	
	//playSound("SFX_parrot_0"+getRandomNumber(1, 4));
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
            //txt.text = "WIP:  "+seconds; //++(act_time);
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
function addElement(img, x, y, a, n){
	if(a == undefined) a = 1;
	tmp_var = getMCWrap(new lib[img]());
	centerRegPoint(tmp_var);
	tmp_var.name = (n != undefined) ? n : "";
	tmp_var.x = x;
	tmp_var.y = y;
	tmp_var.alpha = a;
	ps_container.addChild(tmp_var);
	return tmp_var
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

function getMCWrap(bmp){
	var mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
	mc.addChild(bmp);
	return mc
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

function applyClipColor(clip, color, forceCenter){
    clip.filters = color;
	if(forceCenter){
		clip.cache(-clip.getBounds().width/2,-clip.getBounds().height/2, clip.getBounds().width, clip.getBounds().height);
	}else{
		clip.cache(0, 0, clip.getBounds().width, clip.getBounds().height);
    }
}

function removeClipColor(clip, forceCenter){
	clip.filters = [new createjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, 0)];
    if(forceCenter){
		clip.cache(-clip.getBounds().width/2,-clip.getBounds().height/2, clip.getBounds().width, clip.getBounds().height);
	}else{
		clip.cache(0, 0, clip.getBounds().width, clip.getBounds().height);
    }
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

