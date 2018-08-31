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

router.get('/node',(req,res)=>{
    res.render('node')
});

router.get('/blockchain',(req,res)=>{
    res.render('blockchain')
});

router.get('/jobs',(req,res)=>{
    res.render('jobs')
});



router.get('/api/react', (req,res)=>{
    googleNews
   .search('react js')
   .then(resp => res.json(resp));
})
router.get('/api/node', (req,res)=>{
    googleNews
   .search('node js')
   .then(resp => res.json(resp));
})
router.get('/api/blockchain', (req,res)=>{
    googleNews
   .search('blockchain')
   .then(resp => res.json(resp));
})
router.get('/api/', (req,res)=>{
    googleNews
   .search('javascript')
   .then(resp => res.json(resp));
})
router.get('/api/jobs', (req,res)=>{
    googleNews
   .search('fullstack devloper')
   .then(resp => res.json(resp));
})

module.exports = router;