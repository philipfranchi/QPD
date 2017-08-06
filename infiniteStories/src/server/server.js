const express = require('express');
const app = express();

app.use(express.static('dist'));


app.use('/api', require('./routes/api.js'));
app.get('*', (req, res)=>{
	res.sendFile('index.html', { root : __dirname + '/../../dist/'});
});

app.listen(3000, function () {
 	console.log('Example app listening on port 3000!');
})