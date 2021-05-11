//template variables
var sounds_path;
var images_path;

var activity_base = ".";
var activity_filename = "WordFamiliesQuiz";

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
var countDownValue=120; //local
var act_completed="n";
var act_time = 0;

var game_history_obj;

var option_layout = [{x:100, y:400}, {x:220, y:400}, {x:340, y:400}, {x:650, y:400}, {x:770, y:400}, {x:890, y:400}];
var word_layout = [{x:100, y:550}, {x:400, y:550}, {x:700, y:550}];

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
        

		
        
		
		{src:activity_base+"/images/"+activity_filename+"/cursor.png", id:"cursor"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_01.png", id:"ht_110x170_01"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_02.png", id:"ht_110x170_02"},
		{src:activity_base+"/images/"+activity_filename+"/ht_110x170_03.png", id:"ht_110x170_03"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_01.png", id:"wf_110x170_01"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_02.png", id:"wf_110x170_02"},
		{src:activity_base+"/images/"+activity_filename+"/wf_110x170_03.png", id:"wf_110x170_03"},
		{src:activity_base+"/images/"+activity_filename+"/wfq.jpg", id:"wfq"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0000_i.png", id:"WFQ_0000_i"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0000_u.png", id:"WFQ_0000_u"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0001_d.png", id:"WFQ_0001_d"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0001_m.png", id:"WFQ_0001_m"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0001_o.png", id:"WFQ_0001_o"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0002_c.png", id:"WFQ_0002_c"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0002_v.png", id:"WFQ_0002_v"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0003_a.png", id:"WFQ_0003_a"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0003_y.png", id:"WFQ_0003_y"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0004_ug.png", id:"WFQ_0004_ug"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0005_uck.png", id:"WFQ_0005_uck"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0006_ot.png", id:"WFQ_0006_ot"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0006_x.png", id:"WFQ_0006_x"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0007_op.png", id:"WFQ_0007_op"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0007_w.png", id:"WFQ_0007_w"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0008_ock.png", id:"WFQ_0008_ock"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0009_it.png", id:"WFQ_0009_it"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0009_t.png", id:"WFQ_0009_t"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0010_ip.png", id:"WFQ_0010_ip"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0010_s.png", id:"WFQ_0010_s"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0011_ink.png", id:"WFQ_0011_ink"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0012_in.png", id:"WFQ_0012_in"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0012_q.png", id:"WFQ_0012_q"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0013_ill.png", id:"WFQ_0013_ill"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0013_p.png", id:"WFQ_0013_p"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0014_ide.png", id:"WFQ_0014_ide"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0015_ick.png", id:"WFQ_0015_ick"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0015_l.png", id:"WFQ_0015_l"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0016_ell.png", id:"WFQ_0016_ell"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0016_k.png", id:"WFQ_0016_k"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0017_eat.png", id:"WFQ_0017_eat"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0017_j.png", id:"WFQ_0017_j"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0018_at.png", id:"WFQ_0018_at"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0018_h.png", id:"WFQ_0018_h"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0019_ap.png", id:"WFQ_0019_ap"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0019_g.png", id:"WFQ_0019_g"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0020_all.png", id:"WFQ_0020_all"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0020_e.png", id:"WFQ_0020_e"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0021_r.png", id:"WFQ_0021_r"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0023_n.png", id:"WFQ_0023_n"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0026_z.png", id:"WFQ_0026_z"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0028_b.png", id:"WFQ_0028_b"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0032_f.png", id:"WFQ_0032_f"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0035_all.png", id:"WFQ_0035_all"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0036__uck.png", id:"WFQ_0036__uck"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0037__ot.png", id:"WFQ_0037__ot"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0038__op.png", id:"WFQ_0038__op"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0039__ock.png", id:"WFQ_0039__ock"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0040__it.png", id:"WFQ_0040__it"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0041__ip.png", id:"WFQ_0041__ip"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0042__ink.png", id:"WFQ_0042__ink"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0043__in.png", id:"WFQ_0043__in"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0044__ill.png", id:"WFQ_0044__ill"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0045__ide.png", id:"WFQ_0045__ide"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0046__ick.png", id:"WFQ_0046__ick"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0047__ell.png", id:"WFQ_0047__ell"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0048__eat.png", id:"WFQ_0048__eat"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0049__at.png", id:"WFQ_0049__at"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0050__ap.png", id:"WFQ_0050__ap"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0051__an.png", id:"WFQ_0051__an"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0052__ug.png", id:"WFQ_0052__ug"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0053__all.png", id:"WFQ_0053__all"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_0057_518799434_91a4a77212_o.png", id:"WFQ_0057_518799434_91a4a77212_o"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_cloud.png", id:"WFQ_cloud"},
		{src:activity_base+"/images/"+activity_filename+"/WFQ_drop.png", id:"WFQ_drop"},
		{src:activity_base+"/images/"+activity_filename+"/wordfamilies_0035_an.png", id:"wordfamilies_0035_an"},
		
		
		{src:activity_base+"/sounds/"+activity_filename+"/Conclusion.mp3", id:"Conclusion"},
		{src:activity_base+"/sounds/"+activity_filename+"/Introduction.mp3", id:"Introduction"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_all.mp3", id:"W_all"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_drop_rain_drop_01.mp3", id:"SFX_drop_rain_drop_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_letter_03.mp3", id:"SFX_falling_letter_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_word_01.mp3", id:"SFX_falling_word_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_falling_word_02.mp3", id:"SFX_falling_word_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_01.mp3", id:"SFX_incorrect_01"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_02.mp3", id:"SFX_incorrect_02"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_incorrect_03.mp3", id:"SFX_incorrect_03"},
		{src:activity_base+"/sounds/"+activity_filename+"/SFX_mouse_click.mp3", id:"SFX_mouse_click"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_an.mp3", id:"W_an"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ap.mp3", id:"W_ap"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_at.mp3", id:"W_at"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ball.mp3", id:"W_ball"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_bat.mp3", id:"W_bat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_bin.mp3", id:"W_bin"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_bit.mp3", id:"W_bit"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_buck.mp3", id:"W_buck"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_bug.mp3", id:"W_bug"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_dock.mp3", id:"W_dock"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_dug.mp3", id:"W_dug"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_eat.mp3", id:"W_eat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ell.mp3", id:"W_ell"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_fan.mp3", id:"W_fan"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_fat.mp3", id:"W_fat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_fell.mp3", id:"W_fell"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_hall.mp3", id:"W_hall"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_heat.mp3", id:"W_heat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_hop.mp3", id:"W_hop"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ick.mp3", id:"W_ick"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ide.mp3", id:"W_ide"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ill.mp3", id:"W_ill"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_in.mp3", id:"W_in"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ink.mp3", id:"W_ink"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ip.mp3", id:"W_ip"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_it.mp3", id:"W_it"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_kit.mp3", id:"W_kit"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_kit2.mp3", id:"W_kit2"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_link.mp3", id:"W_link"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_lot.mp3", id:"W_lot"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_luck.mp3", id:"W_luck"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_mall.mp3", id:"W_mall"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_meat.mp3", id:"W_meat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_mill.mp3", id:"W_mill"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_mop.mp3", id:"W_mop"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_nap.mp3", id:"W_nap"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_nick.mp3", id:"W_nick"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_not.mp3", id:"W_not"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ock.mp3", id:"W_ock"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_op.mp3", id:"W_op"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ot.mp3", id:"W_ot"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_pat.mp3", id:"W_pat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_pick.mp3", id:"W_pick"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_pin.mp3", id:"W_pin"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_pit.mp3", id:"W_pit"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_pot.mp3", id:"W_pot"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ran.mp3", id:"W_ran"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_rap.mp3", id:"W_rap"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_rip.mp3", id:"W_rip"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_rock.mp3", id:"W_rock"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_sap.mp3", id:"W_sap"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_seat.mp3", id:"W_seat"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_side.mp3", id:"W_side"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_sill.mp3", id:"W_sill"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_sink.mp3", id:"W_sink"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_sip.mp3", id:"W_sip"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_sock.mp3", id:"W_sock"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tan.mp3", id:"W_tan"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tick.mp3", id:"W_tick"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tide.mp3", id:"W_tide"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_till.mp3", id:"W_till"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tip.mp3", id:"W_tip"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_top.mp3", id:"W_top"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tuck.mp3", id:"W_tuck"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_tug.mp3", id:"W_tug"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_uck.mp3", id:"W_uck"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_ug.mp3", id:"W_ug"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_well.mp3", id:"W_well"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_wide.mp3", id:"W_wide"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_win.mp3", id:"W_win"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_wink.mp3", id:"W_wink"},
		{src:activity_base+"/sounds/"+activity_filename+"/W_yell.mp3", id:"W_yell"}
    
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


    optionArr = [];
    optionArr[0] = [new OptionVO("m", true, "W_mall", -3, -1), 
					new OptionVO("h", true, "W_hall", -4, -2), 
					new OptionVO("b", true, "W_ball", -7, -2), 
					new OptionVO("a", false, ""), 
					new OptionVO("e", false, ""), 
					new OptionVO("y", false, "")];
					
    optionArr[1] = [new OptionVO("f", true, "W_fan", -8, -12), 
					new OptionVO("t", true, "W_tan", -5, -12), 
					new OptionVO("r", true, "W_ran", -10, -10), 
					new OptionVO("o", false, ""), 
					new OptionVO("k", false, ""), 
					new OptionVO("z", false, "")];
					
    optionArr[2] = [new OptionVO("r", true, "W_rap", -5, -12),  
					new OptionVO("s", true, "W_sap", -5, -12), 
					new OptionVO("n", true, "W_nap", -5, -12), 
					new OptionVO("j", false, ""), 
					new OptionVO("q", false, ""), 
					new OptionVO("d", false, "")];
					
					
					
	optionArr[3] = [new OptionVO("b", true, "W_bat"),  
					new OptionVO("f", true, "W_fat"), 
					new OptionVO("p", true, "W_pat"), 
					new OptionVO("l", false, ""), 
					new OptionVO("j", false, ""), 
					new OptionVO("o", false, "")];
					
	optionArr[4] = [new OptionVO("h", true, "W_heat", -10, -5),  
					new OptionVO("m", true, "W_meat", -10, -5), 
					new OptionVO("s", true, "W_seat", -10, -5), 
					new OptionVO("k", false, ""), 
					new OptionVO("g", false, ""), 
					new OptionVO("r", false, "")];
					
	optionArr[5] = [new OptionVO("y", true, "W_yell"),  
					new OptionVO("f", true, "W_fell"), 
					new OptionVO("w", true, "W_well"), 
					new OptionVO("p", false, ""), 
					new OptionVO("d", false, ""), 
					new OptionVO("m", false, "")];
    				
					
					
	optionArr[6] = [new OptionVO("p", true, "W_pick", -10, -4),  
					new OptionVO("t", true, "W_tick", -10, -4), 
					new OptionVO("n", true, "W_nick", -10, -4), 
					new OptionVO("f", false, ""), 
					new OptionVO("g", false, ""), 
					new OptionVO("q", false, "")];
					
	optionArr[7] = [new OptionVO("t", true, "W_tide", -10, 0),  
					new OptionVO("w", true, "W_wide", -10, 0), 
					new OptionVO("s", true, "W_side", -10, -4), 
					new OptionVO("l", false, ""), 
					new OptionVO("m", false, ""), 
					new OptionVO("f", false, "")];
					
	optionArr[8] = [new OptionVO("t", true, "W_till", 0, -4),  
					new OptionVO("m", true, "W_mill"), 
					new OptionVO("s", true, "W_sill"), 
					new OptionVO("d", false, ""), 
					new OptionVO("c", false, ""), 
					new OptionVO("r", false, "")];
					
					
					
	optionArr[9] = [new OptionVO("w", true, "W_win"),  
					new OptionVO("p", true, "W_pin"), 
					new OptionVO("b", true, "W_bin"), 
					new OptionVO("h", false, ""), 
					new OptionVO("n", false, ""), 
					new OptionVO("j", false, "")];
					
	optionArr[10] = [new OptionVO("l", true, "W_link", -10, -2),  
					new OptionVO("s", true, "W_sink", -10, -4), 
					new OptionVO("w", true, "W_wink", -10, -2), 
					new OptionVO("q", false, ""), 
					new OptionVO("c", false, ""), 
					new OptionVO("h", false, "")];
					
	optionArr[11] = [new OptionVO("t", true, "W_tip"),  
					new OptionVO("s", true, "W_sip"), 
					new OptionVO("r", true, "W_rip"), 
					new OptionVO("m", false, ""), 
					new OptionVO("j", false, ""), 
					new OptionVO("k", false, "")];
					
					
					
	optionArr[12] = [new OptionVO("p", true, "W_pit"),  
					new OptionVO("b", true, "W_bit"), 
					new OptionVO("k", true, "W_kit"), 
					new OptionVO("t", false, ""), 
					new OptionVO("n", false, ""), 
					new OptionVO("r", false, "")];
					
	optionArr[13] = [new OptionVO("r", true, "W_rock", -18, -4),  
					new OptionVO("s", true, "W_sock", -18, -4), 
					new OptionVO("d", true, "W_dock", -18, -4), 
					new OptionVO("g", false, ""), 
					new OptionVO("w", false, ""), 
					new OptionVO("p", false, "")];
					
	optionArr[14] = [new OptionVO("h", true, "W_hop", -5, -12),  
					new OptionVO("t", true, "W_top", -5, -12), 
					new OptionVO("m", true, "W_mop", -5, -12), 
					new OptionVO("s", false, ""), 
					new OptionVO("l", false, ""), 
					new OptionVO("v", false, "")];
					
					
					
	optionArr[15] = [new OptionVO("l", true, "W_lot"),  
					new OptionVO("n", true, "W_not"), 
					new OptionVO("p", true, "W_pot"), 
					new OptionVO("s", false, ""), 
					new OptionVO("f", false, ""), 
					new OptionVO("k", false, "")];
					
	optionArr[16] = [new OptionVO("l", true, "W_luck", -8, -12),  
					new OptionVO("t", true, "W_tuck", -12, -8), 
					new OptionVO("b", true, "W_buck"), 
					new OptionVO("h", false, ""), 
					new OptionVO("r", false, ""), 
					new OptionVO("w", false, "")];
					
	optionArr[17] = [new OptionVO("t", true, "W_tug", -12, -5),  
					new OptionVO("b", true, "W_bug", -12, -5), 
					new OptionVO("d", true, "W_dug", -12, -5), 
					new OptionVO("s", false, ""), 
					new OptionVO("v", false, ""), 
					new OptionVO("z", false, "")];
					

    activity_arr = [];
    activity_arr[0] = new QuestionVO("1", "WFQ_0020_all", "WFQ_0053__all", "W_all", optionArr[0]);
    activity_arr[1] = new QuestionVO("2", "wordfamilies_0035_an", "WFQ_0051__an", "W_an", optionArr[1]);
    activity_arr[2] = new QuestionVO("3", "WFQ_0019_ap", "WFQ_0050__ap", "W_ap", optionArr[2]);
    
    activity_arr[3] = new QuestionVO("4", "WFQ_0018_at", "WFQ_0049__at", "W_at", optionArr[3]);
    activity_arr[4] = new QuestionVO("5", "WFQ_0017_eat", "WFQ_0048__eat", "W_eat", optionArr[4]);
    activity_arr[5] = new QuestionVO("6", "WFQ_0016_ell", "WFQ_0047__ell", "W_ell", optionArr[5]);
   
    activity_arr[6] = new QuestionVO("7", "WFQ_0015_ick", "WFQ_0046__ick", "W_ick", optionArr[6]);
    activity_arr[7] = new QuestionVO("8", "WFQ_0014_ide", "WFQ_0045__ide", "W_ide", optionArr[7]);
    activity_arr[8] = new QuestionVO("9", "WFQ_0013_ill", "WFQ_0044__ill", "W_ill", optionArr[8]);

	activity_arr[9] = new QuestionVO("10", "WFQ_0012_in", "WFQ_0043__in", "W_in", optionArr[9]);
    activity_arr[10] = new QuestionVO("11", "WFQ_0011_ink", "WFQ_0042__ink", "W_ink", optionArr[10]);
    activity_arr[11] = new QuestionVO("12", "WFQ_0010_ip", "WFQ_0041__ip", "W_ip", optionArr[11]);
	
	activity_arr[12] = new QuestionVO("13", "WFQ_0009_it", "WFQ_0040__it", "W_it", optionArr[12]);
    activity_arr[13] = new QuestionVO("14", "WFQ_0008_ock", "WFQ_0039__ock", "W_ock", optionArr[13]);
    activity_arr[14] = new QuestionVO("15", "WFQ_0007_op", "WFQ_0038__op", "W_op", optionArr[14]);
	
	activity_arr[15] = new QuestionVO("16", "WFQ_0006_ot", "WFQ_0037__ot", "W_ot", optionArr[15]);
    activity_arr[16] = new QuestionVO("17", "WFQ_0005_uck", "WFQ_0036__uck", "W_uck", optionArr[16]);
    activity_arr[17] = new QuestionVO("18", "WFQ_0004_ug", "WFQ_0052__ug", "W_ug", optionArr[17]);

	
    //data_str = document.getElementById('game_history').value; // local

    //mock data_str
    //data_str = "1:C,T,I;2:T;3:C;4:I,C;5:I,C;6:I;score:15";

    ps_container = new createjs.Container();
    stage.addChild(ps_container);

}

