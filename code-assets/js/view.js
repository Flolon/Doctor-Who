var episodeTitleEle = document.getElementById("episode-title");
var episodeVideo = document.getElementById("episode-video");
var episodeInfoEle = document.getElementById("episode-info");
var episodeYearEle = document.getElementById("episode-year");

var episodeNum = getAllUrlParams().E;

episodeTitleEle.innerHTML = "Loading Title...";

episodeVideo.src = "#";
var episodeTitle = null;

function loadEpisode(){
    var E = "E"+episodeNum;
    
    episodeTitle = episodeJson[S][E]["title"];
    
    episodeTitleEle.innerHTML = episodeTitle;
    episodeVideo.src = episodeJson[S][E]["src"];
    
    episodeInfo = "Season "+seasonNum+" Episode "+episodeNum;
    episodeInfoEle.innerHTML = episodeInfo;
    episodeYearEle.innerHTML = episodeJson[S][E]["year"];
}

function loadViewPageTitle(){
    document.title = "Doctor Who - "+episodeTitle+" - [S"+seasonNum+" E"+episodeNum+"]";
}
// Autoplay //
function enableAutoplay() {
    localStorage.setItem("autoplay", 1);
    episodeVideo.autoplay = true;
    episodeVideo.load();
    document.getElementById("autoplay-btn-enable").style.display = "none";
    document.getElementById("autoplay-btn-disable").style.display = "";
}

function disableAutoplay() {
    localStorage.setItem("autoplay", 0);
    episodeVideo.autoplay = false;
    episodeVideo.load();
    document.getElementById("autoplay-btn-enable").style.display = "";
    document.getElementById("autoplay-btn-disable").style.display = "none";
}
function getSettingAutoplay(){
    var autoplay = localStorage.getItem("autoplay");
    if(autoplay == 0){
        disableAutoplay();
    }else if(autoplay == 1){
        enableAutoplay();
    }else{
        console.log("SETTINGS: Autoplay is not set");
        enableAutoplay();
    }
}
function toggleSettingsMenu(){
      var x = document.getElementById("settings-menu");
      if (x.style.display === "none") {
        x.style.display = "";
      } else {
        x.style.display = "none";
      }
}