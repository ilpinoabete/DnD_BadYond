function toggleMenubar(){
    let menu = document.getElementById("burger-menu") 
    menu.style.display = menu.style.display === "none" ? "grid" : "none";
}

function toggleDropdown(){
    let dropdown = document.getElementById("dropdown")
    let arrow = document.getElementsByClassName("title")[0].querySelector("h2")

    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    arrow.innerHTML = arrow.innerHTML === "▴" ? "▾" : "▴";

}

function updateDropdown(classes, index){
    //clearing dropdown
    document.getElementById("dropdown").querySelector("div").innerHTML = "";

    //adding new elements
    var dropdownDiv = document.getElementById("dropdown").querySelector("div"); 
    classes.forEach((e) => {
        //avoiding the current class to be displayed in the dropdown
        if(e.id != classes[index].id){
            var newElem = document.createElement("h2");
            newElem.innerHTML = e.id;

            //adding the display logic
            newElem.addEventListener("click", () => {
                toggleDropdown();

                index = classes.indexOf(e);
                displayClasses(classes, index);
                updateDropdown(classes, index);
            });

            dropdownDiv.appendChild(newElem);
        }
    });
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

    //menu toggle and logic
    Array.from(document.getElementsByClassName("menu-toggle")).forEach((e) => {
        e.addEventListener("click", () => {
            toggleMenubar();
        })
    });

    resizeObv = new ResizeObserver(() => {
        if (window.innerWidth > 860){
            document.getElementById("burger-menu").style.display = "none";
        }
    });

    //dropdown menu toggle and setup
    updateDropdown(classes, index);

    document.getElementsByClassName("title")[0].querySelector("h1").addEventListener("click", () => {
        toggleDropdown();
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
        updateDropdown(classes, index);
    })

    document.getElementById("button-previous").addEventListener("click", () => {
        //changing index value
        index <= 0 ? index= (classes.length - 1) : index--; 

        displayClasses(classes, index);
        updateDropdown(classes, index);
    })

    toggleMenubar();
    toggleDropdown();
    displayClasses(classes, index);
    resizeObv.observe(document.body);
}

main()