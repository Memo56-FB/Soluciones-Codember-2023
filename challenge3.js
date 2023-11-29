const fs = require('fs');

fs.readFile('encryption_policies.txt', 'utf8', function(err, data){
    if (err) {
        console.error(err);
        return;
    }
    const invalidPasswords = [];
    const passwords = data.split('\n');
    passwords.forEach((passwordLine) => {
      const [range, letterWithColon, password] = passwordLine.split(' ');
      const [min, max] = range.split('-').map(Number);
      const letter = letterWithColon[0];
      const letterCount = Array.from(password).filter(char => char === letter).length;

      if (letterCount < min || letterCount > max) {
        invalidPasswords.push(passwordLine);
      }
    })
    console.log(invalidPasswords[41]);

});
