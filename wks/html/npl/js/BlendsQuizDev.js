//template variables
var sounds_path;
var images_path;

var activity_base = ".";
var activity_filename = "BlendsQuiz";

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
var startBtn, practice_session_arr, ps_container, it, tmpScreen, tmpSnd, tmp_var, tmp_sfx, tmp_mc, tmp_container;
var activity_arr, activitySound_arr, question_arr, unAttempted_arr, user_response, interactiveRef;
var tweens;

var score, scoreTxt, qLeftTxt;

var m_image, blueCircle, wordpart, tmp_img, tmp_blend;

var blendArr;

var qRepeated = false;

var countDownValue=60;

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
        
        {src:activity_base+"/images/"+activity_filename+"/bg.png", id:"bg"},
        {src:activity_base+"/images/"+activity_filename+"/Bitmap1.png", id:"Bitmap1"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Bar.png", id:"Bottom_Activity_Bar"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Exit.png", id:"Bottom_Activity_Button_Exit"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Home.png", id:"Bottom_Activity_Button_Home"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Replay.png", id:"Bottom_Activity_Button_Replay"},
        {src:activity_base+"/images/"+activity_filename+"/Bottom_Activity_Button_Skip.png", id:"Bottom_Activity_Button_Skip"},
        {src:activity_base+"/images/"+activity_filename+"/cursor.png", id:"cursor"},

        {src:activity_base+"/images/"+activity_filename+"/numbertree_0000_bigstockMensHandInAGloveGolfSho54699230.png", id:"numbertree_0000_bigstockMensHandInAGloveGolfSho54699230"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0000_glowlightbulb.png", id:"numbertree_0000_glowlightbulb"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0001_bigstocklittleboycrawlingonagreen66133777.png", id:"numbertree_0001_bigstocklittleboycrawlingonagreen66133777"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0001_waterdrinkbottleboy.png", id:"numbertree_0001_waterdrinkbottleboy"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0002_bigstockgrill23490305.png", id:"numbertree_0002_bigstockgrill23490305"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0002_kittengray.png", id:"numbertree_0002_kittengray"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0003_bigstockGiantclam28588928.png", id:"numbertree_0003_bigstockGiantclam28588928"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0004_bigstockFullbodyportraitofadorable33807365.png", id:"numbertree_0004_bigstockFullbodyportraitofadorable33807365"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0006_bigstockCutelittlechickenovergreen63427996.png", id:"numbertree_0006_bigstockCutelittlechickenovergreen63427996"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0007_bigstockCupcakes54073897.png", id:"numbertree_0007_bigstockCupcakes54073897"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0008_bigstockCloseupOfASawedTree62047919.png", id:"numbertree_0008_bigstockCloseupOfASawedTree62047919"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0009_bigstockcleaningandhomeconceptcl61234394.png", id:"numbertree_0009_bigstockcleaningandhomeconceptcl61234394"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0010_bigstockCircularsaw51243046.png", id:"numbertree_0010_bigstockCircularsaw51243046"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0011_bigstockChildpaintingateaselinsch49701068.png", id:"numbertree_0011_bigstockChildpaintingateaselinsch49701068"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0012_bigstockbigandlittlefunnyclowns51708223.png", id:"numbertree_0012_bigstockbigandlittlefunnyclowns51708223"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0014_grapes.png", id:"numbertree_0014_grapes"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0015_bigstockvarioustypesofcheeseonwoo64476352.png", id:"numbertree_0015_bigstockvarioustypesofcheeseonwoo64476352"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0016_bigstockTwelve65864248.png", id:"numbertree_0016_bigstockTwelve65864248"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0017_bigstockToolsForSewingThreadScis57058871.png", id:"numbertree_0017_bigstockToolsForSewingThreadScis57058871"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0018_bigstockThreeStudentsStandingOutsid3917393.png", id:"numbertree_0018_bigstockThreeStudentsStandingOutsid3917393"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0019_bigstockTheTractormodernfarmequi19279868.png", id:"numbertree_0019_bigstockTheTractormodernfarmequi19279868"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0020_bigstockSwampnearNewOrleansLouisi12799955.png", id:"numbertree_0020_bigstockSwampnearNewOrleansLouisi12799955"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0021_bigstockSticksAndTwigsStackBackgro31375043.png", id:"numbertree_0021_bigstockSticksAndTwigsStackBackgro31375043"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0022_bigstockSilverPictureFrameHungAgai3847321.png", id:"numbertree_0022_bigstockSilverPictureFrameHungAgai3847321"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0023_butterflyblack.png", id:"numbertree_0023_butterflyblack"},

        {src:activity_base+"/images/"+activity_filename+"/numbertree_0004_ow.png", id:"numbertree_0004_ow"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0003_ey.png", id:"numbertree_0003_ey"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0024_ade.png", id:"numbertree_0024_ade"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0025_awl.png", id:"numbertree_0025_awl"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0026_aft.png", id:"numbertree_0026_aft"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0027_ame.png", id:"numbertree_0027_ame"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0028_iend.png", id:"numbertree_0028_iend"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0029_am.png", id:"numbertree_0029_am"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0030_own.png", id:"numbertree_0030_own"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0031_ove.png", id:"numbertree_0031_ove"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0033_ink.png", id:"numbertree_0033_ink"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0034_ig.png", id:"numbertree_0034_ig"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0035_elve.png", id:"numbertree_0035_elve"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0036_ick.png", id:"numbertree_0036_ick"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0037_eese.png", id:"numbertree_0037_eese"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0038_eep.png", id:"numbertree_0038_eep"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0039_amp.png", id:"numbertree_0039_amp"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0040_apes.png", id:"numbertree_0040_apes"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0041_ess.png", id:"numbertree_0041_ess"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0042_eak.png", id:"numbertree_0042_eak"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0043_ump.png", id:"numbertree_0043_ump"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0044_read.png", id:"numbertree_0044_read"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0045_ree.png", id:"numbertree_0045_ree"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0046_ack.png", id:"numbertree_0046_ack"},

        {src:activity_base+"/images/"+activity_filename+"/numbertree_0047_cl.png", id:"numbertree_0047_cl"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0048_dr.png", id:"numbertree_0048_dr"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0049_gl.png", id:"numbertree_0049_gl"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0050_fr.png", id:"numbertree_0050_fr"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0051_th.png", id:"numbertree_0051_th"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0052_gr.png", id:"numbertree_0052_gr"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0053_sw.png", id:"numbertree_0053_sw"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0054_ch.png", id:"numbertree_0054_ch"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0055_cr.png", id:"numbertree_0055_cr"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0056_dr.png", id:"numbertree_0056_dr"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0057_st.png", id:"numbertree_0057_st"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0058_tw.png", id:"numbertree_0058_tw"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0059_bl.png", id:"numbertree_0059_bl"},

        {src:activity_base+"/images/"+activity_filename+"/numbertree_0065_Shape1.png", id:"numbertree_0065_Shape1"},
        {src:activity_base+"/images/"+activity_filename+"/numbertree_0066_Shape1copy4.png", id:"numbertree_0066_Shape1copy4"},
        {src:activity_base+"/images/"+activity_filename+"/topPanel.jpg", id:"topPanel"},
        
        /*
        NOT REQUIRED for loading :: unused items

        {src:activity_base+"/sounds/"+activity_filename+"/Blend_bl.mp3", id:"Blend_bl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_ch.mp3", id:"Blend_ch"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_cl.mp3", id:"Blend_cl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_cr.mp3", id:"Blend_cr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_dr.mp3", id:"Blend_dr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_fr.mp3", id:"Blend_fr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_gl.mp3", id:"Blend_gl"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_gr.mp3", id:"Blend_gr"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_st.mp3", id:"Blend_st"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_sw.mp3", id:"Blend_sw"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_th.mp3", id:"Blend_th"},
        {src:activity_base+"/sounds/"+activity_filename+"/Blend_tw.mp3", id:"Blend_tw"},
        */

        {src:activity_base+"/sounds/"+activity_filename+"/Conclusion.mp3", id:"Conclusion"},
        {src:activity_base+"/sounds/"+activity_filename+"/Introduction.mp3", id:"Introduction"},
        {src:activity_base+"/sounds/"+activity_filename+"/NF_01.mp3", id:"NF_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/NF_02.mp3", id:"NF_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/NF_03.mp3", id:"NF_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_correct_01.mp3", id:"PF_correct_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_correct_02.mp3", id:"PF_correct_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_correct_03.mp3", id:"PF_correct_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/PF_correct_04.mp3", id:"PF_correct_04"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_01.mp3", id:"SFX_falling_letter_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_02.mp3", id:"SFX_falling_letter_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_03.mp3", id:"SFX_falling_letter_03"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_04.mp3", id:"SFX_falling_letter_04"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_05.mp3", id:"SFX_falling_letter_05"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_06.mp3", id:"SFX_falling_letter_06"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_flashing_blend_01.mp3", id:"SFX_flashing_blend_01"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_flashing_blend_02.mp3", id:"SFX_flashing_blend_02"},
        {src:activity_base+"/sounds/"+activity_filename+"/SFX_mouse_click.mp3", id:"SFX_mouse_click"},

        {src:activity_base+"/sounds/"+activity_filename+"/W_black.mp3", id:"W_black"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_blade.mp3", id:"W_blade"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_cheese.mp3", id:"W_cheese"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_chick.mp3", id:"W_chick"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_clam.mp3", id:"W_clam"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_clown.mp3", id:"W_clown"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_craft.mp3", id:"W_craft"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_crawl.mp3", id:"W_crawl"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_dress.mp3", id:"W_dress"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_drink.mp3", id:"W_drink"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_frame.mp3", id:"W_frame"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_friend.mp3", id:"W_friend"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_glove.mp3", id:"W_glove"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_glow.mp3", id:"W_glow"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_grapes.mp3", id:"W_grapes"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_gray.mp3", id:"W_gray"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_steak.mp3", id:"W_steak"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_stump.mp3", id:"W_stump"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_swamp.mp3", id:"W_swamp"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_sweep.mp3", id:"W_sweep"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_thread.mp3", id:"W_thread"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_three.mp3", id:"W_three"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_twelve.mp3", id:"W_twelve"},
        {src:activity_base+"/sounds/"+activity_filename+"/W_twig.mp3", id:"W_twig"}

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

    blendArr = [];
    blendArr[0] = new BlendVO("cl", "numbertree_0047_cl", "Blend_cl");
    blendArr[1] = new BlendVO("dr", "numbertree_0048_dr", "Blend_dr");
    blendArr[2] = new BlendVO("gl", "numbertree_0049_gl", "Blend_gl");
    blendArr[3] = new BlendVO("fr", "numbertree_0050_fr", "Blend_fr");
    blendArr[4] = new BlendVO("gr", "numbertree_0052_gr", "Blend_gr");
    blendArr[5] = new BlendVO("sw", "numbertree_0053_sw", "Blend_sw");
    blendArr[6] = new BlendVO("ch", "numbertree_0054_ch", "Blend_ch");
    blendArr[7] = new BlendVO("cr", "numbertree_0055_cr", "Blend_cr");
    blendArr[8] = new BlendVO("st", "numbertree_0057_st", "Blend_st");
    blendArr[9] = new BlendVO("tw", "numbertree_0058_tw", "Blend_tw");
    blendArr[10] = new BlendVO("bl", "numbertree_0059_bl", "Blend_bl");
    blendArr[11] = new BlendVO("th", "numbertree_0051_th", "Blend_th");



    activity_arr = [];
    activity_arr[0] = new QuestionVO("1", "numbertree_0046_ack", "numbertree_0023_butterflyblack", "W_black", "bl");
    activity_arr[1] = new QuestionVO("2", "numbertree_0024_ade", "numbertree_0010_bigstockCircularsaw51243046", "W_blade", "bl");

    activity_arr[2] = new QuestionVO("3", "numbertree_0025_awl", "numbertree_0001_bigstocklittleboycrawlingonagreen66133777", "W_crawl", "cr");
    activity_arr[3] = new QuestionVO("4", "numbertree_0026_aft", "numbertree_0011_bigstockChildpaintingateaselinsch49701068", "W_craft", "cr");

    activity_arr[4] = new QuestionVO("5", "numbertree_0028_iend", "numbertree_0018_bigstockThreeStudentsStandingOutsid3917393", "W_friend", "fr");
    activity_arr[5] = new QuestionVO("6", "numbertree_0027_ame", "numbertree_0022_bigstockSilverPictureFrameHungAgai3847321", "W_frame", "fr");

    activity_arr[6] = new QuestionVO("7", "numbertree_0029_am", "numbertree_0003_bigstockGiantclam28588928", "W_clam", "cl");
    activity_arr[7] = new QuestionVO("8", "numbertree_0030_own", "numbertree_0012_bigstockbigandlittlefunnyclowns51708223", "W_clown", "cl");

    activity_arr[8] = new QuestionVO("9", "numbertree_0004_ow", "numbertree_0000_glowlightbulb", "W_glow", "gl");
    activity_arr[9] = new QuestionVO("10", "numbertree_0031_ove", "numbertree_0000_bigstockMensHandInAGloveGolfSho54699230", "W_glove", "gl");

    activity_arr[10] = new QuestionVO("11", "numbertree_0041_ess", "numbertree_0004_bigstockFullbodyportraitofadorable33807365", "W_dress", "dr");
    activity_arr[11] = new QuestionVO("12", "numbertree_0033_ink", "numbertree_0001_waterdrinkbottleboy", "W_drink", "dr");

    activity_arr[12] = new QuestionVO("13", "numbertree_0034_ig", "numbertree_0021_bigstockSticksAndTwigsStackBackgro31375043", "W_twig", "tw");
    activity_arr[13] = new QuestionVO("14", "numbertree_0035_elve", "numbertree_0016_bigstockTwelve65864248", "W_twelve", "tw");

    activity_arr[14] = new QuestionVO("15", "numbertree_0036_ick", "numbertree_0006_bigstockCutelittlechickenovergreen63427996", "W_chick", "ch");
    activity_arr[15] = new QuestionVO("16", "numbertree_0037_eese", "numbertree_0015_bigstockvarioustypesofcheeseonwoo64476352", "W_cheese", "ch");

    activity_arr[16] = new QuestionVO("17", "numbertree_0038_eep", "numbertree_0009_bigstockcleaningandhomeconceptcl61234394", "W_sweep", "sw");
    activity_arr[17] = new QuestionVO("18", "numbertree_0039_amp", "numbertree_0020_bigstockSwampnearNewOrleansLouisi12799955", "W_swamp", "sw");

    activity_arr[18] = new QuestionVO("19", "numbertree_0040_apes", "numbertree_0014_grapes", "W_grapes", "gr");
    activity_arr[19] = new QuestionVO("20", "numbertree_0003_ey", "numbertree_0002_kittengray", "W_gray", "gr");

    activity_arr[20] = new QuestionVO("21", "numbertree_0042_eak", "numbertree_0002_bigstockgrill23490305", "W_steak", "st");
    activity_arr[21] = new QuestionVO("22", "numbertree_0043_ump", "numbertree_0008_bigstockCloseupOfASawedTree62047919", "W_stump", "st");

    activity_arr[22] = new QuestionVO("23", "numbertree_0044_read", "numbertree_0017_bigstockToolsForSewingThreadScis57058871", "W_thread", "th");
    activity_arr[23] = new QuestionVO("24", "numbertree_0045_ree", "numbertree_0007_bigstockCupcakes54073897", "W_three", "th");
 


    data_str = document.getElementById('game_history').value; //local
     
    //mock data_str
    //data_str = "1:C,T,I;2:T;4:I,C;5:I,C;score:10";
}

