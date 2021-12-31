import express from 'express';
import routes from './src/routes/index.js';
const app = express();
import { exec } from 'node:child_process';

const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
app.use(express.static('static'));

// start the server
app.listen(PORT, () =>
	console.log(`\n🎮 App running on port http://localhost:${PORT} 🎮 🎉\n`)
);

// start and open the game-database cli in a new terminal window
const terminalExe = 'start cmd.exe /K'; // TODO - "start cmd.exe" works for windowsOS, need to check the command for macOS
const CLI_COMMAND = `${terminalExe} game-database && npm run cli-start`;
exec(CLI_COMMAND, (err, stdout, stderr) => {
	if (err) console.error(`error: ${err}`);
	if (stderr) console.error(`stderr: ${stderr}`);
});
