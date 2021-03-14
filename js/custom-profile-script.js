let toggleTheme = () => {
    let current = document.body.getAttribute("data-toggle");
    let new_theme = (current == "light") ? "dark" : "light";

    document.body.className = new_theme + "-theme";
    document.body.setAttribute("data-toggle", new_theme);

    return new_theme
}

window.onload = function() {

    this.onselectstart = () => false;
    this.onresize = (event) => console.log("Resized to ", event.target.innerWidth, "px");

    // Toggle theme buttons
    let btns_toggle_theme = document.getElementsByName("i-toggle-theme");
    btns_toggle_theme.forEach(e => {
        e.onclick = () => {
            
            let new_theme = toggleTheme();

            btns_toggle_theme.forEach(element => {
                
                element.className = "fa fa-toggle-";
                element.className += new_theme == "light" ? "off" : "on";
                element.setAttribute("aria-details", new_theme);
            })
        }
    })

}

console.log("Hello world");