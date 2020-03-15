const childProcess = require('child_process');

function fileCommandExecutor(command) {
    childProcess.exec(`${command}`, function (error, stdOut, stdErr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code ' + error.code);
            console.log('stderr: ' + stderr);
        }
    });
}

module.exports = fileCommandExecutor;