//----------- ACTIVITY FUNCTIONS ------------------------------

var AlphabetVO = [];
AlphabetVO["a"] = "WFQ_0003_a";
AlphabetVO["b"] = "WFQ_0028_b";
AlphabetVO["c"] = "WFQ_0002_c";
AlphabetVO["d"] = "WFQ_0001_d";
AlphabetVO["e"] = "WFQ_0020_e";
AlphabetVO["f"] = "WFQ_0032_f";
AlphabetVO["g"] = "WFQ_0019_g";
AlphabetVO["h"] = "WFQ_0018_h";
AlphabetVO["i"] = "WFQ_0000_i";
AlphabetVO["j"] = "WFQ_0017_j";
AlphabetVO["k"] = "WFQ_0016_k";
AlphabetVO["l"] = "WFQ_0015_l";
AlphabetVO["m"] = "WFQ_0001_m";
AlphabetVO["n"] = "WFQ_0023_n";
AlphabetVO["o"] = "WFQ_0001_o";
AlphabetVO["p"] = "WFQ_0013_p";
AlphabetVO["q"] = "WFQ_0012_q";
AlphabetVO["r"] = "WFQ_0021_r";
AlphabetVO["s"] = "WFQ_0010_s";
AlphabetVO["t"] = "WFQ_0009_t";
AlphabetVO["u"] = "WFQ_0000_u";
AlphabetVO["v"] = "WFQ_0002_v";
AlphabetVO["w"] = "WFQ_0007_w";
AlphabetVO["x"] = "WFQ_0006_x";
AlphabetVO["y"] = "WFQ_0003_y";
AlphabetVO["z"] = "WFQ_0026_z";


