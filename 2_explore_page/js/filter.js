/**
 * Created with JetBrains WebStorm.
 * User: alexneigher
 * Date: 7/1/13
 * Time: 3:50 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

    //this is the event listener to show the filterResult box
    $('.explore_projects').on("click",".filter input",function(e){
            $(this).siblings('').fadeIn("fast");
            e.stopPropagation();

    });

    //this listener will take the clicked filter result, and add it to the filter field
    $('body').on("click",".filterResult", function(e){
        var filterBy = $(e.target).closest('li').html();
        $(this).siblings().val(filterBy);

        //first remove all active classes from the li's
        $(e.target).siblings().removeClass('active');
        //now we need to make the selected thing "active"
        $(e.target).closest('li').addClass('active');

    });


    //this hides the search results container
    $('body').click(function(e){

        //avoid closing the box on click of the filter field
        if (!$(e.target).hasClass('filter')){
            $(".search input").val("");
            $(".filterResult").hide();
        }

    });

    //this opens/closes the filter options accordion
    $('body').on('click',".filterAccordionBtn",function(){
        if (this.innerHTML == "Show Filters +"){
            $('.filterAccordion').animate({
                height:220
            },500);
            this.innerHTML = "Hide Filters -";
        } else{
            $('.filterAccordion').animate({
                height:54
            },500);
            this.innerHTML = "Show Filters +";
        }
    });


    //this is the click action that adds the active class to the checkbox as needed
    $('body').on('click',".filterOptions .checkbox", function(){
        if($(this).siblings('').hasClass('clickedCheckBox')){
            $(this).siblings('').removeClass('clickedCheckBox');
        }
            $(this).toggleClass("clickedCheckBox");
    })


}); //document.ready
