//template variables
var sounds_path;
var images_path;

var activity_base = ".";
var activity_filename = "GroovyBlends";

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
var parrot_clicked;

var introSnd;
var panelButtons;
var startBtn, practice_session_arr, ps_container, it, tmpScreen, tmpSnd, tmp_var, tmp_sfx, tmp_arr, tmp_obj, tmp_mc, tmp_img, tmp_bg, tmp_container;
var activity_arr, activitySound_arr, question_arr, unAttempted_arr, user_response, interactiveRef;
var tweens;

var questionsLeft = 0;
var score, scoreTxt, qLeftTxt;
var questionsRemaining = 0;

var image1, image2, image3, wordpart1, wordpart2, wordpart3, hotspot1, hotspot2, hotspot3, imgCopy;
var optionArr, dragAttempts, totalAvailableDrags, threeInARow, move;
var collisionMethod = ndgmr.checkRectCollision; //ndgmr.checkPixelCollision;

var firstimage, secondimage, blendImg;

var qRepeated = false;
var countDownValue=60; //local
var act_completed="n";
var act_time = 0;

var game_history_obj;

var img_layout = [{x:560, y:170}, {x:560, y:385}, {x:560, y:600}];
var word_layout = [{x:810, y:210}, {x:810, y:425}, {x:810, y:640}];

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
        

		{src:activity_base+"/images/"+activity_filename+"/GB_0026_HiRes.png", id:"GB_0026_HiRes"},
        
		
        {src:activity_base+"/images/"+activity_filename+"/cursor.png", id:"cursor"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0000_bigstockPortraitofhappypupillookin46987498.png", id:"GB_0000_bigstockPortraitofhappypupillookin46987498"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0001_bigstockHappyKidsPlayingLeapfrog4985508.png", id:"GB_0001_bigstockHappyKidsPlayingLeapfrog4985508"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0002_bigstockAsianGirl1479142.png", id:"GB_0002_bigstockAsianGirl1479142"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0003_bigstockSmilingbrothers50202623.png", id:"GB_0003_bigstockSmilingbrothers50202623"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0004_bigstockSolvingaproblemforhomework51713875.png", id:"GB_0004_bigstockSolvingaproblemforhomework51713875"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0005_bigstockSmallchihuahuadogstandingo52879636.png", id:"GB_0005_bigstockSmallchihuahuadogstandingo52879636"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0006____amp.png", id:"GB_0006____amp"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0006_bigstocktwounderwatergirls47131369.png", id:"GB_0006_bigstocktwounderwatergirls47131369"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0007____ing.png", id:"GB_0007____ing"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0007_bigstockParentHoldsTheHandOfASma50833166.png", id:"GB_0007_bigstockParentHoldsTheHandOfASma50833166"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0008____in.png", id:"GB_0008____in"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0008_bigstockBlackSheep54545801.png", id:"GB_0008_bigstockBlackSheep54545801"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0008_bigstockGreenseedlinggrowingfromso45185245.png", id:"GB_0008_bigstockGreenseedlinggrowingfromso45185245"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0009____row.png", id:"GB_0009____row"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0009_bigstockthehandoftherunnergrabbin65481214.png", id:"GB_0009_bigstockthehandoftherunnergrabbin65481214"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0010____ab.png", id:"GB_0010____ab"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0010_bigstockStopsignfortrafficagainst11904395.png", id:"GB_0010_bigstockStopsignfortrafficagainst11904395"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0011____ist.png", id:"GB_0011____ist"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0011_bigstockHighFive2948644.png", id:"GB_0011_bigstockHighFive2948644"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0011_bigstockshipropesbordersonwoodbac39973174.png", id:"GB_0011_bigstockshipropesbordersonwoodbac39973174"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0012____ain.png", id:"GB_0012____ain"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0012_bigstockredeyedtreefrogpeepingcur36366121.png", id:"GB_0012_bigstockredeyedtreefrogpeepingcur36366121"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0012_bigstockRustySteelChainDetail47863130.png", id:"GB_0012_bigstockRustySteelChainDetail47863130"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0013____umb.png", id:"GB_0013____umb"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0013_bigstockPotatochipsinabowlonawo55217174.png", id:"GB_0013_bigstockPotatochipsinabowlonawo55217174"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0014____ar.png", id:"GB_0014____ar"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0014_bigstockParentHoldsTheHandOfASma50833166.png", id:"GB_0014_bigstockParentHoldsTheHandOfASma50833166"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0015____an.png", id:"GB_0015____an"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0015_bigstockMaleStudentWorkingAtDeskI38771890.png", id:"GB_0015_bigstockMaleStudentWorkingAtDeskI38771890"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0016____een.png", id:"GB_0016____een"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0016_bigstockLaughinglittlegirlinapink52526065.png", id:"GB_0016_bigstockLaughinglittlegirlinapink52526065"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0017____ink.png", id:"GB_0017____ink"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0017_bigstockImageofhappytwinboyswith48624827.png", id:"GB_0017_bigstockImageofhappytwinboyswith48624827"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0018____op.png", id:"GB_0018____op"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0018_bigstockHappyBoyWithPaperPlane54623480.png", id:"GB_0018_bigstockHappyBoyWithPaperPlane54623480"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0019____in.png", id:"GB_0019____in"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0019_bigstockGreenseedlinggrowingfromso45185245.png", id:"GB_0019_bigstockGreenseedlinggrowingfromso45185245"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0019_bigstockTwohorsesstandingongreenb46906210.png", id:"GB_0019_bigstockTwohorsesstandingongreenb46906210"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0020____ip.png", id:"GB_0020____ip"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0020_bigstockgoldheartshapedchristmasor52676335.png", id:"GB_0020_bigstockgoldheartshapedchristmasor52676335"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0021____im.png", id:"GB_0021____im"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0021_bigstockBabysleepingonparentsknee49922384.png", id:"GB_0021_bigstockBabysleepingonparentsknee49922384"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0022____o.png", id:"GB_0022____o"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0022_swansblackbabyswan.png", id:"GB_0022_swansblackbabyswan"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0023____ow.png", id:"GB_0023____ow"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0023_insectmothgreen.png", id:"GB_0023_insectmothgreen"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0024_boyswimmingthumbsupgoggles.png", id:"GB_0024_boyswimmingthumbsupgoggles"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0024_th.png", id:"GB_0024_th"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0025_bigstockUsAirmailStamp55483874.png", id:"GB_0025_bigstockUsAirmailStamp55483874"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0025_gr.png", id:"GB_0025_gr"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0026_sw.png", id:"GB_0026_sw"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0027_st.png", id:"GB_0027_st"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0028_ch.png", id:"GB_0028_ch"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0029_tw.png", id:"GB_0029_tw"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0030_th.png", id:"GB_0030_th"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0031_gr.png", id:"GB_0031_gr"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0032_sw.png", id:"GB_0032_sw"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0033_st.png", id:"GB_0033_st"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0034_bigstockHawaiianGreenSeaTurtle42231286.png", id:"GB_0034_bigstockHawaiianGreenSeaTurtle42231286"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0034_ch.png", id:"GB_0034_ch"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0035_bigstockBloomingPeachTrees45257104.png", id:"GB_0035_bigstockBloomingPeachTrees45257104"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0035_tw.png", id:"GB_0035_tw"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0036_bigstockRipeplumshangingfromatree49076081.png", id:"GB_0036_bigstockRipeplumshangingfromatree49076081"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0042_h.png", id:"GB_0042_h"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0043_c.png", id:"GB_0043_c"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0044_t.png", id:"GB_0044_t"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0045_w.png", id:"GB_0045_w"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0047_s.png", id:"GB_0047_s"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0048_r.png", id:"GB_0048_r"},
		{src:activity_base+"/images/"+activity_filename+"/GB_0049_g.png", id:"GB_0049_g"},
        {src:activity_base+"/images/"+activity_filename+"/greenCircle.png", id:"greenCircle"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends.jpg", id:"groovyblends"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0000_GB_0036_bigstockRipeplumshangingfromatree49076081.png", id:"groovyblends_0000_GB_0036_bigstockRipeplumshangingfromatree49076081"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0009_gr.png", id:"groovyblends_0009_gr"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0010_st.png", id:"groovyblends_0010_st"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0011_th.png", id:"groovyblends_0011_th"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0012_ch.png", id:"groovyblends_0012_ch"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0013_tw.png", id:"groovyblends_0013_tw"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblends_0014_sw.png", id:"groovyblends_0014_sw"},
		{src:activity_base+"/images/"+activity_filename+"/groovyblendsact.jpg", id:"groovyblendsact"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_01.png", id:"ht_110x170_01"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_02.png", id:"ht_110x170_02"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_03.png", id:"ht_110x170_03"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_01.png", id:"wf_110x170_01"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_02.png", id:"wf_110x170_02"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_03.png", id:"wf_110x170_03"},
        {src:activity_base+"/images/"+activity_filename+"/whiteCircle_big.png", id:"whiteCircle_big"},
        {src:activity_base+"/images/"+activity_filename+"/whiteCircle_small.png", id:"whiteCircle_small"},
      
		
		{src:activity_base+"/sounds/"+activity_filename+"/Blend_ch.mp3", id:"Blend_ch"},
		{src:activity_base+"/sounds/"+activity_filename+"/Blend_gr.mp3", id:"Blend_gr"},
		{src:activity_base+"/sounds/"+activity_filename+"/Blend_st.mp3", id:"Blend_st"},
		{src:activity_base+"/sounds/"+activity_filename+"/Blend_sw.mp3", id:"Blend_sw"},
		{src:activity_base+"/sounds/"+activity_filename+"/Blend_th.mp3", id:"Blend_th"},
		{src:activity_base+"/sounds/"+activity_filename+"/Blend_tw.mp3", id:"Blend_tw"},
		
        {src:activity_base+"/sounds/"+activity_filename+"/Conclusion.mp3", id:"Conclusion"},
        {src:activity_base+"/sounds/"+activity_filename+"/Introduction_P1.mp3", id:"Introduction_P1"},
        {src:activity_base+"/sounds/"+activity_filename+"/Introduction_P2.mp3", id:"Introduction_P2"},
        {src:activity_base+"/sounds/"+activity_filename+"/NF_track_01.mp3", id:"NF_track_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_01.mp3", id:"PF_track_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_02.mp3", id:"PF_track_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_03.mp3", id:"PF_track_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_04.mp3", id:"PF_track_04"},
		
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blend_spin_01.mp3", id:"SFX_blend_spin_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blend_spin_02.mp3", id:"SFX_blend_spin_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blend_spin_03.mp3", id:"SFX_blend_spin_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blender.mp3", id:"SFX_blender"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_mouse_click.mp3", id:"SFX_mouse_click"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_01.mp3", id:"SFX_Parrot_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_02.mp3", id:"SFX_Parrot_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_03.mp3", id:"SFX_Parrot_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_04.mp3", id:"SFX_Parrot_04"},
       
		
		
		
		
		{src:activity_base+"/sounds/"+activity_filename+"/W_chain.mp3", id:"W_chain"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_chin.mp3", id:"W_chin"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_chip.mp3", id:"W_chip"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_grab.mp3", id:"W_grab"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_green.mp3", id:"W_green"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_grow.mp3", id:"W_grow"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_stamp.mp3", id:"W_stamp"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_star.mp3", id:"W_star"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_stop.mp3", id:"W_stop"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_swan.mp3", id:"W_swan"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_swim.mp3", id:"W_swim"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_swing.mp3", id:"W_swing"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_think.mp3", id:"W_think"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_throw.mp3", id:"W_throw"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_thumb.mp3", id:"W_thumb"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_twin.mp3", id:"W_twin"},
		
		{src:activity_base+"/sounds/"+activity_filename+"/W_twist.mp3", id:"W_twist"},

		{src:activity_base+"/sounds/"+activity_filename+"/W_two.mp3", id:"W_two"}
    
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


    practice_session_arr = [];
    practice_session_arr[0] = new PracticeVO("1", "GB_0049_g", "GB_0048_r", "groovyblends_0009_gr", "Blend_gr");
    practice_session_arr[1] = new PracticeVO("2", "GB_0047_s", "GB_0044_t", "groovyblends_0010_st", "Blend_st");
    practice_session_arr[2] = new PracticeVO("3", "GB_0047_s", "GB_0045_w", "groovyblends_0014_sw", "Blend_sw");
    practice_session_arr[3] = new PracticeVO("4", "GB_0044_t", "GB_0045_w", "groovyblends_0013_tw", "Blend_tw");
    practice_session_arr[4] = new PracticeVO("5", "GB_0043_c", "GB_0042_h", "groovyblends_0012_ch", "Blend_ch");
    practice_session_arr[5] = new PracticeVO("6", "GB_0044_t", "GB_0042_h", "groovyblends_0011_th", "Blend_th");
 

    optionArr = [];
    optionArr[0] = new OptionVO("_9", "tw", {x:110, y:205});
    optionArr[1] = new OptionVO("_10", "ch", {x:193, y:248});
    optionArr[2] = new OptionVO("_11", "sw", {x:280, y:205});
    optionArr[3] = new OptionVO("_12", "gr", {x:130, y:315});
    optionArr[4] = new OptionVO("_13", "st", {x:270, y:318});
    optionArr[5] = new OptionVO("_14", "th", {x:200, y:385});

    
    activity_arr = [];
    activity_arr[0] = new QuestionVO("1", "GB_0008_bigstockGreenseedlinggrowingfromso45185245", "GB_0023____ow", "W_grow", "gr", -5, 0);
    activity_arr[1] = new QuestionVO("2", "GB_0014_bigstockParentHoldsTheHandOfASma50833166", "GB_0022____o", "W_two", "tw", 5, 0);
    activity_arr[2] = new QuestionVO("3", "GB_0006_bigstocktwounderwatergirls47131369", "GB_0021____im", "W_swim", "sw", 0, 20);
    
    activity_arr[3] = new QuestionVO("4", "GB_0013_bigstockPotatochipsinabowlonawo55217174", "GB_0020____ip", "W_chip", "ch", 10, 15);
    activity_arr[4] = new QuestionVO("5", "GB_0017_bigstockImageofhappytwinboyswith48624827", "GB_0019____in", "W_twin", "tw", 0, 15);
    activity_arr[5] = new QuestionVO("6", "GB_0010_bigstockStopsignfortrafficagainst11904395", "GB_0018____op", "W_stop", "st", 0, 0);
    
    activity_arr[6] = new QuestionVO("7", "GB_0015_bigstockMaleStudentWorkingAtDeskI38771890", "GB_0017____ink", "W_think", "th", -15, 12);
    activity_arr[7] = new QuestionVO("8", "GB_0023_insectmothgreen", "GB_0016____een", "W_green", "gr", -5, 0);
    activity_arr[8] = new QuestionVO("9", "GB_0022_swansblackbabyswan", "GB_0015____an", "W_swan", "sw", -5, 0);
	
	activity_arr[9] = new QuestionVO("10", "GB_0020_bigstockgoldheartshapedchristmasor52676335", "GB_0014____ar", "W_star", "st", 0, 0);
    activity_arr[10] = new QuestionVO("11", "GB_0024_boyswimmingthumbsupgoggles", "GB_0013____umb", "W_thumb", "th", -20, 15);
    activity_arr[11] = new QuestionVO("12", "GB_0012_bigstockRustySteelChainDetail47863130", "GB_0012____ain", "W_chain", "ch", -5, 15);
	
	activity_arr[12] = new QuestionVO("13", "GB_0011_bigstockshipropesbordersonwoodbac39973174", "GB_0011____ist", "W_twist", "tw", 0, 20);
    activity_arr[13] = new QuestionVO("14", "GB_0009_bigstockthehandoftherunnergrabbin65481214", "GB_0010____ab", "W_grab", "gr", 0, 15);
    activity_arr[14] = new QuestionVO("15", "GB_0018_bigstockHappyBoyWithPaperPlane54623480", "GB_0009____row", "W_throw", "th", -5, 0);
	
	activity_arr[15] = new QuestionVO("16", "GB_0021_bigstockBabysleepingonparentsknee49922384", "GB_0019____in", "W_chin", "ch", -5, 18);
    activity_arr[16] = new QuestionVO("17", "GB_0016_bigstockLaughinglittlegirlinapink52526065", "GB_0007____ing", "W_swing", "sw", -10, 15);
    activity_arr[17] = new QuestionVO("18", "GB_0025_bigstockUsAirmailStamp55483874", "GB_0006____amp", "W_stamp", "st", -13, 5);
	
	
    //data_str = document.getElementById('game_history').value; // local

    //mock data_str
    //data_str = "1:C,T,I;2:T;4:I,C;5:I,C;score:10";

    ps_container = new createjs.Container();
    stage.addChild(ps_container);

}

//----------- PRACTICE SESSION HANDLERS -----------------------

function PracticeVO(id, letter1, letter2, blend_img, blend_mp3){
    this.id = id;
    this.blend1 = letter1;
    this.blend2 = letter2;
    this.blend_img = blend_img;
    this.blend_mp3 = blend_mp3;
}

function startPracticeSession(){

    ps_container.x = 275;
    ps_container.y = 170;

    it = Iterator(practice_session_arr);
    it.reset();
    it.next();
    loadPracticeScreen(it);
}

function loadPracticeScreen(it){

    var animSpeed = 1500;
    var waitTime = 2000;
    var easing = createjs.Ease.quadInOut;

    clearContainer();

    
    blend_img = getSingleWordGraphic(practice_session_arr[it.current()].blend_img, "whiteCircle_big", 0);
    firstimage = getSingleWordGraphic(practice_session_arr[it.current()].blend1, "whiteCircle_small", 1);
    secondimage = getSingleWordGraphic(practice_session_arr[it.current()].blend2, "whiteCircle_small", 2);
    blend_img.alpha = firstimage.alpha = secondimage.alpha = 0;
    ps_container.addChild(firstimage, secondimage, blend_img);//
   

    createjs.Tween.get(firstimage).to({alpha:1}, animSpeed, easing).to({x:165}, animSpeed, easing).to({alpha:0}, animSpeed/3, easing).call(function(){
        firstimage.removeChildAt(0);
    });
    createjs.Tween.get(secondimage).to({alpha:1}, animSpeed, easing).to({x:-165}, animSpeed, easing).to({alpha:0}, animSpeed/3, easing).call(function(){
        secondimage.removeChildAt(0);
    });
    createjs.Tween.get(blend_img).wait(waitTime*1.5).to({alpha:1}, animSpeed, easing);

    tmpSnd = new createjs.Sound.createInstance(practice_session_arr[it.current()].blend_mp3);
    tmpSnd.addEventListener("complete", function(){
        delayCall(function (){
            createjs.Tween.get(blend_img).to({alpha:0}, animSpeed/2, easing).call(function(){
                gotoNextPracticeScreen();
            });
        }, waitTime*1.5);
    });
    delayCall(function (){tmpSnd.play();}, waitTime);
}

function gotoNextPracticeScreen(){
    if(it.hasNext()) {
        it.next();
        loadPracticeScreen(it);
    }else{
        delayCall(function(){
            clearContainer();
            exportRoot.play();
        }, 100);
    }
}

function getSingleWordGraphic(letter, bg, placementNum){

    var layout = [{x:235, y:219}, {x:0, y:219}, {x:(235+220), y:219}];

    tmp_bg = new lib[bg]();
    centerRegPoint(tmp_bg);

    tmp_img = new lib[letter]();
    centerRegPoint(tmp_img);

    tmp_bg.x = tmp_img.x = layout[placementNum].x;
    tmp_bg.y = tmp_img.y = layout[placementNum].y;

    tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
    tmp_mc.addChild(tmp_bg, tmp_img);

    return tmp_mc
}

function getMCWrap(bmp){
	tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
	tmp_mc.addChild(bmp);
	return tmp_mc
}

//----------- PRACTICE SESSION HANDLERS ENDS ------------------


//----------- ACTIVITY FUNCTIONS ------------------------------
function QuestionVO(id, pic, word, mp3, correctOption, dx, dy){
    this.id = id;
    this.img = pic;
    this.word = word;
    this.mp3 = mp3;
    this.correctOption = correctOption;
    this.dx = dx;
    this.dy = dy;
    this.answered = "na";
}

function OptionVO(linkID, optionID, position){
    this.linkID = linkID;
    this.optionID = optionID; //matches with the correctOption in QuestionVO
	this.position = position;
}

function breakInTriplet(arr){
	var mt = new QuestionVO(0, "empty", "empty", "empty", "empty", 0, 0);
    var tmpArr = [];
    var finalArr = [];
    var y;
	console.log("QuestionVO.length "+arr.length);
    for (var i = 0; i < arr.length; i++) {
        y = i % 3;
        if(y == 0){
			tmpArr = [mt, mt, mt];
			finalArr.push(tmpArr);
			tmpArr[y] = arr[i];
		}else{
			tmpArr[y] = arr[i];
		}
        console.log(i+" i>>y "+y+" >>>finalArr "+finalArr.length);
    } 
    return finalArr
}


function centerContainer(){
    ps_container.x = (templateWidth - ps_container.getBounds().width)/2;
    ps_container.y = (templateHeight - ps_container.getBounds().height)/2;
    //alert(ps_container.getBounds().width+", "+stage.getBounds().width+" >>> "+ps_container.x+" :: "+ps_container.y);
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
		
		tmp_arr = tmpArr.copyArray().shuffleArray();

        question_arr = [];
        question_arr = breakInTriplet(tmp_arr);
        
        score = parseInt(game_history_obj["score"]);

		qRepeated = true; // as already attempted....
        console.log(score+ ": score :: returning user-->"+data_str);
    }else{
        console.log("game_history else --> first time user");

		tmp_arr = activity_arr.copyArray().shuffleArray();
        //question_arr = activity_arr.copyArray().shuffleArray(); 
        question_arr = breakInTriplet(tmp_arr);
        score = 0;
    }  
    //console.log(score+ " score :: -> "+data_str);
	questionsRemaining = tmp_arr.length;

    startActivity();
}

