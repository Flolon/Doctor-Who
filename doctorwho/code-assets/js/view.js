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
    episodeVideo.poster = 'code-assets/images/thumbnails/'+S+'-'+E+'.jpg';
    
    episodeInfo = "Season "+seasonNum+" Episode "+episodeNum;
    episodeInfoEle.innerHTML = episodeInfo;
    var badge = "";
    if(episodeJson[S][E]["badge"] == "xmas"){ var badge = "🎄"; }
    episodeYearEle.innerHTML = episodeJson[S][E]["year"]+" "+badge;
}

function loadViewPageTitle(){
    document.title = "Doctor Who - "+episodeTitle+" - [S"+seasonNum+" E"+episodeNum+"]";
}

// Episode Pagination //
function loadEpisodePagination(){
    
    var back = document.getElementById("back-episode");
    var forward = document.getElementById("forward-episode");
    
    var backEpisode = parseInt(episodeNum) - 1;
    var fowardEpisode = parseInt(episodeNum) + 1;
    var fowardSeason = parseInt(seasonNum) + 1;
    if(seasonNum == 0){
        var backSeason = parseInt(seasonNum);
        var episodesInLastSeasonNum = 1;
    }else{
        var backSeason = parseInt(seasonNum) - 1;  
        var episodesInLastSeasonNum = Object.keys(episodeJson["S"+backSeason]).length;
    }
    
    var rootLink = "view.html?S="+seasonNum+"&E=";
    var endLink = "";
    
    if(backEpisode == 0){
        back.href = "view.html?S="+backSeason+"&E="+episodesInLastSeasonNum;
        forward.href = rootLink+fowardEpisode+endLink;
        
    }else if(fowardEpisode > episodesInSeasonNum){
        back.href = rootLink+backEpisode+endLink;
        forward.href = "view.html?S="+fowardSeason+"&E=1";
        
    }else{
        back.href = rootLink+backEpisode+endLink;
        forward.href = rootLink+fowardEpisode+endLink;
    }
    
}