function QuestionVO(id, word, word_blank, mp3, options){
    this.id = id;
    this.word = word;
    this.word_blank = word_blank;
	this.mp3 = mp3;
    this.options = options;
    this.answered = "na";
}

function OptionVO(alphabet_link, status, word_mp3, x, y){
    this.aLink = AlphabetVO[alphabet_link];
    this.isCorrect = status;
	this.word_mp3 = word_mp3;
	this.dx = x || 0;
	this.dy = y || 0; 
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
            
            if(game_history_obj[question_arr[i].id] == "C") { //|| (game_history_obj[question_arr[i].id] == "I")
                //console.log( question_arr[i].id + " match found --> "+game_history_obj[question_arr[i].id]); //question_arr.locatePropValIndex("id", i, false)
            }else{
                //console.log (question_arr[i].id+" added "+question_arr[i].answered);
                tmpArr.push(question_arr[i]);
            }
            
        }
		
		tmp_arr = tmpArr;//.copyArray().shuffleArray();

        question_arr = [];
        question_arr = tmp_arr;
        
        score = parseInt(game_history_obj["score"]);

		qRepeated = true; // as already attempted....
        //console.log(score+ ": score :: returning user-->"+data_str);
    }else{
        //console.log("game_history else --> first time user");

		//tmp_arr = activity_arr.copyArray().shuffleArray();
        //question_arr = activity_arr.copyArray().shuffleArray(); 
        //question_arr = breakInTriplet(tmp_arr);
		question_arr = activity_arr;
        score = 0;
    }  
    //console.log(score+ " score :: -> "+data_str);
	score = score;
	questionsRemaining = question_arr.length;
	
	if(question_arr.length > 0) startActivity();
    
}

