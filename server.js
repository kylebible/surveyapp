const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public/dist')))

const port = 8000

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js')

routes_setter(app);

app.listen(port, function() {
  console.log("listening on port"+port);
})