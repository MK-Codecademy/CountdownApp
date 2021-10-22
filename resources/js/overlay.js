// To use overlay create a button with id="toggle-overlay" onclick="toggleOverlay()"
visible = false;

const toggleOverlay = () => {
    visible = !visible;
    visible ? document.getElementById("overlay").style.display = "block" : document.getElementById("overlay").style.display = "none"
};