function setRem(){
	document.documentElement.style.fontSize = innerWidth / 20 + "px";
}
setRem();
onresize = setRem;

function channel(){
	var channels = document.querySelector(".channels"),
		headerspan = document.querySelector("header span"),
		temp = 1;
	headerspan.addEventListener("touchstart",function(){
		if(temp == 1){
			channels.style.display = "block";
			temp = 0;
		}else{
			channels.style.display = "none";
			temp = 1;
		}
	},1);
}
channel();
function bannerImg(){
	var imgs = document.querySelectorAll(".banner img"),
		lis = document.querySelectorAll(".banner ul li"),
		temp = 1,
		len = lis.length;
	setInterval(function(){	
		for(var i = 0; i<len ;i++){
			lis[i].index = i;
			lis[i].style.backgroundColor = "white";
			imgs[i].style.zIndex = "1";

			lis[i].addEventListener("touchstart",function(){
				temp = this.index;
				console.log(temp);
				for(var j = 0;j<len ;j++){
					lis[j].style.backgroundColor = "white";
					imgs[j].style.zIndex = "1";
				};
				this.style.backgroundColor = "red";
				imgs[this.index].style.zIndex = "2";
			})
		};
		if(temp<(len-1))temp++;
		else temp = 0;
		lis[temp].style.backgroundColor = "red";
		imgs[temp].style.zIndex = "2";
		
	},4000);
}
bannerImg();
function mores(){
	var onmore = document.querySelector(".more"),
		onvisible = document.querySelectorAll(".visible");
	onmore.addEventListener("touchstart",function(){
		onmore.innerText = "加载中";
		var tt = setInterval(function(){
			onmore.innerText += "·";
		},900);
		setTimeout(function(){
			for(var i = 0;i<onvisible.length;i++){
				onvisible[i].style.display = "block";
				clearInterval(tt);
			}
		onmore.innerText = "点击加载更多";
		},3000);	
	},1);
}
mores();