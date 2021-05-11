(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.GroovyBlends = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{practice:1019,part2:1027,activity:2702,conclusion:2705});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
	}
	this.frame_1019 = function() {
		canvasStageRef.onPractice(this);
	}
	this.frame_1027 = function() {
		canvasStageRef.onPart2(this);
		//playSound("Introduction_P2");
	}
	this.frame_2702 = function() {
		canvasStageRef.onActivity(this);
	}
	this.frame_3089 = function() {
		this.stop();
		canvasStageRef.onActivityClose(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1019).call(this.frame_1019).wait(8).call(this.frame_1027).wait(1675).call(this.frame_2702).wait(387).call(this.frame_3089));

	// 26
	this.instance = new lib._26();
	this.instance.setTransform(-350.6,481);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2959).to({_off:false},0).to({x:356.1},33).wait(98));

	// 25
	this.instance_1 = new lib._25();
	this.instance_1.setTransform(-432.7,309.9,0.281,0.281,-149.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2756).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:611.4},42).wait(292));

	// 23
	this.instance_2 = new lib._23();
	this.instance_2.setTransform(504.4,378.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2578).to({_off:false},0).to({alpha:1},39).to({_off:true},85).wait(388));

	// arrow
	this.instance_3 = new lib.cursor_mc();
	this.instance_3.setTransform(460.2,665,1,1,0,0,0,13.4,19.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1775).to({_off:false},0).wait(53).to({x:153.1,y:338.1},80).wait(347).to({x:152.8,y:339.2},0).to({x:761.3,y:197.6},173).to({_off:true},149).wait(513));

	// 12
	this.instance_4 = new lib._12();
	this.instance_4.setTransform(129,310.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1455).to({_off:false},0).to({y:314.1,alpha:1},7).wait(793).to({x:753.4,y:194.2},173).wait(91).to({scaleX:1.34,scaleY:1.34},16).to({scaleX:1,scaleY:1},16).to({_off:true},26).wait(513));

	// 22
	this.instance_5 = new lib.GB_0021____im();
	this.instance_5.setTransform(678.6,564.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},1678).to({state:[]},899).to({state:[]},194).wait(319));

	// 21
	this.instance_6 = new lib.GB_0006_bigstocktwounderwatergirls47131369();
	this.instance_6.setTransform(499.2,509.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1668).to({state:[]},909).to({state:[]},194).wait(319));

	// 20
	this.instance_7 = new lib.GB_0022____o();
	this.instance_7.setTransform(678.6,383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1656).to({state:[]},921).to({state:[]},194).wait(319));

	// 19
	this.instance_8 = new lib.GB_0007_bigstockParentHoldsTheHandOfASma50833166();
	this.instance_8.setTransform(498.2,307.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1645).to({state:[]},932).to({state:[]},194).wait(319));

	// 18
	this.instance_9 = new lib.GB_0023____ow();
	this.instance_9.setTransform(678.6,178.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1634).to({state:[]},943).to({state:[]},194).wait(319));

	// 17
	this.instance_10 = new lib._17();
	this.instance_10.setTransform(580.9,182.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1624).to({_off:false},0).wait(413).to({x:578.7},0).to({scaleX:1.4,scaleY:1.4},13).to({scaleX:1,scaleY:1},13).to({_off:true},514).wait(513));

	// 14
	this.instance_11 = new lib._14();
	this.instance_11.setTransform(272.1,304.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1469).to({_off:false},0).to({y:308.6,alpha:1},6).to({_off:true},1102).wait(513));

	// 13
	this.instance_12 = new lib._13();
	this.instance_12.setTransform(205.5,366.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1462).to({_off:false},0).to({alpha:1},7).to({_off:true},1108).wait(513));

	// 11
	this.instance_13 = new lib._11();
	this.instance_13.setTransform(291.1,208.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1448).to({_off:false},0).to({alpha:1},7).to({_off:true},1122).wait(513));

	// 10
	this.instance_14 = new lib._10();
	this.instance_14.setTransform(209.1,240.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1441).to({_off:false},0).to({alpha:1},7).to({_off:true},1129).wait(513));

	// 9
	this.instance_15 = new lib._9();
	this.instance_15.setTransform(116,219.7);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1434).to({_off:false},0).to({alpha:1},7).to({_off:true},1136).wait(513));

	// 8
	this.instance_16 = new lib._8();
	this.instance_16.setTransform(238.1,386);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1400).to({_off:false},0).to({alpha:1},26).to({_off:true},1151).wait(513));

	// 6
	this.instance_17 = new lib._6();
	this.instance_17.setTransform(485.9,364.2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1026).to({_off:false},0).to({alpha:1},47).wait(284).to({alpha:0},31).to({_off:true},1).wait(1701));

	// 5
	this.instance_18 = new lib._5();
	this.instance_18.setTransform(-484.1,384.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(845).to({_off:false},0).to({x:504.1},31).to({_off:true},143).wait(2071));

	// 4
	this.instance_19 = new lib._4();
	this.instance_19.setTransform(520.5,232.5,1,1,0,0,0,0.4,0.4);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(373).to({_off:false},0).to({alpha:1},32).to({x:292.5,y:538},41).to({x:188.5,y:390},15).to({x:466.5,y:226.6},31).to({x:816.6,y:440.6},33).to({x:731.5,y:481.6},8).to({x:614.5,y:538},11).to({x:183.6,y:231.9},34).to({x:195.6,y:225.9},6).to({x:761,y:538},43).to({x:823,y:466},14).to({x:452.9,y:226.6},40).to({x:183.6,y:525.6},36).to({x:211.6,y:538},12).to({x:742,y:226.6},48).to({x:816.6,y:290.6},15).to({x:250.4,y:538},21).to({x:183.6,y:476,alpha:0},22).to({_off:true},7).wait(2248));

	// 3
	this.instance_20 = new lib._3();
	this.instance_20.setTransform(242.4,490.5,1,1,0,0,0,0.4,0.4);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(329).to({_off:false},0).to({alpha:1},29).to({x:264,y:540},14).to({x:426,y:226.6},25).to({x:572.1,y:538},25).to({x:724.1,y:226.6},27).to({x:822.1,y:538},25).to({x:246,y:226.6},38).to({x:183.5,y:286.6},14).to({x:461.6,y:538},27).to({x:816.5,y:226.6},26).to({x:218.4,y:538},45).to({x:183.5,y:500},11).to({x:335.6,y:226.6},20).to({x:539.6,y:538},23).to({x:777.7,y:226.6},21).to({x:816.5,y:362.6},10).to({x:591,y:538},22).to({x:304.9,y:226.6},25).to({x:179.5,y:538},27).to({x:816.5,y:226.6},26).to({x:748.5,y:264.6,alpha:0},16).to({_off:true},17).wait(2248));

	// 2
	this.instance_21 = new lib._2();
	this.instance_21.setTransform(254.5,428.5,1,1,0,0,0,0.4,0.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(281).to({_off:false},0).to({alpha:1},36).to({x:524.6,y:226.6},26).to({x:823.5,y:462},25).to({x:676.5,y:538},17).to({x:210.4,y:226.6},37).to({x:183.6,y:256.3},5).to({x:481.6,y:538},22).to({x:735.5,y:226.6},27).to({x:823.5,y:496.6},24).to({x:775.5,y:538},9).to({x:676.5,y:226.6},23).to({x:514.5,y:538},22).to({x:378.5,y:226.6},24).to({x:259.5,y:542.6},24).to({x:183.6,y:226.6},23).to({x:307.6,y:538},24).to({x:449.7,y:226.6},22).to({x:657.7,y:538},23).to({x:809.8,y:226.6},23).to({x:823.8,y:250.6},7).to({x:687.8,y:538},21).to({x:545.7,y:226.6},24).wait(1).to({x:403.7,y:538},28).to({x:303.7,y:226.6,alpha:0},19).to({_off:true},25).wait(2248));

	// 1
	this.instance_22 = new lib._1();
	this.instance_22.setTransform(500,383.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(46).to({_off:false},0).to({alpha:1},56).wait(138).to({alpha:0},37).to({_off:true},2).wait(2811));

	// assets
	this.instance_23 = new lib.groovyblends_0014_sw();
	this.instance_23.setTransform(397.3,-626.6);

	this.instance_24 = new lib.groovyblends_0013_tw();
	this.instance_24.setTransform(397.3,-626.6);

	this.instance_25 = new lib.groovyblends_0012_ch();
	this.instance_25.setTransform(397.3,-626.6);

	this.instance_26 = new lib.groovyblends_0011_th();
	this.instance_26.setTransform(397.3,-626.6);

	this.instance_27 = new lib.groovyblends_0010_st();
	this.instance_27.setTransform(397.3,-626.6);

	this.instance_28 = new lib.groovyblends_0009_gr();
	this.instance_28.setTransform(397.3,-626.6);

	this.instance_29 = new lib.GB_0049_g();
	this.instance_29.setTransform(131.9,-618.6);

	this.instance_30 = new lib.GB_0048_r();
	this.instance_30.setTransform(131.9,-618.6);

	this.instance_31 = new lib.GB_0047_s();
	this.instance_31.setTransform(131.9,-618.6);

	this.instance_32 = new lib.GB_0045_w();
	this.instance_32.setTransform(131.9,-618.6);

	this.instance_33 = new lib.GB_0044_t();
	this.instance_33.setTransform(131.9,-618.6);

	this.instance_34 = new lib.GB_0043_c();
	this.instance_34.setTransform(131.9,-618.6);

	this.instance_35 = new lib.GB_0042_h();
	this.instance_35.setTransform(131.9,-618.6);

	this.instance_36 = new lib.GB_0035_tw();
	this.instance_36.setTransform(-8.5,-153.5);

	this.instance_37 = new lib.GB_0034_ch();
	this.instance_37.setTransform(-8.5,-153.5);

	this.instance_38 = new lib.GB_0033_st();
	this.instance_38.setTransform(-8.5,-153.5);

	this.instance_39 = new lib.GB_0032_sw();
	this.instance_39.setTransform(-8.5,-153.5);

	this.instance_40 = new lib.GB_0031_gr();
	this.instance_40.setTransform(-8.5,-153.5);

	this.instance_41 = new lib.GB_0030_th();
	this.instance_41.setTransform(-8.5,-153.5);

	this.instance_42 = new lib.GB_0025_bigstockUsAirmailStamp55483874();
	this.instance_42.setTransform(681.4,-198);

	this.instance_43 = new lib.GB_0024_boyswimmingthumbsupgoggles();
	this.instance_43.setTransform(681.4,-198);

	this.instance_44 = new lib.GB_0023_insectmothgreen();
	this.instance_44.setTransform(681.4,-198);

	this.instance_45 = new lib.GB_0022_swansblackbabyswan();
	this.instance_45.setTransform(681.4,-198);

	this.instance_46 = new lib.GB_0021_bigstockBabysleepingonparentsknee49922384();
	this.instance_46.setTransform(681.4,-198);

	this.instance_47 = new lib.GB_0020_bigstockgoldheartshapedchristmasor52676335();
	this.instance_47.setTransform(681.4,-198);

	this.instance_48 = new lib.GB_0019_bigstockGreenseedlinggrowingfromso45185245();
	this.instance_48.setTransform(681.4,-198);

	this.instance_49 = new lib.GB_0018_bigstockHappyBoyWithPaperPlane54623480();
	this.instance_49.setTransform(681.4,-198);

	this.instance_50 = new lib.GB_0017_bigstockImageofhappytwinboyswith48624827();
	this.instance_50.setTransform(681.4,-198);

	this.instance_51 = new lib.GB_0016_bigstockLaughinglittlegirlinapink52526065();
	this.instance_51.setTransform(681.4,-198);

	this.instance_52 = new lib.GB_0015_bigstockMaleStudentWorkingAtDeskI38771890();
	this.instance_52.setTransform(681.4,-198);

	this.instance_53 = new lib.GB_0014_bigstockParentHoldsTheHandOfASma50833166();
	this.instance_53.setTransform(681.4,-198);

	this.instance_54 = new lib.GB_0013_bigstockPotatochipsinabowlonawo55217174();
	this.instance_54.setTransform(681.4,-198);

	this.instance_55 = new lib.GB_0012_bigstockRustySteelChainDetail47863130();
	this.instance_55.setTransform(681.4,-198);

	this.instance_56 = new lib.GB_0011_bigstockshipropesbordersonwoodbac39973174();
	this.instance_56.setTransform(681.4,-198);

	this.instance_57 = new lib.GB_0010_bigstockStopsignfortrafficagainst11904395();
	this.instance_57.setTransform(681.4,-198);

	this.instance_58 = new lib.GB_0009_bigstockthehandoftherunnergrabbin65481214();
	this.instance_58.setTransform(681.4,-198);

	this.instance_59 = new lib.GB_0008_bigstockGreenseedlinggrowingfromso45185245();
	this.instance_59.setTransform(681.4,-198);

	this.instance_60 = new lib.GB_0007_bigstockParentHoldsTheHandOfASma50833166();
	this.instance_60.setTransform(681.4,-198);

	this.instance_61 = new lib.GB_0006_bigstocktwounderwatergirls47131369();
	this.instance_61.setTransform(681.4,-198);

	this.instance_62 = new lib.GB_0023____ow();
	this.instance_62.setTransform(217.4,-161.5);

	this.instance_63 = new lib.GB_0022____o();
	this.instance_63.setTransform(217.4,-161.5);

	this.instance_64 = new lib.GB_0021____im();
	this.instance_64.setTransform(217.4,-161.5);

	this.instance_65 = new lib.GB_0020____ip();
	this.instance_65.setTransform(217.4,-161.5);

	this.instance_66 = new lib.GB_0019____in();
	this.instance_66.setTransform(217.4,-161.5);

	this.instance_67 = new lib.GB_0018____op();
	this.instance_67.setTransform(217.4,-161.5);

	this.instance_68 = new lib.GB_0017____ink();
	this.instance_68.setTransform(217.4,-161.5);

	this.instance_69 = new lib.GB_0016____een();
	this.instance_69.setTransform(217.4,-161.5);

	this.instance_70 = new lib.GB_0015____an();
	this.instance_70.setTransform(217.4,-161.5);

	this.instance_71 = new lib.GB_0014____ar();
	this.instance_71.setTransform(217.4,-161.5);

	this.instance_72 = new lib.GB_0013____umb();
	this.instance_72.setTransform(217.4,-161.5);

	this.instance_73 = new lib.GB_0012____ain();
	this.instance_73.setTransform(217.4,-161.5);

	this.instance_74 = new lib.GB_0011____ist();
	this.instance_74.setTransform(217.4,-161.5);

	this.instance_75 = new lib.GB_0010____ab();
	this.instance_75.setTransform(217.4,-161.5);

	this.instance_76 = new lib.GB_0009____row();
	this.instance_76.setTransform(217.4,-161.5);

	this.instance_77 = new lib.GB_0008____in();
	this.instance_77.setTransform(217.4,-161.5);

	this.instance_78 = new lib.GB_0007____ing();
	this.instance_78.setTransform(217.4,-161.5);

	this.instance_79 = new lib.GB_0006____amp();
	this.instance_79.setTransform(217.4,-161.5);

	this.instance_80 = new lib.parrot();
	this.instance_80.setTransform(1096,33.1);

	this.start = new lib.start();
	this.start.setTransform(971,-250.3,1,1,0,0,0,85,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]}).wait(3090));

	// top_panel
	this.instance_81 = new lib.groovyblends();

	this.instance_82 = new lib.groovyblendsact();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_81}]}).to({state:[{t:this.instance_82}]},2702).to({state:[{t:this.instance_81}]},3).wait(385));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).wait(3090));

	// bottom_panel
	this.instance_83 = new lib.Bottom_Activity_Bar();
	this.instance_83.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_83}]}).wait(3090));

	// bg
	this.instance_84 = new lib.GB_0012_bigstockredeyedtreefrogpeepingcur36366121();
	this.instance_84.setTransform(0,56);

	this.instance_85 = new lib.GB_0019_bigstockTwohorsesstandingongreenb46906210();
	this.instance_85.setTransform(0,56);

	this.instance_86 = new lib.GB_0005_bigstockSmallchihuahuadogstandingo52879636();
	this.instance_86.setTransform(0,52.5);

	this.instance_87 = new lib.GB_0034_bigstockHawaiianGreenSeaTurtle42231286();
	this.instance_87.setTransform(-1,58.5);

	this.instance_88 = new lib.GB_0008_bigstockBlackSheep54545801();
	this.instance_88.setTransform(0,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_84}]}).to({state:[{t:this.instance_85}]},1019).to({state:[{t:this.instance_86}]},8).to({state:[{t:this.instance_87}]},1675).to({state:[{t:this.instance_88}]},3).wait(385));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-626.6,1159.6,1421.7);


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


