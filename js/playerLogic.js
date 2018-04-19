var loopstatus="off";
var slist;
var dir="songs/";
var ext=".m4a";
audio=new Audio();
var songlist=["Welcome To New York","Blank Space", "Style", "Out of The Woods", "All You Had To Do Was Stay", "Shake It Off", "I Wish You Would"];
mylist=document.getElementById("list");
mylist.addEventListener("click", changesong);
document.getElementById("myProgress").addEventListener("click",barclick);
var z=false;
var playindex=0;
audio.src=dir+songlist[playindex]+ext;
audio.play();
document.getElementById("info").innerHTML=songlist[playindex];
audio.onended=function(){
	if(playindex==songlist.length-1 &&loopstatus=="off")
	{
		playindex=0;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}

	else if(playindex!=songlist.length-1 &&loopstatus=="off")
	{
		playindex++;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}

	else if(playindex!=songlist.length-1 &&loopstatus=="on")
	{
				audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}

	else if(playindex==songlist.length-1 &&loopstatus=="on")
	{
		
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}


}



function changeloopstatus()
{
	if(loopstatus=="on")
	{
	loopstatus="off";
	alert("loop off!")
	}
	else if(loopstatus=="off")
	{
		loopstatus="on";
		alert("loop on!")
	}
	
}



function addandplay(e){
var status='nexist';

for(var i=0; i<songlist.length;i++)
{
	if(e.parentNode.className==songlist[i])
	{
		status='exist';
		break;
	}

}

if(status=='exist'){
	alert("This song is already in the playlist!")
}
else{
	
	songlist.push(e.parentNode.className);
	document.getElementById("foo").innerHTML="";
	playindex=songlist.length-1;
	audio.src=dir+songlist[playindex]+ext;
	document.getElementById("info").innerHTML=songlist[playindex];
	audio.play();
	pushsongs();
}
}




function add(e){
var status='nexist';

for(var i=0; i<songlist.length;i++)
{
	if(e.parentNode.className==songlist[i])
	{
		status='exist';
		break;
	}

}

if(status=='exist'){
	alert("This song is already in the playlist!")
}
else{
	
	songlist.push(e.parentNode.className);
	document.getElementById("foo").innerHTML="";
	pushsongs();
}
}
function previous(){
	if(playindex==0)
	{
		playindex=songlist.length-1;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
			
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("action").src="pause.png";
		document.getElementById("foo").innerHTML="";
	pushsongs();
	}
	else
	{
		playindex--;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("action").src="pause.png";
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}
}

function next(){
	if(playindex==songlist.length-1)
	{
		playindex=0;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("action").src="pause.png";
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}
	else
	{
		playindex++;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("action").src="pause.png";
		document.getElementById("foo").innerHTML="";
		pushsongs();
	
	}
}

function pushsongs(){
	
	for(i=0; i<songlist.length; i++)
	{
		if(i!==playindex)
		{
			slist=document.getElementById("foo").innerHTML;
			var name=songlist[i];
			document.getElementById("foo").innerHTML=slist + '<li id="'+ name +'">' + name + '<button onclick="removeli(this)">delete</button></li>';
			document.getElementById(name).style.background="white";
		
		}
		else if(i==playindex)
		{
			slist=document.getElementById("foo").innerHTML;
			var name=songlist[i];
			document.getElementById("foo").innerHTML=slist + '<li id="'+ name +'">' + name + '<button onclick="removeli(this)">delete</button></li>';
			document.getElementById(name).style.background="blue";
	
		}
	}
}

function barclick(e){
	var barlength=document.getElementById("myProgress").offsetWidth
	var x=e.pageX-this.offsetLeft;
	var time=x/barlength*audio.duration;
		
	audio.currentTime=time;	
}

function removeli(e){
	var index = songlist.indexOf(e.parentNode.id);
if (index<playindex)
{
	e.parentNode.remove();
	event.stopPropagation();
	var index = songlist.indexOf(e.parentNode.id);
	songlist.splice(index,1);
	document.getElementById("foo").innerHTML="";
	
	playindex=playindex-1;
	pushsongs();


	
}
else if(index==playindex && index!=songlist.length-1){
	e.parentNode.remove();
	event.stopPropagation();
	var index = songlist.indexOf(e.parentNode.id);
	songlist.splice(index,1);
	document.getElementById("foo").innerHTML="";
	audio.src=dir+songlist[playindex]+ext;
	document.getElementById("info").innerHTML=songlist[playindex];
		audio.play();
	pushsongs();

}
else if(index==playindex && index==songlist.length-1){
	e.parentNode.remove();
	event.stopPropagation();
	var index = songlist.indexOf(e.parentNode.id);
	songlist.splice(index,1);
	document.getElementById("foo").innerHTML="";
	playindex=0;
	document.getElementById("info").innerHTML=songlist[playindex];
	audio.src=dir+songlist[playindex]+ext;
		audio.play();
	pushsongs();

}


else if(index>playindex){
	e.parentNode.remove();
	event.stopPropagation();
	var index = songlist.indexOf(e.parentNode.id);
	songlist.splice(index,1);
	document.getElementById("foo").innerHTML="";
	pushsongs();

	
}
}

function changesong(event){
	var name=event.target.id;
	
	var index = songlist.indexOf(name);
	playindex=index;
	audio.src=dir+event.target.id+ext;
	document.getElementById("info").innerHTML=event.target.id;
	
	audio.play();
	
	document.getElementById("action").src="pause.png";
	document.getElementById("foo").innerHTML="";
	pushsongs();
}

function play() {			
	if(audio.paused)
	{	
		audio.play();
		document.getElementById("action").src="pause.png";	
	}
	else
	{
		audio.pause();
		document.getElementById("action").src="play.png";
	}
}

function barplay()
{
	var cur=audio.currentTime;
	var dur=audio.duration;
	var z=cur/dur*100;
	var b=z+'%';
	document.getElementById('myBar').style.width=b;
	setTimeout(barplay,100);
}

function extract(){
	
	if(z==false)
	{
		document.getElementById("list").style.display="block";
		z=true;
	}
	else
	{
		document.getElementById("list").style.display="none";
		z=false;
	}
}

pushsongs();
barplay();