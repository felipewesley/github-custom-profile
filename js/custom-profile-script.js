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

    const GITHUB_PROFILE = "https://github.com/felipewesley";

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

    // Redirect to profile
    let btn_see_profile = document.getElementsByName("btn-see-profile");
    btn_see_profile.forEach(e => {
        e.onclick = () => window.open(GITHUB_PROFILE, "_blank");
    });

    // Ask if really want to go to github profile
    let btn_github = document.getElementsByName("btn-to-github");
    btn_github.forEach(e => {
        e.onclick = () => {
            let msg = "Realmente deseja ir para o perfil de Felipe?"
            if (confirm(msg))
                window.open(GITHUB_PROFILE, "_blank");
        }
    })

}

console.log("Hello world");