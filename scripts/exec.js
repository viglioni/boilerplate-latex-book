const { execSync } = require("child_process");

module.exports =  (cmd, quiet=false) => {
  try {
    if(!quiet) console.log("Running: " + cmd)
    return execSync(cmd).toString()
  }
  catch(_){
    console.log("An error has occured during the execution of")
    console.log(cmd)
    return null
  }
};


