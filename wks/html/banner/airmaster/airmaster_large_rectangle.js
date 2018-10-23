(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.airmaster_large_rectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"zoom out":0,wood:5,fade:9,airmaster:15,"zoom in":29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.zoom_out_mc.gotoAndPlay(0);
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.wood_animation_mc.gotoAndPlay(0);
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.airmaster_animation_mc.gotoAndPlay(0);
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
		this.zoom_in_mc.gotoAndPlay(0);
	}
	this.frame_38 = function() {
		this.stop();
		this.btn_mc.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(3).call(this.frame_8).wait(7).call(this.frame_15).wait(2).call(this.frame_17).wait(8).call(this.frame_25).wait(4).call(this.frame_29).wait(9).call(this.frame_38));

	// button
	this.btn_mc = new lib.cta_button();
	this.btn_mc.setTransform(171.5,244,1,1,0,0,0,134,23.5);
	this.btn_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_mc).wait(38).to({_off:false},0).wait(1));

	// text_one_title.png
	this.instance = new lib.text_one_title_mc();
	this.instance.setTransform(78.5,240,1,1,0,0,0,56.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({alpha:0},2).to({_off:true},1).wait(25));

	// text_one_line.png
	this.instance_1 = new lib.text_one_line_mc();
	this.instance_1.setTransform(156.5,262,1,1,0,0,0,134.5,8.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:155.5,alpha:1},3).wait(4).to({x:156.5},0).to({alpha:0},2).to({_off:true},3).wait(26));

	// text_two_title.png
	this.instance_2 = new lib.text_two_title_mc();
	this.instance_2.setTransform(126,240,1,1,0,0,0,104,6.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(1));

	// text_two_line.png
	this.instance_3 = new lib.text_two_line_mc();
	this.instance_3.setTransform(131.5,262,1,1,0,0,0,109.5,8.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({alpha:1},2).to({_off:true},14).wait(1));

	// zooms
	this.zoom_out_mc = new lib.zoom_out();
	this.zoom_out_mc.setTransform(372,520.5,1,1,0,0,0,372,520.5);

	this.zoom_in_mc = new lib.zoom_in();
	this.zoom_in_mc.setTransform(246.6,165.4,1,1,0,0,0,246.6,165.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zoom_out_mc}]}).to({state:[]},5).to({state:[]},9).to({state:[{t:this.zoom_in_mc}]},15).wait(10));

	// wood_final_frame
	this.instance_4 = new lib.wood_final_frame();
	this.instance_4.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({alpha:0},2).to({_off:true},1).wait(25));

	// airmaster_first_frame
	this.instance_5 = new lib.airmaster_first_frame();
	this.instance_5.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({_off:true},4).wait(24));

	// wood animation
	this.wood_animation_mc = new lib.wood_animation();
	this.wood_animation_mc.setTransform(168,140,1,1,0,0,0,168,140);
	this.wood_animation_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wood_animation_mc).wait(5).to({_off:false},0).to({_off:true},6).wait(28));

	// airmaster animation
	this.airmaster_animation_mc = new lib.airmaster_animation();
	this.airmaster_animation_mc.setTransform(168,140,1,1,0,0,0,168,140);
	this.airmaster_animation_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.airmaster_animation_mc).wait(15).to({_off:false},0).to({_off:true},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.4,-387.4,744,1041);


// symbols:
(lib.airmaster_animation_1 = function() {
	this.initialize(img.airmaster_animation_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation_2 = function() {
	this.initialize(img.airmaster_animation_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation_3 = function() {
	this.initialize(img.airmaster_animation_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation_4 = function() {
	this.initialize(img.airmaster_animation_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation_5 = function() {
	this.initialize(img.airmaster_animation_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation_6 = function() {
	this.initialize(img.airmaster_animation_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation_7 = function() {
	this.initialize(img.airmaster_animation_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.desson_button = function() {
	this.initialize(img.desson_button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,47);


(lib.hout5 = function() {
	this.initialize(img.hout5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,1041);


(lib.smotion4 = function() {
	this.initialize(img.smotion4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,741,1037);


(lib.text_one_line = function() {
	this.initialize(img.text_one_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,17);


(lib.text_one_title = function() {
	this.initialize(img.text_one_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,13);


(lib.text_two_line = function() {
	this.initialize(img.text_two_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,17);


(lib.text_two_title = function() {
	this.initialize(img.text_two_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,13);


(lib.wood_animation_1 = function() {
	this.initialize(img.wood_animation_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation_2 = function() {
	this.initialize(img.wood_animation_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation_3 = function() {
	this.initialize(img.wood_animation_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation_4 = function() {
	this.initialize(img.wood_animation_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation_5 = function() {
	this.initialize(img.wood_animation_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation_6 = function() {
	this.initialize(img.wood_animation_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation_7 = function() {
	this.initialize(img.wood_animation_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.zoom_out_frame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hout5();
	this.instance.setTransform(0,27.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,27.6,744,1041);


(lib.zoom_in_frame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.smotion4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,741,1037);


(lib.wood_first_frame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wood_animation_5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_final_frame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wood_animation_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.wood_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_98 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(98).call(this.frame_98));

	// Layer 1
	this.instance = new lib.wood_animation_5();

	this.instance_1 = new lib.wood_animation_6();

	this.instance_2 = new lib.wood_animation_7();

	this.instance_3 = new lib.wood_animation_4();

	this.instance_4 = new lib.wood_animation_3();

	this.instance_5 = new lib.wood_animation_2();

	this.instance_6 = new lib.wood_animation_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.text_two_title_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_two_title();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,208,13);


(lib.text_two_line_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_two_line();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,219,17);


(lib.text_one_title_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_one_title();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113,13);


(lib.text_one_line_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text_one_line();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,269,17);


(lib.cta_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94));

	// Layer 1
	this.instance = new lib.desson_button();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,47);


(lib.airmaster_first_frame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.airmaster_animation_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_final_frame = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.airmaster_animation_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.airmaster_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.parent.play();
	}
	this.frame_115 = function() {
		this.stop();
		
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(79).call(this.frame_115));

	// Layer 1
	this.instance = new lib.airmaster_animation_1();

	this.instance_1 = new lib.airmaster_animation_2();

	this.instance_2 = new lib.airmaster_animation_3();

	this.instance_3 = new lib.airmaster_animation_4();

	this.instance_4 = new lib.airmaster_animation_5();

	this.instance_5 = new lib.airmaster_animation_6();

	this.instance_6 = new lib.airmaster_animation_7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.zoom_out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.parent.play();
	}
	this.frame_95 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(76).call(this.frame_95));

	// Layer 6
	this.instance = new lib.wood_first_frame();
	this.instance.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).wait(1));

	// Layer 5
	this.instance_1 = new lib.zoom_out_frame();
	this.instance_1.setTransform(222.6,105.4,1,1,0,0,0,372,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({scaleX:1,scaleY:1,x:222.5},0).to({regX:371.9,scaleX:0.47,scaleY:0.47,rotation:-0.5,x:169.3,y:101.3},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.4,-387.4,744,1041);


(lib.zoom_in = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.parent.play();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(10).call(this.frame_24));

	// Layer 3
	this.instance = new lib.airmaster_final_frame();
	this.instance.setTransform(168,140,1,1,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(24));

	// Layer 5
	this.instance_1 = new lib.zoom_in_frame();
	this.instance_1.setTransform(170.8,123.3,0.47,0.47,0,0,0,372,520.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:371.9,scaleX:0.91,scaleY:0.91,x:212.8,y:116.4},24,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-121.6,348.6,487.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;