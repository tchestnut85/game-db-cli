#!/usr/bin/env node

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

rl.question('Hi how are you?');
