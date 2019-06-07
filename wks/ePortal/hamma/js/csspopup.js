function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	//var blanket = document.getElementById('blanket');
	//blanket.style.height = blanket_height + 'px';
	//var popUpDiv = document.getElementById(popUpDivVar);
	//popUpDiv_height=blanket_height; ///2-150;//150 is half popup's height
	//popUpDiv.style.top = 3+ 'px'; //popUpDiv_height + 'px';
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerHeight;
	} else {
		viewportwidth = document.documentElement.clientHeight;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}

}
function popup(windowname) {
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}

function closePopUp(){
	toggle('blanket');
	toggle('popUpDiv');		
}

function popInDiv(swfName, w, h){
	popup('popUpDiv', w, h);
	
	var so = new SWFObject(swfName, "swfplayer", w, h, "9", "#999999"); // Player loading
	so.addVariable("flv", swfName); // File Name
	so.addVariable("jpg","trusted.jpg"); // Preview photo
	so.addVariable("autoplay","true"); // Autoplay, make true to autoplay
	so.addParam("allowFullScreen","false"); // Allow fullscreen, disable with false
	so.addParam("wmode", "opaque");
	
	so.write("flvplayer"); // This needs to be the name of the div id
			
}

function testCall(msg){
	alert(msg);
	
}


function showGlossary(){
//	alert("showGlossary");
	popInDiv("comp/glossary.swf", 993, 570);
	var c = document.getElementById("popUpDiv");
	c.style.left = '0px'
	var d = document.getElementById("close");
	d.style.left = '960px'
}

function showHelp(){
//	alert("showHelp");
	popInDiv("comp/help.swf", 993, 570);
	var c = document.getElementById("popUpDiv");
	c.style.left = '0px'
	var d = document.getElementById("close");
	d.style.left = '960px'
}

function showResources(){
//	alert("showResources");
	popInDiv("comp/resources.swf", 993, 570)
	var c = document.getElementById("popUpDiv");
	c.style.left = '0px'
	var d = document.getElementById("close");
	d.style.left = '960px'
}

function exit(){
	this.window.close();
}

