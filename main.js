function toggleMenubar(){
    let menu = document.getElementById("burger-menu") 
    menu.style.display = menu.style.display === "none" ? "grid" : "none";
}

const main = () => {
    //menu toggle
    Array.from(document.getElementsByClassName("menu-toggle")).forEach((e) => {
        e.addEventListener("click", () => {
            toggleMenubar();
        })
    });

    //Login and Signup button for menu and header
    document.querySelectorAll(".menu-button button").forEach((e)=> {
        e.addEventListener("click", () => {
            e.innerHTML === "Login" ? document.getElementById("login-form").style.display = "block" : document.getElementById("signup-form").style.display = "block";
        })
    })

    document.querySelectorAll(".header-login button").forEach((e)=> {
        e.addEventListener("click", () => {
            e.innerHTML === "Login" ? document.getElementById("login-form").style.display = "block" : document.getElementById("signup-form").style.display = "block";
        })
    })

    //Exit button
    document.querySelectorAll(".container-overlay-title button").forEach((e)=> {
        e.addEventListener("click", () => {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("signup-form").style.display = "none";
        })
    })

    toggleMenubar();
}

main()