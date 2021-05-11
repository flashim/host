(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.WordFamiliesQuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{activity:9,conclusion:19});

	// timeline functions:
	this.frame_0 = function() {
		canvasStageRef.onStart(this);
	}
	this.frame_9 = function() {
		canvasStageRef.onActivity(this);
	}
	this.frame_579 = function() {
		this.stop();
		canvasStageRef.onActivityClose(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(570).call(this.frame_579));

	// assets
	this.instance = new lib.WFQ_0023_n();
	this.instance.setTransform(709.2,442.7);

	this.instance_1 = new lib.WFQ_0007_w();
	this.instance_1.setTransform(-207.9,101.1);

	this.instance_2 = new lib.WFQ_0026_z();
	this.instance_2.setTransform(552.9,445.2);

	this.instance_3 = new lib.WFQ_0001_o();
	this.instance_3.setTransform(391.3,448.7);

	this.instance_4 = new lib.WFQ_0032_f();
	this.instance_4.setTransform(86.4,435.2);

	this.instance_5 = new lib.WFQ_0001_m();
	this.instance_5.setTransform(223.5,445.2);

	this.instance_6 = new lib.WFQ_0028_b();
	this.instance_6.setTransform(864,435.2);

	this.instance_7 = new lib.WFQ_0053__all();
	this.instance_7.setTransform(703,574.2);

	this.instance_8 = new lib.WFQ_0053__all();
	this.instance_8.setTransform(399.9,574.2);

	this.instance_9 = new lib.WFQ_drop();
	this.instance_9.setTransform(839.7,390.2);

	this.instance_10 = new lib.WFQ_drop();
	this.instance_10.setTransform(682.2,390.2);

	this.instance_11 = new lib.WFQ_drop();
	this.instance_11.setTransform(524.8,390.2);

	this.instance_12 = new lib.WFQ_drop();
	this.instance_12.setTransform(367.3,390.2);

	this.instance_13 = new lib.WFQ_drop();
	this.instance_13.setTransform(209.9,390.2);

	this.instance_14 = new lib.WFQ_0000_u();
	this.instance_14.setTransform(-96.1,-161.9);

	this.instance_15 = new lib.WFQ_0000_i();
	this.instance_15.setTransform(-10.5,-100.9);

	this.instance_16 = new lib.wordfamilies_0035_an();
	this.instance_16.setTransform(848.7,-171.9);

	this.instance_17 = new lib.WFQ_drop();
	this.instance_17.setTransform(52.4,390.2);

	this.instance_18 = new lib.WFQ_0021_r();
	this.instance_18.setTransform(27.4,-130.9);

	this.instance_19 = new lib.WFQ_0020_e();
	this.instance_19.setTransform(27.4,-130.9);

	this.instance_20 = new lib.WFQ_0019_g();
	this.instance_20.setTransform(27.4,-130.9);

	this.instance_21 = new lib.WFQ_0018_h();
	this.instance_21.setTransform(27.4,-130.9);

	this.instance_22 = new lib.WFQ_0017_j();
	this.instance_22.setTransform(27.4,-130.9);

	this.instance_23 = new lib.WFQ_0016_k();
	this.instance_23.setTransform(27.4,-130.9);

	this.instance_24 = new lib.WFQ_0015_l();
	this.instance_24.setTransform(27.4,-130.9);

	this.instance_25 = new lib.WFQ_0013_p();
	this.instance_25.setTransform(27.4,-130.9);

	this.instance_26 = new lib.WFQ_0012_q();
	this.instance_26.setTransform(27.4,-130.9);

	this.instance_27 = new lib.WFQ_0010_s();
	this.instance_27.setTransform(27.4,-130.9);

	this.instance_28 = new lib.WFQ_0009_t();
	this.instance_28.setTransform(27.4,-130.9);

	this.instance_29 = new lib.WFQ_0006_x();
	this.instance_29.setTransform(27.4,-130.9);

	this.instance_30 = new lib.WFQ_0003_y();
	this.instance_30.setTransform(27.4,-130.9);

	this.instance_31 = new lib.WFQ_0003_a();
	this.instance_31.setTransform(27.4,-130.9);

	this.instance_32 = new lib.WFQ_0002_v();
	this.instance_32.setTransform(27.4,-130.9);

	this.instance_33 = new lib.WFQ_0002_c();
	this.instance_33.setTransform(27.4,-130.9);

	this.instance_34 = new lib.WFQ_0001_d();
	this.instance_34.setTransform(27.4,-130.9);

	this.instance_35 = new lib.WFQ_0035_all();
	this.instance_35.setTransform(424.6,170.2);

	this.instance_36 = new lib.WFQ_0020_all();
	this.instance_36.setTransform(418.6,-201.9);

	this.instance_37 = new lib.WFQ_0019_ap();
	this.instance_37.setTransform(418.6,-201.9);

	this.instance_38 = new lib.WFQ_0018_at();
	this.instance_38.setTransform(418.6,-201.9);

	this.instance_39 = new lib.WFQ_0017_eat();
	this.instance_39.setTransform(418.6,-201.9);

	this.instance_40 = new lib.WFQ_0016_ell();
	this.instance_40.setTransform(418.6,-201.9);

	this.instance_41 = new lib.WFQ_0015_ick();
	this.instance_41.setTransform(418.6,-201.9);

	this.instance_42 = new lib.WFQ_0014_ide();
	this.instance_42.setTransform(418.6,-201.9);

	this.instance_43 = new lib.WFQ_0013_ill();
	this.instance_43.setTransform(418.6,-201.9);

	this.instance_44 = new lib.WFQ_0012_in();
	this.instance_44.setTransform(418.6,-201.9);

	this.instance_45 = new lib.WFQ_0011_ink();
	this.instance_45.setTransform(418.6,-201.9);

	this.instance_46 = new lib.WFQ_0010_ip();
	this.instance_46.setTransform(418.6,-201.9);

	this.instance_47 = new lib.WFQ_0009_it();
	this.instance_47.setTransform(418.6,-201.9);

	this.instance_48 = new lib.WFQ_0008_ock();
	this.instance_48.setTransform(418.6,-201.9);

	this.instance_49 = new lib.WFQ_0007_op();
	this.instance_49.setTransform(418.6,-201.9);

	this.instance_50 = new lib.WFQ_0006_ot();
	this.instance_50.setTransform(418.6,-201.9);

	this.instance_51 = new lib.WFQ_0005_uck();
	this.instance_51.setTransform(418.6,-201.9);

	this.instance_52 = new lib.WFQ_0004_ug();
	this.instance_52.setTransform(418.6,-201.9);

	this.instance_53 = new lib.WFQ_0053__all();
	this.instance_53.setTransform(96.9,574.2);

	this.instance_54 = new lib.WFQ_0052__ug();
	this.instance_54.setTransform(144.9,-143.9);

	this.instance_55 = new lib.WFQ_0051__an();
	this.instance_55.setTransform(144.9,-143.9);

	this.instance_56 = new lib.WFQ_0050__ap();
	this.instance_56.setTransform(144.9,-143.9);

	this.instance_57 = new lib.WFQ_0049__at();
	this.instance_57.setTransform(144.9,-143.9);

	this.instance_58 = new lib.WFQ_0048__eat();
	this.instance_58.setTransform(144.9,-143.9);

	this.instance_59 = new lib.WFQ_0047__ell();
	this.instance_59.setTransform(144.9,-143.9);

	this.instance_60 = new lib.WFQ_0046__ick();
	this.instance_60.setTransform(144.9,-143.9);

	this.instance_61 = new lib.WFQ_0045__ide();
	this.instance_61.setTransform(144.9,-143.9);

	this.instance_62 = new lib.WFQ_0044__ill();
	this.instance_62.setTransform(144.9,-143.9);

	this.instance_63 = new lib.WFQ_0043__in();
	this.instance_63.setTransform(144.9,-143.9);

	this.instance_64 = new lib.WFQ_0042__ink();
	this.instance_64.setTransform(144.9,-143.9);

	this.instance_65 = new lib.WFQ_0041__ip();
	this.instance_65.setTransform(144.9,-143.9);

	this.instance_66 = new lib.WFQ_0040__it();
	this.instance_66.setTransform(144.9,-143.9);

	this.instance_67 = new lib.WFQ_0039__ock();
	this.instance_67.setTransform(144.9,-143.9);

	this.instance_68 = new lib.WFQ_0038__op();
	this.instance_68.setTransform(144.9,-143.9);

	this.instance_69 = new lib.WFQ_0037__ot();
	this.instance_69.setTransform(144.9,-143.9);

	this.instance_70 = new lib.WFQ_0036__uck();
	this.instance_70.setTransform(144.9,-143.9);

	this.instance_71 = new lib.WFQ_cloud();
	this.instance_71.setTransform(290.1,81.6);

	this.instance_72 = new lib.parrot();
	this.instance_72.setTransform(1096,33.1);

	this.start = new lib.start();
	this.start.setTransform(971,-250.3,1,1,0,0,0,85,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start},{t:this.instance_72},{t:this.instance_71,p:{x:290.1,y:81.6}},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35,p:{x:424.6,y:170.2}},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{x:-10.5,y:-100.9}},{t:this.instance_14,p:{x:-96.1,y:-161.9}},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{x:839.7,y:390.2}},{t:this.instance_8},{t:this.instance_7,p:{x:703,y:574.2}},{t:this.instance_6,p:{x:864,y:435.2}},{t:this.instance_5,p:{x:223.5,y:445.2}},{t:this.instance_4,p:{x:86.4,y:435.2}},{t:this.instance_3,p:{x:391.3,y:448.7}},{t:this.instance_2,p:{x:552.9,y:445.2}},{t:this.instance_1,p:{x:-207.9,y:101.1}},{t:this.instance,p:{x:709.2,y:442.7}}]}).to({state:[{t:this.start},{t:this.instance_72},{t:this.instance_71,p:{x:-538,y:-201.9}},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_7,p:{x:170.9,y:-150}},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35,p:{x:449.8,y:-209.4}},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_16},{t:this.instance_15,p:{x:56.4,y:-131.4}},{t:this.instance_14,p:{x:45.9,y:-125.4}},{t:this.instance_9,p:{x:-286.2,y:218.2}},{t:this.instance_6,p:{x:42.9,y:-125.4}},{t:this.instance_5,p:{x:23.9,y:-112.9}},{t:this.instance_4,p:{x:27.9,y:-131.9}},{t:this.instance_3,p:{x:27.4,y:-112.9}},{t:this.instance_2,p:{x:29.4,y:-112.9}},{t:this.instance_1,p:{x:17.4,y:-130.9}},{t:this.instance,p:{x:39.4,y:-130.9}}]},9).wait(571));

	// top_panel
	this.instance_73 = new lib.wfq();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_73}]}).wait(580));

	// buttons
	this.exit = new lib.exit();
	this.exit.setTransform(972,721,1,1,0,0,0,13,12.5);

	this.replay = new lib.replay();
	this.replay.setTransform(939,722,1,1,0,0,0,13.5,13.5);

	this.skip = new lib.skip();
	this.skip.setTransform(906,721.5,1,1,0,0,0,13,13);

	this.home = new lib.home();
	this.home.setTransform(873,721,1,1,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.home},{t:this.skip},{t:this.replay},{t:this.exit}]}).wait(580));

	// bottom_panel
	this.instance_74 = new lib.Bottom_Activity_Bar();
	this.instance_74.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_74}]}).wait(580));

	// bg
	this.instance_75 = new lib.WFQ_0057_518799434_91a4a77212_o();
	this.instance_75.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_75}]}).wait(580));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.9,-292.9,1359,1032);


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


