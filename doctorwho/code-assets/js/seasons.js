var seasonsGrid = document.getElementById("seasons-grid");
function loadSeasonsGrid(){
    seasonsGrid.innerHTML = "";
    for (var i = 0; i < numSeasons; i++) { 
        seasonsGrid.innerHTML += '<a href="season.html?S='+i+'" class="show-tile season" title="Season '+i+'"> <span class="show-badge">S'+i+'</span> <img src="code-assets/images/posters/S'+i+'.jpg"> </a>';
    }

}