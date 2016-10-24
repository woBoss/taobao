function setRem(){
	document.documentElement.style.fontSize = innerWidth / 20 + "px";
}
setRem();
onresize = setRem;

var viewText = document.querySelector(".view .text");
setInterval(function(){
	viewText.innerText = "谢萌萌"+Math.random()*14 +"白痴";
},1000)

setInterval(function clock(){
    var date=new Date;
    var clock=document.getElementById('clock');
    var img1=clock.getElementsByTagName('img');
    var imgs= ['./img/0.JPG','./img/1.JPG','./img/2.JPG','./img/3.JPG',
        './img/4.JPG','./img/5.JPG','./img/6.JPG','./img/7.JPG','./img/8.JPG',
        './img/9.JPG','./img/10.JPG'];
    var t_hour=parseInt(date.getHours()/10);
    var s_hour=parseInt(date.getHours()%10);
    var t_min=parseInt(date.getMinutes()/10);
    var s_min=parseInt(date.getMinutes()%10);
    var t_sec=parseInt(date.getSeconds()/10);
    var s_sec=parseInt(date.getSeconds()%10);
    img1[0].src=imgs[t_hour];
    img1[1].src=imgs[s_hour];
    img1[2].src=imgs[10];
    img1[3].src=imgs[t_min];
    img1[4].src=imgs[s_min];
    img1[5].src=imgs[10];
    img1[6].src=imgs[t_sec];
    img1[7].src=imgs[s_sec];
},1000);

function bannerImg(){
	var imgs = document.querySelectorAll(".banner img"),
		lis = document.querySelectorAll(".banner ul li"),
		temp = 0,
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
				this.style.backgroundColor = "orange";
				imgs[this.index].style.zIndex = "2";
			})
		};
		if(temp<(len-1))temp++;
		else temp = 0;
		lis[temp].style.backgroundColor = "orange";
		imgs[temp].style.zIndex = "2";
	},2000);
}
bannerImg();