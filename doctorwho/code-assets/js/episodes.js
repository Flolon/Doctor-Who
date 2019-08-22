var episodeGrid = document.getElementById("episode-grid");

var episodesInSeasonNum = Object.keys(episodeJson[S]).length;

function loadEpisodeGrid(type){
    episodeGrid.innerHTML = "";
    for (var i = 1; i < episodesInSeasonNum+1; i++) { 
        var E = "E"+i;
        //episodeGrid.innerHTML += episodeJson.S1[E];
        var xmas = "";
        if(episodeJson[S][E]["xmas"] == true){ var xmas = "🎄"; }
        if(type == "wide"){
            episodeGrid.innerHTML += '<div title="'+episodeJson[S][E]["title"]+'\nYear: '+episodeJson[S][E]["year"]+' '+xmas+'"> <a href="view.html?S='+seasonNum+'&E='+i+'" class="show-wide"> <span class="wide-ep-badge">E'+i+'</span> <img src="code-assets/images/thumbnails/S'+seasonNum+'-E'+i+'.jpg"> <span class="wide-ep-title">'+xmas+''+episodeJson[S][E]["title"]+'</span> </a> </div>';
        }else{
            episodeGrid.innerHTML += '<div style="display:inline-block;" title="'+episodeJson[S][E]["title"]+'\nYear: '+episodeJson[S][E]["year"]+' '+xmas+'"> <a href="view.html?S='+seasonNum+'&E='+i+'" class="show-tile"> <span class="ep-badge">E'+i+' '+xmas+'</span> <img src="code-assets/images/thumbnails/S'+seasonNum+'-E'+i+'.jpg"> <span class="title-badge">'+episodeJson[S][E]["title"]+'</span> </a> </div>';
        }
    }

}
// Episode grid type //
function getSettingEpisodeGrid(){
    var gridType = localStorage.getItem("episodeGridType");
    if(gridType == "wide"){
        toggleEpisodeGridType("wide");
    }else if(gridType == "normal"){
        toggleEpisodeGridType("normal");
    }else{
        console.log("SETTINGS: Episode grid type is not set");
        toggleEpisodeGridType("normal");
    }
}
function toggleEpisodeGridType(type){
    if(type == "normal"){
        setEpisodeGridType("normal");
        document.getElementById("episode-grid-type-normal").style.display = "none";
        document.getElementById("episode-grid-type-wide").style.display = "";
    }else{
        setEpisodeGridType("wide");
        document.getElementById("episode-grid-type-wide").style.display = "none";
        document.getElementById("episode-grid-type-normal").style.display = "";  
    }
}
// set grid type w/ local storage //
function setEpisodeGridType(type){
    if(type == "wide"){
        localStorage.setItem("episodeGridType", "wide");
        loadEpisodeGrid("wide");
    }else{
        localStorage.setItem("episodeGridType", "normal");
        loadEpisodeGrid("normal");
    }
}
// Autoplay //
function enableAutoplay(type) {
    localStorage.setItem("autoplay", 1);
    if(type == "view"){
        episodeVideo.autoplay = true;
        episodeVideo.load(); 
    }
    document.getElementById("autoplay-btn-enable").style.display = "none";
    document.getElementById("autoplay-btn-disable").style.display = "";
}

function disableAutoplay(type) {
    localStorage.setItem("autoplay", 0);
    if(type == "view"){
        episodeVideo.autoplay = false;
        episodeVideo.load(); 
    }
    document.getElementById("autoplay-btn-enable").style.display = "";
    document.getElementById("autoplay-btn-disable").style.display = "none";
}
function getSettingAutoplay(type){
    var autoplay = localStorage.getItem("autoplay");
    if(autoplay == 0){
        disableAutoplay(type);
    }else if(autoplay == 1){
        enableAutoplay(type);
    }else{
        console.log("SETTINGS: Autoplay is not set");
        enableAutoplay(type);
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