function startActivity(){
    it = Iterator(question_arr);
    it.reset();
    it.next();
    loadActivityScreen(it);
}

function getOptions(obj){

	tmp_arr = obj.options.copyArray().shuffleArray();
	
	for(var i=0; i<tmp_arr.length; i++){
		
		tmp_bg = new lib.WFQ_drop();
		centerRegPoint(tmp_bg);
		
		tmp_img = new lib[tmp_arr[i].aLink]();
		centerRegPoint(tmp_img);
		tmp_img.y += 15; 
		
		tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
		tmp_mc.addChild(tmp_bg, tmp_img);
		tmp_mc.cursor = "pointer";
	
		tmp_mc.x = tmp_mc.initX = option_layout[i].x;
		tmp_mc.y = tmp_mc.initY = option_layout[i].y;

        //tmp_mc.name = tmp_mc.id = optionArr[i].optionID;
		tmp_mc.isCorrect = tmp_arr[i].isCorrect;
		tmp_mc.word_mp3 = tmp_arr[i].word_mp3;
		tmp_mc.dx = tmp_arr[i].dx;
		tmp_mc.dy = tmp_arr[i].dy;
        tmp_mc.clicked = false;
		tmp_mc.disabled = false;
        tmp_mc.cursor = "pointer";
        tmp_mc.mouseChildren = false;
		tmp_mc.mouseEnabled = true;
		
		ps_container.addChild(tmp_mc);
		
		var hit1 = new createjs.Shape();
		hit1.graphics.beginFill("#000").dc(0, 0, 42);
		tmp_mc.hitArea = hit1;
		
		tmp_mc.on("mouseover", function(evt) {
            //console.log("mouseover");
			var o = evt.target;
            o.alpha = 0.5;
        });
        tmp_mc.on("mouseout", function(evt) {
            //evt.target.shadow = null;
			evt.target.alpha = 1;
        });            
        tmp_mc.on("mousedown", function(evt) {
            //console.log(ps_container.getNumChildren() + " mousedown "+ps_container.getChildIndex(imgCopy));
			
			playSound("SFX_drop_rain_drop_01");
			
			evt.target.clicked = true;
            move = true;
			//evt.target.shadow = null;
			
			// bump the target in front of its siblings:
			ps_container.addChild(evt.target);
			ps_container.setChildIndex(evt.target, ps_container.getNumChildren()-1);
        });

        tmp_mc.on("pressmove", function(evt) {
            //console.log("pressmove ");
            if(move){
                evt.target.x = evt.stageX;
                evt.target.y = evt.stageY;
            }
        });
        
        tmp_mc.on("pressup", function(evt) {
            
            move = false;
			disableClicks(true, true);

			var o = evt.target;
            var intersection1, intersection2, intersection3 
			
			intersection1 = collisionMethod(wordpart1, o, 1);
			intersection2 = collisionMethod(wordpart2, o, 1);
			intersection3 = collisionMethod(wordpart3, o, 1);
			
			//console.log(intersection1+" intersection1");
			
            if (intersection1 || intersection2 || intersection3){
				
                if ( intersection1 ) {
                    if(hotspot1){
                        if(o.isCorrect){
                            onDragComplete("C", wordpart1, o);
                        }else{
                            onDragComplete("I", wordpart1, o);
                        }
                        hotspot1 = false;    
                    }else{
                        tweenBack(o);
                    }
                }

                if ( intersection2 ) {
                    if(hotspot2){
                        if(o.isCorrect){
                            onDragComplete("C", wordpart2, o);
                        }else{
                            onDragComplete("I", wordpart2, o);
                        }
                        hotspot2 = false;    
                    }else{
                        tweenBack(o);
                    }
                }
				
				if ( intersection3 ) {                   
                    if(hotspot3){
                        if(o.isCorrect){
                            onDragComplete("C", wordpart3, o);
                        }else{
                            onDragComplete("I", wordpart3, o);
                        }
                        hotspot3 = false;    
                    }else{
                        tweenBack(o);
                    }
                }
			}else{
                tweenBack(o);
            }
        });
		//keep reference of the draggables
		interactiveRef.push(tmp_mc);
	}
}

