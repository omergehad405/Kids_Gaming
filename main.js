// start navbar collapse
let toggler  = document.querySelector(".navToggler")
let navbar = document.querySelector("ul")

toggler.addEventListener("click" , () =>{
    toggler.classList.toggle("active");

    if(toggler.classList.contains("active")){
        navbar.style.display = "block";
        navbar.style.height = "fit-content";
    }else{
        navbar.style.display = "none";
        navbar.style.height = "0";
    }
})

// start dialogs 
let dialogs= document.querySelector(".dialogs");
let dialogImg = Array.from(document.querySelectorAll(".dialogImg"));
let closeBtn = document.querySelector(".close");
let overlay = document.querySelector(".overlay")

dialogImg.forEach((img) =>{
    img.addEventListener("click" , () =>{
        overlay.style.width = "100%";
        overlay.style.height = "190%";

        let dialog =  document.createElement("div");
        dialog.classList.add("dialog")
        dialog.style.display = 'flex';
        dialogs.appendChild(dialog);

        let close = document.createElement("span");
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        close.classList.add("close");
        dialog.appendChild(close);

        let imageContainer = document.createElement("div")
        imageContainer.classList.add("image");
        let image = document.createElement("img");
        image.src = img.getElementsByClassName("img")[0].src;
        imageContainer.appendChild(image);
        dialog.appendChild(imageContainer);

        let details = document.createElement("div");
        details.classList.add("details");
        let title = document.createElement("h3");
        let firstP = document.createElement("p");
        let secondP = document.createElement("p");
        details.appendChild(title);
        details.appendChild(firstP);
        details.appendChild(secondP);
        dialog.appendChild(details);

        let info1 = document.createElement("div");
        info1.classList.add("info");
        let info2 = document.createElement("div");
        info2.classList.add("info");
        let info3 = document.createElement("div");
        info3.classList.add("info");

        let name = document.createElement("h6");
        name.innerHTML = 'name :';
        let gameName = document.createElement("span");
        info1.appendChild(name);
        info1.appendChild(gameName);

        let developer = document.createElement("h6");
        developer.innerHTML = 'developer :';
        let developerName = document.createElement("span");
        info2.appendChild(developer);
        info2.appendChild(developerName);
        
        let reqire = document.createElement("h6");
        reqire.innerHTML = 'requires :';
        let reqirements = document.createElement("span");
        info3.appendChild(reqire);
        info3.appendChild(reqirements);

        details.appendChild(info1);
        details.appendChild(info2);
        details.appendChild(info3);


        if(img.classList.contains("dialog1")){
            console.log("yes")
            title.innerHTML = "Game-1" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Sed Perst';
            developerName.innerHTML='Martina';
            reqirements.innerHTML='2GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog2")){
            title.innerHTML = "Game-2" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Vivamus';
            developerName.innerHTML= 'Quentin';
            reqirements.innerHTML= ': 3GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog3")){
            title.innerHTML = "Game-3" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Venenatis';
            developerName.innerHTML= 'Stanley';
            reqirements.innerHTML= ': 1GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog4")){
            title.innerHTML = "Game-4" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Interdum';
            developerName.innerHTML= 'Spielberg';
            reqirements.innerHTML= ': 3GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog5")){
            title.innerHTML = "Game-5" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Faucibus';
            developerName.innerHTML= 'Cameron';
            reqirements.innerHTML= ': 2GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog6")){
            title.innerHTML = "Game-6" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Tincidunt';
            developerName.innerHTML= 'Jackson';
            reqirements.innerHTML= '4GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog7")){
            title.innerHTML = "Game-7" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Vestibulum';
            developerName.innerHTML= 'Daniel';
            reqirements.innerHTML= '2GB Hard Disk Space';
        }
        else if(img.classList.contains("dialog8")){
            title.innerHTML = "Game-8" ;
            firstP.innerHTML = "sodales nibh vitae augue feugiat <br> efficitur. Sed vel urna sollicitudin, interdum <br> massa nec, sagittis massa.";
            secondP.innerHTML = "Etiam porttitor neque enim, sit amet mollis est <br> sollicitudin sed.";
            gameName.innerHTML= 'Vehicula ligula';
            developerName.innerHTML= 'Cyrill';
            reqirements.innerHTML= '3GB Hard Disk Space';
        }

        close.onclick= ()=>{
            dialog.style.display = "none";
            overlay.style.width = "0";
            overlay.style.height = "0";
        }
    });
});

// start swiper 
var swiper = new Swiper(".card_slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
