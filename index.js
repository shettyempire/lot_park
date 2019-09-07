'use strict';

const inputParser = require('./util/input-parser'),
commandMapper = require('./util/command-mapper'),
readline = require('readline');

    const failedCB = function(err){;
        console.log('Error: ', err.message);
        process.exit(0);
    };
  

  //Node CLI
    const rl = require('readline').createInterface(process.stdin, process.stdout),
    prefix = 'Enter Parking Info > ';
    rl.on('line', (input) => {
    inputParser.parseLine(input, (err, parsedArgs) => {
        if(err) { 
            failedCB(err);
        }
        commandMapper.getCommand(parsedArgs.cmd, function(err, cmdFunc){
        if(err){
            console.log('Invalid Input');
        } else {
            console.log(parsedArgs.args[0] + " : "+ parsedArgs.args[1]);
        }
        });
    });

    rl.setPrompt(prefix, prefix.length);
    rl.prompt();

    }).on('close', function() {
        console.log('Have a great day!');
        process.exit(0);
    });
    console.log(prefix + 'Please enter parking details');
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();