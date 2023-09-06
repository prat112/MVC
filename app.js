const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const error404Controller = require('./controllers/404')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',contactRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.post('/success',(req,res)=>{
  res.status(200).send('<h1>Form Submitted Successfullt</h1>');
})

app.use(error404Controller.get404Page);

app.listen(3000);