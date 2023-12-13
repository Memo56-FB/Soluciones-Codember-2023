const fs = require('fs');

fs.readFile('database_attacked.txt', 'utf8', function(err, data){
  if (err) {
    console.error(err);
    return;
  }
  const database = data.split('\n');
  const alphanumericRegex = /^[a-z0-9]+$/i;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const numberRegex = /\d/;
  const lettersRegex = /^[a-zA-Z\s]+$/;

  const secretMessage = []
  const validUsers = database.filter(item => {
    const [id, username, email, age, location] = item.split(',');

    //Validations
    const isIdValid = alphanumericRegex.test(id) && id;
    const isUsernameValid = alphanumericRegex.test(username) && username;
    const isEmailValid = emailRegex.test(email) && email;
    const isAgeValid = numberRegex.test(age) || !age;
    const isLocationValid = lettersRegex.test(location) || !location;
    if (isIdValid && isUsernameValid && isEmailValid && isAgeValid && isLocationValid) {
      return item
    }
    else{
      secretMessage.push(username.at(0))
    }
  })
  console.log(secretMessage.join(''))
})

//jeje
