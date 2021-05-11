(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.CoolBlends = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{practice:920,part2:928,activity:2670,conclusion:2673});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
	}
	this.frame_920 = function() {
		canvasStageRef.onPractice(this);
	}
	this.frame_928 = function() {
		canvasStageRef.onPart2(this);
		//playSound("Introduction_P2");
	}
	this.frame_2670 = function() {
		canvasStageRef.onActivity(this);
	}
	this.frame_3057 = function() {
		this.stop();
		canvasStageRef.onActivityClose(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(920).call(this.frame_920).wait(8).call(this.frame_928).wait(1742).call(this.frame_2670).wait(387).call(this.frame_3057));

	// 26
	this.instance = new lib._26();
	this.instance.setTransform(-350.6,481);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2893).to({_off:false},0).to({x:356.1},33).to({_off:true},98).wait(34));

	// 25
	this.instance_1 = new lib._25();
	this.instance_1.setTransform(-432.7,309.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2690).to({_off:false},0).to({x:611.4},42).to({_off:true},292).wait(34));

	// 24
	this.instance_2 = new lib.CB_0001_bigstockRearingHorseAndFreedom1222388();
	this.instance_2.setTransform(893,147.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{rotation:0,x:893,y:147.2}}]},2528).to({state:[{t:this.instance_2,p:{rotation:-14.9,x:698.8,y:188.5}}]},6).to({state:[{t:this.instance_2,p:{rotation:-29.9,x:516.4,y:281.4}}]},5).to({state:[{t:this.instance_2,p:{rotation:-40.6,x:453.6,y:365}}]},5).to({state:[]},92).wait(422));

	// 23
	this.instance_3 = new lib.CB_0005_bigstockYeehawgirls1567452();
	this.instance_3.setTransform(23.3,76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},2503).to({state:[]},133).wait(422));

	// arrow
	this.instance_4 = new lib.cursor_mc();
	this.instance_4.setTransform(460.2,665,1,1,0,0,0,13.4,19.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1676).to({_off:false},0).wait(19).to({x:120.8,y:223.2},80).wait(414).to({x:761.3,y:197.6},151).to({_off:true},163).wait(555));

	// 9
	this.instance_5 = new lib._9();
	this.instance_5.setTransform(116,211.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1335).to({_off:false},0).to({alpha:1},7).wait(847).to({x:753.4,y:194.2},151).wait(37).to({scaleX:1.26,scaleY:1.26},16).to({scaleX:1,scaleY:1},16).to({_off:true},94).wait(555));

	// 22
	this.instance_6 = new lib.CB_0002____og();
	this.instance_6.setTransform(676,570.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1579).to({state:[]},924).to({state:[]},202).wait(353));

	// 21
	this.instance_7 = new lib.CB_0001_frogcolorsorangepurplesmall();
	this.instance_7.setTransform(497.7,503.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1569).to({state:[]},934).to({state:[]},202).wait(353));

	// 20
	this.instance_8 = new lib.CB_0006____ap();
	this.instance_8.setTransform(676,372.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1557).to({state:[]},946).to({state:[]},202).wait(353));

	// 19
	this.instance_9 = new lib.CB_0005_bigstockcuteblueeyedtoddlerinthe50996429();
	this.instance_9.setTransform(497.7,304.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1546).to({state:[]},957).to({state:[]},202).wait(353));

	// 18
	this.instance_10 = new lib.CB_0007____ue();
	this.instance_10.setTransform(676,181.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},1535).to({state:[]},968).to({state:[]},202).wait(353));

	// 17
	this.instance_11 = new lib._17();
	this.instance_11.setTransform(578.7,182.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1525).to({_off:false},0).wait(430).to({scaleX:1.4,scaleY:1.4},13).to({scaleX:1,scaleY:1},13).to({_off:true},522).wait(555));

	// 16
	this.instance_12 = new lib._16();
	this.instance_12.setTransform(250.1,390.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1383).to({_off:false},0).to({alpha:1},7).to({_off:true},1113).wait(555));

	// 15
	this.instance_13 = new lib._15();
	this.instance_13.setTransform(158,394.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1376).to({_off:false},0).to({alpha:1},7).to({_off:true},1120).wait(555));

	// 14
	this.instance_14 = new lib._14();
	this.instance_14.setTransform(288.1,288.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1370).to({_off:false},0).to({alpha:1},6).to({_off:true},1127).wait(555));

	// 13
	this.instance_15 = new lib._13();
	this.instance_15.setTransform(205.5,318.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1363).to({_off:false},0).to({alpha:1},7).to({_off:true},1133).wait(555));

	// 12
	this.instance_16 = new lib._12();
	this.instance_16.setTransform(121,298.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1356).to({_off:false},0).to({alpha:1},7).to({_off:true},1140).wait(555));

	// 11
	this.instance_17 = new lib._11();
	this.instance_17.setTransform(295.1,204.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1349).to({_off:false},0).to({alpha:1},7).to({_off:true},1147).wait(555));

	// 10
	this.instance_18 = new lib._10();
	this.instance_18.setTransform(209.1,224.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1342).to({_off:false},0).to({alpha:1},7).to({_off:true},1154).wait(555));

	// 8
	this.instance_19 = new lib._8();
	this.instance_19.setTransform(238.1,386);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1301).to({_off:false},0).to({alpha:1},26).to({_off:true},1176).wait(555));

	// 7
	this.instance_20 = new lib._7();
	this.instance_20.setTransform(354.1,480.1,0.488,0.488);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1097).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},35).wait(143).to({alpha:0},26).to({_off:true},1).wait(1756));

	// 6
	this.instance_21 = new lib._6();
	this.instance_21.setTransform(670.2,272.1,0.184,0.184);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(928).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},31).wait(65).to({rotation:180},33).wait(205).to({alpha:0},27).to({_off:true},1).wait(1768));

	// 5
	this.instance_22 = new lib._5();
	this.instance_22.setTransform(-484.1,384.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(853).to({_off:false},0).to({x:504.1},29).to({_off:true},38).wait(2138));

	// 4
	this.instance_23 = new lib._4();
	this.instance_23.setTransform(520.5,232.5,1,1,0,0,0,0.4,0.4);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(409).to({_off:false},0).to({alpha:1},29).to({x:292.5,y:538},41).to({x:188.5,y:390},15).to({x:466.5,y:226.6},31).to({x:816.6,y:440.6},33).to({x:731.5,y:481.6},8).to({x:614.5,y:538},11).to({x:183.6,y:231.9},34).to({x:195.6,y:225.9},6).to({x:761,y:538},41).to({x:823,y:466},12).to({x:452.9,y:226.6},38).to({x:183.6,y:525.6},35).to({x:211.6,y:538},11).to({x:742,y:226.6},45).to({x:816.6,y:290.6},12).to({x:250.4,y:538},38).to({x:183.6,y:476,alpha:0},4).to({_off:true},1).wait(2204));

	// 3
	this.instance_24 = new lib._3();
	this.instance_24.setTransform(242.4,490.5,1,1,0,0,0,0.4,0.4);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(365).to({_off:false},0).to({alpha:1},27).to({x:264,y:540},14).to({x:426,y:226.6},25).to({x:572.1,y:538},25).to({x:724.1,y:226.6},27).to({x:822.1,y:538},25).to({x:246,y:226.6},38).to({x:183.5,y:286.6},14).to({x:461.6,y:538},27).to({x:816.5,y:226.6},26).to({x:218.4,y:538},43).to({x:183.5,y:500},9).to({x:335.6,y:226.6},18).to({x:539.6,y:538},23).to({x:777.7,y:226.6},21).to({x:816.5,y:362.6},9).to({x:591,y:538},21).to({x:304.9,y:226.6},22).to({x:179.5,y:538},24).to({x:816.5,y:226.6},43).to({x:748.5,y:264.6,alpha:0},7).to({_off:true},1).wait(2204));

	// 2
	this.instance_25 = new lib._2();
	this.instance_25.setTransform(254.5,428.5,1,1,0,0,0,0.4,0.4);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(317).to({_off:false},0).to({alpha:1},34).to({x:524.6,y:226.6},26).to({x:823.5,y:462},25).to({x:676.5,y:538},17).to({x:210.4,y:226.6},37).to({x:183.6,y:256.3},5).to({x:481.6,y:538},22).to({x:735.5,y:226.6},27).to({x:823.5,y:496.6},24).to({x:775.5,y:538},9).to({x:676.5,y:226.6},23).to({x:514.5,y:538},22).to({x:378.5,y:226.6},24).to({x:259.5,y:542.6},22).to({x:183.6,y:226.6},21).to({x:307.6,y:538},22).to({x:449.7,y:226.6},22).to({x:657.7,y:538},23).to({x:809.8,y:226.6},22).to({x:823.8,y:250.6},6).to({x:687.8,y:538},18).to({x:545.7,y:226.6},21).wait(1).to({x:403.7,y:538},33).to({x:303.7,y:226.6,alpha:0},30).to({_off:true},1).wait(2204));

	// 1
	this.instance_26 = new lib._1();
	this.instance_26.setTransform(500,383.5,0.175,0.175,-119.9);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,alpha:1},35).wait(241).to({alpha:0},31).to({_off:true},2).wait(2745));

	// assets
	this.instance_27 = new lib.parrot();
	this.instance_27.setTransform(1096,33.1);

	this.instance_28 = new lib.CB_0020_girlsleepingbedteddybear();
	this.instance_28.setTransform(-555.1,159.1);

	this.instance_29 = new lib.CB_0019_gooseflyingclosealone();
	this.instance_29.setTransform(-643.1,-28.7);

	this.instance_30 = new lib.CB_0018_bigstockBirthdayBoyWearingaCrowni50570369();
	this.instance_30.setTransform(-421,-15.9);

	this.instance_31 = new lib.CB_0017_bigstockBlondkidchildrengirlplayin53177800();
	this.instance_31.setTransform(-293.8,0);

	this.instance_32 = new lib.CB_0016_bigstockBlueskybackgroundwithatin56684774();
	this.instance_32.setTransform(-385,338.1);

	this.instance_33 = new lib.CB_0015_bigstockChickenCrab55318181();
	this.instance_33.setTransform(-722.9,249.1);

	this.instance_34 = new lib.CB_0014_bigstockColorfulalarmclocksontable49064162();
	this.instance_34.setTransform(-334,159.1);

	this.instance_35 = new lib.CB_0013_bigstockGlue2070333();
	this.instance_35.setTransform(-617.9,330.1);

	this.instance_36 = new lib.CB_0012_bigstockinteriordesignandhomerenov49824605();
	this.instance_36.setTransform(-396.8,502.2);

	this.instance_37 = new lib.CB_0010_bigstockLittlegirlplayingdrums48230876();
	this.instance_37.setTransform(-209,372.2);

	this.instance_38 = new lib.CB_0009_bigstocklittleyearoldtoddlerboy45687268();
	this.instance_38.setTransform(-571,498.2);

	this.instance_39 = new lib.CB_0008_bigstockPortraitofhappyclassmatesa56029811();
	this.instance_39.setTransform(-765.1,363.2);

	this.instance_40 = new lib.CB_0007_bigstockTastySummerFruitsOnAWoode46208980();
	this.instance_40.setTransform(-753.1,514.2);

	this.instance_41 = new lib.CB_0006_blowingbubbles2();
	this.instance_41.setTransform(-783.2,-11.8);

	this.instance_42 = new lib.CB_0005_crow();
	this.instance_42.setTransform(-222,514.2);

	this.instance_43 = new lib.CB_0004_flagsfour();
	this.instance_43.setTransform(-718.1,118.1);

	this.instance_44 = new lib.CB_0003_frostcold();
	this.instance_44.setTransform(-205,-94.9);

	this.instance_45 = new lib.CB_0000_bigstockHappyportraitofamotherand49730834();
	this.instance_45.setTransform(-191,203);

	this.instance_46 = new lib.CB_0008_gr();
	this.instance_46.setTransform(-408,-141.5);

	this.instance_47 = new lib.CB_0026_bl();
	this.instance_47.setTransform(-361.8,-273.2);

	this.instance_48 = new lib.GB_0040_fl();
	this.instance_48.setTransform(-617.9,-273.2);

	this.instance_49 = new lib.GB_0039_cr();
	this.instance_49.setTransform(-233.8,-264.2);

	this.instance_50 = new lib.GB_0038_gl();
	this.instance_50.setTransform(-79.8,-283.2);

	this.instance_51 = new lib.GB_0037_fr();
	this.instance_51.setTransform(-734,-273.2);

	this.instance_52 = new lib.GB_0036_dr();
	this.instance_52.setTransform(-517.9,-273.7);

	this.start = new lib.start();
	this.start.setTransform(971,-250.3,1,1,0,0,0,85,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27}]}).to({state:[]},3024).wait(34));

	// top_panel
	this.instance_53 = new lib.coolblends();

	this.instance_54 = new lib.coolblendsact();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_53}]}).to({state:[{t:this.instance_54}]},2636).to({state:[{t:this.instance_53}]},3).to({state:[]},385).wait(34));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).to({state:[]},3024).wait(34));

	// bottom_panel
	this.instance_55 = new lib.Bottom_Activity_Bar();
	this.instance_55.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_55}]}).to({state:[]},3024).wait(34));

	// bg
	this.instance_56 = new lib.CB_0033_bigstockRipeplumshangingfromatree49076081();
	this.instance_56.setTransform(-816,782.8);

	this.instance_57 = new lib.CB_0018_bigstockPeachTreeWithFruits48249494();
	this.instance_57.setTransform(1152.4,426.7);

	this.instance_58 = new lib.CB_0016_bigstockAppleorchard25274492();
	this.instance_58.setTransform(0,36);

	this.instance_59 = new lib.CB_0006_bigstockBloomingPeachTrees45257104();
	this.instance_59.setTransform(-1092.2,44);

	this.instance_60 = new lib.CB_0005_bigstockRedapplesinabasketinagr52386997();
	this.instance_60.setTransform(1128.4,-417.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_60,p:{x:1128.4,y:-417.5}},{t:this.instance_59,p:{x:-1092.2,y:44}},{t:this.instance_58,p:{x:0,y:36}},{t:this.instance_57,p:{x:1152.4,y:426.7}},{t:this.instance_56,p:{x:-816,y:782.8}}]}).to({state:[{t:this.instance_60,p:{x:0,y:30.9}},{t:this.instance_59,p:{x:-1052.1,y:56}},{t:this.instance_58,p:{x:152,y:850.2}},{t:this.instance_57,p:{x:1152.4,y:426.7}},{t:this.instance_56,p:{x:-816,y:782.8}}]},920).to({state:[{t:this.instance_60,p:{x:1151,y:-299.2}},{t:this.instance_59,p:{x:0,y:4}},{t:this.instance_58,p:{x:152,y:850.2}},{t:this.instance_57,p:{x:1152.4,y:426.7}},{t:this.instance_56,p:{x:-816,y:782.8}}]},8).to({state:[{t:this.instance_60,p:{x:1151,y:-299.2}},{t:this.instance_59,p:{x:1151,y:174.8}},{t:this.instance_58,p:{x:152,y:850.2}},{t:this.instance_57,p:{x:1305,y:938.7}},{t:this.instance_56,p:{x:1,y:25.9}}]},1708).to({state:[{t:this.instance_60,p:{x:1151,y:-299.2}},{t:this.instance_59,p:{x:1151,y:174.8}},{t:this.instance_58,p:{x:152,y:850.2}},{t:this.instance_57,p:{x:0,y:25.5}},{t:this.instance_56,p:{x:-976,y:846}}]},3).to({state:[]},385).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1092.2,-417.5,3243.7,1905.4);


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


