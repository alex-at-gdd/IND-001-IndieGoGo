/**
 * Created with JetBrains WebStorm.
 * User: alexneigher
 * Date: 6/24/13
 * Time: 12:00 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

 $(".populate").click(fillData);

 $('.exploreMoreBtn').click(function(){
    $(".falseBottom").css("opacity",0);
 });
});


function fillData(category){
    //simulated API call returning a JSON object
  var card = {"result":
      [{
          "campaignId":14345,
          "category": "SPORTS",
          "near":"sanfrancisco",
          "searchTags":["anything","music", "art","sports"],
          "filter":["funded","expiring", "closed","proximity"],
          "title": "Climbing Elbrus and Ararat for Charity",
          "author": "Sofia, Bulgaria",
          "fundsRaised": "$10,906",
          "status": "CAMPAIGN CLOSED",
          "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          "percentOfGoal": 12,
          "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
          "funders":309,
          "endDate": 1373846400
      },
          {
              "campaignId":222,
              "category": "TECHNOLOGY",
              "near":"losangeles",
              "searchTags":["anything","music", "art","science"],
              "filter":["funded","expiring", "closed","proximity"],
              "title": "Portable 3d Printer",
              "author": "Neigher, Alex",
              "fundsRaised": "$300,906",
              "status": "OPEN FOR FUNDING",
              "description": "It is my true belief that 3d printing technology will pave the way for the tangible sciences! I want to put a 3d printer in every home, office, and desk in the world!",
              "percentOfGoal": 2,
              "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
              "funders":1109,
              "endDate": 1373946400
          },
          {
              "campaignId":14345,
              "category": "SPORTS",
              "near":"sanfrancisco",
              "searchTags":["anything","music", "art","sports"],
              "filter":["funded","expiring", "closed","proximity"],
              "title": "Climbing Elbrus and Ararat for Charity",
              "author": "Sofia, Bulgaria",
              "fundsRaised": "$10,906",
              "status": "CAMPAIGN CLOSED",
              "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
              "percentOfGoal": 12,
              "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
              "funders":309,
              "endDate": 1373846400
          },
          {
              "campaignId":222,
              "category": "TECHNOLOGY",
              "near":"losangeles",
              "seachTags":["anything","music", "art","science"],
              "filter":["funded","expiring", "closed","proximity"],
              "title": "Portable 3d Printer",
              "author": "Neigher, Alex",
              "fundsRaised": "$300,906",
              "status": "OPEN FOR FUNDING",
              "description": "It is my true belief that 3d printing technology will pave the way for the tangible sciences! I want to put a 3d printer in every home, office, and desk in the world!",
              "percentOfGoal": 2,
              "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
              "funders":1109,
              "endDate": 1373946400
          },
          {
              "campaignId":222,
              "category": "ART",
              "near":"chicago",
              "filter":["funded","expiring", "closed","proximity"],
              "searchTags":["anything","music", "art","science"],
              "title": "Art School",
              "author": "Neigher, Alex",
              "fundsRaised": "$30,906",
              "status": "OPEN FOR FUNDING",
              "description": "I am looking to get funding to attend nightly art school classes!",
              "percentOfGoal": 35,
              "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
              "funders":99,
              "endDate": 1376946400
          },
          {
              "campaignId":222,
              "category": "TECHNOLOGY",
              "near":"losangeles",
              "searchTags":["anything","music", "art","science"],
              "filter":["funded","expiring", "closed","proximity"],
              "title": "Portable 3d Printer",
              "author": "Neigher, Alex",
              "fundsRaised": "$300,906",
              "status": "OPEN FOR FUNDING",
              "description": "It is my true belief that 3d printing technology will pave the way for the tangible sciences! I want to put a 3d printer in every home, office, and desk in the world!",
              "percentOfGoal": 2,
              "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
              "funders":1109,
              "endDate": 1373946400
          },
          {
              "campaignId":222,
              "category": "ART",
              "near":"chicago",
              "filter":["funded","expiring", "closed","proximity"],
              "searchTags":["anything","music", "art","science"],
              "title": "Art School",
              "author": "Neigher, Alex",
              "fundsRaised": "$30,906",
              "status": "CAMPAIGN CLOSED",
              "description": "I am looking to get funding to attend nightly art school classes!",
              "percentOfGoal": 35,
              "imgUrl":"http://www.indiegogo.com/campgaign/14345.jpg",
              "funders":99,
              "endDate": 1376946400
          }]
        };

    //loop through the html template (addCard)  and add elements to the page for each result array in the JSON object
    for (var i=0; i< card.result.length; i++){
        var addCard =
            '<div class="cardHover">'+
                '<div class="category">'+
                'SPORTS - NEW STYLE'+
                '</div>'+
                '<div class="backdrop"></div>'+
                '<img src="../cards/r1/images/elbrus.jpg"  class="splash"/>'+
                '<div class="title">'+
                'Climbing Elbrus and Ararat for Charity'+
                '</div>'+
                '<div class="author">'+
                'by <b>Dimitar Petrov</b> - Sofia, Bulgaria'+
                '</div>'+
                '<div class="fundingBar">'+
                    '<div class="green">'+
                        '<div class="endMarker"></div>'+
                    '</div>'+
                '</div>'+
                '<div class="social">'+
                    '<ul class="friends">'+
                        '<img src="../cards/r1/images/friend1.jpg" class="friend"/>'+
                    '</ul>'+
                    '<div class="others">'+
                    'John Smith, Jane Doe, Max Blue, and 108 others like this'+
                    '</div>'+
                '</div>'+
                '<div class="funding">'+
                    '<div class="green">'+
                        '<span class="value">$10,906 </span><span> RAISED</span>'+
                    '</div>'+
                '</div>'+
                '<div class="lower"> '+
                    '<div class="description">'+
                        '<p>'+
                        'We\'ll climb Mount Elbrus and Mount Ararat in 20 days &#8722; between the 1st and 20th of August 2013 &#8722; for charity. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum Lorem ipsum.'+
                        '</p>'+
                        '<p></p>'+
                    '</div>'+
                    '<div class="left">'+
                        '<div class="fundingStats">'+
                            '<div>12% funded</div>'+
                        '</div>'+
                        '<div class="fundingStats">'+
                            '<div>302 funders</div>'+
                        '</div>'+
                        '<div class="fundingStats">'+
                            '<div>15 days left</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="middle">'+
                        '<div class="trending"></div>'+
                        '<span>Very Popular</span>'+

                    '</div>'+
                    '<div class="right"></div>'+
                    '<div class="learnmore">'+
                    'LEARN MORE'+
                    '</div>'+
                '</div> <!--lower container-->'+
            '</div> <!--visible part (upper) -->';



      //add size class to give mosaic appearance
        if ((i == 1) || (i == 5)){
            var project = "medium_project";
        }else{
           var project = "small_project"
        }

        //alter classes and add all of the html to the li containers
        $("#card"+i).removeClass().addClass(''+card.result[i].near+'').addClass(project).html(addCard);



        //perform any and all client-side data calculations and string corrections
        if (card.result[i].status == "CAMPAIGN CLOSED"){
            $("#card"+i+" .days").css('background-color',"#FF3366");
        }

    }



    //make sure the click only happens once
    $('.populate').unbind('click');
}