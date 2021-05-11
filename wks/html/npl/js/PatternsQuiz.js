(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PatternsQuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{activity:349,conclusion:350});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
	}
	this.frame_349 = function() {
		canvasStageRef.onActivity(this);
	}
	this.frame_610 = function() {
		this.stop();
		canvasStageRef.onActivityClose(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(349).call(this.frame_349).wait(261).call(this.frame_610));

	// assets
	this.instance = new lib.patternsquiz_0028_2();
	this.instance.setTransform(-499.5,12.2);

	this.instance_1 = new lib.patternsquiz_0042_black();
	this.instance_1.setTransform(-336.8,258.4);

	this.instance_2 = new lib.patternsquiz_0041_green();
	this.instance_2.setTransform(-337.8,356.6);

	this.instance_3 = new lib.patternsquiz_0040_red();
	this.instance_3.setTransform(-328.8,164.2);

	this.instance_4 = new lib.patternsquiz_0036_Shape2copy2();
	this.instance_4.setTransform(-516.6,80.2);

	this.instance_5 = new lib.patternsquiz_0032_1();
	this.instance_5.setTransform(-484.5,10.2);

	this.instance_6 = new lib.patternsquiz_0031_4();
	this.instance_6.setTransform(-484.5,10.2);

	this.instance_7 = new lib.patternsquiz_0030_5();
	this.instance_7.setTransform(-484.5,10.2);

	this.instance_8 = new lib.patternsquiz_0029_1copy();
	this.instance_8.setTransform(-484.5,10.2);

	this.instance_9 = new lib.patternsquiz_0028_1copy2();
	this.instance_9.setTransform(-484.5,10.2);

	this.instance_10 = new lib.patternsquiz_0027_3();
	this.instance_10.setTransform(-484.5,10.2);

	this.instance_11 = new lib.patternsquiz_0026_Shape6();
	this.instance_11.setTransform(-484.5,10.2);

	this.instance_12 = new lib.patternsquiz_0025_Shape7();
	this.instance_12.setTransform(-484.5,10.2);

	this.instance_13 = new lib.patternsquiz_0024_14451847684_363531fc84_o();
	this.instance_13.setTransform(-484.5,10.2);

	this.instance_14 = new lib.patternsquiz_0022_8724593232_3ebabc574f_o();
	this.instance_14.setTransform(-484.5,10.2);

	this.instance_15 = new lib.patternsquiz_0021_8727060570_81c2057890_o();
	this.instance_15.setTransform(-484.5,10.2);

	this.instance_16 = new lib.patternsquiz_0020_14213434134_080c479894_o();
	this.instance_16.setTransform(-484.5,10.2);

	this.instance_17 = new lib.patternsquiz_0019_7578778996_af7cf68566_o();
	this.instance_17.setTransform(-484.5,10.2);

	this.instance_18 = new lib.patternsquiz_0017_8115274748_5734a819b4_o();
	this.instance_18.setTransform(-484.5,10.2);

	this.instance_19 = new lib.patternsquiz_0016_2645428421_8d574127a5_ocopy2();
	this.instance_19.setTransform(-484.5,10.2);

	this.instance_20 = new lib.patternsquiz_0015_4052539031_fe78943286_o();
	this.instance_20.setTransform(-484.5,10.2);

	this.instance_21 = new lib.patternsquiz_0014_227693178_87a80c64d0_o();
	this.instance_21.setTransform(-484.5,10.2);

	this.instance_22 = new lib.patternsquiz_0013_245657047_4073ce96e0_o();
	this.instance_22.setTransform(-484.5,10.2);

	this.instance_23 = new lib.patternsquiz_0011_6949371740_b9fb597f91_o();
	this.instance_23.setTransform(-484.5,10.2);

	this.instance_24 = new lib.patternsquiz_0010_7318313824_bfef1bdd86_o();
	this.instance_24.setTransform(-484.5,10.2);

	this.instance_25 = new lib.patternsquiz_0009_bigstockBulldozer122493();
	this.instance_25.setTransform(-484.5,10.2);

	this.instance_26 = new lib.patternsquiz_0008_Shape8();
	this.instance_26.setTransform(-484.5,10.2);

	this.instance_27 = new lib.patternsquiz_0007_Shape8copy2();
	this.instance_27.setTransform(-484.5,10.2);

	this.instance_28 = new lib.patternsquiz_0005_Shape10();
	this.instance_28.setTransform(-484.5,10.2);

	this.instance_29 = new lib.patternsquiz_0004_Shape9();
	this.instance_29.setTransform(-484.5,10.2);

	this.start = new lib.start();
	this.start.setTransform(-155.4,706.8,1,1,0,0,0,85,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},349).wait(262));

	// Layer 12
	this.instance_30 = new lib.Symbol3();
	this.instance_30.setTransform(843.5,208.2);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(266).to({_off:false},0).to({alpha:1},20).to({_off:true},63).wait(262));

	// patternsquiz_0035_Shape-3.png
	this.instance_31 = new lib.patternsquiz_0035_Shape3();
	this.instance_31.setTransform(200.6,492.8);

	this.instance_32 = new lib.patternsquiz_0035_Shape3();
	this.instance_32.setTransform(611.6,146.2);

	this.instance_33 = new lib.patternsquiz_0035_Shape3();
	this.instance_33.setTransform(261.9,146.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]}).to({state:[]},349).wait(262));

	// patternsquiz_0039_Shape-2.png
	this.instance_34 = new lib.patternsquiz_0039_Shape2();
	this.instance_34.setTransform(671.7,487.8);

	this.instance_35 = new lib.patternsquiz_0039_Shape2();
	this.instance_35.setTransform(429.3,146.2);

	this.instance_36 = new lib.patternsquiz_0039_Shape2();
	this.instance_36.setTransform(79.6,146.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]}).to({state:[]},349).wait(262));

	// patternsquiz_0033_Shape-4.png
	this.instance_37 = new lib.patternsquiz_0033_Shape4();
	this.instance_37.setTransform(773.8,276.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37}]}).to({state:[]},349).wait(262));

	// patternsquiz_0046_optionBox.png
	this.instance_38 = new lib.patternsquiz_0046_optionBox();
	this.instance_38.setTransform(615.2,435.3);

	this.instance_39 = new lib.patternsquiz_0046_optionBox();
	this.instance_39.setTransform(138.6,435.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39},{t:this.instance_38}]}).to({state:[]},349).wait(262));

	// patternsquiz_0044_questionDisplayBg.png
	this.instance_40 = new lib.patternsquiz_0044_questionDisplayBg();
	this.instance_40.setTransform(9.6,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40}]}).to({state:[]},349).wait(262));

	// patternsquiz_0043_animated-traffic-lights-ppt.png
	this.instance_41 = new lib.patternsquiz_0043_animatedtrafficlightsppt();
	this.instance_41.setTransform(426.2,395.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41}]}).to({state:[]},349).wait(262));

	// patternsquiz_0003_bigstock-summer-holidays-family-child-52080136.png
	this.instance_42 = new lib.Symbol2();
	this.instance_42.setTransform(456.8,399.1);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(456).wait(1).to({_off:false},0).to({alpha:1},12).wait(142));

	// patternsquiz_0002_bigstock-Sporty-cute-positive-kid-play-15442268.png
	this.instance_43 = new lib.Symbol1();
	this.instance_43.setTransform(778.4,384.7);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(367).to({_off:false},0).to({alpha:1},25).wait(219));

	// top_panel
	this.instance_44 = new lib.patternsquiz();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44}]}).wait(611));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).wait(611));

	// bottom_panel
	this.instance_45 = new lib.Bottom_Activity_Bar();
	this.instance_45.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).wait(611));

	// bg
	this.instance_46 = new lib.patternsquiz_0048_2883022553_b5071091c5_o();
	this.instance_46.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46}]}).wait(611));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.6,0,1516.7,749.3);