(lib.GB_0000_bigstockPortraitofhappypupillookin46987498 = function() {
	this.initialize(img.GB_0000_bigstockPortraitofhappypupillookin46987498);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,842,565);


(lib.GB_0001_bigstockHappyKidsPlayingLeapfrog4985508 = function() {
	this.initialize(img.GB_0001_bigstockHappyKidsPlayingLeapfrog4985508);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,860,577);


(lib.GB_0002_bigstockAsianGirl1479142 = function() {
	this.initialize(img.GB_0002_bigstockAsianGirl1479142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,589,417);


(lib.GB_0003_bigstockSmilingbrothers50202623 = function() {
	this.initialize(img.GB_0003_bigstockSmilingbrothers50202623);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,564,413);


(lib.GB_0004_bigstockSolvingaproblemforhomework51713875 = function() {
	this.initialize(img.GB_0004_bigstockSolvingaproblemforhomework51713875);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,846,567);


(lib.GB_0005_bigstockSmallchihuahuadogstandingo52879636 = function() {
	this.initialize(img.GB_0005_bigstockSmallchihuahuadogstandingo52879636);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.GB_0006____amp = function() {
	this.initialize(img.GB_0006____amp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,381,83);


(lib.GB_0006_bigstocktwounderwatergirls47131369 = function() {
	this.initialize(img.GB_0006_bigstocktwounderwatergirls47131369);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0007____ing = function() {
	this.initialize(img.GB_0007____ing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,104);


(lib.GB_0007_bigstockParentHoldsTheHandOfASma50833166 = function() {
	this.initialize(img.GB_0007_bigstockParentHoldsTheHandOfASma50833166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,153);


(lib.GB_0008____in = function() {
	this.initialize(img.GB_0008____in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,96);


(lib.GB_0008_bigstockBlackSheep54545801 = function() {
	this.initialize(img.GB_0008_bigstockBlackSheep54545801);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.GB_0008_bigstockGreenseedlinggrowingfromso45185245 = function() {
	this.initialize(img.GB_0008_bigstockGreenseedlinggrowingfromso45185245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,151);


(lib.GB_0009____row = function() {
	this.initialize(img.GB_0009____row);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,76);


(lib.GB_0009_bigstockthehandoftherunnergrabbin65481214 = function() {
	this.initialize(img.GB_0009_bigstockthehandoftherunnergrabbin65481214);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,151);


(lib.GB_0010____ab = function() {
	this.initialize(img.GB_0010____ab);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,95);


(lib.GB_0010_bigstockStopsignfortrafficagainst11904395 = function() {
	this.initialize(img.GB_0010_bigstockStopsignfortrafficagainst11904395);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0011____ist = function() {
	this.initialize(img.GB_0011____ist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,96);


(lib.GB_0011_bigstockHighFive2948644 = function() {
	this.initialize(img.GB_0011_bigstockHighFive2948644);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,803,579);


(lib.GB_0011_bigstockshipropesbordersonwoodbac39973174 = function() {
	this.initialize(img.GB_0011_bigstockshipropesbordersonwoodbac39973174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0012____ain = function() {
	this.initialize(img.GB_0012____ain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,96);


(lib.GB_0012_bigstockredeyedtreefrogpeepingcur36366121 = function() {
	this.initialize(img.GB_0012_bigstockredeyedtreefrogpeepingcur36366121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.GB_0012_bigstockRustySteelChainDetail47863130 = function() {
	this.initialize(img.GB_0012_bigstockRustySteelChainDetail47863130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0013____umb = function() {
	this.initialize(img.GB_0013____umb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,95);


(lib.GB_0013_bigstockPotatochipsinabowlonawo55217174 = function() {
	this.initialize(img.GB_0013_bigstockPotatochipsinabowlonawo55217174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0014____ar = function() {
	this.initialize(img.GB_0014____ar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,76);


(lib.GB_0014_bigstockParentHoldsTheHandOfASma50833166 = function() {
	this.initialize(img.GB_0014_bigstockParentHoldsTheHandOfASma50833166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0015____an = function() {
	this.initialize(img.GB_0015____an);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,76);


(lib.GB_0015_bigstockMaleStudentWorkingAtDeskI38771890 = function() {
	this.initialize(img.GB_0015_bigstockMaleStudentWorkingAtDeskI38771890);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0016____een = function() {
	this.initialize(img.GB_0016____een);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,76);


(lib.GB_0016_bigstockLaughinglittlegirlinapink52526065 = function() {
	this.initialize(img.GB_0016_bigstockLaughinglittlegirlinapink52526065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0017____ink = function() {
	this.initialize(img.GB_0017____ink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,96);


(lib.GB_0017_bigstockImageofhappytwinboyswith48624827 = function() {
	this.initialize(img.GB_0017_bigstockImageofhappytwinboyswith48624827);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0018____op = function() {
	this.initialize(img.GB_0018____op);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,83);


(lib.GB_0018_bigstockHappyBoyWithPaperPlane54623480 = function() {
	this.initialize(img.GB_0018_bigstockHappyBoyWithPaperPlane54623480);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0019____in = function() {
	this.initialize(img.GB_0019____in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,96);


(lib.GB_0019_bigstockGreenseedlinggrowingfromso45185245 = function() {
	this.initialize(img.GB_0019_bigstockGreenseedlinggrowingfromso45185245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0019_bigstockTwohorsesstandingongreenb46906210 = function() {
	this.initialize(img.GB_0019_bigstockTwohorsesstandingongreenb46906210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.GB_0020____ip = function() {
	this.initialize(img.GB_0020____ip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,103);


(lib.GB_0020_bigstockgoldheartshapedchristmasor52676335 = function() {
	this.initialize(img.GB_0020_bigstockgoldheartshapedchristmasor52676335);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0021____im = function() {
	this.initialize(img.GB_0021____im);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,96);


(lib.GB_0021_bigstockBabysleepingonparentsknee49922384 = function() {
	this.initialize(img.GB_0021_bigstockBabysleepingonparentsknee49922384);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0022____o = function() {
	this.initialize(img.GB_0022____o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,76);


(lib.GB_0022_swansblackbabyswan = function() {
	this.initialize(img.GB_0022_swansblackbabyswan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0023____ow = function() {
	this.initialize(img.GB_0023____ow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,76);


(lib.GB_0023_insectmothgreen = function() {
	this.initialize(img.GB_0023_insectmothgreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0024_boyswimmingthumbsupgoggles = function() {
	this.initialize(img.GB_0024_boyswimmingthumbsupgoggles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0024_th = function() {
	this.initialize(img.GB_0024_th);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,86);


(lib.GB_0025_bigstockUsAirmailStamp55483874 = function() {
	this.initialize(img.GB_0025_bigstockUsAirmailStamp55483874);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,152);


(lib.GB_0025_gr = function() {
	this.initialize(img.GB_0025_gr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,88);


(lib.GB_0026_HiRes = function() {
	this.initialize(img.GB_0026_HiRes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,615);


(lib.GB_0026_sw = function() {
	this.initialize(img.GB_0026_sw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,69);


(lib.GB_0027_st = function() {
	this.initialize(img.GB_0027_st);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,87);


(lib.GB_0028_ch = function() {
	this.initialize(img.GB_0028_ch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,88);


(lib.GB_0029_tw = function() {
	this.initialize(img.GB_0029_tw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,61);


(lib.GB_0030_th = function() {
	this.initialize(img.GB_0030_th);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,62);


(lib.GB_0031_gr = function() {
	this.initialize(img.GB_0031_gr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,63);


(lib.GB_0032_sw = function() {
	this.initialize(img.GB_0032_sw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,50);


(lib.GB_0033_st = function() {
	this.initialize(img.GB_0033_st);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,62);


(lib.GB_0034_bigstockHawaiianGreenSeaTurtle42231286 = function() {
	this.initialize(img.GB_0034_bigstockHawaiianGreenSeaTurtle42231286);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.GB_0034_ch = function() {
	this.initialize(img.GB_0034_ch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,63);


(lib.GB_0035_bigstockBloomingPeachTrees45257104 = function() {
	this.initialize(img.GB_0035_bigstockBloomingPeachTrees45257104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.GB_0035_tw = function() {
	this.initialize(img.GB_0035_tw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,61);


(lib.GB_0036_bigstockRipeplumshangingfromatree49076081 = function() {
	this.initialize(img.GB_0036_bigstockRipeplumshangingfromatree49076081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,643);


(lib.GB_0042_h = function() {
	this.initialize(img.GB_0042_h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,208);


(lib.GB_0043_c = function() {
	this.initialize(img.GB_0043_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,160);


(lib.GB_0044_t = function() {
	this.initialize(img.GB_0044_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,205);


(lib.GB_0045_w = function() {
	this.initialize(img.GB_0045_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,152);


(lib.GB_0047_s = function() {
	this.initialize(img.GB_0047_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,160);


(lib.GB_0048_r = function() {
	this.initialize(img.GB_0048_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,156);


(lib.GB_0049_g = function() {
	this.initialize(img.GB_0049_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,213);


(lib.greenCircle = function() {
	this.initialize(img.greenCircle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,90);


(lib.groovyblends = function() {
	this.initialize(img.groovyblends);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.groovyblends_0000_GB_0036_bigstockRipeplumshangingfromatree49076081 = function() {
	this.initialize(img.groovyblends_0000_GB_0036_bigstockRipeplumshangingfromatree49076081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.groovyblends_0009_gr = function() {
	this.initialize(img.groovyblends_0009_gr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,228);


(lib.groovyblends_0010_st = function() {
	this.initialize(img.groovyblends_0010_st);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,225);


(lib.groovyblends_0011_th = function() {
	this.initialize(img.groovyblends_0011_th);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,223);


(lib.groovyblends_0012_ch = function() {
	this.initialize(img.groovyblends_0012_ch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,227);


(lib.groovyblends_0013_tw = function() {
	this.initialize(img.groovyblends_0013_tw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,221);


(lib.groovyblends_0014_sw = function() {
	this.initialize(img.groovyblends_0014_sw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,171);


(lib.groovyblendsact = function() {
	this.initialize(img.groovyblendsact);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


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

	// Layer 2
	this.instance = new lib.GB_0003_bigstockSmilingbrothers50202623();
	this.instance.setTransform(-267.9,-217.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-267.9,-217.4,564,413);


(lib._25 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.GB_0002_bigstockAsianGirl1479142();
	this.instance.setTransform(-294.1,-208.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-294.1,-208.1,589,417);


(lib._23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0001_bigstockHappyKidsPlayingLeapfrog4985508();
	this.instance.setTransform(-429.9,-288.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-429.9,-288.4,860,577);


(lib._17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0019_bigstockGreenseedlinggrowingfromso45185245();
	this.instance.setTransform(-81.6,-75.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.6,-75.6,164,152);


(lib._14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0030_th();
	this.instance.setTransform(-34.4,-33.4);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0033_st();
	this.instance.setTransform(-29.9,-35.4);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0031_gr();
	this.instance.setTransform(-38.4,-29.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0032_sw();
	this.instance.setTransform(-46.4,-23.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0034_ch();
	this.instance.setTransform(-48.4,-36.9);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.4,-44.9,95,90);


(lib._9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0035_tw();
	this.instance.setTransform(-40.1,-34.1);

	// bg
	this.instance_1 = new lib.greenCircle();
	this.instance_1.setTransform(-46.4,-44.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-44.9,93,90);


(lib._8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GB_0026_HiRes();
	this.instance.setTransform(-203.4,-307.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.4,-307.4,407,615);


(lib._6 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.GB_0004_bigstockSolvingaproblemforhomework51713875();
	this.instance.setTransform(-412.9,-277.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-412.9,-277.4,846,567);


(lib._5 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.GB_0000_bigstockPortraitofhappypupillookin46987498();
	this.instance.setTransform(-415,-292.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-415,-292.4,842,565);


(lib._4 = function() {
	this.initialize();

	// th
	this.instance = new lib.groovyblends_0011_th();
	this.instance.setTransform(-124.4,-119.1);

	// bg
	this.instance_1 = new lib.whiteCircle_small();
	this.instance_1.setTransform(-183.1,-170.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.1,-170.1,367,341);


(lib._3 = function() {
	this.initialize();

	// st
	this.instance = new lib.groovyblends_0010_st();
	this.instance.setTransform(-107.9,-120.4);

	// bg
	this.instance_1 = new lib.whiteCircle_small();
	this.instance_1.setTransform(-183,-170.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183,-170.1,367,341);


(lib._2 = function() {
	this.initialize();

	// gr
	this.instance = new lib.groovyblends_0009_gr();
	this.instance.setTransform(-137.1,-90);

	// bg
	this.instance_1 = new lib.whiteCircle_small();
	this.instance_1.setTransform(-183.1,-170.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.1,-170.1,367,341);


(lib._1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.GB_0011_bigstockHighFive2948644();
	this.instance.setTransform(-401.4,-289.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-401.4,-289.4,803,579);


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