(lib.CB_0000____eam = function() {
	this.initialize(img.CB_0000____eam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,76);


(lib.CB_0000_bigstockHappyportraitofamotherand49730834 = function() {
	this.initialize(img.CB_0000_bigstockHappyportraitofamotherand49730834);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0000_cl = function() {
	this.initialize(img.CB_0000_cl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,63);


(lib.CB_0000_dr = function() {
	this.initialize(img.CB_0000_dr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,227);


(lib.CB_0000_l = function() {
	this.initialize(img.CB_0000_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,208);


(lib.CB_0000_wheelbluewood = function() {
	this.initialize(img.CB_0000_wheelbluewood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,151);


(lib.CB_0001____oud = function() {
	this.initialize(img.CB_0001____oud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,95);


(lib.CB_0001_bigstockRearingHorseAndFreedom1222388 = function() {
	this.initialize(img.CB_0001_bigstockRearingHorseAndFreedom1222388);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,438);


(lib.CB_0001_frogcolorsorangepurplesmall = function() {
	this.initialize(img.CB_0001_frogcolorsorangepurplesmall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0001_gl = function() {
	this.initialize(img.CB_0001_gl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,265);


(lib.CB_0002____og = function() {
	this.initialize(img.CB_0002____og);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,84);


(lib.CB_0002____ow = function() {
	this.initialize(img.CB_0002____ow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,76);


(lib.CB_0002_b = function() {
	this.initialize(img.CB_0002_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,212);


(lib.CB_0002_bigstockGardeninggirl46626892 = function() {
	this.initialize(img.CB_0002_bigstockGardeninggirl46626892);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,592,398);


(lib.CB_0002_cl = function() {
	this.initialize(img.CB_0002_cl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,212);


(lib.CB_0002_cr = function() {
	this.initialize(img.CB_0002_cr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,171);


(lib.CB_0003____ute = function() {
	this.initialize(img.CB_0003____ute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,94);


(lib.CB_0003_bigstockPortraitsofhappykidsplayin45736000 = function() {
	this.initialize(img.CB_0003_bigstockPortraitsofhappykidsplayin45736000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,412);


(lib.CB_0003_fl = function() {
	this.initialize(img.CB_0003_fl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,212);


(lib.CB_0003_frostcold = function() {
	this.initialize(img.CB_0003_frostcold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0004____ab = function() {
	this.initialize(img.CB_0004____ab);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,95);


(lib.CB_0004_bl = function() {
	this.initialize(img.CB_0004_bl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,227);


(lib.CB_0004_flagsfour = function() {
	this.initialize(img.CB_0004_flagsfour);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0004_fr = function() {
	this.initialize(img.CB_0004_fr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,212);


(lib.CB_0005____obe = function() {
	this.initialize(img.CB_0005____obe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,95);


(lib.CB_0005_bigstockcuteblueeyedtoddlerinthe50996429 = function() {
	this.initialize(img.CB_0005_bigstockcuteblueeyedtoddlerinthe50996429);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0005_bigstockRedapplesinabasketinagr52386997 = function() {
	this.initialize(img.CB_0005_bigstockRedapplesinabasketinagr52386997);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,717);


(lib.CB_0005_bigstockYeehawgirls1567452 = function() {
	this.initialize(img.CB_0005_bigstockYeehawgirls1567452);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,508);


(lib.CB_0005_crow = function() {
	this.initialize(img.CB_0005_crow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0006____ap = function() {
	this.initialize(img.CB_0006____ap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,83);


(lib.CB_0006____ill = function() {
	this.initialize(img.CB_0006____ill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,96);


(lib.CB_0006_bigstockBloomingPeachTrees45257104 = function() {
	this.initialize(img.CB_0006_bigstockBloomingPeachTrees45257104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,702);


(lib.CB_0006_bigstockHispanicboyplaying6342667 = function() {
	this.initialize(img.CB_0006_bigstockHispanicboyplaying6342667);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,796,615);


(lib.CB_0006_blowingbubbles2 = function() {
	this.initialize(img.CB_0006_blowingbubbles2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0007____ue = function() {
	this.initialize(img.CB_0007____ue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,76);


(lib.CB_0007____y = function() {
	this.initialize(img.CB_0007____y);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,82);


(lib.CB_0007_bigstockTastySummerFruitsOnAWoode46208980 = function() {
	this.initialize(img.CB_0007_bigstockTastySummerFruitsOnAWoode46208980);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0007_bigstockTwoStudentsInClassAtCompu3917513 = function() {
	this.initialize(img.CB_0007_bigstockTwoStudentsInClassAtCompu3917513);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,902,583);


(lib.CB_0008____ad = function() {
	this.initialize(img.CB_0008____ad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,95);


(lib.CB_0008_bigstockPortraitofhappyclassmatesa56029811 = function() {
	this.initialize(img.CB_0008_bigstockPortraitofhappyclassmatesa56029811);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0008_gr = function() {
	this.initialize(img.CB_0008_gr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,63);


(lib.CB_0009____own = function() {
	this.initialize(img.CB_0009____own);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,76);


(lib.CB_0009_bigstocklittleyearoldtoddlerboy45687268 = function() {
	this.initialize(img.CB_0009_bigstocklittleyearoldtoddlerboy45687268);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0009_fr = function() {
	this.initialize(img.CB_0009_fr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,62);


(lib.CB_0010____ost = function() {
	this.initialize(img.CB_0010____ost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,94);


(lib.CB_0010_bigstockGardeninggirl46626892 = function() {
	this.initialize(img.CB_0010_bigstockGardeninggirl46626892);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,649,421);


(lib.CB_0010_bigstockLittlegirlplayingdrums48230876 = function() {
	this.initialize(img.CB_0010_bigstockLittlegirlplayingdrums48230876);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0010_fl = function() {
	this.initialize(img.CB_0010_fl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,62);


(lib.CB_0011____um = function() {
	this.initialize(img.CB_0011____um);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,76);


(lib.CB_0011_cr = function() {
	this.initialize(img.CB_0011_cr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,50);


(lib.CB_0012____ag = function() {
	this.initialize(img.CB_0012____ag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,84);


(lib.CB_0012_bigstockinteriordesignandhomerenov49824605 = function() {
	this.initialize(img.CB_0012_bigstockinteriordesignandhomerenov49824605);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0012_gl = function() {
	this.initialize(img.CB_0012_gl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,76);


(lib.CB_0013____ock = function() {
	this.initialize(img.CB_0013____ock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,95);


(lib.CB_0013_bigstockGlue2070333 = function() {
	this.initialize(img.CB_0013_bigstockGlue2070333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0013_fr = function() {
	this.initialize(img.CB_0013_fr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,62);


(lib.CB_0014____uit = function() {
	this.initialize(img.CB_0014____uit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,96);


(lib.CB_0014_bigstockColorfulalarmclocksontable49064162 = function() {
	this.initialize(img.CB_0014_bigstockColorfulalarmclocksontable49064162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0014_dr = function() {
	this.initialize(img.CB_0014_dr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,63);


(lib.CB_0015____ow = function() {
	this.initialize(img.CB_0015____ow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,76);


(lib.CB_0015_bigstockChickenCrab55318181 = function() {
	this.initialize(img.CB_0015_bigstockChickenCrab55318181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0016_bigstockAppleorchard25274492 = function() {
	this.initialize(img.CB_0016_bigstockAppleorchard25274492);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,706);


(lib.CB_0016_bigstockBlueskybackgroundwithatin56684774 = function() {
	this.initialize(img.CB_0016_bigstockBlueskybackgroundwithatin56684774);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0016_bigstockChildWithGogglesAndThumbs6512145 = function() {
	this.initialize(img.CB_0016_bigstockChildWithGogglesAndThumbs6512145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,673,435);


(lib.CB_0017_bigstockAdorableBallerinaFriends34293554 = function() {
	this.initialize(img.CB_0017_bigstockAdorableBallerinaFriends34293554);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,739,478);


(lib.CB_0017_bigstockBlondkidchildrengirlplayin53177800 = function() {
	this.initialize(img.CB_0017_bigstockBlondkidchildrengirlplayin53177800);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0017_bl = function() {
	this.initialize(img.CB_0017_bl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,63);


(lib.CB_0018_bigstockBirthdayBoyWearingaCrowni50570369 = function() {
	this.initialize(img.CB_0018_bigstockBirthdayBoyWearingaCrowni50570369);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0018_bigstockPeachTreeWithFruits48249494 = function() {
	this.initialize(img.CB_0018_bigstockPeachTreeWithFruits48249494);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,687);


(lib.CB_0019_gooseflyingclosealone = function() {
	this.initialize(img.CB_0019_gooseflyingclosealone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0020_girlsleepingbedteddybear = function() {
	this.initialize(img.CB_0020_girlsleepingbedteddybear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,151);


(lib.CB_0021_f = function() {
	this.initialize(img.CB_0021_f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,212);


(lib.CB_0022_d = function() {
	this.initialize(img.CB_0022_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,212);


(lib.CB_0023_r = function() {
	this.initialize(img.CB_0023_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,156);


(lib.CB_0024_c = function() {
	this.initialize(img.CB_0024_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,160);


(lib.CB_0025_g = function() {
	this.initialize(img.CB_0025_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,213);


(lib.CB_0026_bl = function() {
	this.initialize(img.CB_0026_bl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,88);


(lib.CB_0026_HiRes = function() {
	this.initialize(img.CB_0026_HiRes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,615);


(lib.CB_0033_bigstockRipeplumshangingfromatree49076081 = function() {
	this.initialize(img.CB_0033_bigstockRipeplumshangingfromatree49076081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,705);


(lib.coolblends = function() {
	this.initialize(img.coolblends);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.coolblendsact = function() {
	this.initialize(img.coolblendsact);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.GB_0036_dr = function() {
	this.initialize(img.GB_0036_dr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,88);


(lib.GB_0037_fr = function() {
	this.initialize(img.GB_0037_fr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,87);


(lib.GB_0038_gl = function() {
	this.initialize(img.GB_0038_gl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,107);


(lib.GB_0039_cr = function() {
	this.initialize(img.GB_0039_cr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,69);


(lib.GB_0040_fl = function() {
	this.initialize(img.GB_0040_fl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,87);


(lib.greenCircle = function() {
	this.initialize(img.greenCircle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,90);


(lib.ht_110x170_01 = function() {
	this.initialize(img.ht_110x170_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,170);


(lib.ht_110x170_02 = function() {
	this.initialize(img.ht_110x170_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,170);


(lib.ht_110x170_03 = function() {
	this.initialize(img.ht_110x170_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,170);


(lib.wf_110x170_01 = function() {
	this.initialize(img.wf_110x170_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,170);


(lib.wf_110x170_02 = function() {
	this.initialize(img.wf_110x170_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,170);


(lib.wf_110x170_03 = function() {
	this.initialize(img.wf_110x170_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,170);


(lib.whiteCircle_big = function() {
	this.initialize(img.whiteCircle_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,438);


(lib.whiteCircle_small = function() {
	this.initialize(img.whiteCircle_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,341);


(lib.parrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_63 = function() {
		canvasStageRef.onParrotAnimComplete(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(63).call(this.frame_63));

	// wf_03
	this.instance = new lib.wf_110x170_03();
	this.instance.setTransform(-54.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},6).to({state:[]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).wait(48));

	// wf_02
	this.instance_1 = new lib.wf_110x170_02();
	this.instance_1.setTransform(-54.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},4).to({state:[]},2).to({state:[{t:this.instance_1}]},2).to({state:[]},2).to({state:[{t:this.instance_1}]},2).to({state:[]},2).to({state:[{t:this.instance_1}]},2).to({state:[]},2).wait(46));

	// wf_01
	this.instance_2 = new lib.wf_110x170_01();
	this.instance_2.setTransform(-54.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},2).to({state:[]},2).to({state:[{t:this.instance_2}]},14).to({state:[]},2).wait(44));

	// ht_03
	this.instance_3 = new lib.ht_110x170_03();
	this.instance_3.setTransform(-54.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},20).to({state:[{t:this.instance_3}]},2).to({state:[]},37).wait(5));

	// ht_02
	this.instance_4 = new lib.ht_110x170_02();
	this.instance_4.setTransform(-54.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},20).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},37).to({state:[]},2).wait(3));

	// ht_01
	this.instance_5 = new lib.ht_110x170_01();
	this.instance_5.setTransform(-54.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[]},2).to({state:[{t:this.instance_5}]},18).to({state:[]},1).to({state:[]},38).to({state:[{t:this.instance_5}]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-84.9,110,170);


(lib._26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0016_bigstockChildWithGogglesAndThumbs6512145();
	this.instance.setTransform(-336.1,-217.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-336.1,-217.4,673,435);


(lib._25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0017_bigstockAdorableBallerinaFriends34293554();
	this.instance.setTransform(-369.1,-238.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-369.1,-238.6,739,478);


(lib._17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0000_wheelbluewood();
	this.instance.setTransform(-80.9,-75.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.9,-75.4,162,151);


(lib._16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0009_fr();
	this.instance.setTransform(-25.4,-30.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0012_gl();
	this.instance.setTransform(-32.9,-37.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-44.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-44.9,93,90);


(lib._14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0000_cl();
	this.instance.setTransform(-32.4,-31.4);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0014_dr();
	this.instance.setTransform(-36.9,-31.4);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0013_fr();
	this.instance.setTransform(-25.4,-30.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0010_fl();
	this.instance.setTransform(-21.4,-30.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0011_cr();
	this.instance.setTransform(-36.4,-24.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0017_bl();
	this.instance.setTransform(-31.9,-31.4);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0026_HiRes();
	this.instance.setTransform(-203.4,-307.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.4,-307.4,407,615);


(lib._7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0010_bigstockGardeninggirl46626892();
	this.instance.setTransform(-324.4,-210.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-324.4,-210.4,649,421);


(lib._6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0003_bigstockPortraitsofhappykidsplayin45736000();
	this.instance.setTransform(306,206,1,1,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-305.9,-205.9,612,412);


(lib._5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0006_bigstockHispanicboyplaying6342667();
	this.instance.setTransform(-397.9,-307.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-397.9,-307.4,796,615);


(lib._4 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.CB_0000_dr();
	this.instance.setTransform(-141.1,-113.1);

	// bg
	this.instance_1 = new lib.whiteCircle_small();
	this.instance_1.setTransform(-183.1,-170.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.1,-170.1,367,341);


(lib._3 = function() {
	this.initialize();

	// cr
	this.instance = new lib.CB_0002_cr();
	this.instance.setTransform(-138.1,-85.4);

	// bg
	this.instance_1 = new lib.whiteCircle_small();
	this.instance_1.setTransform(-183,-170.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183,-170.1,367,341);


(lib._2 = function() {
	this.initialize();

	// bl
	this.instance = new lib.CB_0004_bl();
	this.instance.setTransform(-117.6,-116.1);

	// bg
	this.instance_1 = new lib.whiteCircle_small();
	this.instance_1.setTransform(-183.1,-170.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.1,-170.1,367,341);


(lib._1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CB_0007_bigstockTwoStudentsInClassAtCompu3917513();
	this.instance.setTransform(-450.9,-291.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-450.9,-291.4,902,583);


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


(lib.cursor_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cursor();
	this.instance.setTransform(-2.6,3.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,3.4,32,32);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;