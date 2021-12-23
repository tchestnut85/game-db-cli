const express = require('express');
const app = express();
const routes = require('./src/routes');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
app.use(express.static('static'));

//  need to add routes to get the db data

app.listen(PORT, () =>
	console.log(`\n🎮 App running on port http://localhost:${PORT} 🎮 🎉\n`)
);
