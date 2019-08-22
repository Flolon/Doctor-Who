if(seasonNum == 0){
    var seasonTitle = "Specials (Season "+seasonNum+")";
}else{
    var seasonTitle = "Season "+seasonNum;
}
document.getElementById("season-title").innerHTML = seasonTitle;

function loadSeasonPagination(type = "season"){
    
    var back = document.getElementById("back-season");
    var forward = document.getElementById("forward-season");
    
    var backSeason = parseInt(seasonNum) - 1;
    var fowardSeason = parseInt(seasonNum) + 1;
    
    var rootLink = "season.html?S=";
    var endLink = "";
    
    if(type == "view"){
        rootLink = "view.html?S=";
        endLink = "&E=1";
    }else if(type == "season"){
        if(S == "S0"){
            document.getElementById("season-year").innerHTML = episodeJson[S]["E1"]["year"]+"+";
        }else{
            document.getElementById("season-year").innerHTML = episodeJson[S]["E1"]["year"];
        }
    }
    
    if(backSeason == -1){
        back.href = rootLink+seasonNum+endLink;
        forward.href = rootLink+fowardSeason+endLink;
        
    }else if(fowardSeason > numSeasons){
        back.href = rootLink+backSeason+endLink;
        forward.href = rootLink+seasonNum+endLink;
        
    }else{
        back.href = rootLink+backSeason+endLink;
        forward.href = rootLink+fowardSeason+endLink;
    }
    
}

function loadSeasonPageTitle(){
    document.title = "Doctor Who - "+seasonTitle;
}