// symbols:
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


(lib.patternsquiz = function() {
	this.initialize(img.patternsquiz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.patternsquiz_0002_bigstockSportycutepositivekidplay15442268 = function() {
	this.initialize(img.patternsquiz_0002_bigstockSportycutepositivekidplay15442268);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,637);


(lib.patternsquiz_0003_bigstocksummerholidaysfamilychild52080136 = function() {
	this.initialize(img.patternsquiz_0003_bigstocksummerholidaysfamilychild52080136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,825,554);


(lib.patternsquiz_0004_Shape9 = function() {
	this.initialize(img.patternsquiz_0004_Shape9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,122);


(lib.patternsquiz_0005_Shape10 = function() {
	this.initialize(img.patternsquiz_0005_Shape10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,130);


(lib.patternsquiz_0007_Shape8copy2 = function() {
	this.initialize(img.patternsquiz_0007_Shape8copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,123);


(lib.patternsquiz_0008_Shape8 = function() {
	this.initialize(img.patternsquiz_0008_Shape8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,127);


(lib.patternsquiz_0009_bigstockBulldozer122493 = function() {
	this.initialize(img.patternsquiz_0009_bigstockBulldozer122493);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0010_7318313824_bfef1bdd86_o = function() {
	this.initialize(img.patternsquiz_0010_7318313824_bfef1bdd86_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0011_6949371740_b9fb597f91_o = function() {
	this.initialize(img.patternsquiz_0011_6949371740_b9fb597f91_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0013_245657047_4073ce96e0_o = function() {
	this.initialize(img.patternsquiz_0013_245657047_4073ce96e0_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0014_227693178_87a80c64d0_o = function() {
	this.initialize(img.patternsquiz_0014_227693178_87a80c64d0_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0015_4052539031_fe78943286_o = function() {
	this.initialize(img.patternsquiz_0015_4052539031_fe78943286_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0016_2645428421_8d574127a5_ocopy2 = function() {
	this.initialize(img.patternsquiz_0016_2645428421_8d574127a5_ocopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,91);


(lib.patternsquiz_0017_8115274748_5734a819b4_o = function() {
	this.initialize(img.patternsquiz_0017_8115274748_5734a819b4_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,91);


(lib.patternsquiz_0019_7578778996_af7cf68566_o = function() {
	this.initialize(img.patternsquiz_0019_7578778996_af7cf68566_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,91);


(lib.patternsquiz_0020_14213434134_080c479894_o = function() {
	this.initialize(img.patternsquiz_0020_14213434134_080c479894_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,116);


(lib.patternsquiz_0021_8727060570_81c2057890_o = function() {
	this.initialize(img.patternsquiz_0021_8727060570_81c2057890_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,116);


(lib.patternsquiz_0022_8724593232_3ebabc574f_o = function() {
	this.initialize(img.patternsquiz_0022_8724593232_3ebabc574f_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,116);


(lib.patternsquiz_0024_14451847684_363531fc84_o = function() {
	this.initialize(img.patternsquiz_0024_14451847684_363531fc84_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,116);


(lib.patternsquiz_0025_Shape7 = function() {
	this.initialize(img.patternsquiz_0025_Shape7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,123);


(lib.patternsquiz_0026_Shape6 = function() {
	this.initialize(img.patternsquiz_0026_Shape6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,123);


(lib.patternsquiz_0027_3 = function() {
	this.initialize(img.patternsquiz_0027_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,93);


(lib.patternsquiz_0028_1copy2 = function() {
	this.initialize(img.patternsquiz_0028_1copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,89);


(lib.patternsquiz_0028_2 = function() {
	this.initialize(img.patternsquiz_0028_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,91);


(lib.patternsquiz_0029_1copy = function() {
	this.initialize(img.patternsquiz_0029_1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,89);


(lib.patternsquiz_0030_5 = function() {
	this.initialize(img.patternsquiz_0030_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,91);


(lib.patternsquiz_0031_4 = function() {
	this.initialize(img.patternsquiz_0031_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,89);


(lib.patternsquiz_0032_1 = function() {
	this.initialize(img.patternsquiz_0032_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,89);


(lib.patternsquiz_0033_Shape4 = function() {
	this.initialize(img.patternsquiz_0033_Shape4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,7);


(lib.patternsquiz_0035_Shape3 = function() {
	this.initialize(img.patternsquiz_0035_Shape3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,114);


(lib.patternsquiz_0036_Shape2copy2 = function() {
	this.initialize(img.patternsquiz_0036_Shape2copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,124);


(lib.patternsquiz_0039_Shape2 = function() {
	this.initialize(img.patternsquiz_0039_Shape2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,124);


(lib.patternsquiz_0040_red = function() {
	this.initialize(img.patternsquiz_0040_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,65);


(lib.patternsquiz_0041_green = function() {
	this.initialize(img.patternsquiz_0041_green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.patternsquiz_0042_black = function() {
	this.initialize(img.patternsquiz_0042_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.patternsquiz_0043_animatedtrafficlightsppt = function() {
	this.initialize(img.patternsquiz_0043_animatedtrafficlightsppt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,269);


(lib.patternsquiz_0044_questionDisplayBg = function() {
	this.initialize(img.patternsquiz_0044_questionDisplayBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,982,231);


(lib.patternsquiz_0046_optionBox = function() {
	this.initialize(img.patternsquiz_0046_optionBox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,229);


(lib.patternsquiz_0048_2883022553_b5071091c5_o = function() {
	this.initialize(img.patternsquiz_0048_2883022553_b5071091c5_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,671);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.patternsquiz_0039_Shape2();
	this.instance.setTransform(-64.4,-61.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.4,-61.9,129,124);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.patternsquiz_0003_bigstocksummerholidaysfamilychild52080136();
	this.instance.setTransform(-412.4,-276.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-412.4,-276.9,825,554);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.patternsquiz_0002_bigstockSportycutepositivekidplay15442268();
	this.instance.setTransform(-212.9,-318.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212.9,-318.4,426,637);


(lib.start = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,85);


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

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;