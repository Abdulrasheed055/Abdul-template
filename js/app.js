$(document).ready(function(){
    //hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false, /**remove dot */
        smartSpeed:1000,
      navText :['Prev','Next'],
        responsive:{
            0:{
                nav:false,    
               
            },
            768:{
                nav:true,
            }
        }
    })


//project
    $('#project-slider').owlCarousel({
        loop:true,
        margin:24, //space betw img
        nav:true,
        dots:false, /**remove dot */
        smartSpeed:1000,
        navText:[' PREV ','NEXT'],
        responsive:{
            0:{
               
               items:1,
               nav:false,
               margin:0,

            },
            768:{
                items:2,
            
            },
            1140:{
               items:2, 
               center:true,
               dots:true, //to remove the dot place false
            }
        }
   
     })
     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
        
    })

    });

