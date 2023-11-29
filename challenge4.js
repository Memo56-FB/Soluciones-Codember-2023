const fs = require('fs');

fs.readFile('files_quarantine.txt', 'utf8', function(err, data){
    if (err) {
        console.error(err);
        return;
    }
    const files = data.split('\n');
    const validFiles = [];

    files.forEach(file => {
      const [alfanumeric, checksum] = file.split('-');
      let counts = {};
      let result = '';
      for (let char of alfanumeric) {
        if (!counts[char]) {
            counts[char] = 1;
        } else {
            counts[char]++;
        }
      }
      for (let char of alfanumeric) {
        if (counts[char] === 1) {
            result += char;
        }
      }
      if(checksum === result){
        validFiles.push(result);
      }
    })
    console.log(validFiles[32]);
});