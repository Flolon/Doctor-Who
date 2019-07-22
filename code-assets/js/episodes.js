var episodeGrid = document.getElementById("episode-grid");
document.getElementById("season-num").innerHTML = seasonNum;
function loadEpisodeGrid(){
    episodeGrid.innerHTML = "";
    for (var i = 1; i < Object.keys(episodeJson[S]).length+1; i++) { 
        var E = "E"+i;
        //episodeGrid.innerHTML += episodeJson.S1[E];
        episodeGrid.innerHTML += '<div style="display:inline-block;" title="'+episodeJson[S][E]["title"]+'"> <a href="/doctorwho/view/?S='+seasonNum+'&E='+i+'" class="show-tile"> <span class="ep-badge">E'+i+'</span> <img src="/doctorwho/code-assets/images/thumbnails/S'+seasonNum+'-E'+i+'.jpg"> <span class="title-badge">'+episodeJson[S][E]["title"]+'</span> </a> </div>';
    }

}