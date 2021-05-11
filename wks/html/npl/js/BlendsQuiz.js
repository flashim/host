(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.BlendsQuiz = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{activity:526,conclusion:527});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
	}
	this.frame_526 = function() {
		canvasStageRef.onActivity(this);
	}
	this.frame_539 = function() {
		this.stop();
		canvasStageRef.onCloseActivity(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(526).call(this.frame_526).wait(13).call(this.frame_539));

	// cursor
	this.instance = new lib.cursor_mc();
	this.instance.setTransform(23.5,678.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({x:34.5,y:676.2},0).to({x:398,y:602.5},33).wait(25).to({x:594.9,y:291},36).to({_off:true},237).wait(14));

	// bl
	this.instance_1 = new lib.bl();
	this.instance_1.setTransform(382.5,585);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(253).to({x:578.5,y:269},36).wait(237).to({x:1075.5,y:199},0).wait(14));

	// assets
	this.instance_2 = new lib.numbertree_0058_tw();
	this.instance_2.setTransform(782,531.5);

	this.instance_3 = new lib.numbertree_0056_dr();
	this.instance_3.setTransform(548,527.5);

	this.instance_4 = new lib.numbertree_0057_st();
	this.instance_4.setTransform(89,532);

	this.instance_5 = new lib.numbertree_0065_Shape1();
	this.instance_5.setTransform(753.5,489);

	this.instance_6 = new lib.numbertree_0065_Shape1();
	this.instance_6.setTransform(517.5,489);

	this.instance_7 = new lib.numbertree_0065_Shape1();
	this.instance_7.setTransform(281.5,489);

	this.instance_8 = new lib.numbertree_0066_Shape1copy4();
	this.instance_8.setTransform(468,165);

	this.instance_9 = new lib.numbertree_0065_Shape1();
	this.instance_9.setTransform(45.5,489);

	this.instance_10 = new lib.numbertree_0046_ack();
	this.instance_10.setTransform(694,210.5);

	this.instance_11 = new lib.numbertree_0045_ree();
	this.instance_11.setTransform(202,-158.9);

	this.instance_12 = new lib.numbertree_0044_read();
	this.instance_12.setTransform(202,-158.9);

	this.instance_13 = new lib.numbertree_0043_ump();
	this.instance_13.setTransform(202,-158.9);

	this.instance_14 = new lib.numbertree_0042_eak();
	this.instance_14.setTransform(202,-158.9);

	this.instance_15 = new lib.numbertree_0041_ess();
	this.instance_15.setTransform(202,-158.9);

	this.instance_16 = new lib.numbertree_0040_apes();
	this.instance_16.setTransform(202,-158.9);

	this.instance_17 = new lib.numbertree_0039_amp();
	this.instance_17.setTransform(202,-158.9);

	this.instance_18 = new lib.numbertree_0038_eep();
	this.instance_18.setTransform(202,-158.9);

	this.instance_19 = new lib.numbertree_0037_eese();
	this.instance_19.setTransform(202,-158.9);

	this.instance_20 = new lib.numbertree_0036_ick();
	this.instance_20.setTransform(202,-158.9);

	this.instance_21 = new lib.numbertree_0035_elve();
	this.instance_21.setTransform(202,-158.9);

	this.instance_22 = new lib.numbertree_0034_ig();
	this.instance_22.setTransform(202,-158.9);

	this.instance_23 = new lib.numbertree_0033_ink();
	this.instance_23.setTransform(202,-158.9);

	this.instance_24 = new lib.numbertree_0031_ove();
	this.instance_24.setTransform(202,-158.9);

	this.instance_25 = new lib.numbertree_0030_own();
	this.instance_25.setTransform(202,-158.9);

	this.instance_26 = new lib.numbertree_0029_am();
	this.instance_26.setTransform(202,-158.9);

	this.instance_27 = new lib.numbertree_0028_iend();
	this.instance_27.setTransform(202,-158.9);

	this.instance_28 = new lib.numbertree_0027_ame();
	this.instance_28.setTransform(202,-158.9);

	this.instance_29 = new lib.numbertree_0026_aft();
	this.instance_29.setTransform(202,-158.9);

	this.instance_30 = new lib.numbertree_0025_awl();
	this.instance_30.setTransform(202,-158.9);

	this.instance_31 = new lib.numbertree_0024_ade();
	this.instance_31.setTransform(202,-158.9);

	this.instance_32 = new lib.numbertree_0004_ow();
	this.instance_32.setTransform(202,-158.9);

	this.instance_33 = new lib.numbertree_0003_ey();
	this.instance_33.setTransform(202,-158.9);

	this.instance_34 = new lib.numbertree_0055_cr();
	this.instance_34.setTransform(27,-158.9);

	this.instance_35 = new lib.numbertree_0054_ch();
	this.instance_35.setTransform(17,-168.4);

	this.instance_36 = new lib.numbertree_0053_sw();
	this.instance_36.setTransform(11,-135.9);

	this.instance_37 = new lib.numbertree_0052_gr();
	this.instance_37.setTransform(-39,-161.4);

	this.instance_38 = new lib.numbertree_0051_th();
	this.instance_38.setTransform(-21,-161.4);

	this.instance_39 = new lib.numbertree_0050_fr();
	this.instance_39.setTransform(-21,-161.4);

	this.instance_40 = new lib.numbertree_0049_gl();
	this.instance_40.setTransform(-21,-161.4);

	this.instance_41 = new lib.numbertree_0048_dr();
	this.instance_41.setTransform(-21,-161.4);

	this.instance_42 = new lib.numbertree_0047_cl();
	this.instance_42.setTransform(-21,-161.4);

	this.instance_43 = new lib.numbertree_0023_butterflyblack();
	this.instance_43.setTransform(25,77);

	this.instance_44 = new lib.numbertree_0022_bigstockSilverPictureFrameHungAgai3847321();
	this.instance_44.setTransform(-473.9,-50.9);

	this.instance_45 = new lib.numbertree_0021_bigstockSticksAndTwigsStackBackgro31375043();
	this.instance_45.setTransform(-473.9,-50.9);

	this.instance_46 = new lib.numbertree_0020_bigstockSwampnearNewOrleansLouisi12799955();
	this.instance_46.setTransform(-473.9,-50.9);

	this.instance_47 = new lib.numbertree_0019_bigstockTheTractormodernfarmequi19279868();
	this.instance_47.setTransform(-473.9,-50.9);

	this.instance_48 = new lib.numbertree_0018_bigstockThreeStudentsStandingOutsid3917393();
	this.instance_48.setTransform(-473.9,-50.9);

	this.instance_49 = new lib.numbertree_0017_bigstockToolsForSewingThreadScis57058871();
	this.instance_49.setTransform(-473.9,-50.9);

	this.instance_50 = new lib.numbertree_0016_bigstockTwelve65864248();
	this.instance_50.setTransform(-473.9,-50.9);

	this.instance_51 = new lib.numbertree_0015_bigstockvarioustypesofcheeseonwoo64476352();
	this.instance_51.setTransform(-473.9,-50.9);

	this.instance_52 = new lib.numbertree_0014_grapes();
	this.instance_52.setTransform(-473.9,-50.9);

	this.instance_53 = new lib.numbertree_0012_bigstockbigandlittlefunnyclowns51708223();
	this.instance_53.setTransform(-473.9,-50.9);

	this.instance_54 = new lib.numbertree_0011_bigstockChildpaintingateaselinsch49701068();
	this.instance_54.setTransform(-473.9,-50.9);

	this.instance_55 = new lib.numbertree_0010_bigstockCircularsaw51243046();
	this.instance_55.setTransform(-473.9,-50.9);

	this.instance_56 = new lib.numbertree_0009_bigstockcleaningandhomeconceptcl61234394();
	this.instance_56.setTransform(-473.9,-50.9);

	this.instance_57 = new lib.numbertree_0008_bigstockCloseupOfASawedTree62047919();
	this.instance_57.setTransform(-473.9,-50.9);

	this.instance_58 = new lib.numbertree_0007_bigstockCupcakes54073897();
	this.instance_58.setTransform(-473.9,-50.9);

	this.instance_59 = new lib.numbertree_0006_bigstockCutelittlechickenovergreen63427996();
	this.instance_59.setTransform(-473.9,-50.9);

	this.instance_60 = new lib.numbertree_0004_bigstockFullbodyportraitofadorable33807365();
	this.instance_60.setTransform(-473.9,-50.9);

	this.instance_61 = new lib.numbertree_0003_bigstockGiantclam28588928();
	this.instance_61.setTransform(-473.9,-50.9);

	this.instance_62 = new lib.numbertree_0002_kittengray();
	this.instance_62.setTransform(-473.9,-50.9);

	this.instance_63 = new lib.numbertree_0002_bigstockgrill23490305();
	this.instance_63.setTransform(-473.9,-50.9);

	this.instance_64 = new lib.numbertree_0001_waterdrinkbottleboy();
	this.instance_64.setTransform(-473.9,-50.9);

	this.instance_65 = new lib.numbertree_0001_bigstocklittleboycrawlingonagreen66133777();
	this.instance_65.setTransform(-473.9,-50.9);

	this.instance_66 = new lib.numbertree_0000_glowlightbulb();
	this.instance_66.setTransform(-473.9,-50.9);

	this.instance_67 = new lib.numbertree_0000_bigstockMensHandInAGloveGolfSho54699230();
	this.instance_67.setTransform(-473.9,-50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44,p:{x:-473.9,y:-50.9}},{t:this.instance_43,p:{x:25,y:77}},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10,p:{x:694,y:210.5}},{t:this.instance_9},{t:this.instance_8,p:{x:468,y:165}},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:753.5,y:489}},{t:this.instance_4,p:{x:89,y:532}},{t:this.instance_3,p:{x:548,y:527.5}},{t:this.instance_2,p:{x:782,y:531.5}}]}).to({state:[{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44,p:{x:-559.9,y:-30.4}},{t:this.instance_43,p:{x:-615.9,y:41.5}},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10,p:{x:1011.9,y:278.5}},{t:this.instance_5,p:{x:805.9,y:-209.9}},{t:this.instance_8,p:{x:539,y:-243.9}},{t:this.instance_4,p:{x:1011,y:514.5}},{t:this.instance_3,p:{x:1014,y:512.5}},{t:this.instance_2,p:{x:1021,y:514.5}}]},526).wait(14));

	// top_panel
	this.instance_68 = new lib.topPanel();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_68}]}).wait(540));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).wait(540));

	// bottom_panel
	this.instance_69 = new lib.Bottom_Activity_Bar();
	this.instance_69.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_69}]}).wait(540));

	// bg
	this.instance_70 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_70}]}).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.9,-168.4,1474,907.5);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,726);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,85);


