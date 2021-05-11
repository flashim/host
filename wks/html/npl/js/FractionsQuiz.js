(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.FractionsQuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{activity:670,conclusion:675});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
		playSound("Introduction");
	}
	this.frame_670 = function() {
		canvasStageRef.onActivity(this);
	}
	this.frame_1135 = function() {
		this.stop();
		canvasStageRef.onCloseActivity(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(670).call(this.frame_670).wait(465).call(this.frame_1135));

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.setTransform(498.7,374.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(931).wait(1).to({_off:false},0).to({alpha:1},17).wait(187));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(501.6,379.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(689).to({_off:false},0).to({alpha:1},28).wait(201).to({alpha:0},20).wait(198));

	// Layer 4
	this.instance_2 = new lib.paintbrush();
	this.instance_2.setTransform(639.5,630.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(395).to({x:503.3,y:471.3},11).wait(11).to({x:623.5,y:307},10).wait(242).to({x:696.9,y:933.8},0).wait(467));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#33CC00").beginStroke().moveTo(-0.4,115.8).curveTo(-97.2,115.8,-165.7,47.6).curveTo(-188,25.3,-203.1,0).lineTo(4.2,-115.8).lineTo(203.1,-1.4).curveTo(187.8,24.7,164.9,47.6).curveTo(97.6,114.7,2.7,115.8).lineTo(-0.4,115.8).closePath();
	this.shape.setTransform(497.2,436);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(102,255,102,0.498)").beginStroke().moveTo(-0.7,-0.9).lineTo(0.7,0).lineTo(-0.7,0.9).closePath();
	this.shape_1.setTransform(500.8,317.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#33CC00").beginStroke().moveTo(-17.1,236).curveTo(-113.9,236,-182.3,167.8).curveTo(-204.7,145.5,-219.8,120.2).lineTo(-12.4,4.3).lineTo(186.4,118.8).curveTo(171.2,144.9,148.2,167.8).curveTo(80.9,234.9,-13.9,236).lineTo(-17.1,236).closePath().moveTo(-14.8,0.1).lineTo(-14.8,-236).curveTo(81.6,-234.9,150.1,-167).curveTo(219.8,-98,219.8,-0.3).curveTo(219.8,64.6,189,116.9).closePath();
	this.shape_2.setTransform(513.8,315.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},406).to({state:[{t:this.shape_2},{t:this.shape_1}]},21).to({state:[]},242).wait(467));

	// arrow
	this.instance_3 = new lib.cursor_mc();
	this.instance_3.setTransform(984.1,-51.1,1,1,0,0,0,13.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},669).wait(467));

	// diagrams
	this.fivetenth_mc = new lib.tenth_mc();
	this.fivetenth_mc.setTransform(1226,-499.7);

	this.threeseventh_mc = new lib.threeseventh_mc();
	this.threeseventh_mc.setTransform(1100.5,-499.2);

	this.foursixth_mc = new lib.foursixth_mc();
	this.foursixth_mc.setTransform(975.4,-499.7);

	this.twofourth_mc = new lib.twofourth_mc();
	this.twofourth_mc.setTransform(850.3,-499.7);

	this.tenth_mc = new lib.tenth_mc();
	this.tenth_mc.setTransform(725.2,-499.7);

	this.ninth_mc = new lib.ninth_mc();
	this.ninth_mc.setTransform(600.1,-499.7);

	this.eighth_mc = new lib.eighth_mc();
	this.eighth_mc.setTransform(475,-499.7);

	this.seventh_mc = new lib.seventh_mc();
	this.seventh_mc.setTransform(349.9,-499.2);

	this.sixth_mc = new lib.sixth_mc();
	this.sixth_mc.setTransform(224.8,-499.7);

	this.fifth_mc = new lib.fifth_mc();
	this.fifth_mc.setTransform(99.7,-500.2);

	this.third_mc = new lib.third_mc();
	this.third_mc.setTransform(-25.3,-499.2);

	this.fourth_mc = new lib.fourth_mc();
	this.fourth_mc.setTransform(-150.4,-499.7);

	this.half_mc = new lib.half_mc();
	this.half_mc.setTransform(-275.5,-499.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.half_mc},{t:this.fourth_mc},{t:this.third_mc},{t:this.fifth_mc},{t:this.sixth_mc},{t:this.seventh_mc},{t:this.eighth_mc},{t:this.ninth_mc},{t:this.tenth_mc},{t:this.twofourth_mc},{t:this.foursixth_mc},{t:this.threeseventh_mc},{t:this.fivetenth_mc}]}).wait(1136));

	// assets
	this.instance_4 = new lib.fractionsquiz_0001_2_3();
	this.instance_4.setTransform(794.5,292.9);

	this.instance_5 = new lib.fractionsquiz_0001_2_3();
	this.instance_5.setTransform(71.3,292.9);

	this.instance_6 = new lib.fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg();
	this.instance_6.setTransform(256.9,75.8);

	this.instance_7 = new lib.fractionsquiz_0046_Shape2();
	this.instance_7.setTransform(0,270.9);

	this.instance_8 = new lib.checkmarkfractionsquiz();
	this.instance_8.setTransform(457.1,607.6);

	this.instance_9 = new lib.fractionsquiz_0045_Shape1();
	this.instance_9.setTransform(256.9,75.9);

	this.instance_10 = new lib.fractionsquiz_0041_1_2();
	this.instance_10.setTransform(-511.5,899.7);

	this.instance_11 = new lib.fractionsquiz_0039_1_4();
	this.instance_11.setTransform(-511.5,646);

	this.instance_12 = new lib.fractionsquiz_0037_1_3();
	this.instance_12.setTransform(-511.5,836);

	this.instance_13 = new lib.fractionsquiz_0035_1_5();
	this.instance_13.setTransform(-511.5,202.5);

	this.instance_14 = new lib.fractionsquiz_0034_1_8();
	this.instance_14.setTransform(-511.5,709.3);

	this.instance_15 = new lib.fractionsquiz_0033_2_4();
	this.instance_15.setTransform(-511.5,-114.2);

	this.instance_16 = new lib.fractionsquiz_0031_1_9();
	this.instance_16.setTransform(-511.5,12.5);

	this.instance_17 = new lib.fractionsquiz_0030_3_7();
	this.instance_17.setTransform(-511.5,75.8);

	this.instance_18 = new lib.fractionsquiz_0029_5_10();
	this.instance_18.setTransform(-511.5,139.2);

	this.instance_19 = new lib.fractionsquiz_0027_1_10();
	this.instance_19.setTransform(-511.5,265.9);

	this.instance_20 = new lib.fractionsquiz_0024_2_4();
	this.instance_20.setTransform(-511.5,392.6);

	this.instance_21 = new lib.fractionsquiz_0023_4_6();
	this.instance_21.setTransform(-511.5,455.9);

	this.instance_22 = new lib.fractionsquiz_0022_5_10();
	this.instance_22.setTransform(-511.5,519.3);

	this.instance_23 = new lib.fractionsquiz_0021_3_7();
	this.instance_23.setTransform(-511.5,582.6);

	this.instance_24 = new lib.fractionsquiz_0018_1_6();
	this.instance_24.setTransform(-511.5,772.7);

	this.instance_25 = new lib.fractionsquiz_0016_1_7();
	this.instance_25.setTransform(-511.5,-50.8);

	this.instance_26 = new lib.fractionsquiz_0006_Layer6();
	this.instance_26.setTransform(79.8,582.6);

	this.instance_27 = new lib.fractionsquiz_0005_Layer5();
	this.instance_27.setTransform(816,582.6);

	this.instance_28 = new lib.fractionsquiz_0004_Layer4();
	this.instance_28.setTransform(192.2,582.6);

	this.instance_29 = new lib.fractionsquiz_0002_Layer3();
	this.instance_29.setTransform(303.1,582.6);

	this.instance_30 = new lib.fractionsquiz_0000_Layer1();
	this.instance_30.setTransform(710,582.6);

	this.instance_31 = new lib.fractionsquiz_0043_bigstockFriendsoutdoor15439775();
	this.instance_31.setTransform(1046.9,-9.9);

	this.instance_32 = new lib.fractionsquiz_0042_bigstockKidsDoingMathExercisesWith6664485();
	this.instance_32.setTransform(1041.6,140.7);

	this.start = new lib.start();
	this.start.setTransform(928.6,-57.6,1,1,0,0,0,85,42.5);

	this.instance_33 = new lib.fractionsquiz_0001_Layer2();
	this.instance_33.setTransform(457.2,-114.2);

	this.instance_34 = new lib.fractionsquiz_0000_2_8();
	this.instance_34.setTransform(-510.5,978.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{x:710,y:582.6}},{t:this.instance_29,p:{x:303.1,y:582.6}},{t:this.instance_28,p:{x:192.2,y:582.6}},{t:this.instance_27,p:{x:816,y:582.6}},{t:this.instance_26,p:{x:79.8,y:582.6}},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{x:256.9,y:75.9}},{t:this.instance_8,p:{x:457.1,y:607.6}},{t:this.instance_7,p:{x:0,y:270.9}},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{x:794.5,y:292.9}}]}).to({state:[{t:this.start},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{x:776,y:887.8}},{t:this.instance_29,p:{x:369.1,y:887.8}},{t:this.instance_28,p:{x:258.2,y:887.8}},{t:this.instance_27,p:{x:882,y:887.8}},{t:this.instance_26,p:{x:145.8,y:887.8}},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_8,p:{x:523.1,y:912.8}},{t:this.instance_7,p:{x:8,y:772.7}},{t:this.instance_4,p:{x:-503.5,y:323}}]},669).to({state:[{t:this.start},{t:this.instance_30,p:{x:604.6,y:-114.2}},{t:this.instance_33},{t:this.instance_29,p:{x:309.8,y:-114.2}},{t:this.instance_28,p:{x:162.9,y:-114.2}},{t:this.instance_27,p:{x:750.7,y:-114.2}},{t:this.instance_26,p:{x:14.5,y:-114.2}},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{x:1037.4,y:851.7}},{t:this.instance_7,p:{x:0,y:270.9}},{t:this.instance_4,p:{x:-513.5,y:326.9}},{t:this.instance_8,p:{x:877.5,y:-217}}]},1).to({state:[{t:this.start},{t:this.instance_30,p:{x:604.6,y:-114.2}},{t:this.instance_33},{t:this.instance_29,p:{x:309.8,y:-114.2}},{t:this.instance_28,p:{x:162.9,y:-114.2}},{t:this.instance_27,p:{x:750.7,y:-114.2}},{t:this.instance_26,p:{x:14.5,y:-114.2}},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{x:1037.4,y:851.7}},{t:this.instance_4,p:{x:-513.5,y:326.9}},{t:this.instance_8,p:{x:877.5,y:-217}},{t:this.instance_34}]},5).wait(461));

	// top_panel
	this.instance_35 = new lib.fractionsquiz();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35}]}).wait(1136));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).wait(1136));

	// bottom_panel
	this.instance_36 = new lib.Bottom_Activity_Bar();
	this.instance_36.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36}]}).wait(1136));

	// bg
	this.instance_37 = new lib.fractionsquiz_0048_3525054487_8cfe37a361_o();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37}]}).wait(1136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.5,-740.7,2473.2,1719.5);


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


