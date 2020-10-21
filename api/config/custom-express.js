const express = require('express');
const consign = require('consign');
const path = require('path');
const hbs = require('hbs');


module.exports = () => {
    const app = express();
    
    


    app.use('/public',express.static(path.resolve('./views/public')))
        .use(express.urlencoded({extended: true}))
        .set('views', path.resolve('./views'))
        .set('view engine', 'hbs');
    
    hbs.registerPartials(path.resolve('./views/partials'));
    
    consign()
        .include('controllers')
        .into(app);
         
    return app;
}