function QuestionVO(id, word, pic, word_mp3, blendCorrect){
    this.id = id;
    
    this.word = word;
    this.img = pic;
    this.mp3 = word_mp3
    this.blendCorrect = blendCorrect;
    this.blendOptions = getOptions(blendCorrect);

    this.answered = "na";
}

function BlendVO(id, img, mp3){
    this.id = id;
    this.img = img;
    this.mp3 = mp3;
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


function clearContainer(){
    clearTimer();
    ps_container.removeAllChildren();
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
        //question_arr = tmpArr;
        score = 0;
    }  

    
    //console.log(score+ " score :: -> "+data_str);

    startActivity();
    
}

function getOptions(blend){
    
    var tmp_arr = [];
    var shuffled_arr = blendArr.shuffleArray();
    //
    var cIndex = shuffled_arr.locatePropValIndex("id", blend, false);
    tmp_arr.push(shuffled_arr[cIndex]);
    shuffled_arr.splice(cIndex, 1);

    //console.log(shuffled_arr[cIndex].id +">>"+ tmp_arr[0].id);
    
    for (var i = 0; i < 3; i++) {
        tmp_arr.push(shuffled_arr[i]);
        //console.log("id "+shuffled_arr[i].id);
    }
    
    shuffled_arr = [];
    shuffled_arr = tmp_arr.shuffleArray();
    
    return shuffled_arr
}


