#!/usr/bin/env node

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

console.log('Game Database launched 🎮\n');
const rl = readline.createInterface({ input, output });

const answer1 = await rl.question('Hi how are you?');
console.log(answer1);
