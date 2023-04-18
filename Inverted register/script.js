let text  = 'jAVAsCRIPT'
let result = replacement(text)
 
function replacement(item) {
    let letter = item.toUpperCase().split('')
    for (let i = 0; i < letter.length; i++) {
      if (letter[i] === item[i])
        letter[i] = letter[i].toLowerCase()
    }
    return letter.join('')
  }
 
  console.log(result)