function startActivity(){
	
    it = Iterator(question_arr);
    it.reset();
    it.next();

    loadActivityScreen(it);
}

function getOptions(obj){
	
	
	for(var i=0; i<optionArr.length; i++){
		tmp_mc = new lib[optionArr[i].linkID]();
		tmp_mc.x = tmp_mc.initX = optionArr[i].position.x;
		tmp_mc.y = tmp_mc.initY = optionArr[i].position.y;

        tmp_mc.name = tmp_mc.id = optionArr[i].optionID;
     
        tmp_mc.clicked = false;
		tmp_mc.disabled = true;
        tmp_mc.cursor = "pointer";
        tmp_mc.mouseChildren = false;
		tmp_mc.mouseEnabled = false;
		
		applyClipColor(tmp_mc, [new createjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 1)]);
		
		ps_container.addChild(tmp_mc);
		
		var hit1 = new createjs.Shape();
		hit1.graphics.beginFill("#000").dc(0, 0, 42);
		tmp_mc.hitArea = hit1;
		
		//var o;
		tmp_mc.on("mouseover", function(evt) {
            //console.log("mouseover");
			var o = evt.target;
            var indx = optionArr.locatePropValIndex("optionID", o.id, false);
            imgCopy = new lib[optionArr[indx].linkID]();
            imgCopy.x = imgCopy.initX = o.x;
            imgCopy.y = imgCopy.initY = o.y;
            imgCopy.id = o.id;
            imgCopy.dx = o.dx;
            imgCopy.dy = o.dy;
            //centerRegPoint(imgCopy);
            //imgCopy.offset = {x:o.x-evt.stageX, y:o.y-evt.stageY};

            o.shadow = new createjs.Shadow("#000000", 0, 0, 12);
            
        });
        tmp_mc.on("mouseout", function(evt) {
            evt.target.shadow = null;
        });            
        tmp_mc.on("mousedown", function(evt) {
            //console.log(ps_container.getNumChildren() + " mousedown "+ps_container.getChildIndex(imgCopy));
			evt.target.clicked = true;
            move = true;
			evt.target.shadow = null;
			
			// bump the target in front of its siblings:
			ps_container.addChild(imgCopy);
			ps_container.setChildIndex(imgCopy, ps_container.getNumChildren()-1);
			
            disableClicks(true, true);
        });

        tmp_mc.on("pressmove", function(evt) {
            //console.log("pressmove ");
            if(move){
                imgCopy.x = evt.stageX;
                imgCopy.y = evt.stageY;
            }
        });
        
        tmp_mc.on("pressup", function(evt) {
            
            move = false;
			disableClicks(true, true);

            var intersection1, intersection2, intersection3 
			
			intersection1 = collisionMethod(wordpart1, imgCopy, 1);
			
            if(obj[1].id != 0){
				intersection2 = collisionMethod(wordpart2, imgCopy, 1);
			}else{
				intersection2 = false;
			}
			
			if(obj[2].id != 0){
				intersection3 = collisionMethod(wordpart3, imgCopy, 1);
			}else{
				intersection3 = false;
			}
			//console.log("pressup ");

            if (intersection1 || intersection2 || intersection3){
				
                if ( intersection1 ) {
                    if(hotspot1){
                        if(wordpart1.id == imgCopy.id){
                            onDragComplete("C", wordpart1);
                        }else{
                            onDragComplete("I", wordpart1);
                        }
                        hotspot1 = false;    
                    }else{
                        tweenBack(imgCopy);
                    }
                }

                if ( intersection2 ) {
                    if(hotspot2){
                        if(wordpart2.id == imgCopy.id){
                            onDragComplete("C", wordpart2);
                        }else{
                            onDragComplete("I", wordpart2);
                        }
                        hotspot2 = false;    
                    }else{
                        tweenBack(imgCopy);
                    }
                }
				
				if ( intersection3 ) {                   
                    if(hotspot3){
                        if(wordpart3.id == imgCopy.id){
                            onDragComplete("C", wordpart3);
                        }else{
                            onDragComplete("I", wordpart3);
                        }
                        hotspot3 = false;    
                    }else{
                        tweenBack(imgCopy);
                    }
                }
				
			}else{
                tweenBack(imgCopy);
            }
        });
		//keep reference of the draggables
		interactiveRef.push(tmp_mc);
	}
	
	//.. enabling the once that are required
	var cIndex;
	for(var j=0; j<obj.length; j++){
		if(obj[j].id == 0){
			console.log("getOptions "+j);
		}else{
			cIndex = interactiveRef.locatePropValIndex("id", obj[j].correctOption, false);
			interactiveRef[cIndex].disabled = false;
			interactiveRef[cIndex].mouseEnabled = true;
			removeClipColor(interactiveRef[cIndex]);
		}
	}
}

