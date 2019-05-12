/*Update on 14 June 8:00pm */

var findAPITries = 1;
var API = null;
var timerID = null;
var timerRunning = false;
var timeValue;
var timecnt=0;
var ret;
var ret1;
var code;
var diag;
var CourseCompletionStatus = false;
var SetCompletioStatus = false;
//Initialy we kept the Bookmark data as empty.
var Bookmark_location="";
//Mastery score for the course.
var SetMasteryScore=80;



//---------------------------------------------------------------------------------------------------------------------------
function FindAPI(win)
{
   //API will be searched in the current window and the parent frames of this window. Maximum 7 parents will be searched. 
   while ((win.API == null) && (win.parent != null) && (win.parent != win))
   {
      findAPITries++;
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7) 
      {
         parent.status = "Error finding API -- too deeply nested.";
         return null;
      }      
      win = win.parent;
   }
   return win.API;
}
//----------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------------
function GetAPI()
{
   
   //API will be searched in the current window.
   var API = FindAPI(window);

   //If the API is not found in current indow, then we check for the opener of the current window.
   if ((API == null) && (window.opener != null) && (typeof(window.opener) != "undefined"))
   {
      API = FindAPI(window.opener);	 
   }


   //If the API is not found, this message will be displayed at the status bar of the browser. 
   //Typically you will observe this message on the status bar, if the course is launched from the local system.     
   if (API == null)
   {
     parent.status = "Unable to find an API adapter";
   }

   return API
}
//------------------------------------------------------------------------------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------
//This is the first function called on the OnLoad event of the course launching page.
function initSco()
{
	    //Search for the API.
		API = GetAPI();
		if( API != null )
		{
			//API is found - This is the first call to the LMS. The course can start communication with the LMS after this call.
			API.LMSInitialize("");

			//Start the Timer to measure the current session time.
			startclock();
			
			//Set the Maximum and minimum score for the SCO.
			set_val("cmi.core.score.max",100);
			set_val("cmi.core.score.min",0);
            //Retrieve the Lesson Status from the LMS.
			var status = get_val("cmi.core.lesson_status")

            //If the lesson status found to be "Not Attempted" then this is user's first attempt. Set the status to 'inclomplete'.
			if (status == "not attempted")
			{
			  //the student is now attempting the lesson
			  //This is students first attempt.
			  set_val("cmi.core.lesson_status","incomplete");
			}			
			
			//Retrieve the Bookmark data from the LMS.	
			Bookmark_location = get_val("cmi.suspend_data");	
			

			//Check for LMS communication Errors.
			fnCheckErrors();	
		}	
}
//-------------------------------------------------------------------------------------------------------------------------------------





//-------------------------------------------------------------------------------------------------------------------------------------
//This function will be responsible for sending data to the LMS.
function set_val( gname,gvalue )
{
	//Before calling any LMS function, we will always check for the API.
	API = GetAPI();
	if( API != null )
	{
		//LMSSetValue function is called to update data to the LMS.
		//"gname" is LMS variable name, in which we are updating the data, and "gvalue" is the actual value which we are storing in it.
		API.LMSSetValue(gname, gvalue);		

		//Check for LMS communication Errors.
		fnCheckErrors();	
		
		//"commit" function will be called to forcefully update the data to the LMS.
		commit();		
	}	
};
//-------------------------------------------------------------------------------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------
//This function will be responsible for retrieving the data from the LMS.
function get_val( gname )
{
	//Before calling any LMS function, we will always check for the API.
	API = GetAPI();
	if( API != null )
	{
		//"LMSGetValue" function will retrive the data from the LMS, for the specified variable. 
		ret1 = API.LMSGetValue(gname);	
		
		//Check for LMS communication Errors.
		fnCheckErrors();
		
		return ret1;				
	}	
};
//-------------------------------------------------------------------------------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------
//"commit" function will be called to forcefully update the data to the LMS. 
function commit()
{
	//Before calling any LMS function, we will always check for the API.
	API = GetAPI();
	if( API != null )
	{
		//LMS commit function is called.
		API.LMSCommit("");
				
	}	
};
//-------------------------------------------------------------------------------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------
//This is the last function called on the OnUnload/OnBeforeUnload event of the course launching page. After this call we can not execute any other call except the error handling functions.
//After this call communication with the LMS will be terminated.
function finish()
{
		//Before calling any LMS function, we will always check for the API.
		API = GetAPI();		
		if( API != null )
		{
			//Submit Data to the LMS
			set_val("cmi.suspend_data",Bookmark_location);			
			sTime=stopclock();
			sTime=String(sTime);
			//Submit Tile value to the LMS.
			set_val("cmi.core.session_time",sTime);		
			//call LMS Finish
			ret1 = API.LMSFinish("");
			fnCheckErrors();	
		}
		
};

