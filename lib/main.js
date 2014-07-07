//main.js

(function() {
    //Declaring variables
    var fs, reptxt, filedata;

    //Requiring files
    fs = require('fs');
    reptxt = require ('./replaceme');

    //Reading files
    fs.readFile(process.argv[2],'utf8',function(err,data){
      if(err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
      }
      //Calling replacement function
      filedata = reptxt.replaceme(data,"npm","123");

      //Writing replaced text into a new file
      filedata = reptxt.replaceme(data,process.argv[3],process.argv[4]);
        if(err) {
          console.error("Error saving file %s", err);
          process.exit(1);
        }
        console.log('out.txt file saved!');
      });
    });

}).call(this)
