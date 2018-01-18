
var program = require('commander');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var fs = require('fs');

// Define the command line options
program
  .option('-u, --stt-username <s>', 'Tone Analyzer username')
  .option('-p, --stt-password <s>', 'Tone Analyzer password')
  .option('-f, --filename <s>','Filename to open and analyze tone')
  .option('-o, --output <s>','Filename to save tone output')
  .parse(process.argv)

var tone_analyzer = new ToneAnalyzerV3({
  username: 'ENTER_USERNAME_HERE',
  password: 'ENTER_PASSWORD_HERE',
  version_date: '2017-09-21'
});

console.log('Tone Analyzer utility reporting');
console.log('Sending ' + program.filename)
var workingString = '.'

var twirlTimer = (function() {
  var P = ['\\', '|', '/', '-'];
  var x = 0;
  return setInterval(function() {
    process.stdout.write('\r' + P[x++]);
    x &= 3;
  }, 50);
})();


var textFile = fs.readFileSync(program.filename, 'utf-8')
var params =   {
  text: textFile,
  content_type: 'text/plain'
};

var outputFileName = program.filename
if (program.output) {
  console.log('output')
  outputFileName = program.output
}

tone_analyzer.tone(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    let content = JSON.stringify(res, null, 2)
    clearInterval(twirlTimer);
        fs.writeFile(outputFileName + '.json', content, 'utf-8', function(err) {
        if (err) throw err
        console.log('Done!')
      });
  }
});