function warnTheDeveloper() {
  let n = Number(document.getElementById('dev').value)
  let m = Number(document.getElementById('sweet').value)
  let s = Number(document.getElementById('seat').value)

  if (m > n) {
    let tempAnswer
    do {
      tempAnswer = m - n + (s - 1)

      document.getElementById('answer').innerHTML = tempAnswer
      m = tempAnswer
    }

    while (m > n)

  } else {
    document.getElementById('answer').innerHTML = m + (s -1)
  }

}




