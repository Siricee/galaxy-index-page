

(function() {
  var btn = document.getElementById("music_pause");
  var audio = document.createElement("AUDIO");
  audio.setAttribute("src", 'http://music.163.com/song/media/outer/url?id=406072455.mp3');
  audio.setAttribute("loop", 'true');
  // audio.setAttribute("controls", 'controls');
  audio.setAttribute("autoplay", 'true');
  audio.setAttribute("id", 'BackgroundMusic');
  audio.addEventListener('canplay', function() {
    console.log("ready to play")
  }, false);
  document.getElementById('particles-js').appendChild(audio);
  audio.play();

  btn.addEventListener('click', function() {
    audio.pause();
    fadeOut(btn,200);
  });
})();

// 原生JavaScript淡出函数
function fadeOut(el,time){
	if(el.style.opacity === ""){
		el.style.opacity = 1;
	}
	if(el.style.display === "" || el.style.display === 'none'){
		el.style.display = 'block';
	}

	var t = setInterval(function(){
		if(el.style.opacity > 0){
			el.style.opacity = parseFloat(el.style.opacity)-0.01;
		}
		else{
			clearInterval(t);
			el.style.display = 'none'
		}
	},time/100);
}
