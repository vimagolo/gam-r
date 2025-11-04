document.addEventListener("DOMContentLoaded", (event) => {
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".navbar__mobile-list");

    mobile_btn.addEventListener("click", () => {
        let menu_open = document.querySelector(".menu_open");

        if (!menu_open) {
            mobile_menu.style.display = "block";
            mobile_menu.classList.add("menu_open");
        } else {
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open");
        }
    });

    
    let submenu = (boton, submenu, classname) => {
        boton.addEventListener("click", () => {
            if (!submenu.classList.contains(classname)) {
                submenu.style.display = "block";
                submenu.classList.add(classname);
            } else {
                submenu.style.display = "none";
                submenu.classList.remove(classname);
            }
        });
    };

    let dropdown1_btn = document.querySelector("#icon1");
    let dropdown1_submenu = document.querySelector("#submenu1");

    let dropdown2_btn = document.querySelector("#icon2");
    let dropdown2_submenu = document.querySelector("#submenu2");

    submenu(dropdown1_btn, dropdown1_submenu, "drop1");
    submenu(dropdown2_btn, dropdown2_submenu, "drop2");


    window.addEventListener("resize",()=>{
        let win = parseFloat(document.body.clientWidth)

        if(win >1024){
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open");
        }
    })
});asdas