function tweenBack(mc){
    createjs.Tween.get(mc).to({x:mc.initX, y:mc.initY}, 500, createjs.Ease.cubicOut).call(function(){
        ps_container.removeChild(imgCopy);
        if(totalAvailableDrags == dragAttempts){
        }else{
            disableClicks(false, true);
        }
    });
}

function onDragComplete(state, wp){
    
	removeParrot();
	
    var animSpeed = 500;

    user_response = state;
    it.arr()[it.current()][wp.arrIndex].answered = user_response;
	
    dragAttempts++;
    
    if(totalAvailableDrags == dragAttempts){
        removeCountDownTimer();
    } 
    
	//place the draggables into correct position 
	createjs.Tween.get(imgCopy).to({x:(wp.x-wp.getBounds().width*0.2) + (it.arr()[it.current()][wp.arrIndex].dx), y:(wp.y-wp.getBounds().height*0.33)+it.arr()[it.current()][wp.arrIndex].dy}, animSpeed, createjs.Ease.cubicIn);
    
    //.. if correct
    if(state == "C"){
        score += 5;
        tmp_sfx = "PF_track_0"+getRandomNumber(1, 4);
		threeInARow++;
    }else{
        tmp_sfx = "NF_track_01";//+getRandomNumber(1, 4);
    }

	
    tmpSnd = new createjs.Sound.createInstance(tmp_sfx);
    tmpSnd.addEventListener("complete", function(){
        removeClipColor(ps_container.getChildByName(wp.id));
		disableClicks(false, true);
		console.log("totalAvailableDrags-",totalAvailableDrags, "  dragAttempts-", dragAttempts);
		if(totalAvailableDrags == dragAttempts){
            disableClicks(true, true);
            removeCountDownTimer();
            if(threeInARow == 3){
				blenderWhirl();
			}else{
				delayCall(gotoNextActivityScreen, 1000);
			}
        }
    });    
    delayCall(function (){
        tmpSnd.play();
		if(state == "C"){
			var scaleFactor = (Math.random()*0.8)+0.2;
			var rotationFactor = (Math.random() > 0.5) ? 360 : -360;
			createjs.Tween.get(imgCopy)
				.to({scaleX:scaleFactor, scaleY:scaleFactor, rotation: rotationFactor}, 1500, createjs.Ease.Regular)
				.to({rotation: -rotationFactor, scaleX:1, scaleY:1}, 750);
		}else{
			applyClipColor(imgCopy, [new createjs.ColorFilter(1, 0.4, 0.4, 1, 255, 0, 0, 1)]);
			//.. highlight the correct one....
			applyClipColor(ps_container.getChildByName(wp.id), [new createjs.ColorFilter(0, 1, 0, 1, 0, 100, 0, 1)]);
		}
    }, 800);
    
	questionsRemaining--;
	
    canvasStageRef.onQuestionEnd(it.arr()[it.current()][wp.arrIndex].id, (countDownValue - seconds), user_response, parrot_clicked);  
}

