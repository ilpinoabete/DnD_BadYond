function toggleMenubar(){
    let menu = document.getElementById("burger-menu") 
    menu.style.display = menu.style.display === "none" ? "grid" : "none";
}

function toggleDropdown(){
    let dropdown = document.getElementById("dropdown") 
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";

}

function displayClasses(classes, index){
    document.getElementById("main-title").querySelector("h1").innerHTML = classes[index].id;

    //hiding all classes
    classes.forEach((e) => {
        document.getElementById(e.id).style.display = "none";
    })

    //displaying the selected class
    document.getElementById(classes[index].id).style.display = "block";
}

const main = () => {
    //global variables
    const classes = Array.from(document.querySelectorAll(".class"));
    var index = 0;

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

    //Display buttons
    document.getElementById("button-next").addEventListener("click", () => {
        //changing index value
        index >= (classes.length - 1) ? index=0 : index++; 

        displayClasses(classes, index);
    })

    document.getElementById("button-previous").addEventListener("click", () => {
        //changing index value
        index <= 0 ? index= (classes.length - 1) : index--; 

        displayClasses(classes, index);
    })

    toggleMenubar();
    displayClasses(classes, index);
}

main()