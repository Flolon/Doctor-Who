var seasonsGrid = document.getElementById("seasons-grid");
function loadSeasonsGrid(){
    seasonsGrid.innerHTML = "";
    for (var i = 0; i < numSeasons; i++) {
        if(i == 0){
            seasonsGrid.innerHTML += '<a href="season.html?S='+i+'" class="show-tile season" title="Specials (Season '+i+')\nYear: '+episodeJson["S"+i]["E1"]["year"]+'+"> <span class="show-badge">S'+i+'</span> <img src="code-assets/images/posters/S'+i+'.jpg"> </a>';
        }else{
            seasonsGrid.innerHTML += '<a href="season.html?S='+i+'" class="show-tile season" title="Season '+i+'\nYear: '+episodeJson["S"+i]["E1"]["year"]+'"> <span class="show-badge">S'+i+'</span> <img src="code-assets/images/posters/S'+i+'.jpg"> </a>';
        }
    }

}