function blenderWhirl(){

	tmpSnd = new createjs.Sound.createInstance("SFX_blender");
    tmpSnd.addEventListener("complete", function(){
		delayCall(gotoNextActivityScreen, 1000);
    });
    delayCall(function (){
		
		tmpSnd.play();
		
		var rotationFactor;
		var arr1, arr2, x1, y1, x2, y2;
		
		arr1 = optionArr.copyArray().shuffleArray();
		arr2 = arr1.copyArray().shuffleArray();
		
		for(var i=0; i<optionArr.length; i++){
			tmp_var = ps_container.getChildByName(optionArr[i].optionID);
			
			x1 = ps_container.getChildByName(arr1[i].optionID).x;
			y1 = ps_container.getChildByName(arr1[i].optionID).y;
			
			x2 = ps_container.getChildByName(arr2[i].optionID).x;
			y2 = ps_container.getChildByName(arr2[i].optionID).y;
			
			rotationFactor = (Math.random() > 0.5) ? 360 : -360;
			createjs.Tween.get(tmp_var)
				.to({x:x1, y:y1, rotation: rotationFactor}, 500)
				.to({x:x2, y:y2, rotation: -rotationFactor}, 500)
				.to({x:x1, y:y1, rotation: rotationFactor}, 500)
				.to({x:x2, y:y2, rotation: -rotationFactor}, 500);
		}
	}, 500);

}

