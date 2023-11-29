const data = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

const array = data.split('')
let helper = 0
let result = []

array.forEach( item => {
  switch (item){
    case '#':
      helper++
      break
    case '@':
      helper--
      break
    case '*':
      helper = helper * helper
      break
    case '&':
      result.push(helper)
      break
  }
})
console.log(result.join(''))