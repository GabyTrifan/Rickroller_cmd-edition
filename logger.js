const EventEmitter = require('events');
chalk = require('chalk');
const open = require('open');
links =[ "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
         "https://www.youtube.com/watch?v=cvh0nX08nRw",
         "https://www.youtube.com/watch?v=Gc2u6AFImn8",
         "https://www.youtube.com/watch?v=PayvWj2piKg"
       ];

class Logger extends EventEmitter{ 
    // Logger has the contents of the events module
    
    log(message) {
        //send an HTTP request
        console.log("You choose",message);
    
        // Raise an event
        this.emit('messageLogged',chalk.green(links[message]),
        open(links[message]));
        /* "this" is used because the class arleady has the events
          module properties, so we just call the class itself */ 
    }
    
}

module.exports= Logger; // Export the class