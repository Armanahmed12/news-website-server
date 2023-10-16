const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

const categories = require('./data/category.json');
const news = require('./data/news.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/news',(req,res)=>{

      res.send(news);
})

app.get('/news/:id',(req,res)=>{

       const newsId = req.params.id;
       const desiredData = news.find(eachNews => eachNews._id == newsId);
       res.send(desiredData);
})

app.get(`/categories/:id`,(req,res)=>{

      const categoryId = req.params.id;
      const categoryNews = news.filter(eachNews => eachNews.category_id == categoryId);
      res.send(categoryId == 0 ? news : categoryNews);

})

app.get('/categories',(req,res)=>{

       res.send(categories);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})