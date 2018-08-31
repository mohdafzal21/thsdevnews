const express = require('express');
const router = express.Router();
const GoogleNewsRss = require('google-news-rss');
const googleNews = new GoogleNewsRss();
 

router.get('/',(req,res)=>{
    res.render('index')
});

router.get('/react',(req,res)=>{
    res.render('react')
});

router.get('/api/react', (req,res)=>{
    googleNews
   .search('react js')
   .then(resp => res.json(resp));
})

module.exports = router;