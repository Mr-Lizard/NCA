const path = require('path');
const port = process.env.PORT || 3000;
const express = require('Express');

const publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));

//console.log(__dirname + '/../public');
console.log("- public path: " + publicPath);


app.listen(3000, () => console.log(`Listening on port ${port}`));


/// listen on prot 3000
