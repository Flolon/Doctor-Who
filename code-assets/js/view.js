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