function startActivity(){
    it = Iterator(question_arr);
    it.reset();
    it.next();

    loadActivityScreen(it);
}

function loadActivityScreen(it){

    
    var layout = [{x:220, y:270}, {x:570, y:275}, {x:690, y:227}, {x:140, y:590}];

    interactiveRef = [];

    user_response = "T";

    clearActivityContainer();

    m_image = new lib[it.arr()[it.current()].img]();
    m_image.x = layout[0].x;
    m_image.y = layout[0].y;
    centerRegPoint(m_image);
    ps_container.addChild(m_image);
    
    blueCircle = new lib["numbertree_0066_Shape1copy4"]();
    blueCircle.x = layout[1].x;
    blueCircle.y = layout[1].y;
    centerRegPoint(blueCircle);
    ps_container.addChild(blueCircle);


    tmp_container = new lib[it.arr()[it.current()].word]();
    wordpart = new createjs.MovieClip(0, 0, false, {start:0});
    wordpart.addChild(tmp_container);
    wordpart.name = "word";
    wordpart.x = layout[2].x;
    wordpart.y = layout[2].y; //new createjs.MovieClip(0, 0, false, {start:0});

    //centerRegPoint(wordpart);
    ps_container.addChild(wordpart);
    

    for (var i = 0; i < 4; i++) {
        tmp_img = new lib["numbertree_0065_Shape1"](); //white circle
        tmp_img.x = layout[3].x + (tmp_img.getBounds().width * i) + (i*40); //white circle : x position
        tmp_img.y = layout[3].y; //white circle : y position
        centerRegPoint(tmp_img);
        ps_container.addChild(tmp_img);

        tmp_container = new lib[it.arr()[it.current()].blendOptions[i].img]();
        
        tmp_blend = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
        tmp_blend.addChild(tmp_container);

        tmp_blend.id = it.arr()[it.current()].blendOptions[i].id;
        tmp_blend.name = tmp_blend.id;
        tmp_blend.x = tmp_img.x;
        tmp_blend.y = tmp_img.y;
        tmp_blend.initX = tmp_blend.x;
        tmp_blend.initY = tmp_blend.y;
        tmp_blend.finalX = blueCircle.x;
        tmp_blend.finalY = blueCircle.y;
         
        tmp_blend.cursor = "pointer";
        tmp_blend.mouseChildren = false;

        centerRegPoint(tmp_blend);

        var hit1 = new createjs.Shape();
        hit1.graphics.beginFill("#000").drawRect(0,0,tmp_blend.getBounds().width, tmp_blend.getBounds().height);
        tmp_blend.hitArea = hit1;


        ps_container.addChild(tmp_blend);
        
        tmp_blend.on("mousedown", function(evt) {
            // bump the target in front of its siblings:
            var o = evt.target;
            o.offset = {x:o.x-evt.stageX, y:o.y-evt.stageY};
            ps_container.setChildIndex(o, ps_container.getNumChildren()-1);
        });
        tmp_blend.on("pressmove", function(evt) {
            var o = evt.target;
            o.x = evt.stageX+ o.offset.x;
            o.y = evt.stageY+ o.offset.y;
        });
        tmp_blend.on("pressup", function(evt) {
            var o = evt.target;
            o.x = evt.stageX+ o.offset.x;
            o.y = evt.stageY+ o.offset.y;
            var p = ps_container.localToLocal(o.x, o.y, blueCircle);
            if(blueCircle.hitTest(p.x, p.y)){
                if(o.id == it.arr()[it.current()].blendCorrect){
                    //console.log("correct hit ");
                    onDragComplete("C");
                }else{
                    //console.log("wrong "+it.arr()[it.current()].blendCorrect);
                    onDragComplete("I");
                } 
                disableClicks(true);
                //set the mc in the middle of the blue circle
                createjs.Tween.get(o).to({x:o.finalX, y:o.finalY}, 500, createjs.Ease.cubicIn);
            }else{
                createjs.Tween.get(o).to({x:o.initX, y:o.initY}, 500, createjs.Ease.cubicOut);
            }
        });
        tmp_blend.mouseEnabled = false;
        //keep reference of the draggables
        interactiveRef.push(tmp_blend);
    }

    tmpSnd = new createjs.Sound.createInstance(it.arr()[it.current()].mp3);
    tmpSnd.addEventListener("complete", function(){
        interactiveRef[0].mouseEnabled = interactiveRef[1].mouseEnabled = interactiveRef[2].mouseEnabled = interactiveRef[3].mouseEnabled = true;
        addCountDownTimer(countDownValue, gotoNextActivityScreen);
    });
    delayCall(function (){tmpSnd.play();}, 750);

    updateScore();

    if(!qRepeated) {
        updateQuestionRemaining();
    }
    
}

