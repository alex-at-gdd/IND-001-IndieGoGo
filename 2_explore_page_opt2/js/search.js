/**
 * Created with JetBrains WebStorm.
 * User: alexneigher
 * Date: 6/28/13
 * Time: 10:02 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){

  //this is the event listener to show the searchResult box
  $('.explore_projects').on("click",".search input",function(e){
        if ($(this).val()){
            performSearch();
        }else{
            showStandardCategories();
            $(this).siblings('').fadeIn("fast");
            e.stopPropagation();
        }
  });
    //this listener will redirect on a selected category or search criteria (and prevent the box from hiding)
    $('body').on("click",".searchResult", function(e){
        var searchQuery = $(".search input").val();

        //This is where the click action for a searched item will happen
        if ($(e.target).closest("ul").parent('div').hasClass('first')){
            var redirectSearchTo = "http://www.indiegogo.com/"+$(e.target).closest("li").children('b').text()+"/"+searchQuery;
            alert(redirectSearchTo);
            //window.open("http://clients.gooddogdesign.com/indiegogo/alex/3_category_page/",'_blank');
        }

         //this reflects a click on a category, and will redirect to that explore category page
        else if ($(e.target).closest("ul").parent('div').hasClass('left')){
                window.open("http://clients.gooddogdesign.com/indiegogo/alex/3_category_page/",'_blank');

        }
        //this reflects a click on a tag, and changes the text on the page, and shuffles the cards to reflect a "filtering by tag" action
        else{
            //This checks for a global trending tag which shuffles the cards, and updates the title line
            if ($( e.target ).parent().children().filter(':first').text() == "Trending Tags"){
                var tagTitle =$( e.target ).closest("li").text();
                $('.searchResult').hide();
                $('.categoryTitle').html(tagTitle);
                fillData(tagTitle);
                $(".explore_project_cards").isotope('shuffle');


            }
            //this checks for a categorized trending tag, then redirects to that category and trend page
            else{
                alert('this is a categorized trend');
                window.open("http://clients.gooddogdesign.com/indiegogo/alex/3_category_page/",'_blank');
            }
        }

        e.preventDefault();

    });



    //this hides the search results container
    $('body').click(function(e){

        //avoid closing the box on click of the search field
        if (!$(e.target).hasClass('search')){
            $(".search input").val("");
            $(".searchResult").hide();
        }

    });

    //this listener grabs the value of the keys in the search and performs
    //the search and replaces the text of search results cont as needed
    $('.explore_projects').on("keyup",".search input",performSearch);


    //this opens/closes the filter options accordion
    $('body').on('click',".filterAccordionBtn",function(){
        if (this.innerHTML == "Show Filters +"){
            $('.filterAccordion').animate({
                height:300
            },500);
            this.innerHTML = "Hide Filters -";
        } else{
            $('.filterAccordion').animate({
                height:54
            },500);
            this.innerHTML = "Show Filters +";
        }
    });


}); //document.ready


function performSearch(){
  var searchQuery = $(this).val();


   //theoreticaly this is where we would make the api call, and do the following with the result set

  if (!searchQuery){
      showStandardCategories();
  }else if(searchQuery.length > 10){
       showNoResults(searchQuery);
  }

  else{
      //this is where we will alter the contents of the search container depending on the search
      var searchResult= '<div class="first">'+
                            '<ul>'+
                                '<li><div>Category</div><span>'+searchQuery+'</span>&nbsp&nbspin <b>Music</b></li>'+
                                '<li><div>Category</div><span>'+searchQuery+'</span>&nbsp&nbspin <b>Food</b></li>'+
                                '<li><div>Category</div><span>'+searchQuery+'</span>&nbsp&nbspin <b>Dance</b></li>'+
                                '<li><div>Campaign</div><span><b>Send Jee to Alonzo King LINES in SF!</b></span></li>'+
                                '<li><div>Campaign</div><span><b>Salsa For the Troops</b></span></li>'+
                                '<li><div>Tag</div><span>#SalsaForLife</span></li>'+
                                '<li><div>Tag</div><span>#SalsaNYC</span></li>'+
                                '<li><div>Tag</div><span>#CallingAllSalseros</span></li>'+
                            '</ul>'+
                        '</div>';
    $(this).siblings('').html(searchResult);
  }
}


function showStandardCategories(){
    var categories= '<div class="left">'+
                        '<ul>'+
                         '<li id="0">Categories</li>'+
                         '<li id="1">Funded&nbspBy&nbspFriends</li>'+
                         '<li id="2">Causes&nbsp&&nbspCommunity</li>'+
                         '<li id="3">Design&nbsp&&nbspTechnology</li>'+
                         '<li id="4" >Film&nbsp&&nbspVideo</li>'+
                         '<li id="5">Games&nbsp&&nbspComics</li>'+
                         '<li id="6">Music</li>'+
                         '<li><a href="javascript:void(0);">More Categories...</a></li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="right">'+
                        '<ul>'+
                            '<li>Trending Tags</li>'+
                            '<li>#DevoTour2014</li>'+
                            '<li>#AmandaPalmer</li>'+
                            '<li>#BestSongWriters2013</li>'+
                            '<li>#ConnecWcutShooWng</li>'+
                            '<li>#ProtestTheHero</li>'+
                            '<li>#ShowerThePeople</li>'+
                            '<li><a href="javascript:void(0);">More Topics...</a></li>'+
                        '</ul>'+
                    '</div>';

    $(".searchResult").html(categories);
}


function showNoResults(searchQuery){

    $(".searchResult").html("Could not find: " +"\""+searchQuery+"\"");
}
