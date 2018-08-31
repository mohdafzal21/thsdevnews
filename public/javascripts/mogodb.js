news = {};
news.database = [];
news.loadAssets = function() {
    $.getJSON('/api/mongodb', function(data){
        news.database =  data;
        news.init();
    });
};

news.init = function(){
    news.generateMarkup();
}

news.generateMarkup = function(){
    var template = '';

    
    $.each(news.database, function(index){
        var db = news.database;
        var id = db[index];

        
    
        template += '<div class="item">';

        template += '<div class="header">';

        template += '<div class="left">';

        template += '<img src= "'+ id.thumbnailUrl +'">';

        template += '</div>';

        template += '<div class = "right" >';

        template += '<div class = "node" >';

        template += '<h4>'+ id.title+ '</h4>';

        template +=  '</div>';

        template += '<div class="node desc" >';

        template += '<span> </span> ' + id.description;

        template +=  '</div>';

        template += '<div class="node ">';

        template += '<span class="node pub"></span> ' + id.publisher;
        
        template += '<span>|</span> ';
        
        template += '<span  class="node pubData"></span> ' + id.pubDate;

        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
    });
    
    $(".content").append(template);


}


news.loadAssets();