function tweenBack(mc){
    createjs.Tween.get(mc).to({x:mc.initX, y:mc.initY}, 500, createjs.Ease.cubicOut).call(function(){
        disableClicks(false, true);
    });
}

function updateUserResponse(state){
	switch(state){
        case "C":
            if(user_response == "T") user_response = "C";
        break;
        
        case "I":
            if((user_response == "T") || (user_response == "C")) user_response = "I";
        break;

        case "T":
            user_response = "T";
        break;

        default :
            
        break;    
    } 
}

function onDragComplete(state, wp, target){
	
    //user_response = state;
	updateUserResponse(state);
	console.log("myResponse "+user_response);
	dragAttempts++;
	
    //.. if correct
    if(state == "C"){
        
		
		//tmp_sfx = "SFX_falling_letter_0"+getRandomNumber(1, 3);
		tmp_sfx = target.word_mp3; //sample word
		
		// disable draggable
		target.mouseEnabled = false;
		
		//place the draggables into correct position 
		createjs.Tween.get(target).to({x:(wp.x+wp.getBounds().width/5+target.dx), y:(wp.y+wp.getBounds().height/3+target.dy)}, 500, createjs.Ease.cubicIn);
	
		threeInARow++;

    }else{
        tmp_sfx = "SFX_incorrect_0"+getRandomNumber(1, 3);
		applyClipColor(wp, [new createjs.ColorFilter(1, 0, 0, 0.5, 100, 0, 0, 1)]);
		
		tweenBack(target);
    }

    tmpSnd = new createjs.Sound.createInstance(tmp_sfx);
    tmpSnd.addEventListener("complete", function(){
		
		if(state == "C"){
			dropWord(wp, target);
		}
		if(totalAvailableDrags == dragAttempts){
			delayCall(gotoNextActivityScreen, 500);
		}
    });    
    delayCall(function (){
        tmpSnd.play();
    }, 250);
    
	
	

	// stop TIMER if all done
	if(totalAvailableDrags == dragAttempts){
		questionsRemaining--;
		if(threeInARow == 3) score += 5;
		//updateScore();
		
        removeCountDownTimer();
		canvasStageRef.onQuestionEnd(it.arr()[it.current()].id, (countDownValue - seconds), user_response, 0);
    }
	
}

