import express from 'express';
import routes from './src/routes/index.js';
const app = express();

const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
app.use(express.static('static'));

// start the server
app.listen(PORT, () => console.log(`\n🎮 App running on port ${PORT} 🎮 🎉\n`));
