(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.discovering_consonant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{conclusion:1701});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
		
	}
	this.frame_1005 = function() {
		playSound("SFX_mouse_click");
	}
	this.frame_1699 = function() {
		this.stop();
		canvasStageRef.onPracticeSession(this);
	}
	this.frame_1700 = function() {
		this.stop();
		canvasStageRef.onActivity(this);
	}
	this.frame_1701 = function() {
		playSound("Conclusion");
	}
	this.frame_2299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1005).call(this.frame_1005).wait(694).call(this.frame_1699).wait(1).call(this.frame_1700).wait(1).call(this.frame_1701).wait(598).call(this.frame_2299));

	// top_panel
	this.instance = new lib.DiscoveringConsonants();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2300));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).wait(2300));

	// bottom_panel
	this.instance_1 = new lib.Bottom_Activity_Bar();
	this.instance_1.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2300));

	// practice_session_graphics
	this.instance_2 = new lib.start();
	this.instance_2.setTransform(-167.6,714.5,1,1,0,0,0,85,42.5);

	this.instance_3 = new lib.DC_0021_g();
	this.instance_3.setTransform(-689.6,-84);

	this.instance_4 = new lib.DC_0020_b();
	this.instance_4.setTransform(-689.6,-84);

	this.instance_5 = new lib.DC_0019_c();
	this.instance_5.setTransform(-689.6,-84);

	this.instance_6 = new lib.DC_0018_d();
	this.instance_6.setTransform(-689.6,-84);

	this.instance_7 = new lib.DC_0017_f();
	this.instance_7.setTransform(-689.6,-84);

	this.instance_8 = new lib.DC_0016_h();
	this.instance_8.setTransform(-689.6,-84);

	this.instance_9 = new lib.DC_0015_j();
	this.instance_9.setTransform(-689.6,-84);

	this.instance_10 = new lib.DC_0014_k();
	this.instance_10.setTransform(-689.6,-84);

	this.instance_11 = new lib.DC_0013_l();
	this.instance_11.setTransform(-689.6,-84);

	this.instance_12 = new lib.DC_0012_m();
	this.instance_12.setTransform(-689.6,-84);

	this.instance_13 = new lib.DC_0011_n();
	this.instance_13.setTransform(-689.6,-84);

	this.instance_14 = new lib.DC_0009_p();
	this.instance_14.setTransform(-689.6,-84);

	this.instance_15 = new lib.DC_0008_q();
	this.instance_15.setTransform(-689.6,-84);

	this.instance_16 = new lib.DC_0007_r();
	this.instance_16.setTransform(-689.6,-84);

	this.instance_17 = new lib.DC_0006_y();
	this.instance_17.setTransform(-689.6,-84);

	this.instance_18 = new lib.DC_0005_s();
	this.instance_18.setTransform(-689.6,-84);

	this.instance_19 = new lib.DC_0004_z();
	this.instance_19.setTransform(-689.6,-84);

	this.instance_20 = new lib.DC_0003_t();
	this.instance_20.setTransform(-689.6,-84);

	this.instance_21 = new lib.DC_0002_v();
	this.instance_21.setTransform(-689.6,-84);

	this.instance_22 = new lib.DC_0001_w();
	this.instance_22.setTransform(-689.6,-84);

	this.instance_23 = new lib.DC_0000_x();
	this.instance_23.setTransform(-689.6,-84);

	this.instance_24 = new lib.discoveringconsnants_0038_b();
	this.instance_24.setTransform(1565.9,150.1);

	this.instance_25 = new lib.discoveringconsnants_0037_c();
	this.instance_25.setTransform(1565.9,150.1);

	this.instance_26 = new lib.discoveringconsnants_0036_d();
	this.instance_26.setTransform(1565.9,150.1);

	this.instance_27 = new lib.discoveringconsnants_0035_e();
	this.instance_27.setTransform(1565.9,150.1);

	this.instance_28 = new lib.discoveringconsnants_0034_f();
	this.instance_28.setTransform(1565.9,150.1);

	this.instance_29 = new lib.discoveringconsnants_0033_g();
	this.instance_29.setTransform(1565.9,150.1);

	this.instance_30 = new lib.discoveringconsnants_0032_h();
	this.instance_30.setTransform(1565.9,150.1);

	this.instance_31 = new lib.discoveringconsnants_0031_l();
	this.instance_31.setTransform(1565.9,150.1);

	this.instance_32 = new lib.discoveringconsnants_0030_j();
	this.instance_32.setTransform(1565.9,150.1);

	this.instance_33 = new lib.discoveringconsnants_0029_k();
	this.instance_33.setTransform(1565.9,150.1);

	this.instance_34 = new lib.discoveringconsnants_0028_m();
	this.instance_34.setTransform(1565.9,150.1);

	this.instance_35 = new lib.discoveringconsnants_0027_n();
	this.instance_35.setTransform(1565.9,150.1);

	this.instance_36 = new lib.discoveringconsnants_0026_p();
	this.instance_36.setTransform(1565.9,150.1);

	this.instance_37 = new lib.discoveringconsnants_0025_q();
	this.instance_37.setTransform(1565.9,150.1);

	this.instance_38 = new lib.discoveringconsnants_0024_r();
	this.instance_38.setTransform(1565.9,150.1);

	this.instance_39 = new lib.discoveringconsnants_0023_s();
	this.instance_39.setTransform(1565.9,150.1);

	this.instance_40 = new lib.discoveringconsnants_0022_t();
	this.instance_40.setTransform(1565.9,150.1);

	this.instance_41 = new lib.discoveringconsnants_0021_u();
	this.instance_41.setTransform(1565.9,150.1);

	this.instance_42 = new lib.discoveringconsnants_0020_v();
	this.instance_42.setTransform(1565.9,150.1);

	this.instance_43 = new lib.discoveringconsnants_0019_w();
	this.instance_43.setTransform(1565.9,150.1);

	this.instance_44 = new lib.discoveringconsnants_0018_x();
	this.instance_44.setTransform(1565.9,150.1);

	this.instance_45 = new lib.discoveringconsnants_0017_y();
	this.instance_45.setTransform(1565.9,150.1);

	this.instance_46 = new lib.discoveringconsnants_0016_z();
	this.instance_46.setTransform(1565.9,150.1);

	this.instance_47 = new lib.discoveringconsnants_0004_v();
	this.instance_47.setTransform(1565.9,150.1);

	this.instance_48 = new lib.discoveringconsnants_0003_g();
	this.instance_48.setTransform(1565.9,150.1);

	this.instance_49 = new lib.discoveringconsnants_0001_d();
	this.instance_49.setTransform(1565.9,150.1);

	this.instance_50 = new lib.discoveringconsnants_0000_n();
	this.instance_50.setTransform(1565.9,150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1698).to({state:[]},3).wait(598));

	// conclusionpic2
	this.instance_51 = new lib.conclusionpic2();
	this.instance_51.setTransform(743.1,522,0.673,0.673,6.3,0,0,260.5,175.6);
	this.instance_51.alpha = 0;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(2014).to({_off:false},0).to({regX:260.4,scaleX:1,scaleY:1,x:743,alpha:1},20).wait(266));

	// conclusion pic 1
	this.instance_52 = new lib.conclusionpic1();
	this.instance_52.setTransform(325.9,296.1,0.561,0.561,-7.6,0,0,315.9,212.6);
	this.instance_52.alpha = 0;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(1701).to({_off:false},0).to({regX:316,scaleX:1,scaleY:1,x:326,alpha:1},33).wait(566));

	// group
	this.instance_53 = new lib.group();
	this.instance_53.setTransform(-328.5,373,0.517,0.517,-164.9,0,0,328.8,278);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(1370).to({_off:false},0).to({regX:328.5,scaleX:1,scaleY:1,rotation:0,x:704.5,y:461},36).wait(152).to({rotation:45},7).to({rotation:143.3,x:704.4,y:461.1},7).to({regX:328.6,rotation:278.4,y:461},8).to({regX:328.5,rotation:353.4},9).to({x:1358.8,y:509},12).to({_off:true},19).wait(680));

	// boy
	this.instance_54 = new lib.boy();
	this.instance_54.setTransform(330.1,-272.5,1,1,0,0,0,393,311.5);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(1268).to({_off:false},0).to({x:366.1,y:275.5},5).wait(285).to({regY:311.4,rotation:75},7).to({regX:393.1,regY:311.5,rotation:165,x:366},7).to({regX:393,regY:311.6,rotation:300.1,x:366.2,y:275.6},8).to({regY:311.5,rotation:360,x:378.1,y:271.5},9).to({x:-405.9},12).to({_off:true},19).wait(680));

	// cursor
	this.instance_55 = new lib.cursor_1();
	this.instance_55.setTransform(83,535.9,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(759).to({x:574,y:387},22).wait(171).to({x:818,y:328},53).to({_off:true},693).wait(602));

	// n
	this.instance_56 = new lib.n();
	this.instance_56.setTransform(650.1,510.1,1,1,0,0,0,63.5,72.5);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(609).to({_off:false},0).to({alpha:1},4).wait(623).to({scaleX:0.2,scaleY:0.2,x:-101.9,y:106,alpha:0},12).to({_off:true},1).wait(1051));

	// t
	this.instance_57 = new lib.t();
	this.instance_57.setTransform(372.1,502.1,1,1,0,0,0,39.5,95);
	this.instance_57.alpha = 0;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(604).to({_off:false},0).to({alpha:1},4).wait(623).to({scaleX:0.2,scaleY:0.2,x:-79.8,y:106,alpha:0},14).to({_off:true},1).wait(1054));

	// c
	this.instance_58 = new lib.k();
	this.instance_58.setTransform(806.2,242.1,1,1,0,0,0,69.5,96.5);
	this.instance_58.alpha = 0;
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(599).to({_off:false},0).to({alpha:1},4).wait(430).to({regX:66.9,regY:123.6,scaleX:1,scaleY:1,rotation:71.5,x:832.2,y:260},8).to({regX:69.5,regY:116.6,scaleX:1,scaleY:1,rotation:203.3,x:806.2,y:262},8).to({regY:113.5,rotation:360,y:259.1},17).wait(147).wait(11).to({regY:96.5,y:242.1},0).to({scaleX:0.2,scaleY:0.2,x:-57.8,y:110.1,alpha:0},17).to({_off:true},1).wait(1058));

	// m
	this.instance_59 = new lib.m();
	this.instance_59.setTransform(518.1,266.1,1,1,0,0,0,106.5,72.5);
	this.instance_59.alpha = 0;
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(594).to({_off:false},0).to({alpha:1},4).wait(619).to({scaleX:0.2,scaleY:0.2,x:-41.8,y:98,alpha:0},21).to({_off:true},1).wait(1061));

	// p
	this.instance_60 = new lib.p();
	this.instance_60.setTransform(259.1,290.6,1,1,0,0,0,73.5,97);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(589).to({_off:false},0).to({alpha:1},4).wait(620).to({scaleX:0.2,scaleY:0.2,x:-73.3,y:97,alpha:0},22).to({_off:true},1).wait(1064));

	// v
	this.instance_61 = new lib.v();
	this.instance_61.setTransform(660.5,617);
	this.instance_61.alpha = 0;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(465).to({_off:false},0).to({alpha:1},5).wait(84).to({alpha:0},7).to({_off:true},1).wait(1738));

	// z
	this.instance_62 = new lib.z();
	this.instance_62.setTransform(207.5,534);
	this.instance_62.alpha = 0;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(449).to({_off:false},0).to({alpha:1},5).wait(96).to({alpha:0},7).to({_off:true},1).wait(1742));

	// d
	this.instance_63 = new lib.d();
	this.instance_63.setTransform(794.5,220);
	this.instance_63.alpha = 0;
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(434).to({_off:false},0).to({alpha:1},5).wait(107).to({alpha:0},6).to({_off:true},1).wait(1747));

	// g
	this.instance_64 = new lib.g();
	this.instance_64.setTransform(261.5,169);
	this.instance_64.alpha = 0;
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(416).to({_off:false},0).to({alpha:1},6).wait(120).to({alpha:0},7).to({_off:true},1).wait(1750));

	// pic
	this.instance_65 = new lib.Symbol1();
	this.instance_65.setTransform(513.5,384.5,1,1,0,0,0,325,266.5);
	this.instance_65.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(19).to({regX:324.8,regY:266.4,scaleX:0.11,scaleY:0.11,rotation:135,y:384.6},0).to({regX:325,regY:266.5,scaleX:1,scaleY:1,rotation:0,y:384.5,alpha:1},20).wait(233).to({regX:325.1,scaleX:0.8,scaleY:0.8,rotation:-8},4).to({regX:325,scaleX:1,scaleY:1,rotation:0},8).wait(290).to({regX:325.1,scaleX:0.46,scaleY:0.46,rotation:90,y:384.6,alpha:0},6).to({_off:true},1).wait(1719));

	// bg
	this.instance_66 = new lib.discoveringconsnants_0040_bigstockCountryScenery28191197();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_66}]}).wait(2300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


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


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.DC_0000_x = function() {
	this.initialize(img.DC_0000_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,380);


(lib.DC_0001_w = function() {
	this.initialize(img.DC_0001_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,380);


(lib.DC_0002_v = function() {
	this.initialize(img.DC_0002_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,380);


(lib.DC_0003_t = function() {
	this.initialize(img.DC_0003_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,517);


(lib.DC_0004_z = function() {
	this.initialize(img.DC_0004_z);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,380);


(lib.DC_0005_s = function() {
	this.initialize(img.DC_0005_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,400);


(lib.DC_0006_y = function() {
	this.initialize(img.DC_0006_y);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,517);


(lib.DC_0007_r = function() {
	this.initialize(img.DC_0007_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,390);


(lib.DC_0008_q = function() {
	this.initialize(img.DC_0008_q);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,527);


(lib.DC_0009_p = function() {
	this.initialize(img.DC_0009_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,527);


(lib.DC_0011_n = function() {
	this.initialize(img.DC_0011_n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,390);


(lib.DC_0012_m = function() {
	this.initialize(img.DC_0012_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,579,390);


(lib.DC_0013_l = function() {
	this.initialize(img.DC_0013_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,524);


(lib.DC_0014_k = function() {
	this.initialize(img.DC_0014_k);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,524);


(lib.DC_0015_j = function() {
	this.initialize(img.DC_0015_j);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,613);


(lib.DC_0016_h = function() {
	this.initialize(img.DC_0016_h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,524);


(lib.DC_0017_f = function() {
	this.initialize(img.DC_0017_f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,533);


(lib.DC_0018_d = function() {
	this.initialize(img.DC_0018_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,534);


(lib.DC_0019_c = function() {
	this.initialize(img.DC_0019_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,400);


(lib.DC_0020_b = function() {
	this.initialize(img.DC_0020_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,534);


(lib.DC_0021_g = function() {
	this.initialize(img.DC_0021_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,536);


(lib.discoveringconsnants_0000_n = function() {
	this.initialize(img.discoveringconsnants_0000_n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,145);


(lib.discoveringconsnants_0001_d = function() {
	this.initialize(img.discoveringconsnants_0001_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,197);


(lib.discoveringconsnants_0003_g = function() {
	this.initialize(img.discoveringconsnants_0003_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,197);


(lib.discoveringconsnants_0004_v = function() {
	this.initialize(img.discoveringconsnants_0004_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,141);


(lib.discoveringconsnants_0005_childfacepaintsmile = function() {
	this.initialize(img.discoveringconsnants_0005_childfacepaintsmile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,533);


(lib.discoveringconsnants_0010_kidssmilinghappysiblings = function() {
	this.initialize(img.discoveringconsnants_0010_kidssmilinghappysiblings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,657,556);


(lib.discoveringconsnants_0011_bigstockEducationYoungfemaleteach32472596 = function() {
	this.initialize(img.discoveringconsnants_0011_bigstockEducationYoungfemaleteach32472596);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,623);


(lib.discoveringconsnants_0013_bigstockPortraitofhappypupillookin46987498 = function() {
	this.initialize(img.discoveringconsnants_0013_bigstockPortraitofhappypupillookin46987498);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,351);


(lib.discoveringconsnants_0014_bigstockGroupOfYoungFriendsTogethe13885295 = function() {
	this.initialize(img.discoveringconsnants_0014_bigstockGroupOfYoungFriendsTogethe13885295);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,425);


(lib.discoveringconsnants_0016_z = function() {
	this.initialize(img.discoveringconsnants_0016_z);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,141);


(lib.discoveringconsnants_0017_y = function() {
	this.initialize(img.discoveringconsnants_0017_y);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,190);


(lib.discoveringconsnants_0018_x = function() {
	this.initialize(img.discoveringconsnants_0018_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,141);


(lib.discoveringconsnants_0019_w = function() {
	this.initialize(img.discoveringconsnants_0019_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,141);


(lib.discoveringconsnants_0020_v = function() {
	this.initialize(img.discoveringconsnants_0020_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,141);


(lib.discoveringconsnants_0021_u = function() {
	this.initialize(img.discoveringconsnants_0021_u);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,145);


(lib.discoveringconsnants_0022_t = function() {
	this.initialize(img.discoveringconsnants_0022_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,190);


(lib.discoveringconsnants_0023_s = function() {
	this.initialize(img.discoveringconsnants_0023_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,149);


(lib.discoveringconsnants_0024_r = function() {
	this.initialize(img.discoveringconsnants_0024_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,145);


(lib.discoveringconsnants_0025_q = function() {
	this.initialize(img.discoveringconsnants_0025_q);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,194);


(lib.discoveringconsnants_0026_p = function() {
	this.initialize(img.discoveringconsnants_0026_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,194);


(lib.discoveringconsnants_0027_n = function() {
	this.initialize(img.discoveringconsnants_0027_n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,145);


(lib.discoveringconsnants_0028_m = function() {
	this.initialize(img.discoveringconsnants_0028_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,145);


(lib.discoveringconsnants_0029_k = function() {
	this.initialize(img.discoveringconsnants_0029_k);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,193);


(lib.discoveringconsnants_0030_j = function() {
	this.initialize(img.discoveringconsnants_0030_j);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,248);


(lib.discoveringconsnants_0031_l = function() {
	this.initialize(img.discoveringconsnants_0031_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,193);


(lib.discoveringconsnants_0032_h = function() {
	this.initialize(img.discoveringconsnants_0032_h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,193);


(lib.discoveringconsnants_0033_g = function() {
	this.initialize(img.discoveringconsnants_0033_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,197);


(lib.discoveringconsnants_0034_f = function() {
	this.initialize(img.discoveringconsnants_0034_f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,196);


(lib.discoveringconsnants_0035_e = function() {
	this.initialize(img.discoveringconsnants_0035_e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.discoveringconsnants_0036_d = function() {
	this.initialize(img.discoveringconsnants_0036_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,197);


(lib.discoveringconsnants_0037_c = function() {
	this.initialize(img.discoveringconsnants_0037_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,149);


(lib.discoveringconsnants_0038_b = function() {
	this.initialize(img.discoveringconsnants_0038_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,197);


(lib.discoveringconsnants_0040_bigstockCountryScenery28191197 = function() {
	this.initialize(img.discoveringconsnants_0040_bigstockCountryScenery28191197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,711);


(lib.DiscoveringConsonants = function() {
	this.initialize(img.DiscoveringConsonants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.z_gr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0016_z();
	this.instance.setTransform(-59.4,-70.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.4,-70.4,119,141);


(lib.v_gr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0004_v();
	this.instance.setTransform(-71.9,-70.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.9,-70.4,144,141);


(lib.t = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0022_t();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,190);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0005_childfacepaintsmile();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650,533);


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
	this.shape.graphics.f("rgba(255,255,0,0.498)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2,1,1).p("ABdBdQgmAog3AAQg2AAgngoQgngmAAg3QAAg2AngnQAngnA2AAQA3AAAmAnQAoAnAAA2QAAA3goAmg");
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.647)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
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
	this.shape.graphics.f("rgba(255,255,0,0.498)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2,1,1).p("ABdBdQgmAog3AAQg2AAgngoQgngmAAg3QAAg2AngnQAngnA2AAQA3AAAmAnQAoAnAAA2QAAA3goAmg");
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.647)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Replay();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.p = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0026_p();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,194);


(lib.n = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0000_n();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127,145);


(lib.m = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0028_m();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213,145);


(lib.k = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0037_c();
	this.instance.setTransform(-6.9,45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,45,145,149);


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
	this.shape.graphics.f("rgba(255,255,0,0.498)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2,1,1).p("ABdBdQgmAog3AAQg2AAgngoQgngmAAg3QAAg2AngnQAngnA2AAQA3AAAmAnQAoAnAAA2QAAA3goAmg");
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.647)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Home();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.group = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0010_kidssmilinghappysiblings();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,657,556);


(lib.g_gr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0003_g();
	this.instance.setTransform(-72.9,-98.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.9,-98.4,146,197);


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
	this.shape.graphics.f("rgba(255,255,0,0.498)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(13,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2,1,1).p("ABdBdQgmAog3AAQg2AAgngoQgngmAAg3QAAg2AngnQAngnA2AAQA3AAAmAnQAoAnAAA2QAAA3goAmg");
	this.shape_1.setTransform(13,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.647)").s().p("AhdBdQgmgnAAg2QAAg1AmgoQAngnA2ABQA3gBAnAnQAnAogBA1QABA2gnAnQgnAng3AAQg2AAgngng");
	this.shape_2.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Bottom_Activity_Button_Exit();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.d_gr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0001_d();
	this.instance.setTransform(-73.4,-98.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.4,-98.4,147,197);


(lib.cursor_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cursor();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.conclusionpic2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0013_bigstockPortraitofhappypupillookin46987498();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,521,351);


(lib.conclusionpic1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0014_bigstockGroupOfYoungFriendsTogethe13885295();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,632,425);


(lib.boy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.discoveringconsnants_0011_bigstockEducationYoungfemaleteach32472596();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,786,623);


(lib.z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24));

	// Layer 1
	this.instance = new lib.z_gr("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6},14).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.4,-70.4,119,141);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24));

	// Layer 1
	this.instance = new lib.v_gr("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6},14).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-70.4,144,141);


(lib.g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24));

	// Layer 1
	this.instance = new lib.g_gr("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6},14).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-98.4,146,197);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24));

	// Layer 1
	this.instance = new lib.d_gr("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6},14).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.4,-98.4,147,197);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;