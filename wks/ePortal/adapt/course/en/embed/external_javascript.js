// checkbox click and tracked completed in SCORM through iframe

function myfunction(){
    var c = document.getElementsByName("check");
    var d = document.getElementById("reavel");
    for(var i=0;i<c.length;i++){
    if(c[i].checked==true){
       // alert("Entered");
       d.style.display="block";
       for(var j=0;j<c.length;j++){
       c[j].setAttribute("disabled", true);
        }
       d.style.height = "450px";
    //  LMSInitialize( );
        parent.parent.API.LMSSetValue("cmi.core.lesson_status","completed"); 
        getval=parent.parent.API.LMSGetValue("cmi.core.lesson_status"); 
        parent.parent.API.LMSCommit();
        break; 
     }else {
             d.style.display = "block";
             d.style.height = "0px";            
           }                
    }
}
    