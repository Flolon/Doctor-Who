if (typeof(Storage) !== "undefined") {

} else {
    console.log("Sorry, your browser does not support Web Storage...");
}
function enableAutoplay() {
    localStorage.setItem("autoplay", 1);
}

function disableAutoplay() {
    localStorage.setItem("autoplay", 0);
}
