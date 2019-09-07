'use strict';

const inputParser = require('./util/input-parser'),
commandMapper = require('./util/command-mapper'),
parkVehicle = require('./src/Parking'),
readline = require('readline');

    const failedCB = function(err){;
        console.log('Error: ', err.message);
        process.exit(0);
    };
  

  //Node CLI
    const rl = require('readline').createInterface(process.stdin, process.stdout),
    prefix = 'Enter Parking Info > ',
    parking = new parkVehicle();
    rl.on('line', (input) => {
    inputParser.parseLine(input, (err, parsedArgs) => {
        if(err) { 
            failedCB(err);
        }
        commandMapper.getCommand(parsedArgs.cmd, function(err, mapcommmandFunc){
        if(err || typeof parking[mapcommmandFunc] !== 'function'){
            console.log('Invalid Input');
        } else {
            console.log(parking[mapcommmandFunc](parsedArgs.args[0], parsedArgs.args[1]));
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