function createGame(player1, hour, player2) {
  return `
  <li>
   <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
   <strong>${hour}</strong>
   <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>  
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "Segunda",
    createGame("england", "10:00", "iran") +
      createGame("united states", "16:00", "wales")
  ) +
  createCard("22/11", "Terça", createGame("france","16:00","australia" )
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("south korea", "10:00", "uruguay")
  ) +
  createCard("28/11", "Sequnda", createGame("switzerland", "13:00", "brazil"))
