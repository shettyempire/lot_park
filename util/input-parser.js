'use strict';

const parseLine = (line, callback) => {
  let words, parsedArgs, err;
  words = line.split(' ');
  const parsedArgs = {
    cmd: words.shift(),
    args: words
  };
  
  return ((parsedArgs.cmd && parsedArgs.args) ? callback(null, parsedArgs) : callback({message: 'Invalid input'}, null));
};

exports.parseLine = parseLine;