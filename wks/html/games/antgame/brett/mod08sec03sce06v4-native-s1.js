(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.mod08sec03sce06v4natives1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{staticLoop:574});

	// timeline functions:
	this.frame_1 = function() {
		playSound("_833_beep");
		//playSound("vomod08sec03sce06av1");
		snd.play();
	}
	this.frame_40 = function() {
		playSound("_833_beep");
	}
	this.frame_79 = function() {
		playSound("_833_beep");
	}
	this.frame_118 = function() {
		playSound("_833_beep");
	}
	this.frame_156 = function() {
		playSound("_833_beep");
	}
	this.frame_194 = function() {
		playSound("_833_beep");
	}
	this.frame_232 = function() {
		playSound("_833_beep");
	}
	this.frame_270 = function() {
		playSound("_833_beep");
	}
	this.frame_308 = function() {
		playSound("_833_beep");
	}
	this.frame_346 = function() {
		playSound("_833_beep");
	}
	this.frame_384 = function() {
		playSound("_833_beep");
	}
	this.frame_422 = function() {
		playSound("_833_beep");
	}
	this.frame_460 = function() {
		playSound("_833_beep");
	}
	this.frame_498 = function() {
		playSound("_833_beep");
	}
	this.frame_536 = function() {
		playSound("_833_beep");
	}
	this.frame_574 = function() {
		playSound("_833_beep");
	}
	this.frame_613 = function() {
		playSound("_833_beep");
	}
	this.frame_652 = function() {
		playSound("_833_beep");
	}
	this.frame_691 = function() {
		playSound("_833_beep");
	}
	this.frame_729 = function() {
		playSound("_833_beep");
	}
	this.frame_767 = function() {
		playSound("_833_beep");
	}
	this.frame_805 = function() {
		playSound("_833_beep");
	}
	this.frame_843 = function() {
		playSound("_833_beep");
	}
	this.frame_881 = function() {
		playSound("_833_beep");
	}
	this.frame_919 = function() {
		playSound("_833_beep");
	}
	this.frame_957 = function() {
		playSound("_833_beep");
	}
	this.frame_995 = function() {
		playSound("_833_beep");
	}
	this.frame_1033 = function() {
		playSound("_833_beep");
	}
	this.frame_1071 = function() {
		playSound("_833_beep");
	}
	this.frame_1109 = function() {
		playSound("_833_beep");
	}
	this.frame_1146 = function() {
		this.gotoAndPlay(575);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(39).call(this.frame_40).wait(39).call(this.frame_79).wait(39).call(this.frame_118).wait(38).call(this.frame_156).wait(38).call(this.frame_194).wait(38).call(this.frame_232).wait(38).call(this.frame_270).wait(38).call(this.frame_308).wait(38).call(this.frame_346).wait(38).call(this.frame_384).wait(38).call(this.frame_422).wait(38).call(this.frame_460).wait(38).call(this.frame_498).wait(38).call(this.frame_536).wait(38).call(this.frame_574).wait(39).call(this.frame_613).wait(39).call(this.frame_652).wait(39).call(this.frame_691).wait(38).call(this.frame_729).wait(38).call(this.frame_767).wait(38).call(this.frame_805).wait(38).call(this.frame_843).wait(38).call(this.frame_881).wait(38).call(this.frame_919).wait(38).call(this.frame_957).wait(38).call(this.frame_995).wait(38).call(this.frame_1033).wait(38).call(this.frame_1071).wait(38).call(this.frame_1109).wait(37).call(this.frame_1146));

	// preloader
	this.preloader_mc = new lib.preloader_mc();
	this.preloader_mc.setTransform(480,253);

	this.timeline.addTween(cjs.Tween.get(this.preloader_mc).to({_off:true},1).wait(1146));

	// btn4
	this.b4 = new lib.btn4();
	this.b4.setTransform(904.4,491.4,1,1,0,0,0,64.8,21.3);
	this.b4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.b4).wait(561).to({alpha:1},9).wait(577));

	// btn3
	this.b3 = new lib.btn3();
	this.b3.setTransform(436.4,469.4,1,1,0,0,0,64.8,21.3);
	this.b3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.b3).wait(557).to({alpha:1},11).wait(579));

	// btn2
	this.b2 = new lib.btn2();
	this.b2.setTransform(264.4,469.4,1,1,0,0,0,3.7,-0.7);
	this.b2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(554).to({alpha:1},10).wait(583));

	// btn1
	this.b1 = new lib.btn1();
	this.b1.setTransform(92.4,470.4,1,1,0,0,0,64.8,21.3);
	this.b1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(551).to({y:469.3},0).to({alpha:1},9).wait(587));

	// taskBox
	this.instance = new lib.gomezTask();
	this.instance.setTransform(736.8,284.9,1,1,0,0,0,298.2,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(355).to({_off:false},0).to({alpha:1},15).wait(129).to({alpha:0},14).to({_off:true},1).wait(633));

	// taskFader
	this.instance_1 = new lib.ivBlackFader();
	this.instance_1.setTransform(480,257.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(336).to({_off:false},0).to({alpha:0.699},19).wait(159).to({alpha:0},20).to({_off:true},1).wait(612));

	// animGlowIV
	this.ivbag_btn = new lib.ivbutton_main();
	this.ivbag_btn.setTransform(309.4,114.2);
	this.ivbag_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ivbag_btn).wait(574).to({_off:false},0).wait(573));

	// glowIV
	this.instance_2 = new lib.IVglowPos();
	this.instance_2.setTransform(309.3,114.6,1,1,0,0,180,0.5,0);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(224,153,38,1)",0,0,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(563).to({_off:false},0).to({alpha:1},7).to({_off:true},4).wait(573));

	// vitalsVid
	this.vid01 = new lib.genAnesScreen();
	this.vid01.setTransform(547.5,148.4,0.473,0.473,0,0,0.3,1.7,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vid01}]}).wait(1147));

	// glowMonitor
	this.instance_3 = new lib.monitorGlow();
	this.instance_3.setTransform(549.5,150.1);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(224,153,38,1)",0,0,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(567).to({_off:false},0).to({alpha:1},7).wait(573));

	// time
	this.instance_4 = new lib._15minutes();
	this.instance_4.setTransform(826.5,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(1147));

	// clock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BEC0B6").s().p("AgOAyIAAg7IAAkRIAdABIAAIwIgdAEg");
	this.shape.setTransform(916.4,68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606163").s().p("At4EIIAAjrIAAg6IAAkDIbxAMIAAERIAAA6IAADqgAs9gcIAAA6IAAC/IZrARIAAi4IAAg6IAAjYI5rgLg");
	this.shape_1.setTransform(826,67.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("As1DaIAbgCIAAi8IAAg6IAAjLIgbgBIZrALIAADYIAAA7IAAC3g");
	this.shape_2.setTransform(825.1,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDCBC2").s().p("AgMAkIAAg6IAAjMIAZABIAADLIAAA7IAAC8IgZACg");
	this.shape_3.setTransform(744.2,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1147));

	// prev and next
	this.text = new cjs.Text("Module 08 Section 03 Scene 06", "16px Arial", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 366;
	this.text.setTransform(19,536);

	this.go = new lib.gobutton();
	this.go.setTransform(914.6,545.4);

	this.halt = new lib.forward();
	this.halt.setTransform(879.6,545.4,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.halt},{t:this.go},{t:this.text}]}).wait(1147));

	// frontRail
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDDEDF").s().p("APvD7ImqhBIAABBIhqAAIAAhRIqzhqIgBC7IhqAAIABjLIq2hoIgCEzIhqAAIAClDInRhHIgJAAQgSACgBAWIgDFyIhpAAIAClwQADg3AkglQAjglA0gEQAOgBAQACMAzZAH0g");
	this.shape_4.setTransform(302.9,477.1,1.505,1.505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(1147));

	// animGlowBand
	this.suzgolden_btn = new lib.suz_main();
	this.suzgolden_btn.setTransform(402.1,368.1,0.999,0.999,-18.7);
	this.suzgolden_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.suzgolden_btn).wait(574).to({_off:false},0).wait(573));

	// arm01
	this.instance_5 = new lib.rightArm();
	this.instance_5.setTransform(160.2,407.5,1,1,0,0,0,-146.3,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(264).to({regX:-146.1,rotation:-1.8,y:411.5},60).wait(45).to({regX:-146.2,rotation:0,y:407.5},61).wait(408).to({regX:-146.1,rotation:-1.8,y:411.5},60).wait(45).to({regX:-146.2,rotation:0,y:407.5},61).wait(143));

	// blanket
	this.instance_6 = new lib.blanket();
	this.instance_6.setTransform(501,499.8,1,1,0,0,0,108.6,123.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(264).to({y:494.6},60).wait(45).to({y:499.8},61).wait(408).to({y:494.6},60).wait(45).to({y:499.8},61).wait(143));

	// Layer 148
	this.instance_7 = new lib.gomezHead();
	this.instance_7.setTransform(226,370.2,0.999,0.999,-13.5,0,0,78.7,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(1147));

	// mrsGomez
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6E9E8").s().p("AEmB0Qg9gLjpgUQi3gQgzgXQgkgQhmgWQgggGgHgDQgJgHATgIQAJgTAbgXQA1gtBYgTQBRgRC2BVICPBBQBOAkAsAJQBtAYACAdQABARgoAAQgeAAg0gKg");
	this.shape_5.setTransform(364.7,337.1,1.505,1.505);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9CCFCE").s().p("A/nC2QA8g6BfhHQAyglBhgvQB4g8B4gnQFRhqC4BzQCZBgEaAlQDWAeFBAAQCzAAE6gGQDugBBFAbQCJA3Iog7QEUgdD5gnIAADAg");
	this.shape_6.setTransform(656.9,487.6,1.505,1.505);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AljDBQhTgpgVg9QgFgQgFggQgGghgFgOQgHgVgNgeIgWgzQgvhzBTAoIAGADIAjAUQAUALASAGQAxAPA6AHIBYAKIBWAMQBMAMBsAiIC5A3QAeAIBSARQBHATAVAhQAGALABAWQABAMAWAJIAnAOQAUAKADAUIABAOg");
	this.shape_7.setTransform(246.8,485.9,1.505,1.505);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AvXBxQgqgvgVg2QgYg3ACg5QBLgQBKAFIAmASQBbAACYAQQCtASBGADQBYAECTAjQCgAkBOAIQBnAJCTACID7ACQExAEC5AyQgFAKgIAJg");
	this.shape_8.setTransform(369,497.9,1.505,1.505);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7E8E9").s().p("AtEDiIAAm9QDDA/DPAHQEJAJEEhVIAVAOQAeAZAzA/QBWBsDsBuQCUBHCuA8g");
	this.shape_9.setTransform(126.8,481,1.505,1.505);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BBE2E6").s().p("AhAC5QhNg5ghgMQBsAPAKACIBMiFQBXiZBDg+IgjBaIg3BSQhCBugqCVg");
	this.shape_10.setTransform(264.9,386.1,1.505,1.505);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AAACAE").s().p("AgQAAQACgIAHABIAHACQAKACAIADIgfAIIgBAAQgEAAACgIg");
	this.shape_11.setTransform(269.1,327.8,1.505,1.505);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2F2F3").s().p("AilEdQgEglgCgvQgDhfAKg1QAQhLA7iFQBCiTAggBQAygCByAOQhKBJgmBNQgMAXgSA3QgHAUgEgDQg+BVg6CNQgdBHgQA2g");
	this.shape_12.setTransform(283.1,372.8,1.505,1.505);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AAACAE").s().p("AABAXQgTgXgDggIAKgHQALgFAEAHIACAMIAKAUQAJAXgDAYQgKgGgLgNg");
	this.shape_13.setTransform(251.9,348.9,1.505,1.505);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AAACAE").s().p("Ag/AaQADggAUgVQAigkBHAHIgDARIgvAJQgUAFgOARQgNANgDAZQgBANABAKIgbAFQgCgOABgSg");
	this.shape_14.setTransform(258,335.1,1.505,1.505);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AAACAE").s().p("AlLDfQgJgIAGgUIAJgRQBQi6BjhbQBNhHCEgrQB1glBaA8QAtAeAXAmIglAPQgTgfglgXQhJgrhgAeQh3AohRBNQhhBchMC1QgDAHgKAEIgIACQgHAAgGgGg");
	this.shape_15.setTransform(192.7,389.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2F2F3").s().p("AqlBmQAagvAuglQBXhGCAgUQAdgEAggCIAuABQA7gDA/gQQDHg0CkirQAJgfgGgoQgKhNhLghQAKgLAXgRQAsggA6gXQC1hKDyAuQhTAihaBaQi1C2gkEdIgQB2QgSB6gLAfIgBABIAAABIAIAOIgtgYIgwAYQg5Ajg4AzQh2BxhKCjQj2kXkbj4g");
	this.shape_16.setTransform(234.5,389.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1A890").s().p("AgjgIIBHAAIgPASg");
	this.shape_17.setTransform(280.7,367.1,1.505,1.505);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1A890").s().p("AhWgZICtADIgPAwg");
	this.shape_18.setTransform(250,414.7,1.505,1.505);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7E8E9").s().p("ABtA5QhFhAgggYIgtglQgggagRgHQgVgJgsAAQgtAAgUgHQAfAABKgEQA1AAAfAPIgGgLIATATQgGgFgHgDQAbA1BQBDQAxApBYBDQgsgJhAg4g");
	this.shape_19.setTransform(178,457.9,1.505,1.505);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7E8E9").s().p("AoMBsQh2g2AOiFIB5gcQBDgCB5AmQCEAqA4AEQAiADA/AIIBdAKQAuAEB5gDQgjAEgZAOQgdARgKAaQBXAFCrgDQCWACBfAkQgBAFgEAFg");
	this.shape_20.setTransform(218.4,498.6,1.505,1.505);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E7E8E9").s().p("AAjAAIhFABQAigEAjADg");
	this.shape_21.setTransform(257.9,497.7,1.505,1.505);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C5916E").s().p("AgDhAQAZgbAfgVIAcgQQgUBbhGBbQglAvghAbQgHhsBThUg");
	this.shape_22.setTransform(175.5,397.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B6DBD9").s().p("AjVB7IAAiaIAqAKQAzAIAlgKQB2gegyi/IDlANIAAF0IhxBog");
	this.shape_23.setTransform(929.2,464.7,1.505,1.505);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C5916E").s().p("AgvE0QgegEgYgLIgTgKQgOh9kjhNQhagYhsgRIhZgMQHYgUEvinQCYhVAnhCQCGBRCuAsQBXAWBAACQhQBNhuBaQjdC5iXBMQhVAshLAAQgTAAgTgDg");
	this.shape_24.setTransform(197.2,362.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ACCCMQg6hJjfjlQgcgchKhfIhEhZIBPA5QBdBJBEBSQA9BJBGAqQA/AkAMATQAIAPBFBWQA+BLAQAvIAOA7QASBAAKAVQiDifg9hMg");
	this.shape_25.setTransform(122.1,388.6,1.505,1.505);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C5916E").s().p("AkKBEQgpgMgsgfIgjgbQAkASA9AKQAeAGAXACQCbhBD5gaQB9gNBeAAIhFBGQgxARhXADQg+ADgzgFQgYgCiMAgQhkAXguAAQgQAAgJgDg");
	this.shape_26.setTransform(268.9,337.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C5916E").s().p("AhjEuIhCgUQgRhxjrg/QhKgThWgNIhIgIQGqghEVipQCOhWA2hQQCYBYCLgYQBGgMAngdQhZBph0B4QjpDviFBKQhPAshJAAIgagBg");
	this.shape_27.setTransform(197.8,362.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D6E9E8").s().p("AggjkQA8guBSgQQApgHAdABQATARhqB7QixDMgeAoQgwBBgGBYQgCAfADAZQg9l+DEiPg");
	this.shape_28.setTransform(312.5,365.8,1.505,1.505);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5BE9F").s().p("AhQBSQhQh/BJhuQAxhKAugNQAYgHAOAJIAWAPQAZAVAKAhQATBCABCeQABC7gxAGQhqhVgxhPg");
	this.shape_29.setTransform(185.3,415.7,1.505,1.505);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAOA4QjdhZgSgpQgRgoATgPIAWgIIA0ATQBAAbA7AeQC8BfBIBpQhsgmhwgtg");
	this.shape_30.setTransform(106.2,324.4,1.505,1.505);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5BE9F").s().p("ApEDkQgDgXgGgYQgPgwglg8QgbgsAGgCQASgHBUgUIBRgSQDdg2CgiiQAzgyAmg3IAagsQFehGC4AeQBcAOAWAdQkhCGi3FhQhbCwgjCWg");
	this.shape_31.setTransform(254.2,375.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag6AVQibg2A1gdIA5gBQA9gCAZgFQAXgEBXAcQAsAPAmAPIgeAhQggAngHAPQhYgWhMgcg");
	this.shape_32.setTransform(146.7,385.5,1.505,1.505);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFF0F0").s().p("AgCg5QhMg2hmg4QhBgjjChhIAAgkQDAA+DACEQEIC1DnEnQlLk4hvhQg");
	this.shape_33.setTransform(65.7,368.9,1.505,1.505);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFF0F0").s().p("AnBBqIAAj+QC2B2DBA9QEPBZD9gmQiHAhi0AUQiEAOhwAAQjFAAiPgrg");
	this.shape_34.setTransform(67.2,416.2,1.505,1.505);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgzATQiSgyAvgbIA1gBQA4gBAXgEQAVgFBSAbQApANAkAOIgaAfQgbAjgGAPQhTgVhHgag");
	this.shape_35.setTransform(127.8,379.9,1.505,1.505);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B6DBD9").s().p("AjEBuQgggbCEhzQBCg6BHg1QAnAQBBB5QAhA6AZA6QgHgGgyAKIhxAVQg3AJgtAAQhYAAgpgig");
	this.shape_36.setTransform(851.4,414.5,1.505,1.505);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B6DBD9").s().p("Ah0ATQBSguBqg6QAZAUA6gEQAegBAYgGQgnAUhAAdQh/A3iCAsQgoAOgMAAQgaAABxhDg");
	this.shape_37.setTransform(574.2,386.6,1.505,1.505);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B6DBD9").s().p("EgmAAHsQg5gngHiHQgNkPD5niIBHBAQBaBLBaA4QEdCxCuhXQBJglCkhiQCwhoBHglQEIiLgtCcQgvCjDEgTQBGgHBzgfQBAgSB3gjQEqhRBcgSQEEgwDFAiQBkARBMBdQAiApBSCRQBEB4A5AwQBVBFB5gNQDggZG8BrQDeA2CxA7IEiD2g");
	this.shape_38.setTransform(710.4,465.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D6E9E8").s().p("EgySAMQQgrh9hDnsIgejsQEPBCEvgZQJagzJEiYQBmgZBfglQAFgWAQgSIAJgKIAUgUQAFgFAEgGQAGgJAIgFQAHgFAKAAQAAg0AcguQAshHgChbQgChSgXgxICQAAQD3AIBtAtQBNAgA8gCQBNgDCkAvQCsAyCSg5QBjgoALgDQBCgUBHAKQAvAHC2AxQDMA2CVAcQILBhH5hVQHQhOEADsQAyAuBwCNQBQBlA5AVQCKAzDggSQBvgJBUgUIAANxg");
	this.shape_39.setTransform(625.6,436.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("A5AVwMAAAglvIAEAAQCKgHExiIQEVh8CRhlQFsApHYCHQO1ENIjHSIjhdQg");
	this.shape_40.setTransform(158.8,374.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D6E9E8").s().p("AwCG0IgdjmQhElIBeiUQAdguA1gmQA4goAIgLQAkgzBQgSQBKgQBsAPQBSAMD/AXQGDAjAqAFQBgAKAzAWQAdAMAmAbQBTAyEeABIEoABQAXAxACBRQACBcgsBEQgcAuAAA0QgKAAgHAFQgIAFgGAJQgEAGgFAFIgUAUIgJALQgQASgFAVQhfAlhmAaQpECXpYA0QhTAGhRAAQjWAAjEgvg");
	this.shape_41.setTransform(392.4,385.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1147));

	// backRail
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DDDEDF").s().p("EAgRALFIADp2Iq2hoIgELeIhpAAIAEruIq2hqIgELlIAAAAQgBAHgQAGQgPAGgVABQgWACgPgEQgQgEAAgHIAFr8Iq2hqIgELYIAAAAIAAACQAAAHgQAFQgQAGgVACQgVABgPgDQgOgEgCgGIgBAAIAFryIq2hqIgELXIgBAAQAAAHgPAGQgPAGgWACQgWABgPgEQgPgDgBgHIAAAAIAFrvIq3hqIgFLTIAAAAIABADQAAAHgPAGQgQAGgWABQgVACgQgEQgPgEAAgHIABgDIgCAAIAErqInRhHIgJAAQgSACgBAWIgEK7IgBAAQAAAHgPAGQgQAGgVACQgXABgOgEQgQgEAAgHIAAgBIAAAAIAFq/QACg3AlglQAiglA0gEQAOgBARACMBMoALrIAABtIlog3IgDJmg");
	this.shape_42.setTransform(581.4,398.9,1.505,1.505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).wait(1147));

	// IV
	this.ivBag = new lib.ivbag();
	this.ivBag.setTransform(273.9,167.6,1,1,0,0,180,0.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ivBag}]}).wait(1147));

	// wall
	this.instance_8 = new lib.Path();
	this.instance_8.setTransform(65.3,233.9,1.505,1.505,0,0,0,3.2,10.8);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_1();
	this.instance_9.setTransform(68.8,209.8,1.505,1.505,0,0,0,5.2,5.1);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.Path_2();
	this.instance_10.setTransform(68.9,201.4,1.505,1.505,0,0,0,5.7,0.5);
	this.instance_10.alpha = 0.602;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#75C0BE").s().p("AgIAMIAAgXIARAAIAAAXg");
	this.shape_43.setTransform(68.5,214.4,1.505,1.505);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#75C0BE").s().p("AgQAMIAAgXIAhAAIAAAXg");
	this.shape_44.setTransform(68.5,212.2,1.505,1.505);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#75C0BE").s().p("AgYAMIAAgXIAxAAIAAAXg");
	this.shape_45.setTransform(68.5,209.5,1.505,1.505);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#75C0BE").s().p("AggAMIAAgXIBBAAIAAAXg");
	this.shape_46.setTransform(68.5,205.9,1.505,1.505);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#75C0BE").s().p("AgnAMIAAgXIBPAAIAAAXg");
	this.shape_47.setTransform(68.5,202.4,1.505,1.505);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#75C0BE").s().p("AhGATIAAgkICOAAIAAAkg");
	this.shape_48.setTransform(68.6,198.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8DBDA").s().p("AgMAPIAAgdIAaAAIAAAdg");
	this.shape_49.setTransform(64.3,193.5,1.505,1.505);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8DBDA").s().p("AAAALIgEgVIAHAAIACAVg");
	this.shape_50.setTransform(68.3,212.7,1.505,1.505);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8DBDA").s().p("AgBALIgFgVIAKAAIADAVg");
	this.shape_51.setTransform(67.5,208.6,1.505,1.505);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8DBDA").s().p("AgBALIgFgVIAKAAIADAVg");
	this.shape_52.setTransform(66.7,204.1,1.505,1.505);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8DBDA").s().p("AgBALIgFgVIAKAAIADAVg");
	this.shape_53.setTransform(65.5,199.7,1.505,1.505);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A8AAAC").s().p("AgIAVQgFgJAAgMQAAgLAFgJQADgJAFAAQAFAAAFAJQAEAJAAALQAAAMgEAJQgFAJgFAAQgFAAgDgJg");
	this.shape_54.setTransform(48.3,183.5,1.505,1.505);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_55.setTransform(69.3,166.9,1.505,1.505);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_56.setTransform(69.3,162.3,1.505,1.505);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_57.setTransform(69.3,157.7,1.505,1.505);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_58.setTransform(69.3,153.1,1.505,1.505);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_59.setTransform(69.3,148.4,1.505,1.505);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_60.setTransform(69.3,143.8,1.505,1.505);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_61.setTransform(69.3,139.2,1.505,1.505);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_62.setTransform(69.3,134.6,1.505,1.505);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_63.setTransform(69.3,129.9,1.505,1.505);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_64.setTransform(69.3,125.3,1.505,1.505);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAJAAIgRAA");
	this.shape_65.setTransform(69.3,120.7,1.505,1.505);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#C2C4C6").ss(0.5,0,0,4).p("AAAjCIAAGF");
	this.shape_66.setTransform(67.5,142.2,1.505,1.505);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C9E4E2").s().p("AgHAnIgvgFQAEgKgFgWIgFgSIAAgQQArAGBOgMIAABCQgQALgmAAIgOAAg");
	this.shape_67.setTransform(68.4,181.2,1.505,1.505);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#858689").s().p("AgSAnQgLAAgHgLQgHgMAAgQQAAgPAHgLQAHgNALAAIAlAAQAKAAAIANQAHALAAAPQAAAQgHAMQgIALgKAAg");
	this.shape_68.setTransform(52,183.6,1.505,1.505);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgaA8Ig/gLIAAhaQAwgVBEACQAjABAZAGIADBdQgmAVg3AAIgXgBg");
	this.shape_69.setTransform(68.2,180.7,1.505,1.505);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C9E4E2").s().p("AgGDCIgKgIIAcmHQAFBkAAE3QgMgDgLgJg");
	this.shape_70.setTransform(63.8,142.1,1.505,1.505);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D9D9D3").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_71.setTransform(67.8,166.4,1.505,1.505);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#75C0BE").s().p("Ag2AdIAAg5IBtAAIAAA5g");
	this.shape_72.setTransform(68.5,192.7,1.505,1.505);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgvDqQgXgNAAgWIAYl9QAAgaALgRQANgTAWAAQAUAAALAWQAJATAAAcIAfFvQAAAWgZAQQgWAPgYAAQgaAAgVgLg");
	this.shape_73.setTransform(67.9,142.7,1.505,1.505);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B6B7BA").s().p("Ahui6IDdgUIAAGBIjdAcg");
	this.shape_74.setTransform(66.4,169.4,1.505,1.505);

	this.instance_11 = new lib.Path_36();
	this.instance_11.setTransform(60.8,151.2,1.505,1.505,0,0,0,12.8,30.8);
	this.instance_11.alpha = 0.102;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(0.8,0,0,4).p("AgRgTIAjAn");
	this.shape_75.setTransform(143.9,167.4,1.505,1.505);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AAACAE").s().p("AgMAkQgKgEgDgOQgDgOAGgNQAFgQALgIQAJgHAKAFQAKAEADAOQACAOgFANQgGAQgLAIQgGAEgFAAQgDAAgEgCg");
	this.shape_76.setTransform(139,188.3,1.505,1.505);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#858689").s().p("AgEAnIgQgFQgJgFgDgOQgDgOAFgNQAGgQALgHQALgIAIAFIAPAFQAKAFADAOQACAOgFANQgGAQgLAHQgGAFgHAAQgCAAgDgCg");
	this.shape_77.setTransform(137.8,187.9,1.505,1.505);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#858689").s().p("AgfBXQgXgLgGghQgHghANgjQANgkAagSQAYgSAXALQAXALAHAhQAGAhgNAjQgNAkgaASQgQALgNAAQgJAAgJgEg");
	this.shape_78.setTransform(141.5,165,1.505,1.505);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FEF8EC").s().p("AiWgCIAsgcQA3gZA+APICMA4QgagCgfADQg+AFgcAZg");
	this.shape_79.setTransform(130.1,145.1,1.505,1.505);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D2C9B3").s().p("AgxARIgUhRIB4AvIAUBRg");
	this.shape_80.setTransform(120.1,186.1,1.505,1.505);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E2D8C0").s().p("AhQBHQgGgjgCgqQgDhXAWgmICZAzIgIBNQgFBVASAyg");
	this.shape_81.setTransform(118,164.5,1.505,1.505);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FEF1D5").s().p("AhsCQIgRhTIgcgHQgEgkgBgpQgBhXARgmIAlgaQA0gXBHALICMA6IABBRQgBBVgMAkIg1AWIgdBVIg1AKg");
	this.shape_82.setTransform(129,167.1,1.505,1.505);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B6B7BA").s().p("Ahui5IDdgVIAAGBIjdAcg");
	this.shape_83.setTransform(118.4,165.2,1.505,1.505);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#858689").s().p("AgaANIAAgZIA1AAIAAAZg");
	this.shape_84.setTransform(131,194.9,1.505,1.505);

	this.instance_12 = new lib.Path_47();
	this.instance_12.setTransform(131.1,216.4,1.505,1.505,0,0,0,2,18.6);
	this.instance_12.alpha = 0.5;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DFDFD8").s().p("AgCCiIAAlFIAGAAIAAFHg");
	this.shape_85.setTransform(130.3,218.4,1.505,1.505);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C8CACC").s().p("AlzkHILngyIAAIVIrnBfg");
	this.shape_86.setTransform(90.5,170.9,1.505,1.505);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D3DBBA").s().p("Ar8R4MAAAghHIX5ioMgABAjvg");
	this.shape_87.setTransform(114.9,342.7,1.505,1.505);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCD7B5").s().p("Eg5OAa6MAACg10MByaAFLMAAAAwpg");
	this.shape_88.setTransform(596.3,342.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E3E2D5").s().p("EgR+AoOMAAAhQcMAj9AAAMAAABQcg");
	this.shape_89.setTransform(115,257.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DBDFD4").s().p("Eg5NAoOMAAAhQcMBybAAAMAAABQcg");
	this.shape_90.setTransform(596.2,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.instance_12},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_11},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,964.1,557.9);


// symbols:
(lib.cautionbarsv1 = function() {
	this.initialize(img.cautionbarsv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,40);


(lib.sim3screenblank = function() {
	this.initialize(img.sim3screenblank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,615,432);


(lib.suz_inside = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD5D4").s().p("ABMASQg1iKiOgMIABgXIAjAGQApAKAkAZQBvBLAPCwIgBABIgUASQADhDgahHg");
	this.shape.setTransform(-3,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAF6F6").s().p("ABXCtIABgBQgOivhwhMQgkgYgogLIgjgGIAvg2QCXAXBCCDQAgBAADA9Ig/BGIAAgCg");
	this.shape_1.setTransform(0.1,-0.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-18.3,30.2,36.8);


(lib.staticCautionBars = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cautionbarsv1();
	this.instance.setTransform(0,0,2.967,2.967);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,830.8,118.7);


(lib.spoke_mc = function() {
	this.initialize();

	// Spoke
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AgIAdIAAg5IARAAIAAA5g");
	this.shape.setTransform(0,-16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-19.9,2,6);


(lib.rightArm = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD5D4").s().p("AA0gDQg8hMhcAXIgDgOIAWgEQAcgCAbAHQBUAXAuBpIgIAQQgNgqgfgkg");
	this.shape.setTransform(93.5,-48.2,1.505,1.505);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAF6F6").s().p("AgkgmQgcgIgcACIgYADIASgsQBigSBEBEQAiAhAOAkIgXA4QgshohVgYg");
	this.shape_1.setTransform(95.3,-52.6,1.505,1.505);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBE2E6").s().p("AjShYQgnhLgRhRIAAgBIADADQAuBkDPBmQCJBCCMApIhACzQkhhgh8jug");
	this.shape_2.setTransform(-114.1,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AB7C5E").s().p("AipCuQBPijCBhrQAnghAqgZIAggSQALgJAFAMQABAGAAAHQiMBphUB7QgsA/gQAqg");
	this.shape_3.setTransform(-68.6,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AB7C5E").s().p("AocH/ICQglQCngxB8g8QA9gdDNlnQDAlNA0iJQAjhdA2gnQAcgUATAAIniQsIlhDfg");
	this.shape_4.setTransform(60.2,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C5916E").s().p("AoVJrQgliwguiIQBYhZBoh3QDPjuBQiYQCBjzBQitIAWgNQAbgPAmgJQA+gQAogDQBCgGBPAOQBKAOBMBUQAmAqAXAnQgzgTg9ADQh6AHgyBwQnTPagRAeIliDfQgJg8gThXg");
	this.shape_5.setTransform(81.3,-5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#446BA0").s().p("AheA+Ih9gtQgRggAKgtIAOgnQAehTDQB1QBqA7BjBKIAABDQiogXidgyg");
	this.shape_6.setTransform(-49.5,58.2,1.505,1.505);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A79AB").s().p("AjaAjQARgZAagdQAzg+AvgbIEoBlIg6B0g");
	this.shape_7.setTransform(-36.4,28.2,1.505,1.505);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#446BA0").s().p("AgwDbQgIgEgGgEQAwASAKACQgXgDgVgJgAjwCMQA0kFCUhQQArgZAygEQAZgBAQADICTA5IiJCNQiNCSgcAqQgWAhAZAUIiyhHg");
	this.shape_8.setTransform(-49.7,37.5,1.505,1.505);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AB7C5E").s().p("AhqDkQADjFBXiWQAagvAfglIAbgbIAnABQg/BUg4DDQgdBkgQBRg");
	this.shape_9.setTransform(8.1,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB7C5E").s().p("AlVCYQgIgcARhXIAShOQDaApDThLQBrgnA/gvQBMgggVBfQgWBZg6A2QgpAnhpAvIhhAng");
	this.shape_10.setTransform(33.7,55.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C5916E").s().p("AjBDZQAFi1BTiRQAbguAfglIAagbQAzAEBDgLQAhgFAWgHQAwBfgIDIQgEBlgNBRg");
	this.shape_11.setTransform(17.2,46.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#314B74").s().p("AiWgZIAjg5IEKBeIgfBHg");
	this.shape_12.setTransform(-10.2,6.9,1.505,1.505);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#314B74").s().p("AhzDEQAejgBFhuQATgjAXgSIATgMQArAAASAdQAKAPAAAOIgSAHQgHgfgRgIIgQgDQhEAlgnCwQgUBZgFBSg");
	this.shape_13.setTransform(8.6,51.1,1.505,1.505);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#446BA0").s().p("AjIDfIiPhAQAulECWg9QAugTA0AKQAaAFAQAJIA1hPIEPBpIAbBZQg7BAgqCxQgWBagIBMg");
	this.shape_14.setTransform(-34.2,36.5,1.505,1.505);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C5916E").s().p("AljDRQBNkKCtiiQA4gzA3gjIAQgIIBcAdIgBACIDzBmIggAYQlEB0iAC7QhABfABBIQhag3hKgyg");
	this.shape_15.setTransform(-56.8,27.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2F2F3").s().p("AjAFIQjgiSgxjDQg1jSCPh0QBXhHB/gUIAFgBQAggEAhAEQBAAIA7AWQAzASAvAcQBKAsBEA0IDICbIAAABIAIANIgtgYIggAQIgQAIQg6Ajg3AzQitCghOEMIgDAKQhkghhwhJg");
	this.shape_16.setTransform(-94.8,5.8);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-142.9,-81.8,286.1,163.8);


(lib.monitorGlow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCCC").s().p("A38Q6MAAIgiUMAvxAAWMgAFAifg");
	this.shape.setTransform(-2.9,-1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.3,-112.7,306.7,223.1);


(lib.IVglowPos = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOG/QACjMAFjXQAImrAOg0QgFCegCC/QgEF9ALCrQgFABgGAAIgCABQgIAAgIgFg");
	this.shape.setTransform(-11.4,1.1,1.405,1.405);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_1.setTransform(-5.2,60.1,1.405,1.405);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_2.setTransform(-5.2,56.4,1.405,1.405);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_3.setTransform(-6,44.6,1.405,1.405);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_4.setTransform(-6,40.9,1.405,1.405);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_5.setTransform(-6.4,29.2,1.405,1.405);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_6.setTransform(-6.4,25.4,1.405,1.405);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_7.setTransform(-6.9,13.7,1.405,1.405);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_8.setTransform(-6.9,10,1.405,1.405);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_9.setTransform(-6.5,-1.6,1.405,1.405);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_10.setTransform(-6.5,-5.4,1.405,1.405);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_11.setTransform(-6.1,-17.1,1.405,1.405);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_12.setTransform(-6.1,-20.8,1.405,1.405);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_13.setTransform(-5.4,-32.6,1.405,1.405);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_14.setTransform(-5.4,-36.3,1.405,1.405);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_15.setTransform(-5.1,-48,1.405,1.405);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_16.setTransform(-5.1,-51.8,1.405,1.405);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AADm7QgHC4gDDKQgHGTAXBg");
	this.shape_17.setTransform(-5,1.1,1.405,1.405);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCEAFB").s().p("AiOATQg8gIAAgLQAAgKA8gIQA7gIBTAAQBUAAA7AIQA8AIAAAKQAAALg8AIQg7AIhUAAQhSAAg8gIg");
	this.shape_18.setTransform(1,1.8,1.405,1.405);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCEAFB").s().p("AiUAVQg+gJAAgMQAAgLA+gJQA+gJBWAAQBXAAA+AJQA+AJAAALQAAAMg+AJQg+AJhXAAQhWAAg+gJg");
	this.shape_19.setTransform(-0.1,65.9,1.405,1.405);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E4F4FD").s().p("AhRDxQhPgNg0gWIAAnGIGpAAIAAHUQhZAdhiAAQgzAAg4gIg");
	this.shape_20.setTransform(0,36.2,1.405,1.405);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AheIBQhUgKg2gTIAAvPQASgFAegGQA8gNBAgDIAOASQATARAbAAQAFgOgFgJQgTgFgFgFIgDgDQCJgCB7AoIAAPLQhsAehwAAQg0AAg3gHg");
	this.shape_21.setTransform(0.5,0,1.405,1.405);

	// Layer 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3366FF").s().p("AiELSQh3gPhLgbIAA1aQAYgIArgJQBUgRBagEIAUAYQAbAYAmABQAHgUgHgNQgcgGgHgIIgEgEQDCgDCsA5IAAVVQiXAqieAAQhJAAhNgJg");
	this.shape_22.setTransform(0.5,0);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.2,-73.1,65.6,146.4);


(lib.ivBlackFader = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhK+AoOMAAAhQbMCV9AAAMAAABQbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-479.9,-257.4,960,515);


(lib.ivbag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCEAFB").s().p("AgGAGQgDgCAAgEQAAgDADgEQADgBADAAQAEAAACABQAEAEAAADQAAAEgEACQgCADgEABQgDgBgDgDg");
	this.shape.setTransform(-54,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCEAFB").s().p("AgGAGQgDgCAAgEQAAgDADgEQADgCADAAQAEAAACACQAEAEAAADQAAAEgEACQgCAEgEAAQgDAAgDgEg");
	this.shape_1.setTransform(-53.9,49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCEAFB").s().p("AgHAHQgDgDAAgEQAAgDADgEQADgDAEAAQAEAAADADQAEAEAAADQAAAEgEADQgDAEgEAAQgEAAgDgEg");
	this.shape_2.setTransform(-53.9,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCEAFB").s().p("AgHAHQgDgCAAgFQAAgEADgEQADgCAEAAQAFAAACACQAEAEAAAEQAAAFgEACQgCAEgFAAQgEAAgDgEg");
	this.shape_3.setTransform(-53.9,49.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCEAFB").s().p("AgIAHQgDgCAAgFQAAgEADgEQAEgDAEAAQAFAAACADQAFAEAAAEQAAAFgFACQgCAFgFAAQgEAAgEgFg");
	this.shape_4.setTransform(-53.9,49.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCEAFB").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_5.setTransform(-53.9,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCEAFB").s().p("AgJAIQgDgDAAgFQAAgEADgFQAEgDAFAAQAFAAADADQAFAFAAAEQAAAFgFADQgDAFgFAAQgFAAgEgFg");
	this.shape_6.setTransform(-53.9,49.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCEAFB").s().p("AgJAJQgDgDAAgGQAAgEADgFQAEgDAFAAQAFAAADADQAFAFAAAEQAAAGgFADQgDAEgFAAQgFAAgEgEg");
	this.shape_7.setTransform(-53.9,49.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCEAFB").s().p("AgJAJQgEgDAAgGQAAgFAEgFQAEgDAFAAQAGAAADADQAFAFAAAFQAAAGgFADQgDAFgGAAQgFAAgEgFg");
	this.shape_8.setTransform(-53.8,49.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCEAFB").s().p("AgKAJQgDgDAAgGQAAgFADgFQAFgDAFAAQAGAAADADQAFAFAAAFQAAAGgFADQgDAFgGAAQgFAAgFgFg");
	this.shape_9.setTransform(-53.8,49.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCEAFB").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAEgEAGAAQAGAAADAEQAGAFAAAFQAAAGgGAEQgDAFgGAAQgGAAgEgFg");
	this.shape_10.setTransform(-53.8,49.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCEAFB").s().p("AgLAKQgDgDAAgHQAAgFADgGQAFgDAGAAQAGAAAEADQAFAGAAAFQAAAHgFADQgEAFgGAAQgGAAgFgFg");
	this.shape_11.setTransform(-53.8,49.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCEAFB").s().p("AgLAKQgEgDAAgHQAAgGAEgFQAFgEAGAAQAHAAADAEQAGAFAAAGQAAAHgGADQgDAGgHAAQgGAAgFgGg");
	this.shape_12.setTransform(-53.8,49.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCEAFB").s().p("AgLALQgEgEAAgHQAAgGAEgGQAFgDAGAAQAHAAADADQAGAGAAAGQAAAHgGAEQgDAFgHAAQgGAAgFgFg");
	this.shape_13.setTransform(-53.8,49.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCEAFB").s().p("AgMALQgEgEAAgHQAAgGAEgGQAFgEAHAAQAHAAAEAEQAGAGAAAGQAAAHgGAEQgEAGgHAAQgHAAgFgGg");
	this.shape_14.setTransform(-53.8,49.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCEAFB").s().p("AgMAMQgEgEAAgIQAAgGAEgGQAFgEAHAAQAHAAAEAEQAGAGAAAGQAAAIgGAEQgEAFgHAAQgHAAgFgFg");
	this.shape_15.setTransform(-53.8,49.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCEAFB").s().p("AgNAMQgEgEAAgIQAAgGAEgHQAGgEAHAAQAHAAAEAEQAHAHAAAGQAAAIgHAEQgEAGgHAAQgHAAgGgGg");
	this.shape_16.setTransform(-53.7,49.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCEAFB").s().p("AgNAMQgEgEAAgIQAAgHAEgGQAGgEAHAAQAIAAAEAEQAGAGAAAHQAAAIgGAEQgEAGgIAAQgHAAgGgGg");
	this.shape_17.setTransform(-53.7,49.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCEAFB").s().p("AgOANQgEgFAAgIQAAgHAEgHQAGgEAIAAQAIAAAEAEQAHAHAAAHQAAAIgHAFQgEAGgIAAQgIAAgGgGg");
	this.shape_18.setTransform(-53.7,49.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCEAFB").s().p("AgOANQgEgEgBgJQABgHAEgHQAGgFAIABQAIgBAFAFQAGAHAAAHQAAAJgGAEQgFAGgIAAQgIAAgGgGg");
	this.shape_19.setTransform(-53.7,50);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCEAFB").s().p("AgOANQgEgFgBgIQABgHAEgHQAGgEAIAAQAIAAAFAEQAGAHABAHQgBAIgGAFQgFAHgIgBQgIABgGgHg");
	this.shape_20.setTransform(-53.7,52.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCEAFB").s().p("AgOANQgFgEAAgJQAAgHAFgHQAGgEAIgBQAIABAEAEQAIAHAAAHQAAAJgIAEQgEAHgIAAQgIAAgGgHg");
	this.shape_21.setTransform(-53.7,55.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCEAFB").s().p("AgOANQgFgFABgIQgBgHAFgHQAGgFAIAAQAIAAAEAFQAIAHAAAHQAAAIgIAFQgEAGgIABQgIgBgGgGg");
	this.shape_22.setTransform(-53.7,58.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCEAFB").s().p("AgOANQgFgFABgIQgBgHAFgHQAGgFAIABQAIgBAEAFQAIAHgBAHQABAIgIAFQgEAGgIABQgIgBgGgGg");
	this.shape_23.setTransform(-53.7,61.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCEAFB").s().p("AgOANQgEgEAAgJQAAgHAEgHQAGgFAIABQAIgBAFAFQAGAHAAAHQAAAJgGAEQgFAGgIAAQgIAAgGgGg");
	this.shape_24.setTransform(-53.7,64.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCEAFB").s().p("AgOANQgEgFgBgIQABgHAEgHQAGgEAIAAQAIAAAFAEQAGAHAAAHQAAAIgGAFQgFAHgIgBQgIABgGgHg");
	this.shape_25.setTransform(-53.7,67.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCEAFB").s().p("AgOANQgEgFgBgIQABgHAEgHQAGgEAIgBQAIABAFAEQAGAHABAHQgBAIgGAFQgFAHgIAAQgIAAgGgHg");
	this.shape_26.setTransform(-53.7,70);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCEAFB").s().p("AgOANQgFgEAAgJQAAgHAFgHQAGgFAIAAQAIAAAEAFQAIAHAAAHQAAAJgIAEQgEAHgIAAQgIAAgGgHg");
	this.shape_27.setTransform(-53.7,72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCEAFB").s().p("AgOANQgFgFABgIQgBgHAFgHQAGgFAIAAQAIAAAEAFQAIAHgBAHQABAIgIAFQgEAGgIABQgIgBgGgGg");
	this.shape_28.setTransform(-53.7,75.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).wait(51));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCEAFB").s().p("AgVAZIAAgyIArAAIAAAyg");
	this.shape_29.setTransform(-53.8,75.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAUQgFgIAAgMQAAgKAFgJQAFgIAFAAQAGAAAFAIQAFAJAAAKQAAAMgFAIQgFAIgGAAQgFAAgFgIg");
	this.shape_30.setTransform(-47.4,54.8,1.405,1.405);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D3D4D5").s().p("AgKAUQgFgIAAgMQAAgKAFgJQAFgIAFAAQAGAAAFAIQAFAJAAAKQAAAMgFAIQgFAIgGAAQgFAAgFgIg");
	this.shape_31.setTransform(-49.2,54.8,1.405,1.405);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#EBECED").ss(1,0,0,4).p("AgZAAIAzAA");
	this.shape_32.setTransform(-53.7,47.6,1.405,1.405);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgwAIIAAgPIBiAAIAAAPg");
	this.shape_33.setTransform(-53.9,45.3,1.405,1.405);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggCAIAAj/IBBAAIAAD/g");
	this.shape_34.setTransform(-53.7,63.2,1.405,1.405);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EBECED").s().p("AgNAAIAUgLIAHALIgVAMg");
	this.shape_35.setTransform(-23.2,40.1,1.405,1.405);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUgGIAUgRIAVAgIgYAOg");
	this.shape_36.setTransform(-22.2,41.3,1.405,1.405);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EBECED").s().p("AgSAMIgBgVIAngDIgBATQgIAGgPAAIgOgBg");
	this.shape_37.setTransform(-26.3,22.7,1.405,1.405);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EBECED").s().p("AgUAKIACgWIAnAHIgDASg");
	this.shape_38.setTransform(-51.5,21.2,1.405,1.405);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AgGhLIAAA1QADA3ANAX");
	this.shape_39.setTransform(-25.2,31.3,1.405,1.405);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AAIrrIgPEeQgJFaAbNf");
	this.shape_40.setTransform(-52.2,94.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AAFr0IgFBFQgDBZgCBiQgBANAAANAgLnaQgFFHAdOJ");
	this.shape_41.setTransform(-52.3,95.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOG/QACjMAFjXQAImrAOg0QgFCegCC/QgEF9ALCrQgFABgGAAIgCABQgIAAgIgFg");
	this.shape_42.setTransform(-46.9,-50.8,1.405,1.405);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_43.setTransform(-40.6,8.1,1.405,1.405);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_44.setTransform(-40.6,4.4,1.405,1.405);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_45.setTransform(-41.5,-7.2,1.405,1.405);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_46.setTransform(-41.5,-10.9,1.405,1.405);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_47.setTransform(-41.9,-22.7,1.405,1.405);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_48.setTransform(-41.9,-26.4,1.405,1.405);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_49.setTransform(-42.3,-38.1,1.405,1.405);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_50.setTransform(-42.3,-41.9,1.405,1.405);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_51.setTransform(-42,-53.6,1.405,1.405);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_52.setTransform(-42,-57.3,1.405,1.405);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_53.setTransform(-41.6,-69.1,1.405,1.405);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_54.setTransform(-41.6,-72.8,1.405,1.405);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_55.setTransform(-40.9,-84.5,1.405,1.405);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_56.setTransform(-40.9,-88.2,1.405,1.405);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_57.setTransform(-40.5,-100,1.405,1.405);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AhPAAICfAA");
	this.shape_58.setTransform(-40.5,-103.7,1.405,1.405);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#DDDEDF").ss(1,0,0,4).p("AADm7QgHC4gDDKQgHGTAXBg");
	this.shape_59.setTransform(-40.5,-50.7,1.405,1.405);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CCEAFB").s().p("AiOATQg8gIAAgLQAAgKA8gIQA7gIBTAAQBUAAA7AIQA8AIAAAKQAAALg8AIQg7AIhUAAQhSAAg8gIg");
	this.shape_60.setTransform(-34.4,-50.1,1.405,1.405);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCEAFB").s().p("AiUAVQg+gJAAgMQAAgLA+gJQA+gJBWAAQBXAAA+AJQA+AJAAALQAAAMg+AJQg+AJhXAAQhWAAg+gJg");
	this.shape_61.setTransform(-35.5,13.9,1.405,1.405);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E4F4FD").s().p("AhRDxQhPgNg0gWIAAnGIGpAAIAAHUQhZAdhiAAQgzAAg4gIg");
	this.shape_62.setTransform(-35.3,-15.7,1.405,1.405);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AAACAE").s().p("AgRAHIALgPIAYAFIgGAMg");
	this.shape_63.setTransform(-29.6,-126.1,1.405,1.405);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AheIBQhUgKg2gTIAAvPQASgFAegGQA8gNBAgDIAOASQATARAbAAQAFgOgFgJQgTgFgFgFIgDgDQCJgCB7AoIAAPLQhsAehwAAQg0AAg3gHg");
	this.shape_64.setTransform(-34.8,-51.9,1.405,1.405);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDgQQAEgKAFgEIAHAHQgNAKgHAWQgDAMgBAKQgCgdAKgSg");
	this.shape_65.setTransform(-41.6,-133.2,1.405,1.405);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AAACAE").s().p("AgPgHIAZAAIAGAMIgWAEg");
	this.shape_66.setTransform(-29.1,-134.3,1.405,1.405);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AiLACIEXgEIgDAFg");
	this.shape_67.setTransform(2.9,-139.9,1.405,1.405);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhdACIAAgDIC3AAQAHADgGAAg");
	this.shape_68.setTransform(49.6,-139.7,1.405,1.405);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AAACAE").s().p("AhdAEIgFgEQgDgBAHgCIDBAAQgDAHgEAAg");
	this.shape_69.setTransform(49.1,-137.7,1.405,1.405);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AAACAE").s().p("AgDATQAAgegEgHIANAAQAEAOgCAXg");
	this.shape_70.setTransform(34.5,-138.6,1.405,1.405);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgKAAQAAgBAEgCQADgCADAAQAEAAADACQAEACAAABQAAAGgLAAQgKAAAAgGg");
	this.shape_71.setTransform(28.4,-141.5,1.405,1.405);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AjNgCIGjAAImrAFg");
	this.shape_72.setTransform(-7.3,-139.8,1.405,1.405);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AAACAE").s().p("AjXgFIGtgBIACAMImnABg");
	this.shape_73.setTransform(-7.3,-138,1.405,1.405);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AAACAE").s().p("AgJAHQgDgFACgHIADgIIAHAEQAIAGACADQAEAFgIAHQgDACgDAAQgDAAgGgHg");
	this.shape_74.setTransform(29.3,-140.8,1.405,1.405);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAAAMQgDgBgBgEIAAgHQABgIADgEQAFAMAAAHQAAAGgEAAIgBgBg");
	this.shape_75.setTransform(25.6,-139,1.405,1.405);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AAACAE").s().p("AAIAXIgDgDIgFgHQAAgOgIgIQgIgFACgEQAFgJANAKQAKAGABAMQABAGgCAGQgCAKgDAAIgBAAg");
	this.shape_76.setTransform(30.1,-139.8,1.405,1.405);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AAACAE").s().p("AgI0fIARAAMAAAAowIgRAPg");
	this.shape_77.setTransform(31.3,-6.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgG0uIAOAAMAAAApSIgOALg");
	this.shape_78.setTransform(25.7,-5.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D5D6D7").s().p("Ag20jQAAgUAQgPQARgOAVAAQAXAAAQAOQAQAPAAAUMAAAAo2IhtBCg");
	this.shape_79.setTransform(28.3,-7.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D5D6D7").s().p("AguA0QgSgWAAgeQAAgdASgWQATgWAbgBQAbABATAWQATAWAAAdQAAAegTAWQgTAXgbAAQgbAAgTgXgAgagiQgMAOAAAUQAAAVAMAOQAMANAOAAQAPAAALgNQANgOAAgVQAAgUgNgOQgLgOgPAAQgOAAgMAOg");
	this.shape_80.setTransform(-35.5,-130.6,1.405,1.405);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AAACAE").s().p("AADgBIgCgYQACgGAEACIAEADQABAggNARIgKAHQAMgLACgUg");
	this.shape_81.setTransform(66,-129.1,1.405,1.405);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDgQQAEgKAFgEIAHAHQgNAKgHAWQgDAMgBAKQgCgdAKgSg");
	this.shape_82.setTransform(53.8,-133.2,1.405,1.405);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#D5D6D7").ss(2.6,0,0,4).p("AA0AAQAAAagPASQgPASgWAAQgUAAgQgSQgPgSAAgaQAAgYAPgSQAQgTAUAAQAWAAAPATQAPASAAAYg");
	this.shape_83.setTransform(59.9,-130.6,1.405,1.405);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D5D6D7").s().p("AlfATQgIAAgGgFQgGgGAAgIQAAgHAGgGQAGgFAIAAIK/AAQAIAAAGAFQAGAGAAAHQAAAIgGAGQgGAFgIAAg");
	this.shape_84.setTransform(12.8,-138.6,1.405,1.405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-144.3,135.4,315.5);


(lib.gobutton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D69A7").ss(1,1,1).p("ABXhXQAlAlAAAyQAAAzglAkQgkAlgzAAQgyAAglglQgkgkAAgzQAAgyAkglQAlgkAyAAQAzAAAkAkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2ADD0").s().p("Agyg/IBlA/IhlBAg");
	this.shape_1.setTransform(1.7,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#155AA9","#1B4279"],[0,1],-12.3,0,12.4,0).s().p("AhXBXQgjgkgBgzQABgyAjglQAlgjAygBQAzABAkAjQAlAlAAAyQAAAzglAkQgkAlgzAAQgyAAglglgAghBEIBlhBIhlg/g");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-12.3,24.8,24.8);


(lib.genAnesScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whiteMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_1 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_2 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_3 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_4 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_5 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_6 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_7 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_8 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_9 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_10 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_11 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_12 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_13 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_14 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_15 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_16 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_17 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_18 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_19 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_20 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_21 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_22 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_23 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_24 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_25 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_26 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_27 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_28 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_29 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_30 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_31 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_32 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_33 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_34 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_35 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_36 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_37 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_38 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_39 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_40 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_41 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_42 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_43 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_44 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_45 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_46 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_47 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_48 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_49 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_50 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_51 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_52 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_53 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_54 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_55 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_56 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_57 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_58 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_59 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_60 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_61 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_62 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_63 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_64 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_65 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_66 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_67 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_68 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_69 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_70 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_71 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_72 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_73 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_74 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_75 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_76 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_77 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_78 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_79 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_80 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_81 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_82 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_83 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_84 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_85 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_86 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_87 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_88 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_89 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_90 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_91 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_92 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_93 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_94 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_95 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_96 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_97 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_98 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_99 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_100 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_101 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_102 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_103 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_104 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_105 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_106 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_107 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_108 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_109 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_110 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_111 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_112 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_113 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_114 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_115 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_116 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_117 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_118 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_119 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_120 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_121 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_122 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_123 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_124 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_125 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_126 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_127 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_128 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_129 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_130 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_131 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_132 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_133 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_134 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_135 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_136 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_137 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_138 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_139 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_140 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_141 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_142 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_143 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_144 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_145 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_146 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_147 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_148 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_149 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_150 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_151 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_152 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_153 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_154 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_155 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_156 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_157 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_158 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_159 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_160 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_161 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_162 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_163 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_164 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_165 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_166 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_167 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_168 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_169 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_170 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_171 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_172 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_173 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_174 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_175 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_176 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_177 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_178 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_179 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_180 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_181 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_182 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_183 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_184 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_185 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_186 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_187 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_188 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_189 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_190 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_191 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_192 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_193 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_194 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_195 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_196 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_197 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_198 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_199 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_200 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_201 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_202 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_203 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_204 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_205 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_206 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_207 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_208 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_209 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_210 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_211 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_212 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_213 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_214 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_215 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_216 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_217 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_218 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_219 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_220 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_221 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_222 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_223 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_224 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_225 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_226 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_227 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_228 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_229 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_230 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_231 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_232 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_233 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_234 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_235 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_236 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_237 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_238 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_239 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_240 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_241 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_242 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_243 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_244 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_245 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_246 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_247 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_248 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_249 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_250 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_251 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_252 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_253 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_254 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_255 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_256 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_257 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_258 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_259 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_260 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_261 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_262 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_263 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_264 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_265 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_266 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_267 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_268 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_269 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_270 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_271 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_272 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_273 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_274 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_275 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_276 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_277 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_278 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_279 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_280 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_281 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_282 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_283 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_284 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_285 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_286 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_287 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_288 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_289 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_290 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_291 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_292 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_293 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_294 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_295 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_296 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_297 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_298 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_299 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_300 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_301 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_302 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_303 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_304 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_305 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_306 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_307 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_308 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_309 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_310 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_311 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_312 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_313 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_314 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_315 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_316 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_317 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_318 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_319 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_320 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_321 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_322 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_323 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_324 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_325 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_326 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_327 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_328 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_329 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_330 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_331 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_332 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_333 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_334 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_335 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_336 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_337 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_338 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_339 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_340 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_341 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_342 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_343 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_344 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_345 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_346 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_347 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_348 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_349 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_350 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_351 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_352 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_353 = new cjs.Graphics().p("ABXEUIAAonMA1NAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_354 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_355 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2jAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_356 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");
	var mask_graphics_357 = new cjs.Graphics().p("ABYEUIAAonMA1MAAAIAAIngEg2kAEUIAAonMA1NAAAIAAIng");
	var mask_graphics_358 = new cjs.Graphics().p("ABYEUIAAonMA1NAAAIAAIngEg2jAEUIAAonMA1MAAAIAAIng");
	var mask_graphics_359 = new cjs.Graphics().p("ABXEUIAAonMA1OAAAIAAIngEg2kAEUIAAonMA1OAAAIAAIng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-7.4,y:179.1}).wait(1).to({graphics:mask_graphics_1,x:-6.4,y:179.1}).wait(1).to({graphics:mask_graphics_2,x:-5.5,y:179.1}).wait(1).to({graphics:mask_graphics_3,x:-4.6,y:179.1}).wait(1).to({graphics:mask_graphics_4,x:-3.7,y:179.1}).wait(1).to({graphics:mask_graphics_5,x:-2.8,y:179.1}).wait(1).to({graphics:mask_graphics_6,x:-1.9,y:179.1}).wait(1).to({graphics:mask_graphics_7,x:-1,y:179.1}).wait(1).to({graphics:mask_graphics_8,x:-0.1,y:179.1}).wait(1).to({graphics:mask_graphics_9,x:0.7,y:179.1}).wait(1).to({graphics:mask_graphics_10,x:1.6,y:179.1}).wait(1).to({graphics:mask_graphics_11,x:2.5,y:179.1}).wait(1).to({graphics:mask_graphics_12,x:3.4,y:179.1}).wait(1).to({graphics:mask_graphics_13,x:4.3,y:179.1}).wait(1).to({graphics:mask_graphics_14,x:5.2,y:179.1}).wait(1).to({graphics:mask_graphics_15,x:6.1,y:179.1}).wait(1).to({graphics:mask_graphics_16,x:7,y:179.1}).wait(1).to({graphics:mask_graphics_17,x:7.9,y:179.1}).wait(1).to({graphics:mask_graphics_18,x:8.8,y:179.1}).wait(1).to({graphics:mask_graphics_19,x:9.7,y:179.1}).wait(1).to({graphics:mask_graphics_20,x:10.6,y:179.1}).wait(1).to({graphics:mask_graphics_21,x:11.5,y:179.1}).wait(1).to({graphics:mask_graphics_22,x:12.4,y:179.1}).wait(1).to({graphics:mask_graphics_23,x:13.3,y:179.1}).wait(1).to({graphics:mask_graphics_24,x:14.2,y:179.1}).wait(1).to({graphics:mask_graphics_25,x:15.1,y:179.1}).wait(1).to({graphics:mask_graphics_26,x:16,y:179.1}).wait(1).to({graphics:mask_graphics_27,x:16.9,y:179.1}).wait(1).to({graphics:mask_graphics_28,x:17.8,y:179.1}).wait(1).to({graphics:mask_graphics_29,x:18.7,y:179.1}).wait(1).to({graphics:mask_graphics_30,x:19.7,y:179.1}).wait(1).to({graphics:mask_graphics_31,x:20.6,y:179.1}).wait(1).to({graphics:mask_graphics_32,x:21.5,y:179.1}).wait(1).to({graphics:mask_graphics_33,x:22.4,y:179.1}).wait(1).to({graphics:mask_graphics_34,x:23.3,y:179.1}).wait(1).to({graphics:mask_graphics_35,x:24.2,y:179.1}).wait(1).to({graphics:mask_graphics_36,x:25.1,y:179.1}).wait(1).to({graphics:mask_graphics_37,x:26,y:179.1}).wait(1).to({graphics:mask_graphics_38,x:26.9,y:179.1}).wait(1).to({graphics:mask_graphics_39,x:27.8,y:179.1}).wait(1).to({graphics:mask_graphics_40,x:28.7,y:179.1}).wait(1).to({graphics:mask_graphics_41,x:29.6,y:179.1}).wait(1).to({graphics:mask_graphics_42,x:30.5,y:179.1}).wait(1).to({graphics:mask_graphics_43,x:31.4,y:179.1}).wait(1).to({graphics:mask_graphics_44,x:32.3,y:179.1}).wait(1).to({graphics:mask_graphics_45,x:33.2,y:179.1}).wait(1).to({graphics:mask_graphics_46,x:34.1,y:179.1}).wait(1).to({graphics:mask_graphics_47,x:35,y:179.1}).wait(1).to({graphics:mask_graphics_48,x:35.9,y:179.1}).wait(1).to({graphics:mask_graphics_49,x:36.8,y:179.1}).wait(1).to({graphics:mask_graphics_50,x:37.7,y:179.1}).wait(1).to({graphics:mask_graphics_51,x:38.6,y:179.1}).wait(1).to({graphics:mask_graphics_52,x:39.5,y:179.1}).wait(1).to({graphics:mask_graphics_53,x:40.4,y:179.1}).wait(1).to({graphics:mask_graphics_54,x:41.3,y:179.1}).wait(1).to({graphics:mask_graphics_55,x:42.2,y:179.1}).wait(1).to({graphics:mask_graphics_56,x:43.1,y:179.1}).wait(1).to({graphics:mask_graphics_57,x:44,y:179.1}).wait(1).to({graphics:mask_graphics_58,x:44.9,y:179.1}).wait(1).to({graphics:mask_graphics_59,x:45.8,y:179.1}).wait(1).to({graphics:mask_graphics_60,x:46.8,y:179.1}).wait(1).to({graphics:mask_graphics_61,x:47.7,y:179.1}).wait(1).to({graphics:mask_graphics_62,x:48.6,y:179.1}).wait(1).to({graphics:mask_graphics_63,x:49.5,y:179.1}).wait(1).to({graphics:mask_graphics_64,x:50.4,y:179.1}).wait(1).to({graphics:mask_graphics_65,x:51.3,y:179.1}).wait(1).to({graphics:mask_graphics_66,x:52.2,y:179.1}).wait(1).to({graphics:mask_graphics_67,x:53.1,y:179.1}).wait(1).to({graphics:mask_graphics_68,x:54,y:179.1}).wait(1).to({graphics:mask_graphics_69,x:54.9,y:179.1}).wait(1).to({graphics:mask_graphics_70,x:55.8,y:179.1}).wait(1).to({graphics:mask_graphics_71,x:56.7,y:179.1}).wait(1).to({graphics:mask_graphics_72,x:57.6,y:179.1}).wait(1).to({graphics:mask_graphics_73,x:58.5,y:179.1}).wait(1).to({graphics:mask_graphics_74,x:59.4,y:179.1}).wait(1).to({graphics:mask_graphics_75,x:60.3,y:179.1}).wait(1).to({graphics:mask_graphics_76,x:61.2,y:179.1}).wait(1).to({graphics:mask_graphics_77,x:62.1,y:179.1}).wait(1).to({graphics:mask_graphics_78,x:63,y:179.1}).wait(1).to({graphics:mask_graphics_79,x:63.9,y:179.1}).wait(1).to({graphics:mask_graphics_80,x:64.8,y:179.1}).wait(1).to({graphics:mask_graphics_81,x:65.7,y:179.1}).wait(1).to({graphics:mask_graphics_82,x:66.6,y:179.1}).wait(1).to({graphics:mask_graphics_83,x:67.5,y:179.1}).wait(1).to({graphics:mask_graphics_84,x:68.4,y:179.1}).wait(1).to({graphics:mask_graphics_85,x:69.3,y:179.1}).wait(1).to({graphics:mask_graphics_86,x:70.2,y:179.1}).wait(1).to({graphics:mask_graphics_87,x:71.1,y:179.1}).wait(1).to({graphics:mask_graphics_88,x:72,y:179.1}).wait(1).to({graphics:mask_graphics_89,x:72.9,y:179.1}).wait(1).to({graphics:mask_graphics_90,x:73.9,y:179.1}).wait(1).to({graphics:mask_graphics_91,x:74.8,y:179.1}).wait(1).to({graphics:mask_graphics_92,x:75.7,y:179.1}).wait(1).to({graphics:mask_graphics_93,x:76.6,y:179.1}).wait(1).to({graphics:mask_graphics_94,x:77.5,y:179.1}).wait(1).to({graphics:mask_graphics_95,x:78.4,y:179.1}).wait(1).to({graphics:mask_graphics_96,x:79.3,y:179.1}).wait(1).to({graphics:mask_graphics_97,x:80.2,y:179.1}).wait(1).to({graphics:mask_graphics_98,x:81.1,y:179.1}).wait(1).to({graphics:mask_graphics_99,x:82,y:179.1}).wait(1).to({graphics:mask_graphics_100,x:82.9,y:179.1}).wait(1).to({graphics:mask_graphics_101,x:83.8,y:179.1}).wait(1).to({graphics:mask_graphics_102,x:84.7,y:179.1}).wait(1).to({graphics:mask_graphics_103,x:85.6,y:179.1}).wait(1).to({graphics:mask_graphics_104,x:86.5,y:179.1}).wait(1).to({graphics:mask_graphics_105,x:87.4,y:179.1}).wait(1).to({graphics:mask_graphics_106,x:88.3,y:179.1}).wait(1).to({graphics:mask_graphics_107,x:89.2,y:179.1}).wait(1).to({graphics:mask_graphics_108,x:90.1,y:179.1}).wait(1).to({graphics:mask_graphics_109,x:91,y:179.1}).wait(1).to({graphics:mask_graphics_110,x:91.9,y:179.1}).wait(1).to({graphics:mask_graphics_111,x:92.8,y:179.1}).wait(1).to({graphics:mask_graphics_112,x:93.7,y:179.1}).wait(1).to({graphics:mask_graphics_113,x:94.6,y:179.1}).wait(1).to({graphics:mask_graphics_114,x:95.5,y:179.1}).wait(1).to({graphics:mask_graphics_115,x:96.4,y:179.1}).wait(1).to({graphics:mask_graphics_116,x:97.3,y:179.1}).wait(1).to({graphics:mask_graphics_117,x:98.2,y:179.1}).wait(1).to({graphics:mask_graphics_118,x:99.1,y:179.1}).wait(1).to({graphics:mask_graphics_119,x:100,y:179.1}).wait(1).to({graphics:mask_graphics_120,x:101,y:179.1}).wait(1).to({graphics:mask_graphics_121,x:101.9,y:179.1}).wait(1).to({graphics:mask_graphics_122,x:102.8,y:179.1}).wait(1).to({graphics:mask_graphics_123,x:103.7,y:179.1}).wait(1).to({graphics:mask_graphics_124,x:104.6,y:179.1}).wait(1).to({graphics:mask_graphics_125,x:105.5,y:179.1}).wait(1).to({graphics:mask_graphics_126,x:106.4,y:179.1}).wait(1).to({graphics:mask_graphics_127,x:107.3,y:179.1}).wait(1).to({graphics:mask_graphics_128,x:108.2,y:179.1}).wait(1).to({graphics:mask_graphics_129,x:109.1,y:179.1}).wait(1).to({graphics:mask_graphics_130,x:110,y:179.1}).wait(1).to({graphics:mask_graphics_131,x:110.9,y:179.1}).wait(1).to({graphics:mask_graphics_132,x:111.8,y:179.1}).wait(1).to({graphics:mask_graphics_133,x:112.7,y:179.1}).wait(1).to({graphics:mask_graphics_134,x:113.6,y:179.1}).wait(1).to({graphics:mask_graphics_135,x:114.5,y:179.1}).wait(1).to({graphics:mask_graphics_136,x:115.4,y:179.1}).wait(1).to({graphics:mask_graphics_137,x:116.3,y:179.1}).wait(1).to({graphics:mask_graphics_138,x:117.2,y:179.1}).wait(1).to({graphics:mask_graphics_139,x:118.1,y:179.1}).wait(1).to({graphics:mask_graphics_140,x:119,y:179.1}).wait(1).to({graphics:mask_graphics_141,x:119.9,y:179.1}).wait(1).to({graphics:mask_graphics_142,x:120.8,y:179.1}).wait(1).to({graphics:mask_graphics_143,x:121.7,y:179.1}).wait(1).to({graphics:mask_graphics_144,x:122.6,y:179.1}).wait(1).to({graphics:mask_graphics_145,x:123.5,y:179.1}).wait(1).to({graphics:mask_graphics_146,x:124.4,y:179.1}).wait(1).to({graphics:mask_graphics_147,x:125.3,y:179.1}).wait(1).to({graphics:mask_graphics_148,x:126.2,y:179.1}).wait(1).to({graphics:mask_graphics_149,x:127.1,y:179.1}).wait(1).to({graphics:mask_graphics_150,x:128.1,y:179.1}).wait(1).to({graphics:mask_graphics_151,x:129,y:179.1}).wait(1).to({graphics:mask_graphics_152,x:129.9,y:179.1}).wait(1).to({graphics:mask_graphics_153,x:130.8,y:179.1}).wait(1).to({graphics:mask_graphics_154,x:131.7,y:179.1}).wait(1).to({graphics:mask_graphics_155,x:132.6,y:179.1}).wait(1).to({graphics:mask_graphics_156,x:133.5,y:179.1}).wait(1).to({graphics:mask_graphics_157,x:134.4,y:179.1}).wait(1).to({graphics:mask_graphics_158,x:135.3,y:179.1}).wait(1).to({graphics:mask_graphics_159,x:136.2,y:179.1}).wait(1).to({graphics:mask_graphics_160,x:137.1,y:179.1}).wait(1).to({graphics:mask_graphics_161,x:138,y:179.1}).wait(1).to({graphics:mask_graphics_162,x:138.9,y:179.1}).wait(1).to({graphics:mask_graphics_163,x:139.8,y:179.1}).wait(1).to({graphics:mask_graphics_164,x:140.7,y:179.1}).wait(1).to({graphics:mask_graphics_165,x:141.6,y:179.1}).wait(1).to({graphics:mask_graphics_166,x:142.5,y:179.1}).wait(1).to({graphics:mask_graphics_167,x:143.4,y:179.1}).wait(1).to({graphics:mask_graphics_168,x:144.3,y:179.1}).wait(1).to({graphics:mask_graphics_169,x:145.2,y:179.1}).wait(1).to({graphics:mask_graphics_170,x:146.1,y:179.1}).wait(1).to({graphics:mask_graphics_171,x:147,y:179.1}).wait(1).to({graphics:mask_graphics_172,x:147.9,y:179.1}).wait(1).to({graphics:mask_graphics_173,x:148.8,y:179.1}).wait(1).to({graphics:mask_graphics_174,x:149.7,y:179.1}).wait(1).to({graphics:mask_graphics_175,x:150.6,y:179.1}).wait(1).to({graphics:mask_graphics_176,x:151.5,y:179.1}).wait(1).to({graphics:mask_graphics_177,x:152.4,y:179.1}).wait(1).to({graphics:mask_graphics_178,x:153.3,y:179.1}).wait(1).to({graphics:mask_graphics_179,x:154.2,y:179.1}).wait(1).to({graphics:mask_graphics_180,x:155.2,y:179.1}).wait(1).to({graphics:mask_graphics_181,x:156.1,y:179.1}).wait(1).to({graphics:mask_graphics_182,x:157,y:179.1}).wait(1).to({graphics:mask_graphics_183,x:157.9,y:179.1}).wait(1).to({graphics:mask_graphics_184,x:158.8,y:179.1}).wait(1).to({graphics:mask_graphics_185,x:159.7,y:179.1}).wait(1).to({graphics:mask_graphics_186,x:160.6,y:179.1}).wait(1).to({graphics:mask_graphics_187,x:161.5,y:179.1}).wait(1).to({graphics:mask_graphics_188,x:162.4,y:179.1}).wait(1).to({graphics:mask_graphics_189,x:163.3,y:179.1}).wait(1).to({graphics:mask_graphics_190,x:164.2,y:179.1}).wait(1).to({graphics:mask_graphics_191,x:165.1,y:179.1}).wait(1).to({graphics:mask_graphics_192,x:166,y:179.1}).wait(1).to({graphics:mask_graphics_193,x:166.9,y:179.1}).wait(1).to({graphics:mask_graphics_194,x:167.8,y:179.1}).wait(1).to({graphics:mask_graphics_195,x:168.7,y:179.1}).wait(1).to({graphics:mask_graphics_196,x:169.6,y:179.1}).wait(1).to({graphics:mask_graphics_197,x:170.5,y:179.1}).wait(1).to({graphics:mask_graphics_198,x:171.4,y:179.1}).wait(1).to({graphics:mask_graphics_199,x:172.3,y:179.1}).wait(1).to({graphics:mask_graphics_200,x:173.2,y:179.1}).wait(1).to({graphics:mask_graphics_201,x:174.1,y:179.1}).wait(1).to({graphics:mask_graphics_202,x:175,y:179.1}).wait(1).to({graphics:mask_graphics_203,x:175.9,y:179.1}).wait(1).to({graphics:mask_graphics_204,x:176.8,y:179.1}).wait(1).to({graphics:mask_graphics_205,x:177.7,y:179.1}).wait(1).to({graphics:mask_graphics_206,x:178.6,y:179.1}).wait(1).to({graphics:mask_graphics_207,x:179.5,y:179.1}).wait(1).to({graphics:mask_graphics_208,x:180.4,y:179.1}).wait(1).to({graphics:mask_graphics_209,x:181.3,y:179.1}).wait(1).to({graphics:mask_graphics_210,x:182.3,y:179.1}).wait(1).to({graphics:mask_graphics_211,x:183.2,y:179.1}).wait(1).to({graphics:mask_graphics_212,x:184.1,y:179.1}).wait(1).to({graphics:mask_graphics_213,x:185,y:179.1}).wait(1).to({graphics:mask_graphics_214,x:185.9,y:179.1}).wait(1).to({graphics:mask_graphics_215,x:186.8,y:179.1}).wait(1).to({graphics:mask_graphics_216,x:187.7,y:179.1}).wait(1).to({graphics:mask_graphics_217,x:188.6,y:179.1}).wait(1).to({graphics:mask_graphics_218,x:189.5,y:179.1}).wait(1).to({graphics:mask_graphics_219,x:190.4,y:179.1}).wait(1).to({graphics:mask_graphics_220,x:191.3,y:179.1}).wait(1).to({graphics:mask_graphics_221,x:192.2,y:179.1}).wait(1).to({graphics:mask_graphics_222,x:193.1,y:179.1}).wait(1).to({graphics:mask_graphics_223,x:194,y:179.1}).wait(1).to({graphics:mask_graphics_224,x:194.9,y:179.1}).wait(1).to({graphics:mask_graphics_225,x:195.8,y:179.1}).wait(1).to({graphics:mask_graphics_226,x:196.7,y:179.1}).wait(1).to({graphics:mask_graphics_227,x:197.6,y:179.1}).wait(1).to({graphics:mask_graphics_228,x:198.5,y:179.1}).wait(1).to({graphics:mask_graphics_229,x:199.4,y:179.1}).wait(1).to({graphics:mask_graphics_230,x:200.3,y:179.1}).wait(1).to({graphics:mask_graphics_231,x:201.2,y:179.1}).wait(1).to({graphics:mask_graphics_232,x:202.1,y:179.1}).wait(1).to({graphics:mask_graphics_233,x:203,y:179.1}).wait(1).to({graphics:mask_graphics_234,x:203.9,y:179.1}).wait(1).to({graphics:mask_graphics_235,x:204.8,y:179.1}).wait(1).to({graphics:mask_graphics_236,x:205.7,y:179.1}).wait(1).to({graphics:mask_graphics_237,x:206.6,y:179.1}).wait(1).to({graphics:mask_graphics_238,x:207.5,y:179.1}).wait(1).to({graphics:mask_graphics_239,x:208.4,y:179.1}).wait(1).to({graphics:mask_graphics_240,x:209.4,y:179.1}).wait(1).to({graphics:mask_graphics_241,x:210.3,y:179.1}).wait(1).to({graphics:mask_graphics_242,x:211.2,y:179.1}).wait(1).to({graphics:mask_graphics_243,x:212.1,y:179.1}).wait(1).to({graphics:mask_graphics_244,x:213,y:179.1}).wait(1).to({graphics:mask_graphics_245,x:213.9,y:179.1}).wait(1).to({graphics:mask_graphics_246,x:214.8,y:179.1}).wait(1).to({graphics:mask_graphics_247,x:215.7,y:179.1}).wait(1).to({graphics:mask_graphics_248,x:216.6,y:179.1}).wait(1).to({graphics:mask_graphics_249,x:217.5,y:179.1}).wait(1).to({graphics:mask_graphics_250,x:218.4,y:179.1}).wait(1).to({graphics:mask_graphics_251,x:219.3,y:179.1}).wait(1).to({graphics:mask_graphics_252,x:220.2,y:179.1}).wait(1).to({graphics:mask_graphics_253,x:221.1,y:179.1}).wait(1).to({graphics:mask_graphics_254,x:222,y:179.1}).wait(1).to({graphics:mask_graphics_255,x:222.9,y:179.1}).wait(1).to({graphics:mask_graphics_256,x:223.8,y:179.1}).wait(1).to({graphics:mask_graphics_257,x:224.7,y:179.1}).wait(1).to({graphics:mask_graphics_258,x:225.6,y:179.1}).wait(1).to({graphics:mask_graphics_259,x:226.5,y:179.1}).wait(1).to({graphics:mask_graphics_260,x:227.4,y:179.1}).wait(1).to({graphics:mask_graphics_261,x:228.3,y:179.1}).wait(1).to({graphics:mask_graphics_262,x:229.2,y:179.1}).wait(1).to({graphics:mask_graphics_263,x:230.1,y:179.1}).wait(1).to({graphics:mask_graphics_264,x:231,y:179.1}).wait(1).to({graphics:mask_graphics_265,x:231.9,y:179.1}).wait(1).to({graphics:mask_graphics_266,x:232.8,y:179.1}).wait(1).to({graphics:mask_graphics_267,x:233.7,y:179.1}).wait(1).to({graphics:mask_graphics_268,x:234.6,y:179.1}).wait(1).to({graphics:mask_graphics_269,x:235.5,y:179.1}).wait(1).to({graphics:mask_graphics_270,x:236.5,y:179.1}).wait(1).to({graphics:mask_graphics_271,x:237.4,y:179.1}).wait(1).to({graphics:mask_graphics_272,x:238.3,y:179.1}).wait(1).to({graphics:mask_graphics_273,x:239.2,y:179.1}).wait(1).to({graphics:mask_graphics_274,x:240.1,y:179.1}).wait(1).to({graphics:mask_graphics_275,x:241,y:179.1}).wait(1).to({graphics:mask_graphics_276,x:241.9,y:179.1}).wait(1).to({graphics:mask_graphics_277,x:242.8,y:179.1}).wait(1).to({graphics:mask_graphics_278,x:243.7,y:179.1}).wait(1).to({graphics:mask_graphics_279,x:244.6,y:179.1}).wait(1).to({graphics:mask_graphics_280,x:245.5,y:179.1}).wait(1).to({graphics:mask_graphics_281,x:246.4,y:179.1}).wait(1).to({graphics:mask_graphics_282,x:247.3,y:179.1}).wait(1).to({graphics:mask_graphics_283,x:248.2,y:179.1}).wait(1).to({graphics:mask_graphics_284,x:249.1,y:179.1}).wait(1).to({graphics:mask_graphics_285,x:250,y:179.1}).wait(1).to({graphics:mask_graphics_286,x:250.9,y:179.1}).wait(1).to({graphics:mask_graphics_287,x:251.8,y:179.1}).wait(1).to({graphics:mask_graphics_288,x:252.7,y:179.1}).wait(1).to({graphics:mask_graphics_289,x:253.6,y:179.1}).wait(1).to({graphics:mask_graphics_290,x:254.5,y:179.1}).wait(1).to({graphics:mask_graphics_291,x:255.4,y:179.1}).wait(1).to({graphics:mask_graphics_292,x:256.3,y:179.1}).wait(1).to({graphics:mask_graphics_293,x:257.2,y:179.1}).wait(1).to({graphics:mask_graphics_294,x:258.1,y:179.1}).wait(1).to({graphics:mask_graphics_295,x:259,y:179.1}).wait(1).to({graphics:mask_graphics_296,x:259.9,y:179.1}).wait(1).to({graphics:mask_graphics_297,x:260.8,y:179.1}).wait(1).to({graphics:mask_graphics_298,x:261.7,y:179.1}).wait(1).to({graphics:mask_graphics_299,x:262.6,y:179.1}).wait(1).to({graphics:mask_graphics_300,x:263.6,y:179.1}).wait(1).to({graphics:mask_graphics_301,x:264.5,y:179.1}).wait(1).to({graphics:mask_graphics_302,x:265.4,y:179.1}).wait(1).to({graphics:mask_graphics_303,x:266.3,y:179.1}).wait(1).to({graphics:mask_graphics_304,x:267.2,y:179.1}).wait(1).to({graphics:mask_graphics_305,x:268.1,y:179.1}).wait(1).to({graphics:mask_graphics_306,x:269,y:179.1}).wait(1).to({graphics:mask_graphics_307,x:269.9,y:179.1}).wait(1).to({graphics:mask_graphics_308,x:270.8,y:179.1}).wait(1).to({graphics:mask_graphics_309,x:271.7,y:179.1}).wait(1).to({graphics:mask_graphics_310,x:272.6,y:179.1}).wait(1).to({graphics:mask_graphics_311,x:273.5,y:179.1}).wait(1).to({graphics:mask_graphics_312,x:274.4,y:179.1}).wait(1).to({graphics:mask_graphics_313,x:275.3,y:179.1}).wait(1).to({graphics:mask_graphics_314,x:276.2,y:179.1}).wait(1).to({graphics:mask_graphics_315,x:277.1,y:179.1}).wait(1).to({graphics:mask_graphics_316,x:278,y:179.1}).wait(1).to({graphics:mask_graphics_317,x:278.9,y:179.1}).wait(1).to({graphics:mask_graphics_318,x:279.8,y:179.1}).wait(1).to({graphics:mask_graphics_319,x:280.7,y:179.1}).wait(1).to({graphics:mask_graphics_320,x:281.6,y:179.1}).wait(1).to({graphics:mask_graphics_321,x:282.5,y:179.1}).wait(1).to({graphics:mask_graphics_322,x:283.4,y:179.1}).wait(1).to({graphics:mask_graphics_323,x:284.3,y:179.1}).wait(1).to({graphics:mask_graphics_324,x:285.2,y:179.1}).wait(1).to({graphics:mask_graphics_325,x:286.1,y:179.1}).wait(1).to({graphics:mask_graphics_326,x:287,y:179.1}).wait(1).to({graphics:mask_graphics_327,x:287.9,y:179.1}).wait(1).to({graphics:mask_graphics_328,x:288.8,y:179.1}).wait(1).to({graphics:mask_graphics_329,x:289.7,y:179.1}).wait(1).to({graphics:mask_graphics_330,x:290.7,y:179.1}).wait(1).to({graphics:mask_graphics_331,x:291.6,y:179.1}).wait(1).to({graphics:mask_graphics_332,x:292.5,y:179.1}).wait(1).to({graphics:mask_graphics_333,x:293.4,y:179.1}).wait(1).to({graphics:mask_graphics_334,x:294.3,y:179.1}).wait(1).to({graphics:mask_graphics_335,x:295.2,y:179.1}).wait(1).to({graphics:mask_graphics_336,x:296.1,y:179.1}).wait(1).to({graphics:mask_graphics_337,x:297,y:179.1}).wait(1).to({graphics:mask_graphics_338,x:297.9,y:179.1}).wait(1).to({graphics:mask_graphics_339,x:298.8,y:179.1}).wait(1).to({graphics:mask_graphics_340,x:299.7,y:179.1}).wait(1).to({graphics:mask_graphics_341,x:300.6,y:179.1}).wait(1).to({graphics:mask_graphics_342,x:301.5,y:179.1}).wait(1).to({graphics:mask_graphics_343,x:302.4,y:179.1}).wait(1).to({graphics:mask_graphics_344,x:303.3,y:179.1}).wait(1).to({graphics:mask_graphics_345,x:304.2,y:179.1}).wait(1).to({graphics:mask_graphics_346,x:305.1,y:179.1}).wait(1).to({graphics:mask_graphics_347,x:306,y:179.1}).wait(1).to({graphics:mask_graphics_348,x:306.9,y:179.1}).wait(1).to({graphics:mask_graphics_349,x:307.8,y:179.1}).wait(1).to({graphics:mask_graphics_350,x:308.7,y:179.1}).wait(1).to({graphics:mask_graphics_351,x:309.6,y:179.1}).wait(1).to({graphics:mask_graphics_352,x:310.5,y:179.1}).wait(1).to({graphics:mask_graphics_353,x:311.4,y:179.1}).wait(1).to({graphics:mask_graphics_354,x:312.3,y:179.1}).wait(1).to({graphics:mask_graphics_355,x:313.2,y:179.1}).wait(1).to({graphics:mask_graphics_356,x:314.1,y:179.1}).wait(1).to({graphics:mask_graphics_357,x:315,y:179.1}).wait(1).to({graphics:mask_graphics_358,x:315.9,y:179.1}).wait(1).to({graphics:mask_graphics_359,x:316.9,y:179.1}).wait(1));

	// white wave
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3Qh7ILvAAIAQC3QAGAQARANQA4ApCfgBILtgCIAPibQAAgWASgXQAkguBXgGIKWgDIARCqIAGANQAJARAQANQAyArBggBQCBgCBSgD");
	this.shape.setTransform(158.2,179.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(360));

	// yellowMask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_15 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_22 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_27 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_28 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_29 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_30 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_31 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_32 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_33 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_34 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_35 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_36 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_38 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_40 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_42 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_46 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_47 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_48 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_49 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_50 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_51 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_52 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_54 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_60 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_61 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_62 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_63 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_66 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_67 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_68 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_69 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_70 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_71 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_72 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_73 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_74 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_75 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_76 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_77 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_78 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_79 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_80 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_81 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_82 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_83 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_84 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_85 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_86 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_87 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_88 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_89 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_90 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_91 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_92 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_93 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_94 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_95 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_96 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_98 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_99 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_100 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_101 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_102 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_103 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_104 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_105 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_106 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_107 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_108 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_109 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_110 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_111 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_112 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_113 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_114 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_115 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_116 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_117 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_118 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_119 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_120 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_121 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_122 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_123 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_124 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_125 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_126 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_127 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_128 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_129 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_130 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_131 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_132 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_133 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_134 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_135 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_136 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_137 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_138 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_139 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_140 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_141 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_142 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_143 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_144 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_145 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_146 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_147 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_148 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_149 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_150 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_151 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_152 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_153 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_154 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_155 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_156 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_157 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_158 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_159 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_160 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_161 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_162 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_163 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_164 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_165 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_166 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_167 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_168 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_169 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_170 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_171 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_172 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_173 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_174 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_175 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_176 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_177 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_178 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_179 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_180 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_181 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_182 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_183 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_184 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_185 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_186 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_187 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_188 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_189 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_190 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_191 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_192 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_193 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_194 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_195 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_196 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_197 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_198 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_199 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_200 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_201 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_202 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_203 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_204 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_205 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_206 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_207 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_208 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_209 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_210 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_211 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_212 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_213 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_214 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_215 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_216 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_217 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_218 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_219 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_220 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_221 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_222 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_223 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_224 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_225 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_226 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_227 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_228 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_229 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_230 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_231 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_232 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_233 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_234 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_235 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_236 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_237 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_238 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_239 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_240 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_241 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_242 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_244 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_245 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_246 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_247 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_248 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_249 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_250 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_251 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_252 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_253 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_254 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_255 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_256 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_257 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_258 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_259 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_260 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_261 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_262 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_264 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_265 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_266 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_267 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_268 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_269 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_270 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_271 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_272 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_273 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_274 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_275 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_276 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_277 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_278 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_279 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_280 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_281 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_282 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_283 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_284 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_285 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_286 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_287 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_288 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_289 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_290 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_291 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_292 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_293 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_294 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_295 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_296 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_297 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_298 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_299 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_300 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_301 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_302 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_303 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_304 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_305 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_306 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_307 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_308 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_309 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_310 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_311 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_312 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_313 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_314 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_315 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_316 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_317 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_318 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_319 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_320 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_321 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_322 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_323 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_324 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_325 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_326 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_327 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_328 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_329 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_330 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_331 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_332 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_333 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_334 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_335 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_336 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_337 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_338 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_339 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_340 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_341 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_342 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_343 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_344 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_345 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_346 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_347 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_348 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_349 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_350 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_351 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_352 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_353 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_354 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2jAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_355 = new cjs.Graphics().p("ABYH3IAAvmMA1NAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_356 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2jAHwIAAvlMA1MAAAIAAPlg");
	var mask_1_graphics_357 = new cjs.Graphics().p("ABYH3IAAvmMA1MAAAIAAPmgEg2kAHwIAAvlMA1NAAAIAAPlg");
	var mask_1_graphics_358 = new cjs.Graphics().p("ABXH3IAAvmMA1NAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");
	var mask_1_graphics_359 = new cjs.Graphics().p("ABXH3IAAvmMA1OAAAIAAPmgEg2kAHwIAAvlMA1OAAAIAAPlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-7.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_1,x:-5.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_2,x:-3.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_3,x:-1.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_4,x:0.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_5,x:1.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_6,x:3.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_7,x:5.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_8,x:7.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_9,x:9.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_10,x:11,y:-52.8}).wait(1).to({graphics:mask_1_graphics_11,x:12.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_12,x:14.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_13,x:16.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_14,x:18.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_15,x:20,y:-52.8}).wait(1).to({graphics:mask_1_graphics_16,x:21.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_17,x:23.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_18,x:25.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_19,x:27.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_20,x:29.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_21,x:30.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_22,x:32.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_23,x:34.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_24,x:36.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_25,x:38.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_26,x:39.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_27,x:41.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_28,x:43.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_29,x:45.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_30,x:47.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_31,x:49,y:-52.8}).wait(1).to({graphics:mask_1_graphics_32,x:50.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_33,x:52.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_34,x:54.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_35,x:56.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_36,x:58,y:-52.8}).wait(1).to({graphics:mask_1_graphics_37,x:59.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_38,x:61.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_39,x:63.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_40,x:65.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_41,x:67.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_42,x:68.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_43,x:70.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_44,x:72.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_45,x:74.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_46,x:76.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_47,x:77.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_48,x:79.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_49,x:81.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_50,x:83.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_51,x:85.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_52,x:87,y:-52.8}).wait(1).to({graphics:mask_1_graphics_53,x:88.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_54,x:90.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_55,x:92.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_56,x:94.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_57,x:96,y:-52.8}).wait(1).to({graphics:mask_1_graphics_58,x:97.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_59,x:99.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_60,x:101.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_61,x:103.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_62,x:105.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_63,x:106.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_64,x:108.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_65,x:110.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_66,x:112.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_67,x:114.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_68,x:115.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_69,x:117.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_70,x:119.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_71,x:121.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_72,x:123.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_73,x:125,y:-52.8}).wait(1).to({graphics:mask_1_graphics_74,x:126.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_75,x:128.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_76,x:130.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_77,x:132.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_78,x:134,y:-52.8}).wait(1).to({graphics:mask_1_graphics_79,x:135.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_80,x:137.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_81,x:139.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_82,x:141.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_83,x:143.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_84,x:144.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_85,x:146.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_86,x:148.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_87,x:150.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_88,x:152.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_89,x:153.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_90,x:155.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_91,x:157.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_92,x:159.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_93,x:161.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_94,x:163,y:-52.8}).wait(1).to({graphics:mask_1_graphics_95,x:164.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_96,x:166.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_97,x:168.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_98,x:170.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_99,x:172,y:-52.8}).wait(1).to({graphics:mask_1_graphics_100,x:173.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_101,x:175.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_102,x:177.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_103,x:179.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_104,x:181.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_105,x:182.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_106,x:184.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_107,x:186.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_108,x:188.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_109,x:190.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_110,x:192,y:-52.8}).wait(1).to({graphics:mask_1_graphics_111,x:193.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_112,x:195.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_113,x:197.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_114,x:199.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_115,x:201,y:-52.8}).wait(1).to({graphics:mask_1_graphics_116,x:202.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_117,x:204.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_118,x:206.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_119,x:208.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_120,x:210.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_121,x:211.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_122,x:213.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_123,x:215.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_124,x:217.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_125,x:219.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_126,x:220.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_127,x:222.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_128,x:224.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_129,x:226.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_130,x:228.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_131,x:230,y:-52.8}).wait(1).to({graphics:mask_1_graphics_132,x:231.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_133,x:233.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_134,x:235.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_135,x:237.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_136,x:239,y:-52.8}).wait(1).to({graphics:mask_1_graphics_137,x:240.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_138,x:242.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_139,x:244.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_140,x:246.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_141,x:248.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_142,x:249.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_143,x:251.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_144,x:253.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_145,x:255.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_146,x:257.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_147,x:258.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_148,x:260.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_149,x:262.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_150,x:264.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_151,x:266.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_152,x:268,y:-52.8}).wait(1).to({graphics:mask_1_graphics_153,x:269.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_154,x:271.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_155,x:273.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_156,x:275.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_157,x:277,y:-52.8}).wait(1).to({graphics:mask_1_graphics_158,x:278.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_159,x:280.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_160,x:282.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_161,x:284.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_162,x:286.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_163,x:287.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_164,x:289.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_165,x:291.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_166,x:293.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_167,x:295.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_168,x:296.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_169,x:298.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_170,x:300.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_171,x:302.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_172,x:304.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_173,x:306,y:-52.8}).wait(1).to({graphics:mask_1_graphics_174,x:307.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_175,x:309.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_176,x:311.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_177,x:313.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_178,x:315,y:-52.8}).wait(1).to({graphics:mask_1_graphics_179,x:316.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_180,x:-7.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_181,x:-5.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_182,x:-3.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_183,x:-1.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_184,x:0.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_185,x:1.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_186,x:3.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_187,x:5.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_188,x:7.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_189,x:9.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_190,x:11,y:-52.8}).wait(1).to({graphics:mask_1_graphics_191,x:12.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_192,x:14.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_193,x:16.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_194,x:18.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_195,x:20,y:-52.8}).wait(1).to({graphics:mask_1_graphics_196,x:21.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_197,x:23.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_198,x:25.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_199,x:27.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_200,x:29.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_201,x:30.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_202,x:32.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_203,x:34.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_204,x:36.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_205,x:38.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_206,x:39.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_207,x:41.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_208,x:43.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_209,x:45.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_210,x:47.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_211,x:49,y:-52.8}).wait(1).to({graphics:mask_1_graphics_212,x:50.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_213,x:52.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_214,x:54.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_215,x:56.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_216,x:58,y:-52.8}).wait(1).to({graphics:mask_1_graphics_217,x:59.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_218,x:61.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_219,x:63.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_220,x:65.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_221,x:67.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_222,x:68.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_223,x:70.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_224,x:72.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_225,x:74.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_226,x:76.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_227,x:77.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_228,x:79.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_229,x:81.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_230,x:83.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_231,x:85.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_232,x:87,y:-52.8}).wait(1).to({graphics:mask_1_graphics_233,x:88.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_234,x:90.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_235,x:92.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_236,x:94.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_237,x:96,y:-52.8}).wait(1).to({graphics:mask_1_graphics_238,x:97.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_239,x:99.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_240,x:101.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_241,x:103.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_242,x:105.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_243,x:106.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_244,x:108.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_245,x:110.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_246,x:112.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_247,x:114.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_248,x:115.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_249,x:117.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_250,x:119.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_251,x:121.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_252,x:123.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_253,x:125,y:-52.8}).wait(1).to({graphics:mask_1_graphics_254,x:126.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_255,x:128.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_256,x:130.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_257,x:132.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_258,x:134,y:-52.8}).wait(1).to({graphics:mask_1_graphics_259,x:135.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_260,x:137.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_261,x:139.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_262,x:141.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_263,x:143.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_264,x:144.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_265,x:146.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_266,x:148.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_267,x:150.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_268,x:152.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_269,x:153.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_270,x:155.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_271,x:157.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_272,x:159.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_273,x:161.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_274,x:163,y:-52.8}).wait(1).to({graphics:mask_1_graphics_275,x:164.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_276,x:166.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_277,x:168.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_278,x:170.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_279,x:172,y:-52.8}).wait(1).to({graphics:mask_1_graphics_280,x:173.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_281,x:175.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_282,x:177.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_283,x:179.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_284,x:181.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_285,x:182.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_286,x:184.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_287,x:186.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_288,x:188.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_289,x:190.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_290,x:192,y:-52.8}).wait(1).to({graphics:mask_1_graphics_291,x:193.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_292,x:195.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_293,x:197.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_294,x:199.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_295,x:201,y:-52.8}).wait(1).to({graphics:mask_1_graphics_296,x:202.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_297,x:204.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_298,x:206.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_299,x:208.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_300,x:210.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_301,x:211.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_302,x:213.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_303,x:215.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_304,x:217.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_305,x:219.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_306,x:220.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_307,x:222.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_308,x:224.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_309,x:226.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_310,x:228.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_311,x:230,y:-52.8}).wait(1).to({graphics:mask_1_graphics_312,x:231.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_313,x:233.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_314,x:235.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_315,x:237.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_316,x:239,y:-52.8}).wait(1).to({graphics:mask_1_graphics_317,x:240.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_318,x:242.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_319,x:244.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_320,x:246.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_321,x:248.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_322,x:249.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_323,x:251.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_324,x:253.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_325,x:255.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_326,x:257.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_327,x:258.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_328,x:260.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_329,x:262.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_330,x:264.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_331,x:266.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_332,x:268,y:-52.8}).wait(1).to({graphics:mask_1_graphics_333,x:269.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_334,x:271.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_335,x:273.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_336,x:275.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_337,x:277,y:-52.8}).wait(1).to({graphics:mask_1_graphics_338,x:278.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_339,x:280.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_340,x:282.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_341,x:284.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_342,x:286.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_343,x:287.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_344,x:289.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_345,x:291.5,y:-52.8}).wait(1).to({graphics:mask_1_graphics_346,x:293.3,y:-52.8}).wait(1).to({graphics:mask_1_graphics_347,x:295.1,y:-52.8}).wait(1).to({graphics:mask_1_graphics_348,x:296.9,y:-52.8}).wait(1).to({graphics:mask_1_graphics_349,x:298.7,y:-52.8}).wait(1).to({graphics:mask_1_graphics_350,x:300.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_351,x:302.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_352,x:304.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_353,x:306,y:-52.8}).wait(1).to({graphics:mask_1_graphics_354,x:307.8,y:-52.8}).wait(1).to({graphics:mask_1_graphics_355,x:309.6,y:-52.8}).wait(1).to({graphics:mask_1_graphics_356,x:311.4,y:-52.8}).wait(1).to({graphics:mask_1_graphics_357,x:313.2,y:-52.8}).wait(1).to({graphics:mask_1_graphics_358,x:315,y:-52.8}).wait(1).to({graphics:mask_1_graphics_359,x:316.9,y:-52.8}).wait(1));

	// yellow wave
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(1,1,1).p("A3UDQQAnAFApgRQBQggAIhlIAJjNIAFggQAIggAMgBQAOgCALAfQAKAeAEAyQADApANAUQAHAKAGACQAKARALAZQAWA0ADAqQADAuA6AZQAsATBIAFQBlAGAsgNQBYgbAFhmIAJjVQAIhCAMAAIATAQQAUAdAABAQABAOAEARQAIAgANAHQAQAJATA7QATA6AAAjQAAAfA3ATQAxASBmAJQBkAKAwgdQA0gfAEhRQAEhtAKhHIAFgvQAGgwALgCQAMgCAKAkQAKAhAAAhQAAAZAUAeQALAPAKAKQAKAWAKAcQAUA5gBAYQAAAEACAGQAEALAJAKQAcAgBCAIQAIABBTANQA7AKAjgBQBpgDAJhgQAOiUgCgbIAGhAQAIhAAMAAQAOAAANAlQAMAkAAAkQAAAdATAXQAJAMAJAGQAKATAKAaQAUAzgCAXQgCAkAlAbQAwAjBjACQCAACAogTQA5gcAIhlQAMiPgEgUIAFguQAIgvALgBQAPgCAJANQAMATADAyQADAtARAdQAIAPAIAFQAKAXAKAaQATA5AAAaQAAAgA4AeQA7AfBPAEQBpAFA2gQQAzgPAXgi");
	this.shape_1.setTransform(157.3,-24.2);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(360));

	// blackBarMask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A4BjuMAwJAAAIAAHGMgwPAAXg");
	mask_2.setTransform(-152.9,-23.8);

	// blackBar
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhWEAIAAn/ICsAAIAAH/g");
	this.shape_2.setTransform(-316.1,-28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVEAIAAn/ICrAAIAAH/g");
	this.shape_3.setTransform(-314.4,-28.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhWEAIAAn/ICtAAIAAH/g");
	this.shape_4.setTransform(-312.6,-28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhVEAIAAn/ICsAAIAAH/g");
	this.shape_5.setTransform(-305.7,-28.1);

	this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:-316.1}}]}).to({state:[{t:this.shape_3,p:{x:-314.4}}]},1).to({state:[{t:this.shape_4,p:{x:-312.6}}]},1).to({state:[{t:this.shape_4,p:{x:-310.9}}]},1).to({state:[{t:this.shape_2,p:{x:-309.2}}]},1).to({state:[{t:this.shape_3,p:{x:-307.5}}]},1).to({state:[{t:this.shape_5,p:{x:-305.7}}]},1).to({state:[{t:this.shape_4,p:{x:-304}}]},1).to({state:[{t:this.shape_2,p:{x:-302.3}}]},1).to({state:[{t:this.shape_3,p:{x:-300.6}}]},1).to({state:[{t:this.shape_5,p:{x:-298.8}}]},1).to({state:[{t:this.shape_4,p:{x:-297.1}}]},1).to({state:[{t:this.shape_2,p:{x:-295.4}}]},1).to({state:[{t:this.shape_3,p:{x:-293.7}}]},1).to({state:[{t:this.shape_5,p:{x:-291.9}}]},1).to({state:[{t:this.shape_4,p:{x:-290.2}}]},1).to({state:[{t:this.shape_2,p:{x:-288.5}}]},1).to({state:[{t:this.shape_3,p:{x:-286.8}}]},1).to({state:[{t:this.shape_5,p:{x:-285}}]},1).to({state:[{t:this.shape_4,p:{x:-283.3}}]},1).to({state:[{t:this.shape_2,p:{x:-281.6}}]},1).to({state:[{t:this.shape_3,p:{x:-279.9}}]},1).to({state:[{t:this.shape_5,p:{x:-278.1}}]},1).to({state:[{t:this.shape_4,p:{x:-276.4}}]},1).to({state:[{t:this.shape_2,p:{x:-274.7}}]},1).to({state:[{t:this.shape_3,p:{x:-273}}]},1).to({state:[{t:this.shape_5,p:{x:-271.2}}]},1).to({state:[{t:this.shape_4,p:{x:-269.5}}]},1).to({state:[{t:this.shape_2,p:{x:-267.8}}]},1).to({state:[{t:this.shape_3,p:{x:-266}}]},1).to({state:[{t:this.shape_5,p:{x:-264.3}}]},1).to({state:[{t:this.shape_4,p:{x:-262.6}}]},1).to({state:[{t:this.shape_2,p:{x:-260.9}}]},1).to({state:[{t:this.shape_3,p:{x:-259.1}}]},1).to({state:[{t:this.shape_5,p:{x:-257.4}}]},1).to({state:[{t:this.shape_4,p:{x:-255.7}}]},1).to({state:[{t:this.shape_2,p:{x:-254}}]},1).to({state:[{t:this.shape_3,p:{x:-252.2}}]},1).to({state:[{t:this.shape_5,p:{x:-250.5}}]},1).to({state:[{t:this.shape_4,p:{x:-248.8}}]},1).to({state:[{t:this.shape_2,p:{x:-247.1}}]},1).to({state:[{t:this.shape_3,p:{x:-245.3}}]},1).to({state:[{t:this.shape_5,p:{x:-243.6}}]},1).to({state:[{t:this.shape_4,p:{x:-241.9}}]},1).to({state:[{t:this.shape_2,p:{x:-240.2}}]},1).to({state:[{t:this.shape_3,p:{x:-238.4}}]},1).to({state:[{t:this.shape_5,p:{x:-236.7}}]},1).to({state:[{t:this.shape_4,p:{x:-235}}]},1).to({state:[{t:this.shape_2,p:{x:-233.3}}]},1).to({state:[{t:this.shape_3,p:{x:-231.5}}]},1).to({state:[{t:this.shape_5,p:{x:-229.8}}]},1).to({state:[{t:this.shape_4,p:{x:-228.1}}]},1).to({state:[{t:this.shape_2,p:{x:-226.3}}]},1).to({state:[{t:this.shape_3,p:{x:-224.6}}]},1).to({state:[{t:this.shape_3,p:{x:-222.9}}]},1).to({state:[{t:this.shape_4,p:{x:-221.2}}]},1).to({state:[{t:this.shape_4,p:{x:-219.4}}]},1).to({state:[{t:this.shape_3,p:{x:-217.7}}]},1).to({state:[{t:this.shape_3,p:{x:-216}}]},1).to({state:[{t:this.shape_4,p:{x:-214.3}}]},1).to({state:[{t:this.shape_4,p:{x:-212.5}}]},1).to({state:[{t:this.shape_3,p:{x:-210.8}}]},1).to({state:[{t:this.shape_3,p:{x:-209.1}}]},1).to({state:[{t:this.shape_4,p:{x:-207.4}}]},1).to({state:[{t:this.shape_4,p:{x:-205.6}}]},1).to({state:[{t:this.shape_3,p:{x:-203.9}}]},1).to({state:[{t:this.shape_3,p:{x:-202.2}}]},1).to({state:[{t:this.shape_4,p:{x:-200.5}}]},1).to({state:[{t:this.shape_4,p:{x:-198.7}}]},1).to({state:[{t:this.shape_3,p:{x:-197}}]},1).to({state:[{t:this.shape_3,p:{x:-195.3}}]},1).to({state:[{t:this.shape_4,p:{x:-193.6}}]},1).to({state:[{t:this.shape_4,p:{x:-191.8}}]},1).to({state:[{t:this.shape_3,p:{x:-190.1}}]},1).to({state:[{t:this.shape_3,p:{x:-188.4}}]},1).to({state:[{t:this.shape_4,p:{x:-186.7}}]},1).to({state:[{t:this.shape_4,p:{x:-184.9}}]},1).to({state:[{t:this.shape_3,p:{x:-183.2}}]},1).to({state:[{t:this.shape_3,p:{x:-181.5}}]},1).to({state:[{t:this.shape_4,p:{x:-179.7}}]},1).to({state:[{t:this.shape_4,p:{x:-178}}]},1).to({state:[{t:this.shape_3,p:{x:-176.3}}]},1).to({state:[{t:this.shape_3,p:{x:-174.6}}]},1).to({state:[{t:this.shape_4,p:{x:-172.8}}]},1).to({state:[{t:this.shape_4,p:{x:-171.1}}]},1).to({state:[{t:this.shape_2,p:{x:-169.4}}]},1).to({state:[{t:this.shape_3,p:{x:-167.7}}]},1).to({state:[{t:this.shape_5,p:{x:-165.9}}]},1).to({state:[{t:this.shape_4,p:{x:-164.2}}]},1).to({state:[{t:this.shape_2,p:{x:-162.5}}]},1).to({state:[{t:this.shape_3,p:{x:-160.8}}]},1).to({state:[{t:this.shape_5,p:{x:-159}}]},1).to({state:[{t:this.shape_4,p:{x:-157.3}}]},1).to({state:[{t:this.shape_2,p:{x:-155.6}}]},1).to({state:[{t:this.shape_3,p:{x:-153.9}}]},1).to({state:[{t:this.shape_5,p:{x:-152.1}}]},1).to({state:[{t:this.shape_4,p:{x:-150.4}}]},1).to({state:[{t:this.shape_2,p:{x:-148.7}}]},1).to({state:[{t:this.shape_3,p:{x:-147}}]},1).to({state:[{t:this.shape_5,p:{x:-145.2}}]},1).to({state:[{t:this.shape_4,p:{x:-143.5}}]},1).to({state:[{t:this.shape_2,p:{x:-141.8}}]},1).to({state:[{t:this.shape_3,p:{x:-140.1}}]},1).to({state:[{t:this.shape_5,p:{x:-138.3}}]},1).to({state:[{t:this.shape_4,p:{x:-136.6}}]},1).to({state:[{t:this.shape_2,p:{x:-134.9}}]},1).to({state:[{t:this.shape_3,p:{x:-133.1}}]},1).to({state:[{t:this.shape_5,p:{x:-131.4}}]},1).to({state:[{t:this.shape_4,p:{x:-129.7}}]},1).to({state:[{t:this.shape_2,p:{x:-128}}]},1).to({state:[{t:this.shape_3,p:{x:-126.2}}]},1).to({state:[{t:this.shape_5,p:{x:-124.5}}]},1).to({state:[{t:this.shape_4,p:{x:-122.8}}]},1).to({state:[{t:this.shape_2,p:{x:-121.1}}]},1).to({state:[{t:this.shape_3,p:{x:-119.3}}]},1).to({state:[{t:this.shape_5,p:{x:-117.6}}]},1).to({state:[{t:this.shape_4,p:{x:-115.9}}]},1).to({state:[{t:this.shape_2,p:{x:-114.2}}]},1).to({state:[{t:this.shape_3,p:{x:-112.4}}]},1).to({state:[{t:this.shape_5,p:{x:-110.7}}]},1).to({state:[{t:this.shape_4,p:{x:-109}}]},1).to({state:[{t:this.shape_2,p:{x:-107.3}}]},1).to({state:[{t:this.shape_3,p:{x:-105.5}}]},1).to({state:[{t:this.shape_5,p:{x:-103.8}}]},1).to({state:[{t:this.shape_4,p:{x:-102.1}}]},1).to({state:[{t:this.shape_2,p:{x:-100.4}}]},1).to({state:[{t:this.shape_3,p:{x:-98.6}}]},1).to({state:[{t:this.shape_5,p:{x:-96.9}}]},1).to({state:[{t:this.shape_4,p:{x:-95.2}}]},1).to({state:[{t:this.shape_2,p:{x:-93.4}}]},1).to({state:[{t:this.shape_3,p:{x:-91.7}}]},1).to({state:[{t:this.shape_5,p:{x:-90}}]},1).to({state:[{t:this.shape_4,p:{x:-88.3}}]},1).to({state:[{t:this.shape_2,p:{x:-86.5}}]},1).to({state:[{t:this.shape_3,p:{x:-84.8}}]},1).to({state:[{t:this.shape_5,p:{x:-83.1}}]},1).to({state:[{t:this.shape_4,p:{x:-81.4}}]},1).to({state:[{t:this.shape_2,p:{x:-79.6}}]},1).to({state:[{t:this.shape_3,p:{x:-77.9}}]},1).to({state:[{t:this.shape_5,p:{x:-76.2}}]},1).to({state:[{t:this.shape_4,p:{x:-74.5}}]},1).to({state:[{t:this.shape_2,p:{x:-72.7}}]},1).to({state:[{t:this.shape_3,p:{x:-71}}]},1).to({state:[{t:this.shape_3,p:{x:-69.3}}]},1).to({state:[{t:this.shape_4,p:{x:-67.6}}]},1).to({state:[{t:this.shape_4,p:{x:-65.8}}]},1).to({state:[{t:this.shape_3,p:{x:-64.1}}]},1).to({state:[{t:this.shape_3,p:{x:-62.4}}]},1).to({state:[{t:this.shape_4,p:{x:-60.7}}]},1).to({state:[{t:this.shape_4,p:{x:-58.9}}]},1).to({state:[{t:this.shape_3,p:{x:-57.2}}]},1).to({state:[{t:this.shape_3,p:{x:-55.5}}]},1).to({state:[{t:this.shape_4,p:{x:-53.8}}]},1).to({state:[{t:this.shape_4,p:{x:-52}}]},1).to({state:[{t:this.shape_3,p:{x:-50.3}}]},1).to({state:[{t:this.shape_3,p:{x:-48.6}}]},1).to({state:[{t:this.shape_4,p:{x:-46.8}}]},1).to({state:[{t:this.shape_4,p:{x:-45.1}}]},1).to({state:[{t:this.shape_3,p:{x:-43.4}}]},1).to({state:[{t:this.shape_3,p:{x:-41.7}}]},1).to({state:[{t:this.shape_4,p:{x:-39.9}}]},1).to({state:[{t:this.shape_4,p:{x:-38.2}}]},1).to({state:[{t:this.shape_3,p:{x:-36.5}}]},1).to({state:[{t:this.shape_3,p:{x:-34.8}}]},1).to({state:[{t:this.shape_4,p:{x:-33}}]},1).to({state:[{t:this.shape_4,p:{x:-31.3}}]},1).to({state:[{t:this.shape_3,p:{x:-29.6}}]},1).to({state:[{t:this.shape_3,p:{x:-27.9}}]},1).to({state:[{t:this.shape_4,p:{x:-26.1}}]},1).to({state:[{t:this.shape_4,p:{x:-24.4}}]},1).to({state:[{t:this.shape_2,p:{x:-22.7}}]},1).to({state:[{t:this.shape_3,p:{x:-21}}]},1).to({state:[{t:this.shape_5,p:{x:-19.2}}]},1).to({state:[{t:this.shape_4,p:{x:-17.5}}]},1).to({state:[{t:this.shape_2,p:{x:-15.8}}]},1).to({state:[{t:this.shape_3,p:{x:-14.1}}]},1).to({state:[{t:this.shape_5,p:{x:-12.3}}]},1).to({state:[{t:this.shape_4,p:{x:-10.6}}]},1).to({state:[{t:this.shape_2,p:{x:-8.9}}]},1).to({state:[{t:this.shape_3,p:{x:-7.2}}]},1).to({state:[{t:this.shape_2,p:{x:-316.1}}]},1).to({state:[{t:this.shape_3,p:{x:-314.4}}]},1).to({state:[{t:this.shape_4,p:{x:-312.6}}]},1).to({state:[{t:this.shape_4,p:{x:-310.9}}]},1).to({state:[{t:this.shape_2,p:{x:-309.2}}]},1).to({state:[{t:this.shape_3,p:{x:-307.5}}]},1).to({state:[{t:this.shape_5,p:{x:-305.7}}]},1).to({state:[{t:this.shape_4,p:{x:-304}}]},1).to({state:[{t:this.shape_2,p:{x:-302.3}}]},1).to({state:[{t:this.shape_3,p:{x:-300.6}}]},1).to({state:[{t:this.shape_5,p:{x:-298.8}}]},1).to({state:[{t:this.shape_4,p:{x:-297.1}}]},1).to({state:[{t:this.shape_2,p:{x:-295.4}}]},1).to({state:[{t:this.shape_3,p:{x:-293.7}}]},1).to({state:[{t:this.shape_5,p:{x:-291.9}}]},1).to({state:[{t:this.shape_4,p:{x:-290.2}}]},1).to({state:[{t:this.shape_2,p:{x:-288.5}}]},1).to({state:[{t:this.shape_3,p:{x:-286.8}}]},1).to({state:[{t:this.shape_5,p:{x:-285}}]},1).to({state:[{t:this.shape_4,p:{x:-283.3}}]},1).to({state:[{t:this.shape_2,p:{x:-281.6}}]},1).to({state:[{t:this.shape_3,p:{x:-279.9}}]},1).to({state:[{t:this.shape_5,p:{x:-278.1}}]},1).to({state:[{t:this.shape_4,p:{x:-276.4}}]},1).to({state:[{t:this.shape_2,p:{x:-274.7}}]},1).to({state:[{t:this.shape_3,p:{x:-273}}]},1).to({state:[{t:this.shape_5,p:{x:-271.2}}]},1).to({state:[{t:this.shape_4,p:{x:-269.5}}]},1).to({state:[{t:this.shape_2,p:{x:-267.8}}]},1).to({state:[{t:this.shape_3,p:{x:-266}}]},1).to({state:[{t:this.shape_5,p:{x:-264.3}}]},1).to({state:[{t:this.shape_4,p:{x:-262.6}}]},1).to({state:[{t:this.shape_2,p:{x:-260.9}}]},1).to({state:[{t:this.shape_3,p:{x:-259.1}}]},1).to({state:[{t:this.shape_5,p:{x:-257.4}}]},1).to({state:[{t:this.shape_4,p:{x:-255.7}}]},1).to({state:[{t:this.shape_2,p:{x:-254}}]},1).to({state:[{t:this.shape_3,p:{x:-252.2}}]},1).to({state:[{t:this.shape_5,p:{x:-250.5}}]},1).to({state:[{t:this.shape_4,p:{x:-248.8}}]},1).to({state:[{t:this.shape_2,p:{x:-247.1}}]},1).to({state:[{t:this.shape_3,p:{x:-245.3}}]},1).to({state:[{t:this.shape_5,p:{x:-243.6}}]},1).to({state:[{t:this.shape_4,p:{x:-241.9}}]},1).to({state:[{t:this.shape_2,p:{x:-240.2}}]},1).to({state:[{t:this.shape_3,p:{x:-238.4}}]},1).to({state:[{t:this.shape_5,p:{x:-236.7}}]},1).to({state:[{t:this.shape_4,p:{x:-235}}]},1).to({state:[{t:this.shape_2,p:{x:-233.3}}]},1).to({state:[{t:this.shape_3,p:{x:-231.5}}]},1).to({state:[{t:this.shape_5,p:{x:-229.8}}]},1).to({state:[{t:this.shape_4,p:{x:-228.1}}]},1).to({state:[{t:this.shape_2,p:{x:-226.3}}]},1).to({state:[{t:this.shape_3,p:{x:-224.6}}]},1).to({state:[{t:this.shape_3,p:{x:-222.9}}]},1).to({state:[{t:this.shape_4,p:{x:-221.2}}]},1).to({state:[{t:this.shape_4,p:{x:-219.4}}]},1).to({state:[{t:this.shape_3,p:{x:-217.7}}]},1).to({state:[{t:this.shape_3,p:{x:-216}}]},1).to({state:[{t:this.shape_4,p:{x:-214.3}}]},1).to({state:[{t:this.shape_4,p:{x:-212.5}}]},1).to({state:[{t:this.shape_3,p:{x:-210.8}}]},1).to({state:[{t:this.shape_3,p:{x:-209.1}}]},1).to({state:[{t:this.shape_4,p:{x:-207.4}}]},1).to({state:[{t:this.shape_4,p:{x:-205.6}}]},1).to({state:[{t:this.shape_3,p:{x:-203.9}}]},1).to({state:[{t:this.shape_3,p:{x:-202.2}}]},1).to({state:[{t:this.shape_4,p:{x:-200.5}}]},1).to({state:[{t:this.shape_4,p:{x:-198.7}}]},1).to({state:[{t:this.shape_3,p:{x:-197}}]},1).to({state:[{t:this.shape_3,p:{x:-195.3}}]},1).to({state:[{t:this.shape_4,p:{x:-193.6}}]},1).to({state:[{t:this.shape_4,p:{x:-191.8}}]},1).to({state:[{t:this.shape_3,p:{x:-190.1}}]},1).to({state:[{t:this.shape_3,p:{x:-188.4}}]},1).to({state:[{t:this.shape_4,p:{x:-186.7}}]},1).to({state:[{t:this.shape_4,p:{x:-184.9}}]},1).to({state:[{t:this.shape_3,p:{x:-183.2}}]},1).to({state:[{t:this.shape_3,p:{x:-181.5}}]},1).to({state:[{t:this.shape_4,p:{x:-179.7}}]},1).to({state:[{t:this.shape_4,p:{x:-178}}]},1).to({state:[{t:this.shape_3,p:{x:-176.3}}]},1).to({state:[{t:this.shape_3,p:{x:-174.6}}]},1).to({state:[{t:this.shape_4,p:{x:-172.8}}]},1).to({state:[{t:this.shape_4,p:{x:-171.1}}]},1).to({state:[{t:this.shape_2,p:{x:-169.4}}]},1).to({state:[{t:this.shape_3,p:{x:-167.7}}]},1).to({state:[{t:this.shape_5,p:{x:-165.9}}]},1).to({state:[{t:this.shape_4,p:{x:-164.2}}]},1).to({state:[{t:this.shape_2,p:{x:-162.5}}]},1).to({state:[{t:this.shape_3,p:{x:-160.8}}]},1).to({state:[{t:this.shape_5,p:{x:-159}}]},1).to({state:[{t:this.shape_4,p:{x:-157.3}}]},1).to({state:[{t:this.shape_2,p:{x:-155.6}}]},1).to({state:[{t:this.shape_3,p:{x:-153.9}}]},1).to({state:[{t:this.shape_5,p:{x:-152.1}}]},1).to({state:[{t:this.shape_4,p:{x:-150.4}}]},1).to({state:[{t:this.shape_2,p:{x:-148.7}}]},1).to({state:[{t:this.shape_3,p:{x:-147}}]},1).to({state:[{t:this.shape_5,p:{x:-145.2}}]},1).to({state:[{t:this.shape_4,p:{x:-143.5}}]},1).to({state:[{t:this.shape_2,p:{x:-141.8}}]},1).to({state:[{t:this.shape_3,p:{x:-140.1}}]},1).to({state:[{t:this.shape_5,p:{x:-138.3}}]},1).to({state:[{t:this.shape_4,p:{x:-136.6}}]},1).to({state:[{t:this.shape_2,p:{x:-134.9}}]},1).to({state:[{t:this.shape_3,p:{x:-133.1}}]},1).to({state:[{t:this.shape_5,p:{x:-131.4}}]},1).to({state:[{t:this.shape_4,p:{x:-129.7}}]},1).to({state:[{t:this.shape_2,p:{x:-128}}]},1).to({state:[{t:this.shape_3,p:{x:-126.2}}]},1).to({state:[{t:this.shape_5,p:{x:-124.5}}]},1).to({state:[{t:this.shape_4,p:{x:-122.8}}]},1).to({state:[{t:this.shape_2,p:{x:-121.1}}]},1).to({state:[{t:this.shape_3,p:{x:-119.3}}]},1).to({state:[{t:this.shape_5,p:{x:-117.6}}]},1).to({state:[{t:this.shape_4,p:{x:-115.9}}]},1).to({state:[{t:this.shape_2,p:{x:-114.2}}]},1).to({state:[{t:this.shape_3,p:{x:-112.4}}]},1).to({state:[{t:this.shape_5,p:{x:-110.7}}]},1).to({state:[{t:this.shape_4,p:{x:-109}}]},1).to({state:[{t:this.shape_2,p:{x:-107.3}}]},1).to({state:[{t:this.shape_3,p:{x:-105.5}}]},1).to({state:[{t:this.shape_5,p:{x:-103.8}}]},1).to({state:[{t:this.shape_4,p:{x:-102.1}}]},1).to({state:[{t:this.shape_2,p:{x:-100.4}}]},1).to({state:[{t:this.shape_3,p:{x:-98.6}}]},1).to({state:[{t:this.shape_5,p:{x:-96.9}}]},1).to({state:[{t:this.shape_4,p:{x:-95.2}}]},1).to({state:[{t:this.shape_2,p:{x:-93.4}}]},1).to({state:[{t:this.shape_3,p:{x:-91.7}}]},1).to({state:[{t:this.shape_5,p:{x:-90}}]},1).to({state:[{t:this.shape_4,p:{x:-88.3}}]},1).to({state:[{t:this.shape_2,p:{x:-86.5}}]},1).to({state:[{t:this.shape_3,p:{x:-84.8}}]},1).to({state:[{t:this.shape_5,p:{x:-83.1}}]},1).to({state:[{t:this.shape_4,p:{x:-81.4}}]},1).to({state:[{t:this.shape_2,p:{x:-79.6}}]},1).to({state:[{t:this.shape_3,p:{x:-77.9}}]},1).to({state:[{t:this.shape_5,p:{x:-76.2}}]},1).to({state:[{t:this.shape_4,p:{x:-74.5}}]},1).to({state:[{t:this.shape_2,p:{x:-72.7}}]},1).to({state:[{t:this.shape_3,p:{x:-71}}]},1).to({state:[{t:this.shape_3,p:{x:-69.3}}]},1).to({state:[{t:this.shape_4,p:{x:-67.6}}]},1).to({state:[{t:this.shape_4,p:{x:-65.8}}]},1).to({state:[{t:this.shape_3,p:{x:-64.1}}]},1).to({state:[{t:this.shape_3,p:{x:-62.4}}]},1).to({state:[{t:this.shape_4,p:{x:-60.7}}]},1).to({state:[{t:this.shape_4,p:{x:-58.9}}]},1).to({state:[{t:this.shape_3,p:{x:-57.2}}]},1).to({state:[{t:this.shape_3,p:{x:-55.5}}]},1).to({state:[{t:this.shape_4,p:{x:-53.8}}]},1).to({state:[{t:this.shape_4,p:{x:-52}}]},1).to({state:[{t:this.shape_3,p:{x:-50.3}}]},1).to({state:[{t:this.shape_3,p:{x:-48.6}}]},1).to({state:[{t:this.shape_4,p:{x:-46.8}}]},1).to({state:[{t:this.shape_4,p:{x:-45.1}}]},1).to({state:[{t:this.shape_3,p:{x:-43.4}}]},1).to({state:[{t:this.shape_3,p:{x:-41.7}}]},1).to({state:[{t:this.shape_4,p:{x:-39.9}}]},1).to({state:[{t:this.shape_4,p:{x:-38.2}}]},1).to({state:[{t:this.shape_3,p:{x:-36.5}}]},1).to({state:[{t:this.shape_3,p:{x:-34.8}}]},1).to({state:[{t:this.shape_4,p:{x:-33}}]},1).to({state:[{t:this.shape_4,p:{x:-31.3}}]},1).to({state:[{t:this.shape_3,p:{x:-29.6}}]},1).to({state:[{t:this.shape_3,p:{x:-27.9}}]},1).to({state:[{t:this.shape_4,p:{x:-26.1}}]},1).to({state:[{t:this.shape_4,p:{x:-24.4}}]},1).to({state:[{t:this.shape_2,p:{x:-22.7}}]},1).to({state:[{t:this.shape_3,p:{x:-21}}]},1).to({state:[{t:this.shape_5,p:{x:-19.2}}]},1).to({state:[{t:this.shape_4,p:{x:-17.5}}]},1).to({state:[{t:this.shape_2,p:{x:-15.8}}]},1).to({state:[{t:this.shape_3,p:{x:-14.1}}]},1).to({state:[{t:this.shape_5,p:{x:-12.3}}]},1).to({state:[{t:this.shape_4,p:{x:-10.6}}]},1).to({state:[{t:this.shape_2,p:{x:-8.9}}]},1).to({state:[{t:this.shape_3,p:{x:-7.2}}]},1).wait(1));

	// screen
	this.instance = new lib.sim3screenblank();
	this.instance.setTransform(-307.4,-215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(360));

	// Layer 10
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BEC0B6").s().p("EgAoAkhMAAAhJBIBRAAMAAABJBg");
	this.shape_6.setTransform(328.3,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606163").s().p("Egy/AkhMAAAhJBMBl/AAAMAAABJBgEgwoAiJMBg9AAAMAAAhEHMhg9AAAg");
	this.shape_7.setTransform(-2.4,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(360));

	// Layer 11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B9C9F").s().p("EgBiAjOIAAiDMAAAhEYIDFAAMAAABEYIAACDg");
	this.shape_8.setTransform(-307.4,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0B2B4").s().p("A/jBlIAAhIIuiAAIAAiBMBgWAAAIAADJgEgyPAAdIAAiBIBCAAIAACBg");
	this.shape_9.setTransform(-2.3,224.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.8,-230.7,661.4,467.6);


(lib.forward = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2ADD0").s().p("AAPA8IAAh3IAjAAIAAB3gAgwA8IAAh3IAiAAIAAB3g");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D69A7").ss(1,1,1).p("ABXhXQAlAlAAAyQAAAzglAkQgkAlgzAAQgyAAglglQgkgkAAgzQAAgyAkglQAlgkAyAAQAzAAAkAkg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#155AA9","#1B4279"],[0,1],-12.3,0,12.4,0).s().p("AhXBXQgjgkgBgzQABgyAjglQAlgjAygBQAzABAkAjQAlAlAAAyQAAAzglAkQgkAlgzAAQgyAAglglg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-12.3,24.8,24.8);


(lib.Path_29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#75C0BE").ss(2.2,1,0,4).p("AERjjIgnAzQgVAVgfAZQg+A0guAaQgOgFgmgFQhKgMh5gFQgZgFgaAJQgyASACBAIAUDd");
	this.shape.setTransform(28.5,24.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.8,54.7,45.7);


(lib.Path_28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75C0BE").s().p("AgUANIAggiIAKAGIgrAlg");
	this.shape.setTransform(2.2,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,4.5);


(lib.Path_47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9EAEB").ss(1,0,0,4).p("AAOC3IAAloIgbAAIAAFj");
	this.shape.setTransform(2,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNCvIAAliIAbAAIAAFng");
	this.shape_1.setTransform(2,18.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,2.9,36.1);


(lib.Path_36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgTD7IAPACIAAgBQgTgCgXgEQgFAGgIAAIgqAAQgKAAgIgMQgHgMAAgRQAAgRAHgLQAIgLAKAAIAoAAIAAgXIATgGIgBgEIAZl/QAAgaAMgRQALgTAYAAQAWAAAMAWQAKATAAAcIAfFxIAAADIAUACIADBgQgPAIgQAEIAAAAIASgGIAAA7IgcAFIhpAEg");
	this.shape.setTransform(12.8,30.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,61.5);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEF5").s().p("Ag4AEIAAgIIBxAAIAAAIg");
	this.shape.setTransform(5.7,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,1);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEF5").s().p("AgzAzIAAhlIBnAAIAABlg");
	this.shape.setTransform(5.2,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.4,10.3);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75C0BE").s().p("AgfBrIAFgJQAcg7AIhHQADglgCgaIgBgMIAUAAIABAKQACAbgDAkQgHBFgZA7IgbAOg");
	this.shape.setTransform(3.2,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,21.6);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AlxBtQgoAAABgnIAAiLQgBgoAoAAILiAAQApAAAAAoIAACLQAAAngpAAgAmOhFIAACLQgBAdAdAAILlAAQAdAAAAgdIAAiLQAAgdgdgBIrlAAQgdABABAdg");
	this.shape.setTransform(41,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.RadioButton_upIcon = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AeQABgYAPgOIACgDQARgSAYAAQAZAAARASIADADQAOAOAAAYg");
	this.shape.setTransform(7,4);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0.5,7,0.5,-7.5).s().p("AgwAxQgVgVAAgcQAAgVAMgRIAJgKQAUgVAcAAQAcAAAVAVIAIAKQANARAAAVQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpIgCADQgPAQgBAWQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgWgOgQIgDgDQgRgSgZAAQgYAAgRASg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQABgWAPgQIACgDQARgSAYAAQAZAAARASIADADQAOAQAAAWQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedIcon = function() {
	this.initialize();

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAAQABgSASgBQAUABgBASQABAUgUgBQgSABgBgUg");
	this.shape.setTransform(2,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.RadioButton_overIcon = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AdQABgWAPgPIACgDQARgRAYAAQAZAAARARIADADQAOAPAAAWg");
	this.shape.setTransform(7,4.1);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.753)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAUAUABAcQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpQgSARAAAYQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgYgRgRQgRgSgZAAQgYAAgRASg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_downIcon = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AeQABgYAPgOIACgDQARgSAYAAQAZAAARASIADADQAOAOAAAYg");
	this.shape.setTransform(7,4);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAUAUABAcQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpQgSARAAAYQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgYgRgRQgRgSgZAAQgYAAgRASg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_disabledIcon = function() {
	this.initialize();

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AeQABgYAPgOIACgDQARgSAYAAQAZAAARASIADADQAOAOAAAYg");
	this.shape.setTransform(7,4);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(91,93,94,0.302)","rgba(183,186,188,0.302)"],[0,1],0.5,7,0.5,-7.5).s().p("AgwAxQgVgVAAgcQAAgVAMgRIAJgKQAUgVAcAAQAcAAAVAVIAIAKQANARAAAVQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpIgCADQgPAQgBAWQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgWgOgQIgDgDQgRgSgZAAQgYAAgRASg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.302)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQABgWAPgQIACgDQARgSAYAAQAZAAARASIADADQAOAQAAAWQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.btn4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2});

	// RAVOC
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiwB9QgQgRgDgaIgBgMQABgkATgVQAUgUAgAAQAcAAARAMQARAOACAWIgeAAQgEgPgNgFQgIgDgJgBQgSAAgLAOQgLANAAAaIABAMQACARAJAKQAMALAQAAQAQAAAJgIQAJgKADgOIghAAIAAgZIA9AAIAABPIgVAAIgDgSQgJAKgHAFQgMAHgRAAQgeAAgSgVgAl1CFQgQgNAAgYIAeAAQABALAFAFQAHAJASAAQALAAAHgCQAEgCADgCQAGgFAAgIQAAgHgGgEIgBgBQgGgEgNgDIgRgEQgXgEgIgHQgPgKAAgVQAAgUAOgNQAPgLAcAAQAXAAARALQAQAMABAYIgeAAQAAgOgMgFQgHgEgLAAQgLABgHAEQgHAFgBAIQABAHAGAFQAFACAOADIAaAHQARAEAJAGQAGAGAEAHQACAIAAAKQABATgQANQgIAIgMADQgLADgNAAQgdAAgRgNgAn9CFQgQgNAAgYIAeAAQABALAEAFQAHAJATAAQALAAAHgCQANgEAAgNQAAgIgHgEQgGgEgNgDIgRgEQgXgEgJgHQgPgKABgVQAAgUAOgNQAOgLAcAAQAYAAARALQAQAMAAAYIgdAAQAAgOgLgFQgIgEgKAAQgNABgGAEQgIAFAAAIQABAHAGAFQAFACAPADIAZAHQARAEAJAGQANAKgBAVQAAATgPANQgPAOgdAAQgdAAgRgNgAJaCOIAAh5IgsAAIAAgYIB3AAIAAAYIgtAAIAAB5gAH+COIg8hoIAABoIgcAAIAAiRIAgAAIA6BjIAAhjIAcAAIAACRgAEfCOIAAiRIBsAAIAAAYIhOAAIAAAfIBHAAIAAAaIhHAAIAAAlIBRAAIAAAbgADkCOIAAhkIABgLIAAgMIgcB7IgeAAIgbh7IAAAMIAAALIAABkIgcAAIAAiRIAtAAIAaByIAahyIAtAAIAACRgAA4COIg5hoIAABoIgdAAIAAiRIAeAAIA7BjIAAhjIAcAAIAACRgAj4COIAAiRIAfAAIAACRgAo6COIgKgeIg2AAIgKAeIggAAIA0iRIAiAAIA0CRgApxBWIAkAAIgSg5gAlRhCQgKgMgBgWQABgWAMgNQAKgKARAAQAVAAAKAPQAFAHABAJIgSAAQgCgHgDgDQgEgFgKAAQgKgBgFAJQgGAHAAAPQAAAPAGAHQAGAIAJAAQAKAAAEgHQADgDACgHIASAAQgCAOgKAJQgKAJgOAAQgTAAgLgMgAqJhCQgMgMAAgWQAAgWANgNQAKgKARAAQAVAAAKAPQAFAHABAJIgSAAQgCgHgDgDQgEgFgKAAQgKgBgGAJQgFAHAAAPQAAAPAGAHQAGAIAJAAQAKAAAEgHQADgDACgHIASAAQgCAOgKAJQgKAJgOAAQgTAAgKgMgAipg5IAAhWIARAAIAABHIArAAIAAAPgAjKg5IgFgSIggAAIgFASIgUAAIAfhWIAUAAIAfBWgAjqhaIAWAAIgLghgAl6g5IAAhWIASAAIAABWgAmcg5Igjg9IAAA9IgRAAIAAhWIATAAIAiA8IAAg8IARAAIAABWgAnyg5IAAhWIATAAIAABWgAo5g5IAAhWIASAAIAABHIAqAAIAAAPg");
	this.shape.setTransform(19.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(4));

	// FlashAICB
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhTg8IBTAAAhThYIBSAAAhVAAICrAAAhVgbICrAAAhTBZIBTAAAhVA2ICrAAAhVAaICrAA");
	this.shape_1.setTransform(-69.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhxCnQgOABAAgNIAAkMQAAgNAOAAIAyAAIAAgLIAkAAIAAgBQAAgMAIgIQAJgIAKAAQALAAAIAIQAJAIAAAMIAAABIAkAAIAAALIAzAAQANAAAAANIAAEMQAAANgNgBgAhthdIAADkQAAALAMAAIDEAAQALAAAAgLIAAjkQAAgMgLAAIgjAAIAAAJIh/AAIAAgJIgiAAQgMAAAAAMgAgMiaQgFAGAAAIQAAAHAFAFIACACIAVAAIABgCQAGgFAAgHQAAgIgGgGQgFgEgHAAQgGAAgGAEg");
	this.shape_2.setTransform(-69.2,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(4));

	// Layer 75
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C1A94").s().p("AtMBnQg8AAAAg8IAAhVQAAg8A8AAIZpAAIAAABIAwgBQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_3.setTransform(0.9,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#631178").s().p("AtMBnQg8AAAAg8IAAhVQAAg8A8AAIZpAAIAAABIAwgBQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_4.setTransform(0.9,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).wait(3));

	// queryRespButton
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(2,1,1).p("ANpjdI7RAAQg8AAAAA8IAAFDQAAA8A8AAIbRAAQA8AAAAg8IAAlDQAAg8g8AAg");
	this.shape_5.setTransform(1.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9432AD").s().p("AtnDeQg9AAAAg8IAAlDQAAg8A9AAIbQAAQA7AAAAA8IAAFDQAAA8g7AAg");
	this.shape_6.setTransform(1.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#761F8C").s().p("AtnDeQg9AAAAg8IAAlDQAAg8A9AAIbQAAQA7AAAAA8IAAFDQAAA8g7AAg");
	this.shape_7.setTransform(1.1,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-22.9,186.6,44.5);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// RAVOC
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGMB+QgTgUAAgjQAAgjATgVQATgTAgAAQAbAAARAMQAQAOADAVIgfAAQgDgPgNgFQgIgDgJAAQgRAAgLANQgLANAAAaQAAAaAMALQAMALAPAAQAPAAAKgJQAJgIADgOIghAAIAAgZIA8AAIAABOIgVAAIgCgSQgJAKgHAEQgMAIgRAAQgcAAgSgUgAlWCBQgWgVAAgmQAAgnAWgUQAQgPAfAAQAfAAAQAPQAWAUAAAnQAAAmgWAVQgQARgfAAQgfAAgQgRgAlDAhQgLANAAAYQAAAYALANQAKANASAAQASAAAKgNQALgNAAgYQAAgYgLgNQgKgNgSAAQgSAAgKANgAIbCOIAAiOIBqAAIAAAYIhMAAIAAAdIBGAAIAAAZIhGAAIAAAmIBQAAIAAAagADvCOIAAiOIA+AAQANAAAJABQAPAFAJANQAIALADANQACAMAAALQAAAdgLAUQgQAbggAAgAEMB1IAbAAQAWAAAIgVQAFgMAAgQQAAgVgHgMQgHgMgVAAIgbAAgABqCOIAAiOIBqAAIAAAYIhMAAIAAAdIBFAAIAAAZIhFAAIAAAmIBPAAIAAAagAgOCOIAAiOIAcAAIAAB0IBHAAIAAAagAhnCOIgWhwIgWBwIgcAAIgpiOIAgAAIAXBnIAUhnIAgAAIAVBnIAYhnIAfAAIgpCOgAmiCOIg6hmIAABmIgcAAIAAiOIAgAAIA4BhIAAhhIAdAAIAACOgAouCOIgtg/IgOAPIAAAwIgfAAIAAiOIAfAAIAAA4IA2g4IAnAAIg6A5IA9BVgABmhCQgLgMAAgVQAAgXAMgMQALgLAQAAQAWAAAKAPQAFAIABAIIgSAAQgCgHgDgDQgFgFgJAAQgKAAgGAIQgFAIAAAOQAAAPAGAHQAGAIAJAAQAJAAAFgHQADgDACgHIASAAQgDAOgJAJQgKAJgPAAQgSAAgLgMgAjRhCQgLgMAAgVQAAgXAMgMQALgLAQAAQAWAAAKAPQAFAIABAIIgSAAQgCgHgDgDQgFgFgJAAQgKAAgGAIQgFAIAAAOQAAAPAGAHQAGAIAJAAQAJAAAFgHQADgDACgHIASAAQgDAOgJAJQgKAJgPAAQgSAAgLgMgAENg4IAAhWIASAAIAABGIArAAIAAAQgADtg4IgFgSIggAAIgGASIgTAAIAfhWIAUAAIAfBWgADNhZIAWAAIgLgigAA8g4IAAhWIATAAIAABWgAAbg4Ighg9IAAA9IgRAAIAAhWIATAAIAgA7IAAg7IARAAIAABWgAg5g4IAAhWIASAAIAABWgAiBg4IAAhWIASAAIAABGIArAAIAAAQgAkvg4IAAghIgeg1IAVAAIASAlIARglIAUAAIgcA0IAAAigAmFg4IAAhWIASAAIAABGIArAAIAAAQgAnVg4IAAhWIAlAAQANAAAIAGQAHAHAAAOQAAAPgHAGQgIAHgOAAIgSAAIAAAfgAnDhmIAQAAQAGAAAEgDQADgDAAgHQAAgHgDgDQgEgCgGAAIgQAAgAolg4IAAhWIAlAAQANAAAIAGQAHAHAAAOQAAAPgHAGQgIAHgOAAIgSAAIAAAfgAoThmIAQAAQAGAAAEgDQADgDAAgHQAAgHgDgDQgEgCgGAAIgQAAgApEg4IgGgSIgfAAIgGASIgUAAIAfhWIAVAAIAeBWgAplhZIAWAAIgKgig");
	this.shape.setTransform(112.2,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(4));

	// FlashAICB
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,2,0,3).p("AiDAbIARAAIAoBjIAfAAQAJg1Aag5QAyhwBUgX");
	this.shape_1.setTransform(25.8,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(4));

	// Layer 75
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE8C21").s().p("As9BnQg8AAAAg8IAAhVQAAg8A8AAIZLAAIAAAAIAwAAQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_2.setTransform(93.4,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2781B").s().p("As9BnQg8AAAAg8IAAhVQAAg8A8AAIZLAAIAAAAIAwAAQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_3.setTransform(93.4,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

	// queryRespButton
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(2,1,1).p("AtVjdQg8AAAAA8IAAFDQAAA8A8AAIarAAQA8AAAAg8IAAlDQAAg8g8AAg");
	this.shape_4.setTransform(93.2,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09926").s().p("AtVDeQg7AAgBg8IAAlDQABg8A7AAIarAAQA7AAABA8IAAFDQgBA8g7AAg");
	this.shape_5.setTransform(93.2,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD811E").s().p("AtVDeQg7AAgBg8IAAlDQABg8A7AAIarAAQA7AAABA8IAAFDQgBA8g7AAg");
	this.shape_6.setTransform(93.2,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,-0.9,182.8,44.5);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// RAVOC
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHqAiQgLgMAAgWQAAgWANgNQALgLARAAQAWAAALAPQAGAIAAAJIgTAAQgCgGgDgDQgFgHgKABQgKAAgGAIQgGAIAAANQAAAQAHAHQAFAIAKAAQAKAAAFgHQADgDACgHIATAAQgCAOgLAKQgKAJgPAAQgUAAgLgNgAFnAiQgMgMAAgWQAAgTAMgNQANgOATAAQARAAAKAJQALAIABANIgTAAQgCgIgIgEQgFgCgFABQgLgBgHAJQgHAHAAAPQAAAQAHAHQAIAHAKAAQAJAAAGgFQAGgGABgIIgUAAIAAgOIAmAAIAAAuIgNAAIgCgLQgGAHgEACQgHAFgLAAQgRAAgMgNgAEJAkQgPgNAAgXQAAgXAPgNQAJgKAUAAQATAAAKAKQAOANAAAXQAAAXgOANQgKALgTAAQgUAAgJgLgAEUgVQgGAHAAAOQAAAOAGAJQAHAIALAAQALAAAHgIQAGgJAAgOQAAgNgGgIQgHgJgLABQgLgBgHAJgABbAkQgOgNAAgXQAAgXAOgNQAKgKATAAQAUAAAKAKQAOANAAAXQAAAXgOANQgKALgUAAQgTAAgKgLgABngVQgHAHAAAOQAAAOAHAJQAGAIALAAQAMAAAGgIQAGgJAAgOQAAgNgGgIQgGgJgMABQgLgBgGAJgAgCAiQgLgMABgWQAAgWAMgNQAJgLARAAQAXAAAKAPQAGAIABAJIgUAAQgCgGgDgDQgEgHgLABQgJAAgGAIQgHAIABANQgBAQAHAHQAGAIAJAAQALAAAEgHQADgDACgHIAUAAQgDAOgKAKQgLAJgPAAQgTAAgKgNgAG/AsIAAhYIATAAIAABYgACxAsIAAhYIATAAIAABJIAtAAIAAAPgAgpAsIgGgSIghAAIgGASIgUAAIAghYIAVAAIAhBYgAhLALIAXAAIgLgigAiGAsIAAg6IAAgHIAAgIIgQBJIgTAAIgRhJIAAAIIAAAHIAAA6IgRAAIAAhYIAbAAIARBFIAPhFIAbAAIAABYgAjxAsIgBgEIgBgIIAAgJQAAgIgDgCQgDgDgIgBIgSAAIAAAjIgSAAIAAhYIAqAAQAKABAEACQAGACADAEIAFAIQACAEAAAFQAAAHgEAGQgDAFgIACQAHACACAFQADAEAAAKIAAAGIAAAJQACADACABIAAACgAkTgEIAUAAIAJgBQAFgCABgJQgBgHgFgDQgDgCgGAAIgUAAgAlGAsIgGgSIghAAIgGASIgUAAIAghYIAVAAIAgBYgAloALIAXAAIgLgigAmlAsIAAgnIgiAAIAAAnIgTAAIAAhYIATAAIAAAjIAiAAIAAgjIATAAIAABYgAouAsIAAhYIAnAAQANABAIAGQAJAIAAAOQAAAPgJAFQgIAIgOAAIgTAAIAAAfgAobgCIARAAQAGAAAEgCQADgEABgGQgBgIgDgDQgEgDgGAAIgRAAg");
	this.shape.setTransform(4.9,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJZBBQgRgNAAgYIAfAAQABALAFAFQAHAKATAAQALAAAIgDQANgEAAgOQAAgIgHgEQgGgDgPgEIgQgDQgYgGgJgFQgPgJAAgWQAAgVAOgNQAQgNAcAAQAYgBASANQAQANABAXIgeAAQgBgMgLgGQgHgEgLABQgNAAgHAEQgIAGAAAIQAAAIAHADQAFADAQAEIAaAGQARAEAJAFQANAKAAAVQAAAUgQAOQgPAPgeAAQgdAAgSgPgAEmA+QgXgWAAgoQAAgoAXgVQASgRAgAAQAhAAARARQAXAVAAAoQAAAogXAWQgRASghAAQggAAgSgSgAE6gmQgLAOAAAYQAAAZALANQALAOATAAQATAAALgOQALgNAAgZQAAgYgLgOQgLgOgTABQgTAAgLANgAk+A3QgHgOAAgYIAAhcIAgAAIAABcQAAAPAEAHQAFANAUAAQATAAAGgNQAEgHAAgPIAAhcIAgAAIAABcQAAAYgIAOQgOAZgnAAQgoAAgOgZgAqzBBQgRgNAAgYIAeAAQACALAEAFQAIAKASAAQAMAAAHgDQANgEAAgOQAAgIgGgEQgHgDgOgEIgQgDQgYgGgJgFQgQgJAAgWQAAgVAPgNQAPgNAdAAQAYgBARANQARANABAXIgeAAQgBgMgMgGQgHgEgLABQgNAAgHAEQgHAGAAAIQAAAIAHADQAFADAPAEIAaAGQARAEAJAFQANAKAAAVQAAAUgPAOQgQAPgdAAQgeAAgRgPgAISBLIg9hpIAABpIgdAAIAAiWIAhAAIA8BnIAAhnIAdAAIAACWgADXBLIAAiWIAgAAIAACWgAB7BLIAAh7IgtAAIAAgbIB6AAIAAAbIgtAAIAAB7gAAyBLIgKgfIg1AAIgKAfIgiAAIA2iWIAiAAIA1CWgAgFASIAlAAIgTg6gAiuBLIAAiWIAhAAIAAB7IBKAAIAAAbgAmBBLIAAhkIAAgNIAAgMIgcB9IgfAAIgch9IAAAMIAAANIAABkIgdAAIAAiWIAuAAIAbB1IAbh1IAuAAIAACWgAoyBLIAAiWIAgAAIAACWg");
	this.shape_1.setTransform(19.3,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// FlashAICB
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABUCbIgHAEIgLgSIgRAKIhvjCIAKgGIgohGIgRAKIgJgQIBUgxIAJAQIgRAKIAoBHIAJgGIBwDBIgRAKIALASIgHAFIAMATIgXANgAgmgiIAAABIgCABIBbCfIAYgNIgFgJIgPAIIgKgRIAPgJIgFgJIgPAJIgKgRIAPgIIgFgJIgPAIIgJgQIAPgJIgGgJIgPAJIgJgRIAPgIIgFgJIgNAIIgKgOIANgIIgDgJIgPAIIgJgQIAPgIIgFgJg");
	this.shape_2.setTransform(-71.9,-0.8,1,1,0,0,0,1.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).wait(4));

	// Layer 75
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56B184").s().p("AuABnQg8AAAAg8IAAhVQAAg8A8AAIbRAAIAAABIAwgBQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_3.setTransform(3.6,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#46976D").s().p("AuABnQg8AAAAg8IAAhVQAAg8A8AAIbRAAIAAABIAwgBQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_4.setTransform(3.6,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).wait(3));

	// queryRespButton
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(2,1,1).p("AOcjdI83AAQg8AAAAA8IAAFDQAAA8A8AAIc3AAQA8AAAAg8IAAlDQAAg8g8AAg");
	this.shape_5.setTransform(3.7,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#68B991").s().p("AubDeQg8AAAAg8IAAlDQAAg8A8AAIc3AAQA8AAAAA8IAAFDQAAA8g8AAg");
	this.shape_6.setTransform(3.7,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BA377").s().p("AubDeQg8AAAAg8IAAlDQAAg8A8AAIc3AAQA8AAAAA8IAAFDQAAA8g8AAg");
	this.shape_7.setTransform(3.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-22.9,197,44.5);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2});

	// RAVOC
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD0A7QgSgVgBgmQABgmAVgWQASgSAdgBQAmABARAZQAKAOABAOIggAAQgDgKgFgGQgJgJgRgBQgQABgLAOQgKAOABAXQAAAaAKANQAKANAQAAQARAAAJgLQAEgGAEgMIAgAAQgEAZgRAPQgRAQgbAAQgggBgTgUgABXA+QgYgVAAgpQAAgoAYgVQAQgRAhgBQAhABARARQAXAVAAAoQAAApgXAVQgRASghAAQghAAgQgSgABqglQgLAOABAXQgBAZALANQAMAPASAAQATAAAMgPQAKgNAAgZQAAgXgKgOQgMgOgTAAQgSAAgMAOgAgeBLIg0iVIAiAAIAhBxIAfhxIAiAAIgyCVgAhtBLIgKgfIg3AAIgLAfIghAAIA2iVIAjAAIA2CVgAimASIAmAAIgSg6gAkOBLIgCgHIgBgOIAAgNQAAgPgGgFQgFgEgNAAIgfAAIAAA6IgfAAIAAiVIBIAAQAQAAAJAEQAJAEAFAGQAFAHADAHQADAGAAAJQAAALgGALQgGAJgMADQALAEAEAJQAFAHgBAPIAAAMIABANQABAGAFACIAAAEgAlIgIIAiAAQAKAAAGgBQAIgFAAgMQAAgOgIgFQgFgDgKAAIgjAAg");
	this.shape.setTransform(81.8,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(4));

	// FlashAICB
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABVhsQgBAHgCAHIgbBIQgGASABAIIACAQQAEARAIAEQABACADgBQAHgBAJgLIAUgUQAFgEAHgDQANgDAIACIACACQADACACADQAFAIgHAJIgWAYQgYAbgIAKIgWAYQgYAYgLAFIgGADQgIADgJACQgZAFgXgHQgSgGgOgMQgIgGgDgFQgCgCgDgIQgFgQgGggQAAgGgDgIQgEgRgJgPIgbg6QgDgEAAgFQAAgLAIgEQADgCAEAAQAJABAGALIAaAtQADADADADQAGAHACgBQABgDgBgHQgCgNgIgUIgNgqQgDgHAAgIQAAgQAMgFQAEgBAFABQAKABAEALIAXBMQABADACADQAEAHACgBQABgBABgFQADgLAAgVIADhDQAAgGACgEQAFgLAKAAQAJgBAEALQACAFAAAGIADBaQAAAIADAAQAAAAADgEQAEgHAHgTIARgtQADgHAGgHQALgOALAFQAMAFgBAPg");
	this.shape_1.setTransform(25.2,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(4));

	// Layer 75
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#104A8D").s().p("Ao2BnQg8AAAAg8IAAhVQAAg8A8AAIGFABIAAAAILogBQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_2.setTransform(64.8,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D3F78").s().p("Ao2BnQg8AAAAg8IAAhVQAAg8A8AAIGFABIAAAAILogBQA8AAAAA8IAABVQAAA8g8AAg");
	this.shape_3.setTransform(64.8,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(3));

	// queryRespButton
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(2,1,1).p("AjHjcImEgBQg8AAAAA8IAAFDQAAA8A8AAISXAAQA8AAAAg8IAAlDQAAg8g8AAIr9ABg");
	this.shape_4.setTransform(64.8,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#155AA8").s().p("ApLDeQg8AAAAg8IAAlDQAAg8A8AAIGEABIAWAAIAAAAIL9gBQA8AAAAA8IAAFDQAAA8g8AAgApyAlIAABWQAAA9A8gBID+AAIAAjMIj+gBQg8AAAAA7g");
	this.shape_5.setTransform(64.8,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(2,1,1).p("AixjcIgWABImEgCQg8AAAAA8IAAFDQAAA8A8AAISXAAQA8AAAAg8IAAlDQAAg8g8AAg");
	this.shape_6.setTransform(64.8,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F498A").s().p("ApLDeQg8AAAAg8IAAlDQAAg8A8AAIGEABIAWAAIAAAAIL9gBQA8AAAAA8IAAFDQAAA8g8AAgApyAlIAABWQAAA9A8gBID+AAIAAjMIj+gBQg8AAAAA7g");
	this.shape_7.setTransform(64.8,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,129.7,44.5);


(lib.blanket = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD5D4").s().p("AlyDDQAIniAAg1IAGAQQAKAUAPAPQA0AuBngWQBegUBOAZQAwARCWBQQBxA8BAABIgaAoIhmC7QhVCYgsBAQidgwlHhig");
	this.shape.setTransform(-61.4,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6DBD9").s().p("ApgJ5IC5kwIAFACQAJADAjgyQArhABWiYIBmi7IAagoIAUgeQAqg9Atg8QgrguhZhKQiZiAg2gKIBFAJQBUAPBHAdQB0AwA6BNQApg2Arg1QCljMAwgMQA0gPC4AJQC0AJAaAPQhZAPhqBMQjVCXhZEuQhEDpjSGeQg7B5g5BqgAgKk2IA7hQIg7BQgAr7peQAMgaASgWIAPgQQAGAHAMAEQAxAQCHgbQBVgQBOgYQiQAviuCUQgnAigvArQgPANABgGIgFAJQgbhkAohUg");
	this.shape_1.setTransform(-12.4,51.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6E9E8").s().p("AG6CvQhbgQlfgeQkVgZhMgiQg2gYiaghQgvgKgMgGQgNgJAdgNQAOgdAogiQBQhDCEgdQB6gaETCAIDXBjQB1A2BCAOQClAjADAsQACAZg8AAQgtAAhQgOg");
	this.shape_2.setTransform(-27.5,-39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6E9E8").s().p("AxkE/QApndBeiUQAdguBEhhQBDhhAagvQAZgwA9A6QA8A5BsAPQBSAMD/AXQGDAjAqAFQBgAKAzAWQAdAMAmAbQBTAyEeABIEoABQAXAxACBRQACBcgsBGQgcAsAAA0QgKAAgHAFQgIAFgGAJQgEAGgFAFIgUAUIgJALQgQASgFAVQhfAlhmAaQpECXpYA0QkvAZksCWg");
	this.shape_3.setTransform(-3.9,13.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.5,-58,225.1,181.6);


(lib.BackGround_mcmcAS = function() {
	this.initialize();

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23120C").s().p("AgmCgIAAk/IBOAAIAAE/g");
	this.shape.setTransform(388,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AYXCgIAAk/IBQAAIAAE/gA5mCgIAAk/IBQAAIAAE/g");
	this.shape_1.setTransform(476,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBDBDB").s().p("EAwHACgIAAk/IBQAAIAAE/gEAtoACgIAAk/IBPAAIAAE/gEArIACgIAAk/IBQAAIAAE/gEAooACgIAAk/IBQAAIAAE/gEAmHACgIAAk/IBQAAIAAE/gEAjnACgIAAk/IBQAAIAAE/gEAhIACgIAAk/IBQAAIAAE/gAeoCgIAAk/IBQAAIAAE/gAcHCgIAAk/IBRAAIAAE/gAZnCgIAAk/IBQAAIAAE/gAXICgIAAk/IBPAAIAAE/gAUoCgIAAk/IBQAAIAAE/gASICgIAAk/IBQAAIAAE/gAPnCgIAAk/IBQAAIAAE/gANHCgIAAk/IBQAAIAAE/gAIICgIAAk/IBQAAIAAE/gAFnCgIAAk/IBRAAIAAE/gADHCgIAAk/IBQAAIAAE/gAAoCgIAAk/IBPAAIAAE/gAh2CgIAAk/IBQAAIAAE/gAkXCgIAAk/IBRAAIAAE/gAm3CgIAAk/IBQAAIAAE/gApXCgIAAk/IBQAAIAAE/gAr2CgIAAk/IBQAAIAAE/gAuWCgIAAk/IBQAAIAAE/gAw3CgIAAk/IBQAAIAAE/gAzXCgIAAk/IBQAAIAAE/gA12CgIAAk/IBPAAIAAE/gA4WCgIAAk/IBQAAIAAE/gA63CgIAAk/IBRAAIAAE/gA9XCgIAAk/IBQAAIAAE/gA/3CgIAAk/IBQAAIAAE/gEgiWACgIAAk/IBQAAIAAE/gEgk2ACgIAAk/IBQAAIAAE/gEgnXACgIAAk/IBQAAIAAE/gEgp3ACgIAAk/IBQAAIAAE/gEgsWACgIAAk/IBPAAIAAE/gEgu2ACgIAAk/IBQAAIAAE/gEgxXACgIAAk/IBRAAIAAE/g");
	this.shape_2.setTransform(316,16);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,32);


(lib._15minutes = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("20 Minutes", "27px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 157;
	this.text.setTransform(-1.9,-15.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.4,-15.4,161.1,34.2);


(lib.wheel_mc = function() {
	this.initialize();

	// Wheel Spokes
	this.instance = new lib.spoke_mc();
	this.instance.setTransform(0,0,0.999,0.999,-22.4);
	this.instance.alpha = 0.949;

	this.instance_1 = new lib.spoke_mc();
	this.instance_1.setTransform(0,0,0.999,0.999,157.5);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.spoke_mc();
	this.instance_2.setTransform(0,0,0.999,0.999,-112.4);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.spoke_mc();
	this.instance_3.setTransform(0,0,0.999,0.999,67.5);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.spoke_mc();
	this.instance_4.setTransform(0,0,0.999,0.999,-67.4);
	this.instance_4.alpha = 0.801;

	this.instance_5 = new lib.spoke_mc();
	this.instance_5.setTransform(0,0,0.999,0.999,-157.4);
	this.instance_5.alpha = 0.602;

	this.instance_6 = new lib.spoke_mc();
	this.instance_6.setTransform(0,0,0.999,0.999,112.5);
	this.instance_6.alpha = 0.398;

	this.instance_7 = new lib.spoke_mc();
	this.instance_7.setTransform(0,0,0.999,0.999,22.5);
	this.instance_7.alpha = 0.199;

	this.instance_8 = new lib.spoke_mc();
	this.instance_8.setTransform(0,0,1,1,-44.9);
	this.instance_8.alpha = 0.852;

	this.instance_9 = new lib.spoke_mc();
	this.instance_9.setTransform(0,0,1,1,135);
	this.instance_9.alpha = 0.449;

	this.instance_10 = new lib.spoke_mc();
	this.instance_10.setTransform(0,0,1,1,-134.9);
	this.instance_10.alpha = 0.648;

	this.instance_11 = new lib.spoke_mc();
	this.instance_11.setTransform(0,0,1,1,45);
	this.instance_11.alpha = 0.25;

	this.instance_12 = new lib.spoke_mc();
	this.instance_12.setTransform(0,0,1,1,-89.9);
	this.instance_12.alpha = 0.75;

	this.instance_13 = new lib.spoke_mc();
	this.instance_13.setTransform(0,0,1,1,180);
	this.instance_13.alpha = 0.551;

	this.instance_14 = new lib.spoke_mc();
	this.instance_14.setTransform(0,0,1,1,90);
	this.instance_14.alpha = 0.352;

	this.instance_15 = new lib.spoke_mc();

	this.addChild(this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,40,40);


(lib.taskicon = function() {
	this.initialize();

	// type
	this.text = new cjs.Text("CLINICAL ASSIGNMENT", "72px Arial", "#9432AD");
	this.text.lineHeight = 82;
	this.text.lineWidth = 982;
	this.text.setTransform(201.6,50.7);

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjfihIDeAAAjfjrIDZAAAjfDtIDeAAAjlCQIHLAAAjlBGIHLAAAjlAAIHLAAAjlhKIHLAA");
	this.shape.setTransform(79.2,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkvG8QgjABAAgjIAArIQAAgjAjAAICGAAIAAgbIBgAAIAAgFQAAgfAVgWQAWgWAeABQAfgBAVAWQAWAWAAAfIAAAFIBgAAIAAAbICHAAQAiAAAAAjIAALIQAAAjgigBgAkjj6IAAJhQAAAcAgAAIIJAAQAeAAAAgcIAAphQAAgfgeABIhcAAIAAAXIlTAAIAAgXIhaAAQgggBAAAfgAgimZQgNAPAAAUQAAATANAOQADADADABIA5AAIAEgEQAPgOAAgTQAAgUgPgPQgOgNgTAAQgTAAgPANg");
	this.shape_1.setTransform(79.8,80.6);

	// top blue bkgd
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9432AD").s().p("AsHgwIMWpAIL5IqQhFgKhIgCIpdm4QgHgFgIAAQgIAAgHAFIqVHiQgHAFgCAIQgDAHADAIICtIUQggAzgbA2gAppgKIJ4nNIIWGEQgnABgnADQifANiRAxQg4ARg1AZIgLgGIALAGQiXBQh/BiIgCgLIACALQguAmgsAsQhWBWhCBfg");
	this.shape_2.setTransform(77.7,62.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#76288A").s().p("AnoLxIkuuhIMWpAIMXJAIkuOhgAgNqKIqXHiQgHAFgCAIQgDAHADAIID9MKQACAIAHAFQAHAEAIAAIMyAAQAIAAAHgEQAGgFADgIID9sKQACgIgCgHQgDgIgGgFIqXniQgHgFgIAAQgGAAgHAFgAmGJdIjyrnIJ4nNIJ5HNIjxLng");
	this.shape_3.setTransform(79.2,75.3);

	// caution bars
	this.instance = new lib.staticCautionBars();
	this.instance.setTransform(474.7,79.3,1,1,0,0,0,415.4,59.4);
	this.instance.alpha = 0.461;

	this.addChild(this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1187.5,150.7);


(lib.suz_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// effect
	this.instance = new lib.suz_inside();
	this.instance.shadow = new cjs.Shadow("#E09926",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-18.3,30.2,36.8);


(lib.preloader_mc = function() {
	this.initialize();

	// Percent
	this.percent_txt = new cjs.Text("0", "10px Verdana", "#003399");
	this.percent_txt.textAlign = "center";
	this.percent_txt.lineHeight = 12;
	this.percent_txt.lineWidth = 26;
	this.percent_txt.setTransform(-1.9,-8.9,0.999,1);

	// Wheel
	this.wheel_mc = new lib.wheel_mc();
	this.wheel_mc.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.addChild(this.wheel_mc,this.percent_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,40,40);


(lib.ivbutton_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.IVglowPos();
	this.instance.setTransform(0.6,0.5,1,1,0,0,180,0.5,0);
	this.instance.shadow = new cjs.Shadow("rgba(224,153,38,1)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-72.6,65.6,146.4);


(lib.gomezTask = function() {
	this.initialize();

	// icon
	this.instance = new lib.taskicon();
	this.instance.setTransform(302.9,-43.4,0.287,0.287,0,0,0,1556.7,269);

	// gray line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("A82AAMA5tAAA");
	this.shape.setTransform(40.9,-66.6);

	// content
	this.text = new cjs.Text("Apply your knowledge after assessing the patient and the accompanying pharmacologic simulations.", "18px Arial", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 328;
	this.text.setTransform(-122.1,-50.6);

	// white back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9COBQiMAAgBiPIAA3iQABiQCMAAMA6FAAAQCMAAABCQIAAXiQgBCPiMAAg");
	this.shape_1.setTransform(42.8,-47.1);

	// gray outline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10.7,1,1).p("AdDuCMg6GAAAQiMAAAACQIAAXlQAACPCMAAMA6GAAAQCNAAAAiPIAA3lQAAiQiNAAg");
	this.shape_2.setTransform(42.8,-47);

	this.addChild(this.shape_2,this.shape_1,this.text,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.1,-136.9,400,179.8);


(lib.gomezHead = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_28();
	this.instance.setTransform(57.9,-0.5,1.505,1.505,0,0,0,2.3,2.3);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_29();
	this.instance_1.setTransform(28.6,27.9,1.505,1.505,0,0,0,28.8,27.4);
	this.instance_1.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ag6AoQAWgHAagNQA0gZARgiIgLAiQhFAtgiAAIgDAAg");
	this.shape.setTransform(44.6,-22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAzgSIAjg5IAKgLQgSAygsAxQgiApgTAKQgTAKg5ANQBegpA0hAg");
	this.shape_1.setTransform(20.3,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AB7C5E").s().p("AhTBAQAigUAkgbQBGg1AJgmIAIARQAIASACAHQACALghAgQgmAnguAZg");
	this.shape_2.setTransform(65.8,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AB7C5E").s().p("AhDALQgKgMAAgRIACgOQAFgLAZgMQAngRgbAPQgNAHABAaQADAZARARQAYAXBPAYQhzgHgegvg");
	this.shape_3.setTransform(0.3,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5916E").s().p("AA1BlQgRgOgpgQIhJgbQhWgnANhHQAOhMA4AOQAcAHAZAWQA8AxB6CQQgCAggbAEIgHABQgbAAgmgeg");
	this.shape_4.setTransform(4.2,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#888888").s().p("AAqGkQiYggiGiPQiWi5hKiHQhwjNCughQCtghgUhJQgUhIBLB+IAIAoQALAyAYAzQBNClCnBuICKCLQBIBEBFA3IAAAAIAJAGIAFAEIABAAICCA8Qg/A2h7AHQgaACgcAAQhrAAh8gag");
	this.shape_5.setTransform(-6.1,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AB7C5E").s().p("AgjgGQAlgdAmARIAaAWQgTgHgaAAQgygDgkAfQAMgSASgNg");
	this.shape_6.setTransform(42.1,-26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AB7C5E").s().p("AAXg0QAigIAZALIAHAeQg8gdg/AwQghAZgUAfQAthbBBgRg");
	this.shape_7.setTransform(21.1,-8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AAAAAA").s().p("AhgAmQAQgPgpAQQgnAOAQgMIBvg5QB5g3A+AQQgXADgiAKQhGAUg4AjQhBArgNAEIgBAAQgHAAAXgWg");
	this.shape_8.setTransform(-3.3,-50.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AAAAAA").s().p("AiABEQAEgYgWAHQgUAHgEgMIAAgOQAngiA+ghQB7hDB2ANQg2AKhDAbQiBA1g5BbQAGgNABgLg");
	this.shape_9.setTransform(-12.1,-49.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgzAiIgDgLQAlgqAmgRQAUgKAOABQgmAFgeAnQgQASgHASIACALQgNAAgEgMg");
	this.shape_10.setTransform(34.8,-31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhEAkQAjhaBsg8IAFAJQAFALgHAGIhMAxQhMBDgGBXQgFghARgug");
	this.shape_11.setTransform(12.7,-10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AB7C5E").s().p("Ag6AoQAWgGAZgNQAxgZAVgkIgTAoQghApg+AAIgDgBg");
	this.shape_12.setTransform(44.6,-22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AB7C5E").s().p("AgMAoQBPg+AXhEIgBAXQgEAbgNAZQgqBOh3AbQAkgSApggg");
	this.shape_13.setTransform(21.1,-2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AB7C5E").s().p("AgFAaQhNgxhRhOICGBaQCQBXAxgGIhFAhQgYgZhMg0g");
	this.shape_14.setTransform(45.6,-13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#976B4F").s().p("AgDgxQAGgIA9gZQgPA2g4A8QgeAfgaAUQAQhWAsgug");
	this.shape_15.setTransform(55.7,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AB7C5E").s().p("AguAaIA1g9IAmgfIBEgpQgwBihDAuQhFAwgpAXQAIgPA6hDg");
	this.shape_16.setTransform(60,10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#888888").s().p("ACQBSQg5gbgjgNQg+gYguAEQgdADhDgvQhCgvAIgOQAFgJAWgNIAUgMIAqAAQA1AEA5AXQC1BHAqCJQgGgJg+gbg");
	this.shape_17.setTransform(16.1,-50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C59886").s().p("AgsAHQgHgHAAgLIACgKQADgHAQgIQAbgMgTALQgIAEABASQACAQALALQAQAPA0AQQhMgFgUgfg");
	this.shape_18.setTransform(-9,46.8,1.505,1.505);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AB7C5E").s().p("AiJC/IgBAAIiahHQg1gpgzgtQEkBWDHiUQBlhKAshhQANAbgBAJIgFApQCRBoAFA5QAGBMi8AzQh/AihwAAQg6AAg3gJg");
	this.shape_19.setTransform(58.9,36.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#888888").s().p("AhwIaQgag3g9hOQhHhbheiwQheivAhhsQAhhrA6hCQA7hCBfgOQAUgTAigYQBGgwBIgZQDshQC3C0QhTAPhqAhQjUBEhxBgIgpAXQgDBdgSAlQgXAtBECCQBECIBbBVQCIB+gQACQgIAAgjgYIg2gNQgYgCgfAFQg7ALgeAjQgWAaABAaIghgBg");
	this.shape_20.setTransform(-14.6,-8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AArAIQAPgEALgOIAcAVIg2gDgAhggDQA6ABAGABQARABAaAGQg2gEg1gFg");
	this.shape_21.setTransform(10.2,57.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C5916E").s().p("AgoIgQgdgSghgHQgmgKgmgBIg/gGQgegDgdABQgfABgfAHQgRADgPAHIhuhMQg0gcAngfIBYgxQAigSBnAkQAzATAsAWQgxgag9goQh4hRg5hMQhqiMgEh3QgHjJDsjNQCKh5DWClQALAIATAAQAXgBAdAUIBuBKQA1ApAJArQADASARAHIAtARQBRAjBUB2QAlA1AvBrQAYA2AQAsQgZDdjtBQQiMAvh7gNQgogDgmANQgSAGgLAJIgDgDg");
	this.shape_22.setTransform(24,-0.4);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.1,-62.1,156.8,124.5);


(lib.RadioButton_selectedUpIcon = function() {
	this.initialize();

	// icon
	this.instance = new lib.RadioButton_selectedIcon();
	this.instance.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AdQABgWAPgPIACgDQARgRAYAAQAZAAARARIADADQAOAPAAAWg");
	this.shape.setTransform(7,4);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0.5,7,0.5,-7.5).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAUAUABAcQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpQgSARAAAYQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgYgRgRQgRgSgZAAQgYAAgRASg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedOverIcon = function() {
	this.initialize();

	// icon
	this.instance = new lib.RadioButton_selectedIcon();
	this.instance.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AdQABgWAPgPIACgDQARgRAYAAQAZAAARARIADADQAOAPAAAWg");
	this.shape.setTransform(7,4.1);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAUAUABAcQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpQgSARAAAYQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgYgRgRQgRgSgZAAQgYAAgRASg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.753)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedDownIcon = function() {
	this.initialize();

	// icon
	this.instance = new lib.RadioButton_selectedIcon();
	this.instance.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AeQABgYAPgOIACgDQARgSAYAAQAZAAARASIADADQAOAOAAAYg");
	this.shape.setTransform(7,4);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAUAUABAcQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpQgSARAAAYQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgYgRgRQgRgSgZAAQgYAAgRASg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedDisabledIcon = function() {
	this.initialize();

	// icon
	this.instance = new lib.RadioButton_selectedIcon();
	this.instance.setTransform(7,7,1,1,0,0,0,2,2);
	this.instance.alpha = 0.398;

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.302)"],[0,1],-1,3.1,-1,-2.9).s().p("Ag7AeQABgYAPgOIACgDQARgSAYAAQAZAAARASIADADQAOAOAAAYg");
	this.shape.setTransform(7,4);

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(91,93,94,0.302)","rgba(183,186,188,0.302)"],[0,1],0.5,7,0.5,-7.5).s().p("AgwAxQgVgVAAgcQAAgVAMgRIAJgKQAUgVAcAAQAcAAAVAVIAIAKQANARAAAVQgBAcgUAVQgVAUgcABQgcgBgUgUgAgpgpIgCADQgPAQgBAWQAAAZASARQARARAYAAQAZAAARgRQARgRAAgZQAAgWgOgQIgDgDQgRgSgZAAQgYAAgRASg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.302)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AgpAqQgSgRAAgZQABgWAPgQIACgDQARgSAYAAQAZAAARASIADADQAOAQAAAWQAAAZgRARQgRARgZAAQgYAAgRgRg");
	this.shape_2.setTransform(7,7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;