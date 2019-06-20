function loadSeasonPagination(type = "season"){
    
    var back = document.getElementById("back-season");
    var forward = document.getElementById("forward-season");
    
    var backSeason = parseInt(seasonNum) - 1;
    var fowardSeason = parseInt(seasonNum) + 1;
    
    var rootLink = "/season/?S=";
    var endLink = "";
    
    if(type == "view"){
        rootLink = "/view/?S=";
        endLink = "&E=1";
    }
    
    if(backSeason == 0){
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

document.getElementById("season-year").innerHTML = episodeJson[S]["E1"]["year"];

function loadSeasonPageTitle(){
    document.title = "Doctor Who - Season "+seasonNum;
}