(lib.wfq = function() {
	this.initialize(img.wfq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,56);


(lib.WFQ_0000_i = function() {
	this.initialize(img.WFQ_0000_i);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,49);


(lib.WFQ_0000_u = function() {
	this.initialize(img.WFQ_0000_u);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,36);


(lib.WFQ_0001_d = function() {
	this.initialize(img.WFQ_0001_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,48);


(lib.WFQ_0001_m = function() {
	this.initialize(img.WFQ_0001_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,36);


(lib.WFQ_0001_o = function() {
	this.initialize(img.WFQ_0001_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.WFQ_0002_c = function() {
	this.initialize(img.WFQ_0002_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.WFQ_0002_v = function() {
	this.initialize(img.WFQ_0002_v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,36);


(lib.WFQ_0003_a = function() {
	this.initialize(img.WFQ_0003_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.WFQ_0003_y = function() {
	this.initialize(img.WFQ_0003_y);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,47);


(lib.WFQ_0004_ug = function() {
	this.initialize(img.WFQ_0004_ug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,121);


(lib.WFQ_0005_uck = function() {
	this.initialize(img.WFQ_0005_uck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,120);


(lib.WFQ_0006_ot = function() {
	this.initialize(img.WFQ_0006_ot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,119);


(lib.WFQ_0006_x = function() {
	this.initialize(img.WFQ_0006_x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,36);


(lib.WFQ_0007_op = function() {
	this.initialize(img.WFQ_0007_op);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,119);


(lib.WFQ_0007_w = function() {
	this.initialize(img.WFQ_0007_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,36);


(lib.WFQ_0008_ock = function() {
	this.initialize(img.WFQ_0008_ock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,120);


(lib.WFQ_0009_it = function() {
	this.initialize(img.WFQ_0009_it);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,120);


(lib.WFQ_0009_t = function() {
	this.initialize(img.WFQ_0009_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,47);


(lib.WFQ_0010_ip = function() {
	this.initialize(img.WFQ_0010_ip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,150);


(lib.WFQ_0010_s = function() {
	this.initialize(img.WFQ_0010_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,36);


(lib.WFQ_0011_ink = function() {
	this.initialize(img.WFQ_0011_ink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,120);


(lib.WFQ_0012_in = function() {
	this.initialize(img.WFQ_0012_in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,120);


(lib.WFQ_0012_q = function() {
	this.initialize(img.WFQ_0012_q);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,47);


(lib.WFQ_0013_ill = function() {
	this.initialize(img.WFQ_0013_ill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,120);


(lib.WFQ_0013_p = function() {
	this.initialize(img.WFQ_0013_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,47);


(lib.WFQ_0014_ide = function() {
	this.initialize(img.WFQ_0014_ide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,122);


(lib.WFQ_0015_ick = function() {
	this.initialize(img.WFQ_0015_ick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,122);


(lib.WFQ_0015_l = function() {
	this.initialize(img.WFQ_0015_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,48);


(lib.WFQ_0016_ell = function() {
	this.initialize(img.WFQ_0016_ell);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,120);


(lib.WFQ_0016_k = function() {
	this.initialize(img.WFQ_0016_k);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,48);


(lib.WFQ_0017_eat = function() {
	this.initialize(img.WFQ_0017_eat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,119);


(lib.WFQ_0017_j = function() {
	this.initialize(img.WFQ_0017_j);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,61);


(lib.WFQ_0018_at = function() {
	this.initialize(img.WFQ_0018_at);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,119);


(lib.WFQ_0018_h = function() {
	this.initialize(img.WFQ_0018_h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,48);


(lib.WFQ_0019_ap = function() {
	this.initialize(img.WFQ_0019_ap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,119);


(lib.WFQ_0019_g = function() {
	this.initialize(img.WFQ_0019_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,48);


(lib.WFQ_0020_all = function() {
	this.initialize(img.WFQ_0020_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.WFQ_0020_e = function() {
	this.initialize(img.WFQ_0020_e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.WFQ_0021_r = function() {
	this.initialize(img.WFQ_0021_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,36);


(lib.WFQ_0023_n = function() {
	this.initialize(img.WFQ_0023_n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,36);


(lib.WFQ_0026_z = function() {
	this.initialize(img.WFQ_0026_z);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,36);


(lib.WFQ_0028_b = function() {
	this.initialize(img.WFQ_0028_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,48);


(lib.WFQ_0032_f = function() {
	this.initialize(img.WFQ_0032_f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,49);


(lib.WFQ_0035_all = function() {
	this.initialize(img.WFQ_0035_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,120);


(lib.WFQ_0036__uck = function() {
	this.initialize(img.WFQ_0036__uck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,86);


(lib.WFQ_0037__ot = function() {
	this.initialize(img.WFQ_0037__ot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,85);


(lib.WFQ_0038__op = function() {
	this.initialize(img.WFQ_0038__op);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,74);


(lib.WFQ_0039__ock = function() {
	this.initialize(img.WFQ_0039__ock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,86);


(lib.WFQ_0040__it = function() {
	this.initialize(img.WFQ_0040__it);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,87);


(lib.WFQ_0041__ip = function() {
	this.initialize(img.WFQ_0041__ip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,92);


(lib.WFQ_0042__ink = function() {
	this.initialize(img.WFQ_0042__ink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,87);


(lib.WFQ_0043__in = function() {
	this.initialize(img.WFQ_0043__in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,87);


(lib.WFQ_0044__ill = function() {
	this.initialize(img.WFQ_0044__ill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,87);


(lib.WFQ_0045__ide = function() {
	this.initialize(img.WFQ_0045__ide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,87);


(lib.WFQ_0046__ick = function() {
	this.initialize(img.WFQ_0046__ick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,87);


(lib.WFQ_0047__ell = function() {
	this.initialize(img.WFQ_0047__ell);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,86);


(lib.WFQ_0048__eat = function() {
	this.initialize(img.WFQ_0048__eat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,85);


(lib.WFQ_0049__at = function() {
	this.initialize(img.WFQ_0049__at);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,85);


(lib.WFQ_0050__ap = function() {
	this.initialize(img.WFQ_0050__ap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,74);


(lib.WFQ_0051__an = function() {
	this.initialize(img.WFQ_0051__an);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,69);


(lib.WFQ_0052__ug = function() {
	this.initialize(img.WFQ_0052__ug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,75);


(lib.WFQ_0053__all = function() {
	this.initialize(img.WFQ_0053__all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,86);


(lib.WFQ_0057_518799434_91a4a77212_o = function() {
	this.initialize(img.WFQ_0057_518799434_91a4a77212_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,719);


(lib.WFQ_cloud = function() {
	this.initialize(img.WFQ_cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,361);


(lib.WFQ_drop = function() {
	this.initialize(img.WFQ_drop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,117);


(lib.wordfamilies_0035_an = function() {
	this.initialize(img.wordfamilies_0035_an);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,91);


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