const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const Logger= require('./logger');
const logger= new Logger(); // Creating the logger object

// Register a listener
logger.on('messageLogged',EventArg => 
            console.log("Listener called, here you go", EventArg)
);

rl.question("Choose a random number between 0 and 3 ", function(resp) {
    logger.log(Math.floor(resp));
    rl.close();
})