(lib.checkmarkfractionsquiz = function() {
	this.initialize(img.checkmarkfractionsquiz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,74);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.eig1 = function() {
	this.initialize(img.eig1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,234);


(lib.eig2 = function() {
	this.initialize(img.eig2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,170);


(lib.eig3 = function() {
	this.initialize(img.eig3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,172);


(lib.eig4 = function() {
	this.initialize(img.eig4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,236);


(lib.eig5 = function() {
	this.initialize(img.eig5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,239);


(lib.eig6 = function() {
	this.initialize(img.eig6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,168);


(lib.eig7 = function() {
	this.initialize(img.eig7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,164);


(lib.eig8 = function() {
	this.initialize(img.eig8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,236);


(lib.f1 = function() {
	this.initialize(img.f1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,234);


(lib.f2 = function() {
	this.initialize(img.f2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,237);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,237);


(lib.f4 = function() {
	this.initialize(img.f4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,234);


(lib.fi1 = function() {
	this.initialize(img.fi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,237);


(lib.fi2 = function() {
	this.initialize(img.fi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,271);


(lib.fi3 = function() {
	this.initialize(img.fi3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,242);


(lib.fi4 = function() {
	this.initialize(img.fi4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,271);


(lib.fi5 = function() {
	this.initialize(img.fi5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,234);


(lib.fours1 = function() {
	this.initialize(img.fours1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,236);


(lib.fours2 = function() {
	this.initialize(img.fours2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,238);


(lib.fours3 = function() {
	this.initialize(img.fours3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,240);


(lib.fours4 = function() {
	this.initialize(img.fours4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,240);


(lib.fours5 = function() {
	this.initialize(img.fours5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,239);


(lib.fours6 = function() {
	this.initialize(img.fours6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,236);


(lib.fractionsquiz = function() {
	this.initialize(img.fractionsquiz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.fractionsquiz_0000_2_8 = function() {
	this.initialize(img.fractionsquiz_0000_2_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,79);


(lib.fractionsquiz_0000_Layer1 = function() {
	this.initialize(img.fractionsquiz_0000_Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,94);


(lib.fractionsquiz_0001_2_3 = function() {
	this.initialize(img.fractionsquiz_0001_2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,79);


(lib.fractionsquiz_0001_Layer2 = function() {
	this.initialize(img.fractionsquiz_0001_Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,96);


(lib.fractionsquiz_0002_Layer3 = function() {
	this.initialize(img.fractionsquiz_0002_Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,97);


(lib.fractionsquiz_0004_Layer4 = function() {
	this.initialize(img.fractionsquiz_0004_Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,97);


(lib.fractionsquiz_0005_Layer5 = function() {
	this.initialize(img.fractionsquiz_0005_Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,99);


(lib.fractionsquiz_0006_Layer6 = function() {
	this.initialize(img.fractionsquiz_0006_Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,97);


(lib.fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg = function() {
	this.initialize(img.fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,483,483);


(lib.fractionsquiz_0008_fabfracts_0052_pie_0109a_40600_lg = function() {
	this.initialize(img.fractionsquiz_0008_fabfracts_0052_pie_0109a_40600_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,482);


(lib.fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg = function() {
	this.initialize(img.fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,483);


(lib.fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg = function() {
	this.initialize(img.fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,482);


(lib.fractionsquiz_0011_fabfracts_0044_pie_0105a_40551_lg = function() {
	this.initialize(img.fractionsquiz_0011_fabfracts_0044_pie_0105a_40551_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,481);


(lib.fractionsquiz_0012_fabfracts_0043_pie_0108a_40582_lg = function() {
	this.initialize(img.fractionsquiz_0012_fabfracts_0043_pie_0108a_40582_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,482);


(lib.fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg = function() {
	this.initialize(img.fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,483,482);


(lib.fractionsquiz_0016_1_7 = function() {
	this.initialize(img.fractionsquiz_0016_1_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,79);


(lib.fractionsquiz_0018_1_6 = function() {
	this.initialize(img.fractionsquiz_0018_1_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,79);


(lib.fractionsquiz_0021_3_7 = function() {
	this.initialize(img.fractionsquiz_0021_3_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,79);


(lib.fractionsquiz_0022_5_10 = function() {
	this.initialize(img.fractionsquiz_0022_5_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,79);


(lib.fractionsquiz_0023_4_6 = function() {
	this.initialize(img.fractionsquiz_0023_4_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,79);


(lib.fractionsquiz_0024_2_4 = function() {
	this.initialize(img.fractionsquiz_0024_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,79);


(lib.fractionsquiz_0027_1_10 = function() {
	this.initialize(img.fractionsquiz_0027_1_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,79);


(lib.fractionsquiz_0029_5_10 = function() {
	this.initialize(img.fractionsquiz_0029_5_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,79);


(lib.fractionsquiz_0030_3_7 = function() {
	this.initialize(img.fractionsquiz_0030_3_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,79);


(lib.fractionsquiz_0031_1_9 = function() {
	this.initialize(img.fractionsquiz_0031_1_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,79);


(lib.fractionsquiz_0033_2_4 = function() {
	this.initialize(img.fractionsquiz_0033_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,79);


(lib.fractionsquiz_0034_1_8 = function() {
	this.initialize(img.fractionsquiz_0034_1_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,79);


(lib.fractionsquiz_0035_1_5 = function() {
	this.initialize(img.fractionsquiz_0035_1_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,79);


(lib.fractionsquiz_0037_1_3 = function() {
	this.initialize(img.fractionsquiz_0037_1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,79);


(lib.fractionsquiz_0039_1_4 = function() {
	this.initialize(img.fractionsquiz_0039_1_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,79);


(lib.fractionsquiz_0041_1_2 = function() {
	this.initialize(img.fractionsquiz_0041_1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,79);


(lib.fractionsquiz_0042_bigstockKidsDoingMathExercisesWith6664485 = function() {
	this.initialize(img.fractionsquiz_0042_bigstockKidsDoingMathExercisesWith6664485);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,915,632);


(lib.fractionsquiz_0043_bigstockFriendsoutdoor15439775 = function() {
	this.initialize(img.fractionsquiz_0043_bigstockFriendsoutdoor15439775);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,897,597);


(lib.fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg = function() {
	this.initialize(img.fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,482);


(lib.fractionsquiz_0045_Shape1 = function() {
	this.initialize(img.fractionsquiz_0045_Shape1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,477,476);


(lib.fractionsquiz_0046_Shape2 = function() {
	this.initialize(img.fractionsquiz_0046_Shape2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,101);


(lib.fractionsquiz_0048_3525054487_8cfe37a361_o = function() {
	this.initialize(img.fractionsquiz_0048_3525054487_8cfe37a361_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,739);


(lib.half = function() {
	this.initialize(img.half);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,482);


(lib.half1 = function() {
	this.initialize(img.half1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,478);


(lib.half2 = function() {
	this.initialize(img.half2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,478);


(lib.nin1 = function() {
	this.initialize(img.nin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,236);


(lib.nin2 = function() {
	this.initialize(img.nin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,185);


(lib.nin3 = function() {
	this.initialize(img.nin3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,162);


(lib.nin4 = function() {
	this.initialize(img.nin4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,225);


(lib.nin5 = function() {
	this.initialize(img.nin5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,237);


(lib.nin6 = function() {
	this.initialize(img.nin6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,225);


(lib.nin7 = function() {
	this.initialize(img.nin7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,164);


(lib.nin8 = function() {
	this.initialize(img.nin8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,182);


(lib.nin9 = function() {
	this.initialize(img.nin9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,235);


(lib.sev1 = function() {
	this.initialize(img.sev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,233);


(lib.sev2 = function() {
	this.initialize(img.sev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,202);


(lib.sev3 = function() {
	this.initialize(img.sev3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,216);


(lib.sev4 = function() {
	this.initialize(img.sev4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,237);


(lib.sev5 = function() {
	this.initialize(img.sev5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,219);


(lib.sev6 = function() {
	this.initialize(img.sev6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,198);


(lib.sev7 = function() {
	this.initialize(img.sev7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,234);


(lib.si1 = function() {
	this.initialize(img.si1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,234);


(lib.si2 = function() {
	this.initialize(img.si2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,239);


(lib.si3 = function() {
	this.initialize(img.si3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,236);


(lib.si4 = function() {
	this.initialize(img.si4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,238);


(lib.si5 = function() {
	this.initialize(img.si5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,238);


(lib.si6 = function() {
	this.initialize(img.si6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,236);


(lib.te1 = function() {
	this.initialize(img.te1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,235);


(lib.te10 = function() {
	this.initialize(img.te10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,235);


(lib.te2 = function() {
	this.initialize(img.te2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,192);


(lib.te3 = function() {
	this.initialize(img.te3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,147);


(lib.te4 = function() {
	this.initialize(img.te4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,196);


(lib.te5 = function() {
	this.initialize(img.te5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,240);


(lib.te6 = function() {
	this.initialize(img.te6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,239);


(lib.te7 = function() {
	this.initialize(img.te7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,195);


(lib.te8 = function() {
	this.initialize(img.te8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,145);


(lib.te9 = function() {
	this.initialize(img.te9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,190);


(lib.th1 = function() {
	this.initialize(img.th1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,240);


(lib.th2 = function() {
	this.initialize(img.th2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.th3 = function() {
	this.initialize(img.th3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,360);


(lib.threes1 = function() {
	this.initialize(img.threes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,236);


(lib.threes2 = function() {
	this.initialize(img.threes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,201);


(lib.threes3 = function() {
	this.initialize(img.threes3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,214);


(lib.threes4 = function() {
	this.initialize(img.threes4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,237);


(lib.threes5 = function() {
	this.initialize(img.threes5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,215);


(lib.threes6 = function() {
	this.initialize(img.threes6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,202);


(lib.threes7 = function() {
	this.initialize(img.threes7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,236);


(lib.twof1 = function() {
	this.initialize(img.twof1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,234);


(lib.twof2 = function() {
	this.initialize(img.twof2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,242);


(lib.twof3 = function() {
	this.initialize(img.twof3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,242);


(lib.twof4 = function() {
	this.initialize(img.twof4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,234);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0043_bigstockFriendsoutdoor15439775();
	this.instance.setTransform(-448.4,-298.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-448.4,-298.4,897,597);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0042_bigstockKidsDoingMathExercisesWith6664485();
	this.instance.setTransform(-457.4,-315.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-457.4,-315.9,915,632);


(lib.paintbrush = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0001_Layer2();
	this.instance.setTransform(-36.9,-47.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.9,-47.9,74,96);


(lib.ts7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes7();
	this.instance.setTransform(-92.4,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-117.9,185,236);


(lib.ts6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes6();
	this.instance.setTransform(-117.4,-100.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.4,-100.9,235,202);


(lib.ts5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes5();
	this.instance.setTransform(-114.9,-107.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.9,-107.4,230,215);


(lib.ts4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes4();
	this.instance.setTransform(-103.9,-118.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.9,-118.4,208,237);


(lib.ts3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes3();
	this.instance.setTransform(-116.9,-106.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-106.9,234,214);


(lib.ts2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes2();
	this.instance.setTransform(-118.9,-100.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.9,-100.4,238,201);


(lib.ts1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.threes1();
	this.instance.setTransform(-92.9,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.9,-117.9,186,236);


(lib.fs6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fours6();
	this.instance.setTransform(-102.9,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.9,-117.9,206,236);


(lib.fs5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fours5();
	this.instance.setTransform(-118.9,-119.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.9,-119.4,238,239);


(lib.fs4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fours4();
	this.instance.setTransform(-103.4,-119.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.4,-119.9,207,240);


(lib.fs3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fours3();
	this.instance.setTransform(-103.9,-119.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.9,-119.9,208,240);


(lib.fs2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fours2();
	this.instance.setTransform(-118.9,-118.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.9,-118.9,238,238);


(lib.fs1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fours1();
	this.instance.setTransform(-102.9,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.9,-117.9,206,236);


(lib.tf4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.twof4();
	this.instance.setTransform(-117.9,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-116.9,236,234);


(lib.tf3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.twof3();
	this.instance.setTransform(-117.9,-120.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-120.9,236,242);


(lib.tf2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.twof2();
	this.instance.setTransform(-119.9,-120.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-120.9,240,242);


(lib.tf1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.twof1();
	this.instance.setTransform(-119.9,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-116.9,240,234);


(lib.t10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te10();
	this.instance.setTransform(-68.9,-117.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.9,-117.4,138,235);


(lib.t9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te9();
	this.instance.setTransform(-111.9,-94.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.9,-94.9,224,190);


(lib.t8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te8();
	this.instance.setTransform(-117.9,-72.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-72.4,236,145);


(lib.t7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te7();
	this.instance.setTransform(-113.4,-97.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.4,-97.4,227,195);


(lib.t6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te6();
	this.instance.setTransform(-69.4,-119.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.4,-119.4,139,239);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te5();
	this.instance.setTransform(-70.9,-119.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.9,-119.9,142,240);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te4();
	this.instance.setTransform(-114.4,-97.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.4,-97.9,229,196);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te3();
	this.instance.setTransform(-119.4,-73.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.4,-73.4,239,147);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te2();
	this.instance.setTransform(-113.4,-95.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.4,-95.9,227,192);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.te1();
	this.instance.setTransform(-69.4,-117.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.4,-117.4,139,235);


(lib.n9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin9();
	this.instance.setTransform(-74.4,-117.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.4,-117.4,149,235);


(lib.n8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin8();
	this.instance.setTransform(-114.9,-90.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.9,-90.9,230,182);


(lib.n7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin7();
	this.instance.setTransform(-116.9,-81.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-81.9,234,164);


(lib.n6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin6();
	this.instance.setTransform(-101.4,-112.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-112.4,203,225);


(lib.n5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin5();
	this.instance.setTransform(-81.9,-118.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.9,-118.4,164,237);


(lib.n4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin4();
	this.instance.setTransform(-104.9,-112.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.9,-112.4,210,225);


(lib.n3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin3();
	this.instance.setTransform(-119.9,-80.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-80.9,240,162);


(lib.n2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin2();
	this.instance.setTransform(-117.9,-92.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-92.4,236,185);


(lib.n1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nin1();
	this.instance.setTransform(-76.4,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.4,-117.9,153,236);


(lib.e8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig8();
	this.instance.setTransform(-83.9,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-117.9,168,236);


(lib.e7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig7();
	this.instance.setTransform(-115.9,-81.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.9,-81.9,232,164);


(lib.e6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig6();
	this.instance.setTransform(-116.4,-83.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.4,-83.9,233,168);


(lib.e5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig5();
	this.instance.setTransform(-83.9,-119.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-119.4,168,239);


(lib.e4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig4();
	this.instance.setTransform(-83.9,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-117.9,168,236);


(lib.e3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig3();
	this.instance.setTransform(-119.9,-85.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-85.9,240,172);


(lib.e2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig2();
	this.instance.setTransform(-119.9,-84.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-84.9,240,170);


(lib.e1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.eig1();
	this.instance.setTransform(-83.4,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.4,-116.9,167,234);


(lib.se7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev7();
	this.instance.setTransform(-91.9,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.9,-116.9,184,234);


(lib.se6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev6();
	this.instance.setTransform(-116.9,-98.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-98.9,234,198);


(lib.se5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev5();
	this.instance.setTransform(-115.9,-109.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.9,-109.4,232,219);


(lib.se4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev4();
	this.instance.setTransform(-103.9,-118.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.9,-118.4,208,237);


(lib.se3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev3();
	this.instance.setTransform(-116.4,-107.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.4,-107.9,233,216);


(lib.se2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev2();
	this.instance.setTransform(-117.9,-100.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-100.9,236,202);


(lib.se1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sev1();
	this.instance.setTransform(-92.9,-116.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.9,-116.4,186,233);


(lib.s6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.si6();
	this.instance.setTransform(-103.9,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.9,-117.9,208,236);


(lib.s5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.si5();
	this.instance.setTransform(-118.4,-118.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.4,-118.9,237,238);


(lib.s4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.si4();
	this.instance.setTransform(-104.4,-118.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.4,-118.9,209,238);


(lib.s3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.si3();
	this.instance.setTransform(-101.4,-117.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-117.9,203,236);


(lib.s2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.si2();
	this.instance.setTransform(-116.9,-119.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-119.4,234,239);


(lib.s1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.si1();
	this.instance.setTransform(-100.9,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,-116.9,202,234);


(lib.fifth5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fi5();
	this.instance.setTransform(-110.4,-115.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.4,-115.9,225,234);


(lib.fifth4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fi4();
	this.instance.setTransform(-118.9,-135.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.9,-135.4,238,271);


(lib.fifth3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fi3();
	this.instance.setTransform(-142.4,-120.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-142.4,-120.9,285,242);


(lib.fifth2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fi2();
	this.instance.setTransform(-118.9,-135.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.9,-135.4,238,271);


(lib.fifth1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fi1();
	this.instance.setTransform(-112.9,-118.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.9,-118.4,226,237);


(lib.third3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.th3();
	this.instance.setTransform(-119.9,-179.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-179.9,240,360);


(lib.third2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.th2();
	this.instance.setTransform(-119.9,-179.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-179.9,240,360);


(lib.third1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.th1();
	this.instance.setTransform(-208.4,-119.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.4,-119.9,417,240);


(lib.fourth4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f4();
	this.instance.setTransform(-117.9,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-116.9,236,234);


(lib.fourth3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f3();
	this.instance.setTransform(-117.9,-118.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-118.4,236,237);


(lib.fourth2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f2();
	this.instance.setTransform(-117.4,-118.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.4,-118.4,235,237);


(lib.fourth1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.f1();
	this.instance.setTransform(-117.4,-116.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.4,-116.9,235,234);


(lib.h2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.half2();
	this.instance.setTransform(-119.9,-238.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.9,-238.9,240,478);


(lib.h1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.half1();
	this.instance.setTransform(-118.9,-238.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.9,-238.9,238,478);


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


(lib.threeseventh_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg();
	this.instance.setTransform(-241.4,-241.4);

	// Layer 2
	this.p7 = new lib.ts7();
	this.p7.setTransform(-93.9,-121.4);

	this.p6 = new lib.ts6();
	this.p6.setTransform(-120.4,-48.5);

	this.p5 = new lib.ts5();
	this.p5.setTransform(-117.3,107.4);

	this.p4 = new lib.ts4();
	this.p4.setTransform(2.3,118);

	this.p3 = new lib.ts3();
	this.p3.setTransform(116.5,105.9);

	this.p2 = new lib.ts2();
	this.p2.setTransform(118.9,-52.5);

	this.p1 = new lib.ts1();
	this.p1.setTransform(91.1,-121.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,2.6).lineTo(-5.7,4.1).lineTo(5.7,-5).lineTo(2.8,1.2).lineTo(5,1.7).lineTo(2.2,2.3).lineTo(1,5).closePath();
	this.shape.setTransform(-2.8,-2.7);

	this.addChild(this.shape,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.p7,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241.4,-241.4,483,483);


(lib.foursixth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg();
	this.instance.setTransform(-241.4,-240.9);

	// Layer 2
	this.p6 = new lib.fs6();
	this.p6.setTransform(-103.2,-120.4);

	this.p5 = new lib.fs5();
	this.p5.setTransform(-119,-0.9);

	this.p4 = new lib.fs4();
	this.p4.setTransform(-103.4,118.2);

	this.p3 = new lib.fs3();
	this.p3.setTransform(104,117.9);

	this.p2 = new lib.fs2();
	this.p2.setTransform(119.5,-2.4);

	this.p1 = new lib.fs1();
	this.p1.setTransform(103,-120.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,-0.3).lineTo(0.2,0).lineTo(-0.2,0.3).closePath();
	this.shape.setTransform(0.2,-2);

	this.addChild(this.shape,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241.4,-240.9,483,482);


(lib.twofourth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg();
	this.instance.setTransform(-240.9,-240.9);

	// Layer 2
	this.p4 = new lib.tf4();
	this.p4.setTransform(-118.3,-119.4);

	this.p3 = new lib.tf3();
	this.p3.setTransform(-118.3,118.7);

	this.p2 = new lib.tf2();
	this.p2.setTransform(119.7,118.7);

	this.p1 = new lib.tf1();
	this.p1.setTransform(119.7,-119.4);

	this.addChild(this.p1,this.p2,this.p3,this.p4,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-240.9,482,482);


(lib.tenth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0044_fabfracts_0054_pie_0110a_40610_lg();
	this.instance.setTransform(-240.9,-240.9);

	// Layer 2
	this.p10 = new lib.t10();
	this.p10.setTransform(-70,-119.4);

	this.p9 = new lib.t9();
	this.p9.setTransform(-113.7,-97.1);

	this.p8 = new lib.t8();
	this.p8.setTransform(-119.5,-2.5);

	this.p7 = new lib.t7();
	this.p7.setTransform(-114.6,95.8);

	this.p6 = new lib.t6();
	this.p6.setTransform(-70.9,119.6);

	this.p5 = new lib.t5();
	this.p5.setTransform(69.5,119.2);

	this.p4 = new lib.t4();
	this.p4.setTransform(113.7,96.3);

	this.p3 = new lib.t3();
	this.p3.setTransform(119.3,-0.4);

	this.p2 = new lib.t2();
	this.p2.setTransform(113.7,-97.7);

	this.p1 = new lib.t1();
	this.p1.setTransform(68,-119.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,-0.7).lineTo(-1,-1.2).lineTo(0,-0.8).lineTo(1,-1.2).lineTo(-0.7,1.2).closePath();
	this.shape.setTransform(-0.8,-1);

	this.addChild(this.shape,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.p7,this.p8,this.p9,this.p10,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-240.9,482,482);


(lib.ninth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0008_fabfracts_0052_pie_0109a_40600_lg();
	this.instance.setTransform(-240.9,-240.9);

	// Layer 2
	this.p9 = new lib.n9();
	this.p9.setTransform(-73.8,-121.4);

	this.p8 = new lib.n8();
	this.p8.setTransform(-116.5,-94.1);

	this.p7 = new lib.n7();
	this.p7.setTransform(-118.4,36);

	this.p6 = new lib.n6();
	this.p6.setTransform(-102.9,110.6);

	this.p5 = new lib.n5();
	this.p5.setTransform(2.2,118.6);

	this.p4 = new lib.n4();
	this.p4.setTransform(105.1,111.1);

	this.p3 = new lib.n3();
	this.p3.setTransform(120.7,35.6);

	this.p2 = new lib.n2();
	this.p2.setTransform(119,-94.7);

	this.p1 = new lib.n1();
	this.p1.setTransform(74.6,-120.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,-0.5).lineTo(-3.4,-0.2).lineTo(-1.8,-1.2).lineTo(-1.8,-1.4).lineTo(-1.9,-1.5).lineTo(-1.8,-1.5).lineTo(-1.8,-3.9).lineTo(-1,-2).lineTo(3.4,-7.4).lineTo(-1.9,7.4).closePath();
	this.shape.setTransform(-0.1,-1.3);

	this.addChild(this.shape,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.p7,this.p8,this.p9,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-240.9,482,482);


(lib.eighth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0012_fabfracts_0043_pie_0108a_40582_lg();
	this.instance.setTransform(-240.9,-240.9);

	// Layer 2
	this.p8 = new lib.e8();
	this.p8.setTransform(-84.9,-120.1);

	this.p7 = new lib.e7();
	this.p7.setTransform(-120.6,-84.3);

	this.p6 = new lib.e6();
	this.p6.setTransform(-120.1,82);

	this.p5 = new lib.e5();
	this.p5.setTransform(-85,118.7);

	this.p4 = new lib.e4();
	this.p4.setTransform(83.4,120);

	this.p3 = new lib.e3();
	this.p3.setTransform(119.4,84);

	this.p2 = new lib.e2();
	this.p2.setTransform(119.4,-86.8);

	this.p1 = new lib.e1();
	this.p1.setTransform(82.9,-121.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,-1.1).lineTo(0.3,-1.1).lineTo(2,-2.8).lineTo(2,2.8).closePath();
	this.shape.setTransform(-2.5,-0.8);

	this.addChild(this.shape,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.p7,this.p8,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-240.9,482,482);


(lib.seventh_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0007_fabfracts_0053_pie_0107a_40574_lg();
	this.instance.setTransform(-241.4,-241.4);

	// Layer 2
	this.p7 = new lib.se7();
	this.p7.setTransform(-93,-120.4);

	this.p6 = new lib.se6();
	this.p6.setTransform(-120.4,-49.8);

	this.p5 = new lib.se5();
	this.p5.setTransform(-116.9,106.5);

	this.p4 = new lib.se4();
	this.p4.setTransform(1.5,120.3);

	this.p3 = new lib.se3();
	this.p3.setTransform(117.5,106.7);

	this.p2 = new lib.se2();
	this.p2.setTransform(120.5,-51.4);

	this.p1 = new lib.se1();
	this.p1.setTransform(90.5,-121);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(3.8,-5.8).lineTo(6.7,-11.7).lineTo(-1.4,-5.2).lineTo(-1.4,-4.6).closePath().moveTo(1.9,-1.8).lineTo(3.8,-5.8).moveTo(182.5,-153).curveTo(219,-110.3,231.5,-57.8).curveTo(238.1,-30.3,238.1,0).curveTo(238.1,25.4,233.4,48.9).curveTo(222.5,104.2,185.9,148.9).curveTo(177.7,158.9,168.3,168.3).curveTo(139.2,197.4,105.1,214.4).curveTo(57.5,238,0.3,238.1).curveTo(0.1,238.1,0,238.1).curveTo(-56.2,238.1,-103.1,215.4).curveTo(-138.4,198.3,-168.4,168.3).curveTo(-179.5,157.2,-188.8,145.3).curveTo(-223.1,101.8,-233.5,48.4).curveTo(-238.1,25.1,-238.1,0).curveTo(-238.1,-27.7,-232.6,-53.1).curveTo(-221.1,-106.2,-185.6,-149.4).curveTo(-177.6,-159.1,-168.4,-168.3).curveTo(-139.4,-197.3,-105.4,-214.2).curveTo(-58.9,-237.4,-3.1,-238).curveTo(-1.5,-238.1,0,-238.1).curveTo(98.6,-238.1,168.3,-168.3).curveTo(175.8,-160.8,182.5,-153).lineTo(6.7,-11.7).moveTo(0.4,1.3).lineTo(0.8,0.3).lineTo(-0.6,-0.8).closePath().moveTo(105.1,214.4).lineTo(0.4,1.3).lineTo(-1.4,4.9).lineTo(-103.1,215.4).moveTo(0.8,0.3).lineTo(1.9,-1.8).lineTo(-1.4,-2.5).lineTo(-1.4,-2.5).lineTo(-0.6,-0.8).moveTo(233.4,48.9).lineTo(1.9,-1.8).moveTo(-2.4,-4.5).lineTo(-2.3,-4.4).lineTo(-1.4,-4.6).moveTo(-2.4,-4.4).lineTo(-2.3,-4.4).moveTo(-2.4,-4.5).lineTo(-2.4,-4.4).lineTo(-3.8,-3.3).lineTo(-3.3,-3).lineTo(-1.4,-2.5).lineTo(-2.3,-4.4).moveTo(-1.4,-5.2).lineTo(-2.4,-4.5).moveTo(-1.4,4.9).lineTo(-1.4,-1.5).lineTo(-3.3,-3).lineTo(-4,-3.1).lineTo(-6.1,-3.6).lineTo(-233.5,48.4).moveTo(-3.8,-3.3).lineTo(-4,-3.1).moveTo(-1.4,-2.5).lineTo(-1.4,-1.5).lineTo(-0.6,-0.8).moveTo(-1.4,-2.5).lineTo(-1.4,-2.5).lineTo(-1.4,-2.5).moveTo(-4.5,-3.9).lineTo(-3.8,-3.3).moveTo(-4.5,-3.9).lineTo(-2.4,-4.4).moveTo(-1.4,-2.5).lineTo(-1.4,-4.6).moveTo(-6.1,-3.6).lineTo(-4.5,-3.9).lineTo(-185.6,-149.4).moveTo(-1.4,-5.2).lineTo(-3.1,-238);
	this.shape.setTransform(0.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,1.9).lineTo(-0.9,2.6).lineTo(-1.7,1.9).lineTo(-1.7,0.9).lineTo(-1.8,0.8).lineTo(-1.7,0.8).lineTo(-1.7,0.9).lineTo(-0.9,2.6).lineTo(-1.7,0.9).lineTo(-1.7,0.8).lineTo(1.6,1.6).lineTo(0.5,3.7).lineTo(-0.9,2.6).lineTo(0.1,4.6).lineTo(-1.7,8.3).closePath().moveTo(-0.9,2.6).lineTo(0.5,3.7).lineTo(0.1,4.6).closePath().moveTo(-1.7,1.9).lineTo(-3.6,0.4).lineTo(-1.8,0.8).lineTo(-2.7,-1).lineTo(-1.8,-1.2).lineTo(-2.7,-1).lineTo(-2.7,-1.1).lineTo(-2.7,-1).lineTo(-2.7,-1).lineTo(-2.7,-1).lineTo(-1.8,0.8).lineTo(-3.6,0.4).lineTo(-4.1,0.1).lineTo(-2.7,-1).lineTo(-2.7,-1.1).lineTo(-1.8,-1.8).lineTo(-1.8,-1.2).lineTo(3.5,-2.4).lineTo(-1.8,-1.2).lineTo(-1.8,-1.8).lineTo(6.4,-8.3).lineTo(3.5,-2.4).lineTo(1.6,1.6).lineTo(-1.7,0.8).lineTo(-1.8,-1.2).lineTo(-1.7,0.8).lineTo(-1.8,0.8).lineTo(-1.7,0.9).lineTo(-1.7,1.9).closePath().moveTo(1.6,1.6).closePath().moveTo(-4.3,0.3).lineTo(-4.1,0.1).lineTo(-4.8,-0.5).lineTo(-4.1,0.1).lineTo(-4.3,0.3).lineTo(-6.4,-0.2).lineTo(-4.8,-0.5).lineTo(-2.7,-1).lineTo(-4.1,0.1).lineTo(-3.6,0.4).closePath().moveTo(-2.7,-1).closePath().moveTo(-2.7,-1).closePath();
	this.shape_1.setTransform(0.9,-2.8);

	this.addChild(this.shape_1,this.shape,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.p7,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241.4,-241.4,483,483);


(lib.sixth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0013_fabfracts_0042_pie_0106a_40557_lg();
	this.instance.setTransform(-241.4,-240.9);

	// Layer 3
	this.p6 = new lib.s6();
	this.p6.setTransform(-102,-120.1);

	this.p5 = new lib.s5();
	this.p5.setTransform(-119.1,-1.3);

	this.p4 = new lib.s4();
	this.p4.setTransform(-102.1,117.1);

	this.p3 = new lib.s3();
	this.p3.setTransform(103.9,118.1);

	this.p2 = new lib.s2();
	this.p2.setTransform(119.4,-1.5);

	this.p1 = new lib.s1();
	this.p1.setTransform(103.4,-121.1);

	this.addChild(this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241.4,-240.9,483,482);


(lib.fifth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0011_fabfracts_0044_pie_0105a_40551_lg();
	this.instance.setTransform(-240.4,-240.4);

	// Layer 3
	this.p5 = new lib.fifth5();
	this.p5.setTransform(-115.2,-121.5);

	this.p4 = new lib.fifth4();
	this.p4.setTransform(-121.4,57.3);

	this.p3 = new lib.fifth3();
	this.p3.setTransform(0,113.9);

	this.p2 = new lib.fifth2();
	this.p2.setTransform(116.6,53.5);

	this.p1 = new lib.fifth1();
	this.p1.setTransform(109,-118);

	this.addChild(this.p1,this.p2,this.p3,this.p4,this.p5,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.4,-240.4,481,481);


(lib.third_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0009_fabfracts_0048_pie_0103a_40529_lg();
	this.instance.setTransform(-240.9,-241.4);

	// Layer 2
	this.p3 = new lib.third3();
	this.p3.setTransform(-116.8,-61.4);

	this.p2 = new lib.third2();
	this.p2.setTransform(115.3,-61.4);

	this.p1 = new lib.third1();
	this.p1.setTransform(-0.8,118.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,-0.7).lineTo(0.6,-0).lineTo(-0.6,0.7).closePath();
	this.shape.setTransform(-0.1,-1.3);

	this.addChild(this.shape,this.p1,this.p2,this.p3,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-241.4,482,483);


(lib.fourth_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fractionsquiz_0010_fabfracts_0046_pie_0104a_40537_lg();
	this.instance.setTransform(-240.9,-240.9);

	// Layer 2
	this.p4 = new lib.fourth4();
	this.p4.setTransform(-116.9,-118.6);

	this.p3 = new lib.fourth3();
	this.p3.setTransform(-116.9,116.4);

	this.p2 = new lib.fourth2();
	this.p2.setTransform(118.4,116.4);

	this.p1 = new lib.fourth1();
	this.p1.setTransform(118.4,-118.6);

	this.addChild(this.p1,this.p2,this.p3,this.p4,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-240.9,482,482);


(lib.half_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.half();
	this.instance.setTransform(-240.9,-240.9);

	// Layer 2
	this.p2 = new lib.h2();
	this.p2.setTransform(120.1,0);

	this.p1 = new lib.h1();
	this.p1.setTransform(-120.6,0);

	this.addChild(this.p1,this.p2,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.9,-240.9,482,482);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;