//-------------------------------------------------------------------------------------------------------------------------------------





function fnCheckErrors()
{
	if(API != null)
	{
		//LMSGetLastError will display a error code if there is any error occoured in the communication.
		code = API.LMSGetLastError();
		//LMSGetErrorString will display the error description for that error code.
		ret = API.LMSGetErrorString(code);
		
		//If any Error is occoured, then alert that Error code and description. If the code is "0" then thr is no error.
		if(code != 0)
		{
			alert("ErrorCode: " + code + "    Error Description: " + ret);
		}

		//LMSGetDiagnostic will display the additional information about the error.
		diag = API.LMSGetDiagnostic("");
	}
}




//-------------------------------------------------------------------------------------------------------------------------------------
//Time calculation Functions
function stopclock()
{
	clearTimeout(timerID)
	return timeValue;
}
//-------------------------------------------------------------------------------------------------------------------------------------




//-------------------------------------------------------------------------------------------------------------------------------------
//Time calculation Functions
function startclock()
{	
	showtime();
}

//-------------------------------------------------------------------------------------------------------------------------------------




//-------------------------------------------------------------------------------------------------------------------------------------
//Time calculation Functions
function showtime()
{
	timecnt++;
	var newElapsedTime
	var hours = Math.floor( timecnt / 3600 )
	newElapsedTime = timecnt - (hours*3600)

	var minutes = 	Math.floor( newElapsedTime / 60 )
	newElapsedTime = newElapsedTime - (minutes*60)

	var seconds = newElapsedTime

	timeValue = "" + hours
	if(hours<10)
	{
		timeValue = "0" + hours
	}
	timeValue  += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue  += ((seconds < 10) ? ":0" : ":") + seconds
	// Update display
	timerID = setTimeout("showtime()",1000)
}
//-------------------------------------------------------------------------------------------------------------------------------------



//To set the course completion status
function fnSetCompletion ()
{
	if(SetCompletioStatus == false)
	{
		set_val("cmi.core.lesson_status","completed");
		SetCompletioStatus = true;				
	}
}


//-------------------------------------------------------------------------------------------------------------------------------------
//The Bookmarked data is sent to the course (Flash File) through Query String.
function fnReadBookmark()
{
	//alert("Reading Bookmark : " +  Bookmark_location);
	return Bookmark_location;
}
//-------------------------------------------------------------------------------------------------------------------------------------





//-------------------------------------------------------------------------------------------------------------------------------------
//The Bookmarked data is received from the Flash file
function fnSaveBookmark(setbookmark)
{
	//alert("Saving Bookmark : " +  setbookmark);
	Bookmark_location=setbookmark;
	//set_val('cmi.suspend_data',Bookmark_location);	
}
//-------------------------------------------------------------------------------------------------------------------------------------







//-------------------------------------------------------------------------------------------------------------------------------------
//Assessment score and the passed/failed status is updated to the LMS, depending on the course Mastery Score.
function fnSetFinalScore(score)
{	
	//alert("fnSetFinalScore : " + score);
	
	set_val("cmi.core.score.raw",score);	
	if(score>=SetMasteryScore)
	{	
		//Send the 'passed' status to the LMS
		set_val("cmi.core.lesson_status","passed");
	}
	else
	{
		//Send the 'failed' status to the LMS
		set_val("cmi.core.lesson_status","failed");	
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------


