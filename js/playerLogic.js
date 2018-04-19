var slist;
var dir="songs/";
var ext=".m4a";
audio=new Audio();
var songlist=["01 Welcome To New York","02 Blank Space", "03 Style", "04 Out of The Woods", "05 All You Had To Do Was Stay", "06 Shake It Off","07 I Wish You Would"];
mylist=document.getElementById("list");
mylist.addEventListener("click", changesong);
document.getElementById("myProgress").addEventListener("click",barclick);
var z=false;
var playindex=0;
audio.src=dir+songlist[playindex]+ext;
audio.play();
document.getElementById("info").innerHTML=songlist[playindex];
audio.onended=function(){
	if(playindex==songlist.length-1)
	{
		playindex=0;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}
	else
	{
		playindex++;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("foo").innerHTML="";
		pushsongs();
	}
}

function add(e){
	alert(e.parentNode.class);
	songlist.push(e.parentNode.id);
	document.getElementById("foo").innerHTML="";
	pushsongs();
}

function previous(){
	if(playindex==0)
	{
		playindex=songlist.length-1;
		audio.src=dir+songlist[playindex]+ext;
		audio.play();
			
		document.getElementById("info").innerHTML=songlist[playindex];
		document.getElementById("action").src="pause.png";
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
		else
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
	e.parentNode.remove();
	event.stopPropagation();
	var index = songlist.indexOf(e.parentNode.id);
	songlist.splice(index,1);
	document.getElementById("foo").innerHTML="";
	pushsongs();
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