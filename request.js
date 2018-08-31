const GoogleNewsRss = require('google-news-rss');
 
const googleNews = new GoogleNewsRss();
 
googleNews
   .search('react js')
   .then(resp => res.json(resp));