function loadActivityScreen(it){

    tweens = [];
	interactiveRef = [];
	hotspot1 = hotspot2 = hotspot3 = true;
    user_response = "T";
	dragAttempts = totalAvailableDrags = 0;
	threeInARow = 0;
	
	move = false;

    clearActivityContainer();
	
	//.. the blender
    tmp_img = new lib._8();
	tmp_img.x = 230;
	tmp_img.y = 380;
    ps_container.addChild(tmp_img);

	//.. current object
    tmp_obj = it.currentObj();

	//console.log(tmp_obj+" loadActivityScreen "+image1);//

    for (var i = 0; i < tmp_obj.length; i++) {
		
		if(tmp_obj[i].id == 0){
			console.log("loadActivityScreen "+i)
		}else{
			
			totalAvailableDrags++;
			
			//.. add image
			tmp_var = getMCWrap(new lib[tmp_obj[i].img]());
			centerRegPoint(tmp_var);
			tmp_var.x = img_layout[i].x;
			tmp_var.y = img_layout[i].y;
			ps_container.addChild(tmp_var);
			this["image"+(i+1)] = tmp_var;

			//.. add wordpart
			tmp_var = getMCWrap(new lib[tmp_obj[i].word]());
			centerRegPoint(tmp_var);
			tmp_var.x = word_layout[i].x;
			tmp_var.y = word_layout[i].y;
			tmp_var.id = tmp_obj[i].correctOption;
			tmp_var.arrIndex = i;
			ps_container.addChild(tmp_var);
			this["wordpart"+(i+1)] = tmp_var;
		}
	}
	
	getOptions(tmp_obj);
	
	tmpSnd = new createjs.Sound.createInstance(tmp_obj[0].mp3);
    tmpSnd.addEventListener("complete", function(){
		
		if(tmp_obj[1].id == 0){
			disableClicks(false, false);
			addParrot();
		}else{
			tmpSnd = new createjs.Sound.createInstance(tmp_obj[1].mp3);
			tmpSnd.addEventListener("complete", function(){
				if(tmp_obj[2].id == 0){
					disableClicks(false, false);
					addParrot();
				}else{
					tmpSnd = new createjs.Sound.createInstance(tmp_obj[2].mp3);
					tmpSnd.addEventListener("complete", function(){
						
						disableClicks(false, false);
						addParrot();
						
					});
					delayCall(function (){tmpSnd.play();}, 1000);
				}
			});
			delayCall(function (){tmpSnd.play();}, 1000);
		}
    });
    delayCall(function (){tmpSnd.play();}, 1000);

	
    addCountDownTimer(countDownValue, timeUpNextActivityScreen);
    disableClicks(true, true);
	
	updateScore();
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
	
	if(qRepeated){
		for(var i=0; i<3; i++){// 3 becos of the triplets
			if(it.arr()[it.current()][i].id != 0){
				if(it.arr()[it.current()][i].answered == "na"){
					it.arr()[it.current()][i].answered = "T";
					canvasStageRef.onQuestionEnd(it.arr()[it.current()][i].id, (countDownValue - seconds), it.arr()[it.current()][i].answered, parrot_clicked);
				}
			}
			
		}
	}
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
	removeParrot();
}

