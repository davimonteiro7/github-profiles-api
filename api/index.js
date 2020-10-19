const app = require('./config/custom-express')();

app.listen(3000, () => console.log('Listening at port 3000'));