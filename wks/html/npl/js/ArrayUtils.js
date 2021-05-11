function ArrayUtils(){}

//Array.prototype = ArrayUtils.prototype;

Array.prototype.shuffleArray = function (){
	var a = this.copyArray();
    var l=a.length;
    var i=0;
    for(i;i<l;i++){
        var tmp =a[i];
        var rand=Math.floor(Number(Math.random()*l));
        //alert(rand)
        a[i]=a[rand];
        a[rand]=tmp;
    }
    return a
}

Array.prototype.copyArray = function (){
    return this.slice()
}

Array.prototype.contains = function(item){
    var ar = this;
    if(getItemIndex(ar, item) != -1) 
        return true;
    return false;
}

Array.prototype.getItemIndex = function (item){
    var ar = this;
    var i = ar.length;
//  while(--i >= -1) TODO monitor whether this bugfix interferes with any production code
    while(--i > -1)
    {
        if(ar[i] == item)
        {
            return i;
            break;
        }
    }
    return -1;
}

Array.prototype.remove = function(item){
    var ar = this;
    var index = getItemIndex(ar, item);
    if(index != -1) ar.splice(index, 1);
    return ar
}

Array.prototype.locatePropValIndex = function(prop, val, caseInsensitive) {
    var a=this;
    var l=a.length;
    var i=0;
    for(i;i<l;i++)
    {
        if(!caseInsensitive)if(a[i][prop]==val)return i;
        else if(a[i][prop].toUpperCase()==String(val).toUpperCase())return i;
    }
    return -1;
}

Array.prototype.search = function(element){
    var a=this;
    for (var i = 0; i < a.length ; i++) {
        if (a[i] === element) {
            return i;
        }
    }
    return -1;
}
