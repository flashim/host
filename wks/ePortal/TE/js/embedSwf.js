/*Update on 14 June 8:00pm */

function fnWriteSWF ()
{
	initSco();

document.write("<HTML><HEAD><meta http-equiv=Content-Type content=text/html;  charset=ISO-8859-1\"><TITLE>AMPSEAL Connector System</TITLE>");

document.write("</HEAD><BODY leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\"><table height=\"100%\" width=\"100%\"><tr><td align=\"left\" valign=\"top\"><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"codebase=\"https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" WIDTH=\"1010\" HEIGHT=\"675\" id=\"SCORMProto\" ALIGN=\"\"> <PARAM NAME=movie VALUE=\"Shell.swf?BookMark_data="+fnReadBookmark()+"\"> <PARAM NAME=quality VALUE=high> <PARAM NAME=menu VALUE=false> <PARAM NAME=loop VALUE=false><PARAM NAME=bgcolor VALUE=#FFFFFF> <EMBED src=\"Shell.swf?BookMark_data="+fnReadBookmark()+"\" quality=high bgcolor=#FFFFFF  WIDTH=\"1010\" HEIGHT=\"675\" NAME=\"SCORMProto\" ALIGN=\"\" TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"https://www.macromedia.com/go/getflashplayer\"></EMBED></OBJECT></td></tr></BODY></HTML>");

}



var isInternetExplorer = navigator.appName.indexOf("Microsoft") != -1;

function SCORMProto_DoFSCommand(command, args) {
	var SCORMProtoObj = isInternetExplorer ? document.all.SCORMProto: document.SCORMProto;
	
	switch (command)
	{		
		case "UpdateBookmarkData":
			fnSaveBookmark(args);
			break;	
		case "score":
			fnSetFinalScore(args);
			break;
		case "closewindow": 			
			fnCourseClose ();
			break;	
		case "OpenWebLinks":				
			OpenWebLink (args);
			break;
	}	
}


function OpenWebLink(param)
{ 	   
    var openWebWin=window.open(param,"_blank");
	openWebWin.focus();
}

function fnCourseClose()
{
	var confirm;	
	//confirm=window.confirm('This will close the E-learning module. Do you want to exit the Course?');	
	if(true)
	{		
		fnCourseFinish();	/*CCI: Added this function call instead as it is the call the finalizes the API and all SCORM calls.*/
		//window.top.close();	/*CCI: Removed this code as it was closing the Course window prior to completing all SCORM calls.*/
		
		
		//added by Aptara(Jaleel) on 14 June. 
		var API = GetAPI();		
		if( API == null )
		{
			window.top.close();
		}
		//////
	}
}



if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
	document.write('<script language=\"VBScript\"\>\n');
	document.write('On Error Resume Next\n');
	document.write('Sub SCORMProto_FSCommand(ByVal command, ByVal args)\n');
	document.write('	Call SCORMProto_DoFSCommand(command, args)\n');
	document.write('End Sub\n');
	document.write('</script\>\n');
}