function repeatUnattempted(){
    //alert("repeat Unattempted questions");
    //var tmp_arr = [];
    unAttempted_arr = [];
    //console.log("question_arr.length ", question_arr.length);
	for (var i = 0; i < question_arr.length; i++) {
		for(var j=0; j<3; j++){
			if(question_arr[i][j].id != 0){
				if(question_arr[i][j].answered == "na"){
					unAttempted_arr.push(question_arr[i][j]);
				}
			}
		}
        //console.log("unAttempted_arr :"+unAttempted_arr.length);
    }
	
	question_arr = [];
	
	if(unAttempted_arr.length > 0){
		questionsRemaining = unAttempted_arr.length;
		question_arr = breakInTriplet(unAttempted_arr);
	}
	
    //alert("unAttempted_arr "+question_arr.length);
    if(question_arr.length > 0){
        startActivity();
    }else{
        canvasStageRef.onEnd();
    }
}

function isCompleted(){
    for (var i = 0; i < question_arr.length; i++) {
		for(var j=0; j<3; j++){// 3 is for the triplet in question_arr: TODO
			if(question_arr[i][j].id != 0){
				if(question_arr[i][j].answered == "na"){
					return "n"
				}
			}
		}
    }
    return "y"
}

function updateScore(){

    stage.removeChild(scoreTxt, qLeftTxt);

    scoreTxt = new createjs.Text();
    scoreTxt.x = 785;
    scoreTxt.y = 21;
    scoreTxt.font = ("bold 18px Verdana");
    scoreTxt.color = ("#000000");
    scoreTxt.text = score;
    scoreTxt.textAlign = "center";
    stage.addChild(scoreTxt);

    qLeftTxt = new createjs.Text();
    qLeftTxt.x = 665;
    qLeftTxt.y = 21;
    qLeftTxt.font = ("bold 18px Verdana");
    qLeftTxt.color = ("#000000");
    scoreTxt.textAlign = "center";
    qLeftTxt.text = questionsRemaining; //
    stage.addChild(qLeftTxt);

}

