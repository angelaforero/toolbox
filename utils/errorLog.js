const fs = require("fs");

module.exports = {
  logErrorToFile: function (errorMessage) {
    const logFilePath = "./error.log";

    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${errorMessage}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      } else {
        console.log("Error logged:", errorMessage);
      }
    });
  },
};
