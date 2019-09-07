'use strict';

const readline = require('readline');

  //Node CLI
  const rl = require('readline').createInterface(process.stdin, process.stdout),
  prefix = 'Enter Parking Info > ';
  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
  });
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();
