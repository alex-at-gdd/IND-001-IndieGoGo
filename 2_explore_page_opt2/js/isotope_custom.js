$(function() {

  $('ul.explore_project_cards').isotope({
  // options
  itemSelector : 'li',
  layoutMode : 'fitRows'
});




    var mycontainer = jQuery('ul.explore_project_cards'),
        myselect = jQuery('.explore_filter select');
    filters = {};

    mycontainer.isotope({
        itemSelector: '.item'
    });
        myselect.change(function() {
        var mythis = jQuery(this);

        var myoptionSet = mythis;
        var group = myoptionSet.attr('data-filter-group');
    filters[group] = mythis.find('option:selected').attr('data-filter-value');

        var isoFilters = [];
        for (var prop in filters) {
            isoFilters.push(filters[prop])
        }
        var selector = isoFilters.join('');

        mycontainer.isotope({
            filter: selector
        });

        return false;
    });

  $(".explore_filter select").select2();
    

});