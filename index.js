function accum(s) {
    let letters = s.toLowerCase().split("")
    let result = []
    for (let i = 0; i < letters.length; i++){
      result.push(letters[i].repeat(i+1))
    }
    let final  = result.map(x => x.replace(/\b\w/g, letter => letter.toUpperCase())).join("-")
    return final
}