//----------- ACTIVITY FUNCTIONS ENDS --------------------------



// ======= LISTENERS ======= //

canvasStageRef = new createjs.Container();

canvasStageRef.onStart = function(param){
    //alert("onStart");
    
    param.play();
    
    tmpSnd = new createjs.Sound.createInstance("Introduction_P1");
    tmpSnd.addEventListener("complete", function(){

    });    
    delayCall(function (){tmpSnd.play();}, 100);
    
    //exportRoot.gotoAndPlay("part2"); // for testing
}

canvasStageRef.onPractice = function(param){
    param.stop();

    clearContainer();

    startPracticeSession();
}

canvasStageRef.onPart2 = function(param){
    param.play();
    playSound("Introduction_P2")
}

canvasStageRef.onActivity = function(param){

    //console.log("onActivity");
    param.stop();
    
    clearContainer();
	ps_container.x = ps_container.y = 0;
    
    if(startBtn) stage.removeChild(startBtn);


    startBtn = new lib.start();
    startBtn.x = 400;
    startBtn.y = 365;
    stage.addChild(startBtn);

    configClickListener(startBtn, true);
    startBtn.on("click", function(event){
        stage.removeChild(startBtn);
        buildQuestions();
    });
    
    configClickListener(exportRoot.skip, false);
    exportRoot.skip.gotoAndStop("disabled");
    configClickListener(exportRoot.replay, false);
    exportRoot.replay.gotoAndStop(3);
    
}