function dropWord(wordpart, drop){

	tmpSnd = new createjs.Sound.createInstance("SFX_falling_word_01");
    tmpSnd.addEventListener("complete", function(){
		if(totalAvailableDrags == dragAttempts){
			delayCall(gotoNextActivityScreen, 500);
		}else{
			disableClicks(false, true);
		}
    });
    delayCall(function (){
		
		tmpSnd.play();
		
		createjs.Tween.get(wordpart).to({y:800}, 300);
		createjs.Tween.get(drop).to({y:800}, 300);	

	}, 100);
}

function setCloud(obj){

	tmp_bg = new lib.WFQ_cloud();
	//tmp_img.x = 250;
	//tmp_img.y = 100;
	centerRegPoint(tmp_bg);
    //
	
    //var layout = [{x:235, y:219}, {x:0, y:219}, {x:(235+220), y:219}];

    tmp_img = new lib[obj.word]();
    centerRegPoint(tmp_img);


    tmp_bg.x = tmp_img.x = 500;//layout[placementNum].x;
    tmp_bg.y = tmp_img.y = 235;//layout[placementNum].y;
	tmp_img.x -= 25;
	tmp_img.y -= 25;

    tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
    tmp_mc.addChild(tmp_bg, tmp_img);
	tmp_mc.cursor = "pointer";
	tmp_mc.on("click", function(event){
		tmpSnd = new createjs.Sound.createInstance(obj.mp3);
		tmpSnd.addEventListener("complete", function(){
			
		});
		delayCall(function (){tmpSnd.play();}, 100);
	});
	
    return tmp_mc
}

