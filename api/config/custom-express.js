const express = require('express');
const consign = require('consign');
const path = require('path');

module.exports = () => {
    const app = express();
    
    app.use(express.static(path.resolve('./views/public')))
        .use(express.urlencoded({extended: true}))
        .set('views', path.resolve('./views'))
        .set('view engine', 'hbs');

    consign()
        .include('controllers')
        .into(app);
         
    return app;
}


