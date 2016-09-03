/*
function toggleDisplay(textDiv, toggleDiv) {
	
	var text = document.getElementById(textDiv);
	var item = document.getElementById(toggleDiv);
	
	alert(item.className);
	
	if(item.className=='hidden') {
    	item.className = "unhidden";
		//text.innerHTML = "<a href='javascript:toggleDisplay('"+textDiv+", '"+toggleDiv+"');'>more...</a>";
  	}
	else {
		item.className = "hidden";
		//text.innerHTML = "<a href='javascript:toggleDisplay('"+textDiv+", '"+toggleDiv+"');'>less...</a>";
	}
	
}

function toggle5(showHideDiv, switchImgTag) {
	var ele = document.getElementById(showHideDiv);
	var imageEle = document.getElementById(switchImgTag);
	if(ele.style.display == "block") {
		ele.style.display = "none";
	}
	else {
		ele.style.display = "block";
	}
}
*/

function showHideDiv(div, me){
	var text = document.getElementById(me);
	var ele = document.getElementById(div);
	if(ele.style.display == "block") {
		ele.style.display = "none";
		//text.innerHTML = "more...";
	}
	else {
		ele.style.display = "block";
		//text.innerHTML = "less...";
	}
}

function showHideDivToggle(div, me){
	var text = document.getElementById(me);
	var ele = document.getElementById(div);
	if(ele.style.display == "block") {
		ele.style.display = "none";
		text.innerHTML = "<img src='../pageAssets/images/down_arrow.png' width='15' height='14' border='0' />";
	}
	else {
		ele.style.display = "block";
		text.innerHTML = "<img src='../pageAssets/images/up_arrow.png' width='15' height='14' border='0' />";
	}
}


