$(document).ready(function () {

/** Right click menu JS credit to: https://stackoverflow.com/questions/4495626/making-custom-right-click-context-menus-for-my-web-app */
/** Trigger action when the contexmenu is about to be shown */
$(document).bind("contextmenu", function (event) {
    /** Initialize Materialize modal */
    $('.modal').modal();
    /** Avoid the real one */
    event.preventDefault();
    
    /** Show contextmenu */
    $(".custom-menu").finish().toggle(100).
    
    /** In the right position (the mouse) */
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


/** If the document is clicked somewhere */
$(document).bind("mousedown", function (e) {
    
    /** If the clicked element is not the menu */
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        /** Hide it */
        $(".custom-menu").hide(100);
    }
});


/** If the menu element is clicked */
$(".custom-menu li").click(function(){
    
    /** This is the triggered action name */
    switch($(this).attr("data-action")) {
        
        /** A case for each action. Your actions here */
        case "first": 
            /** Calls the addclasspopup function in generate.JS */
            $('#modal1').modal('open');   
            break;
    }
  
    /** Hide it AFTER the action was triggered */
    $(".custom-menu").hide(100);
  });
   
});