let EvterFormUpdate = document.getElementById("myForm");
let myConnexion = document.getElementById("myConnexion1");
let monFormulaire = document.getElementById("monFormulaire");
let notification = document.querySelector(".notification");
let h1notification = document.getElementById("h1notification");
let timerBlock = document.querySelector(".timerBlock");
let message = document.getElementById("message1");
let compteBloquer = document.querySelector(".compteBloquer");
let myHours = document.getElementById("my-hours");
let contenuIndex = document.querySelector(".contenuIndex");
let ValueIdentifiant = document.getElementById("recupValueIdentifiant");
let ValuePassword = document.getElementById("recupValuePassword");
let second =    10;
let minute = 4;
let heure = "00";
let Timeout;
function timer() {
  if (second > 0) {
    second--;
    if (second < 10) {
      second = "0" + second;
    }
    myHours.innerHTML = `00:${"0" +minute}:${second}`;
    Timeout = setTimeout(timer, 1000);
  } else if (minute > 0) {
    if (second == 0) {
      minute--;
    }
    myHours.innerHTML = `00:${"0" + minute}:${second}`;
    Timeout = setTimeout(timer, 1000);
    second = 10;
    second--;
  } else if (minute == 0 && second == 0) {
    localStorage.removeItem('timerData');
    timerBlock.classList.remove("show");
    contenuIndex.classList.remove("hidden");
    window.location.reload();
  } else {
    // Arrêter le compte à rebours lorsque les secondes atteignent 0
    clearTimeout(Timeout);
  }
}
// Fonction pour sauvegarder le timer dans le LocalStorage
function sauvegarderTimer() {
  // Créer un objet avec les informations nécessaires
  var timerData = {
    minute: minute,
    second: second,
  };

  // Convertir l'objet en chaîne JSON
  var timerDataString = JSON.stringify(timerData);

  // Stocker la chaîne JSON dans le LocalStorage
  localStorage.setItem("timerData", timerDataString);
}

// Fonction pour restaurer le timer depuis le LocalStorage
function restaurerTimer() {
  // Récupérer la² chaîne JSON depuis le LocalStorage
  var timerDataString = localStorage.getItem("timerData");

  // Si des données existent dans le LocalStorage
  if (timerDataString) {
    // Convertir la chaîne JSON en objet
    var timerData = JSON.parse(timerDataString);

    // Restaurer les valeurs des variables
    minute = timerData.minute;
    second = timerData.second;
    timer();
    timerBlock.classList.add("show");
  }
}
restaurerTimer();

function verificationProfil() {
  let compteur = 0;
  myConnexion.addEventListener("click", function () {
    compteur++;
    if (compteur >= 3) {
      compteBloquer.classList.add("show");
      let codeSecret = prompt("Quels est le surnom de Neuve ? :");
      if (codeSecret == "mouton") {
        compteBloquer.classList.remove("show");
      } else if (codeSecret !== "mouton") {
        compteBloquer.classList.remove("show");
        timerBlock.classList.add("show");
        notification.classList.remove("show");
        timer();
        sauvegarderTimer();
        ValueIdentifiant.setAttribute("readonly", "readonly");
        ValuePassword.setAttribute("readonly", "readonly");
      }
    }
  });
  let inputValueIdentifiant = document.getElementById(
    "recupValueIdentifiant"
  ).value;
  let inputValuePassword = document.getElementById("recupValuePassword").value;
  document.getElementById("recupValueIdentifiant").value = "";
  document.getElementById("recupValuePassword").value = "";
  let recupIdentifiantLocal = JSON.parse(
    localStorage.getItem("DeaulteProfilt")
  );
  for (let i = 0; i < recupIdentifiantLocal.length; i++) {
    let element = recupIdentifiantLocal[i];
    let identifIndenfication = element.Identifiant;
    let identifPassword = element.Password;
    let myId = element.id
    if (
      identifIndenfication.includes(inputValueIdentifiant) &&
      inputValuePassword.includes(identifPassword)
    ) {
      localStorage.setItem('user',myId)
      monFormulaire.setAttribute("action", "dashboard.html");
    } else if (identifIndenfication.includes(inputValueIdentifiant)) {
      document
        .getElementById("monFormulaire")
        .addEventListener("submit", function (e) {
          myUser();
          e.preventDefault();
          notification.classList.add("show");
          setTimeout(() => {
            notification.classList.remove("show");
          }, 2000);
        });
    } else if (inputValuePassword.includes(identifPassword)) {
      document
        .getElementById("monFormulaire")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          notification.classList.add("show");
          setTimeout(() => {
            notification.classList.remove("show");
          }, 2000);
        });
    } else {
      notification.classList.remove("show");
    }
  }
}
  // Créez un objet avec ces valeurs et un ID unique
function myUser() {
  let deaulteProfilt = [
    {
      'id': 1,
      Identifiant: "ayouba.yahoo2000@gmail.com",
      Password: "1234",
    },
    {
      'id': 2,
      Identifiant: "ayoubaissoufou1@gmail.com",
      Password: "0000",
    },
  ];

  // Convertissez le tableau en JSON
  let jsonData = JSON.stringify(deaulteProfilt);
  // Stockez le JSON dans le stockage local
  localStorage.setItem("DeaulteProfilt", jsonData);
}
myUser();
//======================================================//
