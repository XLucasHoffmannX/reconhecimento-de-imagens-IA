require('dotenv').config();
const express = require('express');
// app
const app = express();

app.use(express.static('public'));

// middlewares
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', require('./routes/indexRouter'))
app.use('/', require('./tensorRouter'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server in on port ${PORT}`))