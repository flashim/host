//template variables
var sounds_path;
var images_path;

var activity_base = ".";
var activity_filename = "CoolBlends";

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
        


        {src:activity_base+"/images/"+activity_filename+"/CB_0000____eam.png", id:"CB_0000____eam"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0000_bigstockHappyportraitofamotherand49730834.png", id:"CB_0000_bigstockHappyportraitofamotherand49730834"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0000_cl.png", id:"CB_0000_cl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0000_dr.png", id:"CB_0000_dr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0000_l.png", id:"CB_0000_l"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0000_wheelbluewood.png", id:"CB_0000_wheelbluewood"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0001____oud.png", id:"CB_0001____oud"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0001_bigstockRearingHorseAndFreedom1222388.png", id:"CB_0001_bigstockRearingHorseAndFreedom1222388"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0001_frogcolorsorangepurplesmall.png", id:"CB_0001_frogcolorsorangepurplesmall"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0001_gl.png", id:"CB_0001_gl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0002____og.png", id:"CB_0002____og"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0002____ow.png", id:"CB_0002____ow"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0002_b.png", id:"CB_0002_b"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0002_bigstockGardeninggirl46626892.png", id:"CB_0002_bigstockGardeninggirl46626892"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0002_cl.png", id:"CB_0002_cl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0002_cr.png", id:"CB_0002_cr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0003____ute.png", id:"CB_0003____ute"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0003_bigstockPortraitsofhappykidsplayin45736000.png", id:"CB_0003_bigstockPortraitsofhappykidsplayin45736000"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0003_fl.png", id:"CB_0003_fl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0003_frostcold.png", id:"CB_0003_frostcold"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0004____ab.png", id:"CB_0004____ab"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0004_bl.png", id:"CB_0004_bl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0004_flagsfour.png", id:"CB_0004_flagsfour"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0004_fr.png", id:"CB_0004_fr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0005____obe.png", id:"CB_0005____obe"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0005_bigstockcuteblueeyedtoddlerinthe50996429.png", id:"CB_0005_bigstockcuteblueeyedtoddlerinthe50996429"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0005_bigstockRedapplesinabasketinagr52386997.png", id:"CB_0005_bigstockRedapplesinabasketinagr52386997"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0005_bigstockYeehawgirls1567452.png", id:"CB_0005_bigstockYeehawgirls1567452"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0005_crow.png", id:"CB_0005_crow"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0006____ap.png", id:"CB_0006____ap"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0006____ill.png", id:"CB_0006____ill"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0006_bigstockBloomingPeachTrees45257104.png", id:"CB_0006_bigstockBloomingPeachTrees45257104"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0006_bigstockHispanicboyplaying6342667.png", id:"CB_0006_bigstockHispanicboyplaying6342667"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0006_blowingbubbles2.png", id:"CB_0006_blowingbubbles2"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0007____ue.png", id:"CB_0007____ue"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0007____y.png", id:"CB_0007____y"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0007_bigstockTastySummerFruitsOnAWoode46208980.png", id:"CB_0007_bigstockTastySummerFruitsOnAWoode46208980"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0007_bigstockTwoStudentsInClassAtCompu3917513.png", id:"CB_0007_bigstockTwoStudentsInClassAtCompu3917513"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0008____ad.png", id:"CB_0008____ad"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0008_bigstockPortraitofhappyclassmatesa56029811.png", id:"CB_0008_bigstockPortraitofhappyclassmatesa56029811"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0008_gr.png", id:"CB_0008_gr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0009____own.png", id:"CB_0009____own"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0009_bigstocklittleyearoldtoddlerboy45687268.png", id:"CB_0009_bigstocklittleyearoldtoddlerboy45687268"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0009_fr.png", id:"CB_0009_fr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0010____ost.png", id:"CB_0010____ost"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0010_bigstockGardeninggirl46626892.png", id:"CB_0010_bigstockGardeninggirl46626892"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0010_bigstockLittlegirlplayingdrums48230876.png", id:"CB_0010_bigstockLittlegirlplayingdrums48230876"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0010_fl.png", id:"CB_0010_fl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0011____um.png", id:"CB_0011____um"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0011_cr.png", id:"CB_0011_cr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0012____ag.png", id:"CB_0012____ag"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0012_bigstockinteriordesignandhomerenov49824605.png", id:"CB_0012_bigstockinteriordesignandhomerenov49824605"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0012_gl.png", id:"CB_0012_gl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0013____ock.png", id:"CB_0013____ock"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0013_bigstockGlue2070333.png", id:"CB_0013_bigstockGlue2070333"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0013_fr.png", id:"CB_0013_fr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0014____uit.png", id:"CB_0014____uit"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0014_bigstockColorfulalarmclocksontable49064162.png", id:"CB_0014_bigstockColorfulalarmclocksontable49064162"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0014_dr.png", id:"CB_0014_dr"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0015____ow.png", id:"CB_0015____ow"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0015_bigstockChickenCrab55318181.png", id:"CB_0015_bigstockChickenCrab55318181"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0016_bigstockAppleorchard25274492.png", id:"CB_0016_bigstockAppleorchard25274492"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0016_bigstockBlueskybackgroundwithatin56684774.png", id:"CB_0016_bigstockBlueskybackgroundwithatin56684774"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0016_bigstockChildWithGogglesAndThumbs6512145.png", id:"CB_0016_bigstockChildWithGogglesAndThumbs6512145"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0017_bigstockAdorableBallerinaFriends34293554.png", id:"CB_0017_bigstockAdorableBallerinaFriends34293554"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0017_bigstockBlondkidchildrengirlplayin53177800.png", id:"CB_0017_bigstockBlondkidchildrengirlplayin53177800"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0017_bl.png", id:"CB_0017_bl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0018_bigstockBirthdayBoyWearingaCrowni50570369.png", id:"CB_0018_bigstockBirthdayBoyWearingaCrowni50570369"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0018_bigstockPeachTreeWithFruits48249494.png", id:"CB_0018_bigstockPeachTreeWithFruits48249494"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0019_gooseflyingclosealone.png", id:"CB_0019_gooseflyingclosealone"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0020_girlsleepingbedteddybear.png", id:"CB_0020_girlsleepingbedteddybear"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0021_f.png", id:"CB_0021_f"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0022_d.png", id:"CB_0022_d"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0023_r.png", id:"CB_0023_r"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0024_c.png", id:"CB_0024_c"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0025_g.png", id:"CB_0025_g"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0026_bl.png", id:"CB_0026_bl"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0026_HiRes.png", id:"CB_0026_HiRes"},
        {src:activity_base+"/images/"+activity_filename+"/CB_0033_bigstockRipeplumshangingfromatree49076081.png", id:"CB_0033_bigstockRipeplumshangingfromatree49076081"},
        {src:activity_base+"/images/"+activity_filename+"/coolblends.jpg", id:"coolblends"},
        {src:activity_base+"/images/"+activity_filename+"/coolblendsact.jpg", id:"coolblendsact"},
        {src:activity_base+"/images/"+activity_filename+"/cursor.png", id:"cursor"},
        {src:activity_base+"/images/"+activity_filename+"/GB_0036_dr.png", id:"GB_0036_dr"},
        {src:activity_base+"/images/"+activity_filename+"/GB_0037_fr.png", id:"GB_0037_fr"},
        {src:activity_base+"/images/"+activity_filename+"/GB_0038_gl.png", id:"GB_0038_gl"},
        {src:activity_base+"/images/"+activity_filename+"/GB_0039_cr.png", id:"GB_0039_cr"},
        {src:activity_base+"/images/"+activity_filename+"/GB_0040_fl.png", id:"GB_0040_fl"},
        {src:activity_base+"/images/"+activity_filename+"/greenCircle.png", id:"greenCircle"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_01.png", id:"ht_110x170_01"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_02.png", id:"ht_110x170_02"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_03.png", id:"ht_110x170_03"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_01.png", id:"wf_110x170_01"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_02.png", id:"wf_110x170_02"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_03.png", id:"wf_110x170_03"},
        {src:activity_base+"/images/"+activity_filename+"/whiteCircle_big.png", id:"whiteCircle_big"},
        {src:activity_base+"/images/"+activity_filename+"/whiteCircle_small.png", id:"whiteCircle_small"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_bl.mp3", id:"Blend_bl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_cl.mp3", id:"Blend_cl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_cr.mp3", id:"Blend_cr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_dr.mp3", id:"Blend_dr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_fl.mp3", id:"Blend_fl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_fr.mp3", id:"Blend_fr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_gl.mp3", id:"Blend_gl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Conclusion.mp3", id:"Conclusion"},
        {src:activity_base+"/sounds/"+activity_filename+"/Introduction_P1.mp3", id:"Introduction_P1"},
        {src:activity_base+"/sounds/"+activity_filename+"/Introduction_P2.mp3", id:"Introduction_P2"},
        {src:activity_base+"/sounds/"+activity_filename+"/NF_track_01.mp3", id:"NF_track_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_01.mp3", id:"PF_track_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_02.mp3", id:"PF_track_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_03.mp3", id:"PF_track_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_track_04.mp3", id:"PF_track_04"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blend_spin.mp3", id:"SFX_blend_spin"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blend_spin_02.mp3", id:"SFX_blend_spin_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blend_spin_03.mp3", id:"SFX_blend_spin_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_blender.mp3", id:"SFX_blender"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_mouse_click.mp3", id:"SFX_mouse_click"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_01.mp3", id:"SFX_Parrot_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_02.mp3", id:"SFX_Parrot_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_03.mp3", id:"SFX_Parrot_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_Parrot_04.mp3", id:"SFX_Parrot_04"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_block.mp3", id:"W_block"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_blow.mp3", id:"W_blow"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_blue.mp3", id:"W_blue"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_clap.mp3", id:"W_clap"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_clock.mp3", id:"W_clock"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_cloud.mp3", id:"W_cloud"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_crab.mp3", id:"W_crab"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_crow.mp3", id:"W_crow"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_crown.mp3", id:"W_crown"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_dream.mp3", id:"W_dream"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_drill.mp3", id:"W_drill"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_drum.mp3", id:"W_drum"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_flag.mp3", id:"W_flag"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_flute.mp3", id:"W_flute"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_fly.mp3", id:"W_fly"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_frog.mp3", id:"W_frog"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_frost.mp3", id:"W_frost"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_fruit.mp3", id:"W_fruit"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_glad.mp3", id:"W_glad"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_globe.mp3", id:"W_globe"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_glue.mp3", id:"W_glue"}
    
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
    practice_session_arr[0] = new PracticeVO("1", "CB_0002_b", "CB_0000_l", "CB_0004_bl", "Blend_bl");
    practice_session_arr[1] = new PracticeVO("2", "CB_0024_c", "CB_0023_r", "CB_0002_cr", "Blend_cr");
    practice_session_arr[2] = new PracticeVO("3", "CB_0022_d", "CB_0023_r", "CB_0000_dr", "Blend_dr");
    practice_session_arr[3] = new PracticeVO("4", "CB_0025_g", "CB_0000_l", "CB_0001_gl", "Blend_gl");
    practice_session_arr[4] = new PracticeVO("5", "CB_0024_c", "CB_0000_l", "CB_0002_cl", "Blend_cl");
    practice_session_arr[5] = new PracticeVO("6", "CB_0021_f", "CB_0000_l", "CB_0003_fl", "Blend_fl");
    practice_session_arr[6] = new PracticeVO("7", "CB_0021_f", "CB_0023_r", "CB_0004_fr", "Blend_fr");
   

    optionArr = [];
    optionArr[0] = new OptionVO("_9", "bl");
    optionArr[1] = new OptionVO("_10", "cr");
    optionArr[2] = new OptionVO("_11", "fl");
    optionArr[3] = new OptionVO("_12", "fr");
    optionArr[4] = new OptionVO("_13", "dr");
    optionArr[5] = new OptionVO("_14", "cl");
    optionArr[6] = new OptionVO("_15", "gl");


    
    activity_arr = [];
    activity_arr[0] = new QuestionVO("1", "CB_0000_wheelbluewood", "CB_0007____ue", "W_blue", "bl", 0, 0);
    activity_arr[1] = new QuestionVO("2", "CB_0005_bigstockcuteblueeyedtoddlerinthe50996429", "CB_0006____ap", "W_clap", "cl", 0, 0);
    activity_arr[2] = new QuestionVO("3", "CB_0001_frogcolorsorangepurplesmall", "CB_0002____og", "W_frog", "fr", 0, 0);
    
    activity_arr[3] = new QuestionVO("4", "CB_0005_crow", "CB_0002____ow", "W_crow", "cr", 0, 0);
    activity_arr[4] = new QuestionVO("5", "CB_0007_bigstockTastySummerFruitsOnAWoode46208980", "CB_0014____uit", "W_fruit", "fr", 0, 15);
    activity_arr[5] = new QuestionVO("6", "CB_0013_bigstockGlue2070333", "CB_0007____ue", "W_glue", "gl", 0, 0);
    
    activity_arr[6] = new QuestionVO("7", "CB_0009_bigstocklittleyearoldtoddlerboy45687268", "CB_0013____ock", "W_block", "bl", -15, 12);
    activity_arr[7] = new QuestionVO("8", "CB_0004_flagsfour", "CB_0012____ag", "W_flag", "fl", 0, 0);
    activity_arr[8] = new QuestionVO("9", "CB_0010_bigstockLittlegirlplayingdrums48230876", "CB_0011____um", "W_drum", "dr", -5, 0);
	
	activity_arr[9] = new QuestionVO("10", "CB_0003_frostcold", "CB_0010____ost", "W_frost", "fr", -8, 13);
    activity_arr[10] = new QuestionVO("11", "CB_0018_bigstockBirthdayBoyWearingaCrowni50570369", "CB_0009____own", "W_crown", "cr", -28, 0);
    activity_arr[11] = new QuestionVO("12", "CB_0000_bigstockHappyportraitofamotherand49730834", "CB_0008____ad", "W_glad", "gl", -5, 15);
	
	activity_arr[12] = new QuestionVO("13", "CB_0019_gooseflyingclosealone", "CB_0007____y", "W_fly", "fl", 0, 0);
    activity_arr[13] = new QuestionVO("14", "CB_0012_bigstockinteriordesignandhomerenov49824605", "CB_0006____ill", "W_drill", "dr", 0, 15);
    activity_arr[14] = new QuestionVO("15", "CB_0014_bigstockColorfulalarmclocksontable49064162", "CB_0013____ock", "W_clock", "cl", -15, 10);
	
	activity_arr[15] = new QuestionVO("16", "CB_0008_bigstockPortraitofhappyclassmatesa56029811", "CB_0005____obe", "W_globe", "gl", -22, 18);
    activity_arr[16] = new QuestionVO("17", "CB_0015_bigstockChickenCrab55318181", "CB_0004____ab", "W_crab", "cr", 0, 15);
    activity_arr[17] = new QuestionVO("18", "CB_0017_bigstockBlondkidchildrengirlplayin53177800", "CB_0003____ute", "W_flute", "fl", -10, 13);
	
	activity_arr[18] = new QuestionVO("19", "CB_0006_blowingbubbles2", "CB_0002____ow", "W_blow", "bl", -5, 0);
    activity_arr[19] = new QuestionVO("20", "CB_0016_bigstockBlueskybackgroundwithatin56684774", "CB_0001____oud", "W_cloud", "cl", -20, 12);
    activity_arr[20] = new QuestionVO("21", "CB_0020_girlsleepingbedteddybear", "CB_0000____eam", "W_dream", "dr", -22, 0);
	
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
    ps_container.addChild(firstimage, secondimage, blend_img);
   

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

function OptionVO(linkID, optionID){
    this.linkID = linkID;
    this.optionID = optionID; //matches with the correctOption in QuestionVO
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
	
	var dragLetterLayout = [{x:110, y:200}, {x:200, y:210}, {x:290, y:200}, {x:135, y:290}, {x:250, y:290}, {x:150, y:380}, {x:240, y:385}];
    
	for(var i=0; i<optionArr.length; i++){
		tmp_mc = new lib[optionArr[i].linkID]();
		tmp_mc.x = dragLetterLayout[i].x;
		tmp_mc.y = dragLetterLayout[i].y;

        tmp_mc.name = tmp_mc.id = optionArr[i].optionID;
        tmp_mc.initX = tmp_mc.x;
        tmp_mc.initY = tmp_mc.y;
        //tmp_mc.dx = tmp_arr[i].dx;
        //tmp_mc.dy = tmp_arr[i].dy;
            
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
    scoreTxt.x = 750;
    scoreTxt.y = 25;
    scoreTxt.font = ("bold 18px Verdana");
    scoreTxt.color = ("#000000");
    scoreTxt.text = score;
    scoreTxt.textAlign = "center";
    stage.addChild(scoreTxt);

    qLeftTxt = new createjs.Text();
    qLeftTxt.x = 635;
    qLeftTxt.y = 25;
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
    
    //exportRoot.gotoAndStop("activity"); // for testing
}

canvasStageRef.onPractice = function(param){
    param.stop();

    clearContainer();

    startPracticeSession();
}

canvasStageRef.onPart2 = function(param){
    //param.stop();
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