function onDragComplete(state){

    stopCountDownTimer();
    //playSound("SFX_flashing_blend_0"+getRandomNumber(1, 2));

    it.arr()[it.current()].answered = state;
    user_response = state;
    if(state == "C"){
        score += 5;
        tmp_sfx = "SFX_falling_letter_0"+getRandomNumber(1, 6);
        tmp_var = "PF_correct_0"+getRandomNumber(1, 4);

        //..drop the word to the bottom
        tmp_mc= new createjs.MovieClip(0, 0, false, {start:0});
        tmp_mc.addChild(ps_container.getChildByName(it.arr()[it.current()].blendCorrect), wordpart); // 
        
        
        //tmp_mc.filters = [new createjs.ColorFilter(1,1,0,1)];
        //tmp_mc.cache(0,0, templateWidth, templateHeight);
        ps_container.addChild(tmp_mc);

        createjs.Tween.get(tmp_mc).wait(500).to({y:600}, 1500, createjs.Ease.quintInOut);

    }else{
        tmp_sfx = "SFX_flashing_blend_0"+getRandomNumber(1, 2);
        tmp_var = "NF_0"+getRandomNumber(1, 3);
        var blinkVar = setInterval(blink, 400);
    }
    
    tmpSnd = new createjs.Sound.createInstance(tmp_sfx);
    tmpSnd.addEventListener("complete", function(){
        tmpSnd = new createjs.Sound.createInstance(tmp_var);
        tmpSnd.addEventListener("complete", function(){
            delayCall(gotoNextActivityScreen, 1500);
            clearInterval(blinkVar);
        });    
        delayCall(function (){tmpSnd.play();}, 500);   
    });    
    delayCall(function (){tmpSnd.play();}, 500);
}


