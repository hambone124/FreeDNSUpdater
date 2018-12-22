const request = require("request"),
      fs = require("fs"),
      token = fs.readFileSync("token", "utf8");

const options = {
  "url" : `http://sync.afraid.org/u/${token}/`
};

function appendLog(event) {
  const dateString = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  console.log(`${dateString}: ${event}`);
//   let stream = fs.createWriteStream("freedns.log", {flags: 'a'});
//   stream.write(`${dateString}: ${event}\n`);
//   stream.end();
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    appendLog(body);
  } else {
    appendLog("Could not update FreeDNS.");
  }
}

appendLog("FreeDNS updater started");
setInterval(() => request(options, callback), 900000);
