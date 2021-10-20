document.getElementById("cog-icon").addEventListener('click', openSidepanel);

/* Show sidebar */
function openSidepanel() {
    var x = document.defaultView;
    var w = x.innerWidth;
    if (w > 600) {
        document.getElementById("sidepanel").style.width = '30vw';
    } else {
        document.getElementById("sidepanel").style.width = '100vw';
    }
    document.getElementById("cog-icon").style.display = "none";
};