function setBlankPart(obj){
	
	for (var i = 0; i < 3; i++) {
	
		//.. add wordpart
		tmp_var = getMCWrap(new lib[obj.word_blank]());
		//centerRegPoint(tmp_var);
		tmp_var.x = word_layout[i].x;
		tmp_var.y = word_layout[i].y;
		tmp_var.id = "wordpart"+(i+1);
		ps_container.addChild(tmp_var);
		this["wordpart"+(i+1)] = tmp_var;
		
	}
}

function loadActivityScreen(it){

    tweens = [];
	interactiveRef = [];
	hotspot1 = hotspot2 = hotspot3 = true;
    user_response = "T";
	dragAttempts = 0;
	totalAvailableDrags = 3;
	threeInARow = 0;
	move = false;

    clearActivityContainer();
	
	//.. current object
    tmp_obj = it.currentObj();
	
	//.. set the cloud
    ps_container.addChild(setCloud(tmp_obj));
	
	//.. set the blank word part
	setBlankPart(tmp_obj);
	
	//.. set the options
	getOptions(tmp_obj);
	

    addCountDownTimer(countDownValue, timeUpNextActivityScreen);
    //disableClicks(true, true);
	
	updateScore();
	
}

function gotoNextActivityScreen(){
    if(it.hasNext()) { 
        it.next();
        loadActivityScreen(it);
    }else{
        if(qRepeated) {
            canvasStageRef.onEnd();
            console.log("end");
        }else{
            qRepeated = true;
            console.log("repeat");
            repeatUnattempted();
        }
    }
}