function gotoNextActivityScreen(){

    //.. update results before moving ahead
    canvasStageRef.onQuestionEnd(it.arr()[it.current()].id, (countDownValue - seconds), user_response, 0);

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

function clearActivityContainer(){
   // clear the container
    removeCountDownTimer();
    clearContainer();
}

function repeatUnattempted(){

    unAttempted_arr = [];
    for (var i = 0; i < question_arr.length; i++) {
        if(question_arr[i].answered == "na"){
          unAttempted_arr.push(question_arr[i]);
        } 
    }

    question_arr = [];
    question_arr = unAttempted_arr;

    if(question_arr.length > 0){
        startActivity();
    }else{
        canvasStageRef.onEnd();
    }
}

function getRandomNumber(lower, upper){
    return (Math.round(Math.random()*(upper-lower))+lower);
}

function isCompleted(){
    for (var i = 0; i < question_arr.length; i++) {
        if(question_arr[i].answered == "na"){
            return "n"
        }
    }
    return "y"
}

function updateScore(){

    stage.removeChild(scoreTxt, qLeftTxt);

    scoreTxt = new createjs.Text();
    scoreTxt.x = 675;
    scoreTxt.y = 25;
    scoreTxt.font = ("bold 18px Verdana");
    scoreTxt.color = ("#000000");
    scoreTxt.text = score;
    scoreTxt.textAlign = "center";
    stage.addChild(scoreTxt);
}

function updateQuestionRemaining(){
    //alert("updateQuestionRemaining");
    stage.removeChild(qLeftTxt);

    qLeftTxt = new createjs.Text();
    qLeftTxt.x = 750;
    qLeftTxt.y = 25;
    qLeftTxt.font = ("bold 18px Verdana");
    qLeftTxt.color = ("#000000");
    scoreTxt.textAlign = "center";
    qLeftTxt.text = (question_arr.length - it.current()) -1; //
    stage.addChild(qLeftTxt);
}

// ======= LISTENERS ======= //

canvasStageRef = new createjs.Container();

canvasStageRef.onStart = function(param){
    
    param.stop();
    
    tmpSnd = new createjs.Sound.createInstance("Introduction");
    tmpSnd.addEventListener("complete", function(){
        //exportRoot.gotoAndStop(3);
        //param.play();
    });    
    delayCall(function (){
        tmpSnd.play();
        param.play();
    }, 100);
    
}

canvasStageRef.onActivity = function(param){

    console.log("onActivity");
    param.stop();
    
    /*
    clearContainer();
    
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
    */

    buildQuestions();

    configClickListener(exportRoot.skip, false);
    exportRoot.skip.gotoAndStop("disabled");
    configClickListener(exportRoot.replay, false);
    exportRoot.replay.gotoAndStop(3);
    
}

canvasStageRef.onEnd = function(param){
    stage.removeChild(scoreTxt, qLeftTxt);
    clearContainer();
    clearTimer();
    
    //alert("activity ends "+ report());
    tmpSnd = new createjs.Sound.createInstance("Conclusion");
    tmpSnd.addEventListener("complete", function(){
        window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
    });    
    delayCall(function (){tmpSnd.play();}, 500);
}

canvasStageRef.onActivityClose = function(param){
    window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
}

canvasStageRef.onQuestionEnd = function (ID,TIME,RESULT,PARROTS) {
	//local
	
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
	
    //console.log(document.getElementById('play_token').value+ ">> "+ID+">> "+ RESULT+">> "+PARROTS+">> "+isCompleted()+ ">> " + TIME + ">> " +act_time);
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

function disableClicks(value){
    var obj;
    for (var i = 0; i < interactiveRef.length; i++) {
        obj = interactiveRef[i];
        obj.mouseEnabled = !value;
        obj.mouseChildren = false;
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
            stopSound("Introductionmp3");
            exportRoot.gotoAndStop("activity");
        break;

        case "replay":
            stopSound("Introductionmp3");
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
var blinkBool = false;

function blink(){

    blinkBool = !blinkBool;
    tmp_mc = ps_container.getChildByName(it.arr()[it.current()].blendCorrect);
    if(blinkBool){
        tmp_mc.filters = [new createjs.ColorFilter(0,1,0,1)];
        tmp_mc.cache(0,0, tmp_mc.getBounds().width, tmp_mc.getBounds().height);
    }else{
        tmp_mc.filters = [new createjs.ColorFilter(1,1,0,1)];
        tmp_mc.cache(0,0, tmp_mc.getBounds().width, tmp_mc.getBounds().height); 
    }
}

// ====== VISUAL COUNTDOWN TIMER ++++++++++++
var countdownTimer;
var seconds;

function addCountDownTimer(time, callbackFunc){
    /*txt = new createjs.Text();
    txt.x = -600;
    txt.y = 60;
    txt.font = ("36px Times Roman");
    txt.color = ("#FF0000");
    txt.textAlign = "right";
    stage.addChild(txt);*/

    seconds=time;
    countdownTimer = setInterval(function(){
        if(seconds < 1){
            //txt.text = "Time's up!";
            stopCountDownTimer();
            delayCall(callbackFunc, 1000);
        }else{
            //txt.text = (seconds)+" :: "+(act_time);
            seconds--;
        }
        act_time++;
    }, 1000);
}

function removeCountDownTimer(){
    stopCountDownTimer();
    stage.removeChild(txt);
}

function stopCountDownTimer(){
    clearInterval(countdownTimer);
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
}