(lib.Bottom_Activity_Bar = function() {
	this.initialize(img.Bottom_Activity_Bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,34);


(lib.Bottom_Activity_Button_Exit = function() {
	this.initialize(img.Bottom_Activity_Button_Exit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Bottom_Activity_Button_Home = function() {
	this.initialize(img.Bottom_Activity_Button_Home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Bottom_Activity_Button_Replay = function() {
	this.initialize(img.Bottom_Activity_Button_Replay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.Bottom_Activity_Button_Skip = function() {
	this.initialize(img.Bottom_Activity_Button_Skip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.numbertree_0000_bigstockMensHandInAGloveGolfSho54699230 = function() {
	this.initialize(img.numbertree_0000_bigstockMensHandInAGloveGolfSho54699230);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0000_glowlightbulb = function() {
	this.initialize(img.numbertree_0000_glowlightbulb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0001_bigstocklittleboycrawlingonagreen66133777 = function() {
	this.initialize(img.numbertree_0001_bigstocklittleboycrawlingonagreen66133777);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0001_waterdrinkbottleboy = function() {
	this.initialize(img.numbertree_0001_waterdrinkbottleboy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0002_bigstockgrill23490305 = function() {
	this.initialize(img.numbertree_0002_bigstockgrill23490305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0002_kittengray = function() {
	this.initialize(img.numbertree_0002_kittengray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0003_bigstockGiantclam28588928 = function() {
	this.initialize(img.numbertree_0003_bigstockGiantclam28588928);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0003_ey = function() {
	this.initialize(img.numbertree_0003_ey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,106);


(lib.numbertree_0004_bigstockFullbodyportraitofadorable33807365 = function() {
	this.initialize(img.numbertree_0004_bigstockFullbodyportraitofadorable33807365);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0004_ow = function() {
	this.initialize(img.numbertree_0004_ow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,83);


(lib.numbertree_0006_bigstockCutelittlechickenovergreen63427996 = function() {
	this.initialize(img.numbertree_0006_bigstockCutelittlechickenovergreen63427996);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0007_bigstockCupcakes54073897 = function() {
	this.initialize(img.numbertree_0007_bigstockCupcakes54073897);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0008_bigstockCloseupOfASawedTree62047919 = function() {
	this.initialize(img.numbertree_0008_bigstockCloseupOfASawedTree62047919);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0009_bigstockcleaningandhomeconceptcl61234394 = function() {
	this.initialize(img.numbertree_0009_bigstockcleaningandhomeconceptcl61234394);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0010_bigstockCircularsaw51243046 = function() {
	this.initialize(img.numbertree_0010_bigstockCircularsaw51243046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0011_bigstockChildpaintingateaselinsch49701068 = function() {
	this.initialize(img.numbertree_0011_bigstockChildpaintingateaselinsch49701068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0012_bigstockbigandlittlefunnyclowns51708223 = function() {
	this.initialize(img.numbertree_0012_bigstockbigandlittlefunnyclowns51708223);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0014_grapes = function() {
	this.initialize(img.numbertree_0014_grapes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0015_bigstockvarioustypesofcheeseonwoo64476352 = function() {
	this.initialize(img.numbertree_0015_bigstockvarioustypesofcheeseonwoo64476352);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0016_bigstockTwelve65864248 = function() {
	this.initialize(img.numbertree_0016_bigstockTwelve65864248);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0017_bigstockToolsForSewingThreadScis57058871 = function() {
	this.initialize(img.numbertree_0017_bigstockToolsForSewingThreadScis57058871);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0018_bigstockThreeStudentsStandingOutsid3917393 = function() {
	this.initialize(img.numbertree_0018_bigstockThreeStudentsStandingOutsid3917393);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0019_bigstockTheTractormodernfarmequi19279868 = function() {
	this.initialize(img.numbertree_0019_bigstockTheTractormodernfarmequi19279868);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0020_bigstockSwampnearNewOrleansLouisi12799955 = function() {
	this.initialize(img.numbertree_0020_bigstockSwampnearNewOrleansLouisi12799955);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0021_bigstockSticksAndTwigsStackBackgro31375043 = function() {
	this.initialize(img.numbertree_0021_bigstockSticksAndTwigsStackBackgro31375043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0022_bigstockSilverPictureFrameHungAgai3847321 = function() {
	this.initialize(img.numbertree_0022_bigstockSilverPictureFrameHungAgai3847321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0023_butterflyblack = function() {
	this.initialize(img.numbertree_0023_butterflyblack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,396);


(lib.numbertree_0024_ade = function() {
	this.initialize(img.numbertree_0024_ade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,107);


(lib.numbertree_0025_awl = function() {
	this.initialize(img.numbertree_0025_awl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,107);


(lib.numbertree_0026_aft = function() {
	this.initialize(img.numbertree_0026_aft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,108);


(lib.numbertree_0027_ame = function() {
	this.initialize(img.numbertree_0027_ame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,83);


(lib.numbertree_0028_iend = function() {
	this.initialize(img.numbertree_0028_iend);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,108);


(lib.numbertree_0029_am = function() {
	this.initialize(img.numbertree_0029_am);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,83);


(lib.numbertree_0030_own = function() {
	this.initialize(img.numbertree_0030_own);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,83);


(lib.numbertree_0031_ove = function() {
	this.initialize(img.numbertree_0031_ove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,83);


(lib.numbertree_0033_ink = function() {
	this.initialize(img.numbertree_0033_ink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,106);


(lib.numbertree_0034_ig = function() {
	this.initialize(img.numbertree_0034_ig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,132);


(lib.numbertree_0035_elve = function() {
	this.initialize(img.numbertree_0035_elve);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,107);


(lib.numbertree_0036_ick = function() {
	this.initialize(img.numbertree_0036_ick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,108);


(lib.numbertree_0037_eese = function() {
	this.initialize(img.numbertree_0037_eese);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,83);


(lib.numbertree_0038_eep = function() {
	this.initialize(img.numbertree_0038_eep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,106);


(lib.numbertree_0039_amp = function() {
	this.initialize(img.numbertree_0039_amp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,106);


(lib.numbertree_0040_apes = function() {
	this.initialize(img.numbertree_0040_apes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,106);


(lib.numbertree_0041_ess = function() {
	this.initialize(img.numbertree_0041_ess);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,83);


(lib.numbertree_0042_eak = function() {
	this.initialize(img.numbertree_0042_eak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,107);


(lib.numbertree_0043_ump = function() {
	this.initialize(img.numbertree_0043_ump);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,106);


(lib.numbertree_0044_read = function() {
	this.initialize(img.numbertree_0044_read);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,107);


(lib.numbertree_0045_ree = function() {
	this.initialize(img.numbertree_0045_ree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,83);


(lib.numbertree_0046_ack = function() {
	this.initialize(img.numbertree_0046_ack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,107);


(lib.numbertree_0047_cl = function() {
	this.initialize(img.numbertree_0047_cl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,107);


(lib.numbertree_0048_dr = function() {
	this.initialize(img.numbertree_0048_dr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,107);


(lib.numbertree_0049_gl = function() {
	this.initialize(img.numbertree_0049_gl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,131);


(lib.numbertree_0050_fr = function() {
	this.initialize(img.numbertree_0050_fr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,106);


(lib.numbertree_0051_th = function() {
	this.initialize(img.numbertree_0051_th);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,105);


(lib.numbertree_0052_gr = function() {
	this.initialize(img.numbertree_0052_gr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,107);


(lib.numbertree_0053_sw = function() {
	this.initialize(img.numbertree_0053_sw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,83);


(lib.numbertree_0054_ch = function() {
	this.initialize(img.numbertree_0054_ch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,107);


(lib.numbertree_0055_cr = function() {
	this.initialize(img.numbertree_0055_cr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,83);


(lib.numbertree_0056_dr = function() {
	this.initialize(img.numbertree_0056_dr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,107);


(lib.numbertree_0057_st = function() {
	this.initialize(img.numbertree_0057_st);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,105);


(lib.numbertree_0058_tw = function() {
	this.initialize(img.numbertree_0058_tw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,103);


(lib.numbertree_0059_bl = function() {
	this.initialize(img.numbertree_0059_bl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,107);


(lib.numbertree_0065_Shape1 = function() {
	this.initialize(img.numbertree_0065_Shape1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,197);


(lib.numbertree_0066_Shape1copy4 = function() {
	this.initialize(img.numbertree_0066_Shape1copy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,220);


(lib.topPanel = function() {
	this.initialize(img.topPanel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cursor();
	this.instance.setTransform(-15.9,-15.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-15.9,32,32);


(lib.skip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,clicked:2,disabled:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,0,0.498)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FFFF00").setStrokeStyle(2,1,1).moveTo(9.4,9.4).curveTo(5.5,13.3,0,13.3).curveTo(-5.5,13.3,-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).closePath();
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(102,102,102,0.647)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Skip();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"clicked":2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,0,0.498)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FFFF00").setStrokeStyle(2,1,1).moveTo(9.4,9.4).curveTo(5.5,13.3,0,13.3).curveTo(-5.5,13.3,-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).closePath();
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(102,102,102,0.647)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Replay();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"clicked":2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,0,0.498)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FFFF00").setStrokeStyle(2,1,1).moveTo(9.4,9.4).curveTo(5.5,13.3,0,13.3).curveTo(-5.5,13.3,-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).closePath();
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(102,102,102,0.647)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Home();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"clicked":2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,0,0.498)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FFFF00").setStrokeStyle(2,1,1).moveTo(9.4,9.4).curveTo(5.5,13.3,0,13.3).curveTo(-5.5,13.3,-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).closePath();
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(102,102,102,0.647)").beginStroke().moveTo(-9.4,9.4).curveTo(-13.3,5.5,-13.3,0).curveTo(-13.3,-5.5,-9.4,-9.4).curveTo(-5.5,-13.3,-0,-13.3).curveTo(5.5,-13.3,9.4,-9.4).curveTo(13.3,-5.5,13.3,0).curveTo(13.3,5.5,9.4,9.4).curveTo(5.5,13.3,-0,13.3).curveTo(-5.5,13.3,-9.4,9.4).closePath();
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Exit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.bl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.numbertree_0059_bl();
	this.instance.setTransform(-54.4,-53.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.4,-53.4,109,107);


(lib.cursor_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-15.9,32,32);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;