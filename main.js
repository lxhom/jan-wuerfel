window.onload = function() {
  document.querySelector("#btn").onclick = function() {
    let number = +document.querySelector("#dices").value
    let eyes = +document.querySelector("#eyes").value
    let skill = +document.querySelector("#skill").value
    let highest = 0
    for (let i = 0; i < number; i++) {
      let roll = Math.ceil(Math.random() * eyes)
      if (roll > highest) highest = roll
    }
    document.querySelector("#highest").innerText = highest + skill
  }
}