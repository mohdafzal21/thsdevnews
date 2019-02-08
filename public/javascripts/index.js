news = {};
news.database = [];
news.loadAssets = function() {
    $.getJSON('http://starlord.hackerearth.com/movieslisting', function(data){
        news.database =  data;
        
        news.init();
    });
};

news.init = function(){
    news.Click();
    news.generateMarkup();
}

news.Click = function(){
    $('.header').on("click",function(){
        // console.log("its working");
       var link = $(this).attr("data-href");

       window.open(link, '_blank');


    })
}

news.generateMarkup = function(){
    var template = '';

    
    $.each(news.database, function(index){
        var db = news.database;
        var id = db[index];

        // console.log(id.movie_imdb_link);

        template += '<a  href="'+ id.movie_imdb_link+'">click here</a>'
    
        template += '<div class="item">';

        template += '<div class="header" data-href="'+id.movie_imdb_link+'">';

        template += '<div class="left">';

        template += '<img   src="' + id.thumbnailUrl + '" onerror=\'this.onerror = undefined; this.src="public/images/ths.png"\'  alt="image items" >';

        template += '</div>';

        template += '<div class = "right" >';

        template += '<div class = "node" >';

        template += '<h4>'+ id.movie_title+ '</h4>';

        template +=  '</div>';

        template += '<div class="node desc" >';

        template += '<span> </span> ' + id.director_name;

        template +=  '</div>';

        template += '<div class="node ">';

        template += '<span class="node pub"></span> ' + id.plot_keywords;
        
        template += '<span>|</span> ';
        
        template += '<span  class="node pubData"></span> ' + id.title_year;

        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
       
        template += '</div>';
    });
    
    $(".content").append(template);
    news.Click();


}


news.loadAssets();