canvasStageRef.onEnd = function(param){

	stage.removeChild(scoreTxt, qLeftTxt);
	clearActivityContainer();
	
	exportRoot.play();
	
    //alert("activity ends "+ report());
    tmpSnd = new createjs.Sound.createInstance("Conclusion");
    tmpSnd.addEventListener("complete", function(){
        window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
    });    
    delayCall(function (){
		tmpSnd.play();
	}, 500);
}

canvasStageRef.onActivityClose = function(param){
    window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
}

canvasStageRef.onQuestionEnd = function (ID,TIME,RESULT,PARROTS) {
    //change-local
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
            stopSound("Introduction_P1");
            stopSound("Introduction_P2");
            exportRoot.gotoAndStop("activity"); //
        break;

        case "replay":
            stopSound("Introduction_P1");
            stopSound("Introduction_P2");
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
    bird.y = 130;
    //bird.mouseChildren = false;
    bird.cursor = "pointer";
    bird.on("click", function(event){
        parrot_clicked++;

		disableClicks(true, true);
        
		tmpSnd = new createjs.Sound.createInstance(tmp_obj[0].mp3);
		tmpSnd.addEventListener("complete", function(){
			
			if(tmp_obj[1].id == 0){
				disableClicks(false, false);
			}else{
				tmpSnd = new createjs.Sound.createInstance(tmp_obj[1].mp3);
				tmpSnd.addEventListener("complete", function(){
					
					if(tmp_obj[2].id == 0){
						disableClicks(false, false);
					}else{
						tmpSnd = new createjs.Sound.createInstance(tmp_obj[2].mp3);
						tmpSnd.addEventListener("complete", function(){
							disableClicks(false, false);
						});
						delayCall(function (){
							tmpSnd.play();
							bird.play();
						}, 1000);
					}
				});
				delayCall(function (){
					tmpSnd.play();
					bird.play();
				}, 1000);
			}
		});
		delayCall(function (){
			tmpSnd.play();
			bird.play();
		}, 500);
    });
	
	playSound("SFX_Parrot_0"+getRandomNumber(1, 4));
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
    clip.cache(-clip.getBounds().width/2,-clip.getBounds().height/2, clip.getBounds().width, clip.getBounds().height);
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