function timeUpNextActivityScreen(){
	questionsRemaining--;
	
	user_response = "T";
	canvasStageRef.onQuestionEnd(it.arr()[it.current()].id, (countDownValue - seconds), user_response, 0);
	
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

    unAttempted_arr = [];
	//console.log(" >> ", question_arr.length);

    for (var i = 0; i < question_arr.length; i++) {
        if((question_arr[i].answered == "T") || (question_arr[i].answered == "na")){
          unAttempted_arr.push(question_arr[i]);
        } 
		//console.log(i, " >> ", question_arr[i].answered);
    }
	console.log(unAttempted_arr.length);
    question_arr = [];
    question_arr = unAttempted_arr;

    if(question_arr.length > 0){
        questionsRemaining = question_arr.length;
		startActivity();
		
    }else{
        canvasStageRef.onEnd();
		//console.log("repeat");
    }
}

function isCompleted(){
    for (var i = 0; i < question_arr.length; i++) {
        if((question_arr[i].answered == "na") || (question_arr[i].answered == "T")){
            return "n"
        }
    }
    return "y"
}

function updateScore(){

    stage.removeChild(scoreTxt, qLeftTxt);

    scoreTxt = new createjs.Text();
    scoreTxt.x = 675;
    scoreTxt.y = 24;
    scoreTxt.font = ("bold 20px Verdana");
    scoreTxt.color = ("#000000");
    scoreTxt.text = score;
    scoreTxt.textAlign = "center";
    stage.addChild(scoreTxt);

    qLeftTxt = new createjs.Text();
    qLeftTxt.x = 745;
    qLeftTxt.y = 24;
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
    //alert("onStart");
    
    param.stop();
    
    tmpSnd = new createjs.Sound.createInstance("Introduction");
    tmpSnd.addEventListener("complete", function(){
		param.play();
    });    
    delayCall(function (){tmpSnd.play();}, 500);
    
    //exportRoot.gotoAndPlay("part2"); // for testing
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
    //});
    
    configClickListener(exportRoot.skip, false);
    exportRoot.skip.gotoAndStop("disabled");
    configClickListener(exportRoot.replay, false);
    exportRoot.replay.gotoAndStop(3);
    
}
var stopDoubleSound;
canvasStageRef.onEnd = function(){
if(!stopDoubleSound){
	stage.removeChild(scoreTxt, qLeftTxt);
	clearActivityContainer();

    //alert("activity ends "+ report());
    tmpSnd = new createjs.Sound.createInstance("Conclusion");
    tmpSnd.addEventListener("complete", function(){
        window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
    });    
    delayCall(function (){
		tmpSnd.play();
		//param.play();
	}, 500);
	stopDoubleSound = true;
}
}

canvasStageRef.onActivityClose = function(param){
    window.location = "/emm/profile/?play_token="+document.getElementById('play_token').value +"&a=[236]&act_completed="+act_completed+"&act_time="+act_time;
}

canvasStageRef.onQuestionEnd = function (ID,TIME,RESULT,PARROTS) {
    //change-local
	question_arr[it.current()].answered = RESULT; 
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

function getMCWrap(bmp){
	tmp_mc = new createjs.MovieClip(0, 0, false, {start:0}); // wrapping in MovieClip container
	tmp_mc.addChild(bmp);
	return tmp_mc
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
	clip.cache(0, 0, clip.getBounds().width, clip.getBounds().height);
    //clip.cache(-clip.getBounds().width/2,-clip.getBounds().height/2, clip.getBounds().width, clip.getBounds().height);
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

