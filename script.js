function toggleMenu() 
        {
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            menu.classList.toggle("open");
            icon.classList.toggle("open");
        }

        var typed=new Typed(".input",{
            strings:["Frontend Developer", "Python Developer", "Web Developer"],
            typedSpeed:70,
            backSpeed:55,
            loop:true
        })