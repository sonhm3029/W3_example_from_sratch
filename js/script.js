$(function(){


    /*        Function to open and close modal by the 'buy tickets' button       */

    //using Jquery
    // $(".buy-btn").click(function(){
    //     $(".modal").css("display","flex");
    // });
    // $(".close-btn").click(function(){
    //     $(".modal").css("display","none");
    // });

    // $(".modal").blur(function(){
    //     $(".modal").css("display","none");
    // })

    //not using jquery
    function openModal () {

        let list_pay_button = document.getElementsByClassName("buy-btn");

        //apply event to all "buy tickets" button
        for(index in list_pay_button){
            list_pay_button[index].onclick = function(){
                (document.querySelectorAll(".modal"))[0].style.display = "flex";
            }
        }

        // event add to close modal button
        let list_close_button = document.getElementsByClassName("close-btn");
        for(index in list_close_button){
            list_close_button[index].onclick = function(){
                (document.querySelectorAll(".modal"))[0].style.display = "none";
            }
        }

    }
    
    /*                    END OPEN MODAL FUNCTION                                      */



    /*                    FUNCTION TO AUTO SLIDE                                       */
    function autoSlide() {
        let count = 0;
        const list_slide = document.querySelectorAll(".slider");
        
        //function display slide that satisfied
        function displaySlide(slideIndex) {
            for( var i = 0; i < 3; i++) {
                if(i == slideIndex) {
                    list_slide[i].style.display = "block";
                }
                else {
                    list_slide[i].style.display = "none";
                }
            }
        }

        //function to auto change slide.
        setInterval(function(){
            count ++;
            if( count%3 == 0) {
                let slideIndex = count/3;
                displaySlide(slideIndex-1);
            }
            if(count == 9) {
                count = 0;
            }
        }, 1000);
    }

    /*                        END FUNCTION AUTO SLIDE                         */

    /*                       Create menu toggle button                        */


    function addMenuToggler() {
        let toggleSign = -1;
        //cuz we have only one type of button like that but we add a class to it
        //so we use
        let menu_toggle_btn = (document.querySelectorAll(".menu-toggle"))[0];

        //list nav button in navbar
        $("#nav>li").click(function() {
            header.style.overflow = "hidden";
            header.style.height = "46.204px";
            //toggleSign +=1;
        })



        let header = document.querySelector("#header");
        menu_toggle_btn.onclick = function() {
            toggleSign +=1;
            if( toggleSign % 2 == 0)
            {
                header.style.height = "auto";
                header.style.overflow = "initial";
            }
            else {
                header.style.overflow = "hidden";
                header.style.height = "46.204px";

            }
        }
    }

    /*           END CREATE MENU TOGGLE BUTTON                                */



    /*                                  Call function                                   */
    openModal();
    autoSlide(); 
    addMenuToggler();
})