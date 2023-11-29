let modifiPhoto = document.getElementById("modifiPhoto");
let avatarProfil = document.getElementById("avatarProfil");
let profilSiebarre = document.getElementById("profilSiebarre");
let getProfilt = localStorage.getItem("storedImage");
let modifiPassword = document.getElementById("modifiPassword");
let mdpSetting = document.querySelector(".mdpSetting");
let supprimCompt = document.getElementById("supprimCompt");
avatarProfil.src = getProfilt;
profilSiebarre.src = getProfilt;
let ancienMdpInput = document.getElementById("ancienMdp");
let nouveauMdpInput = document.getElementById("nouveauMdp");
let envoyerNvMdp = document.getElementById("envoyerNvMdp");
let PwdEditer = document.getElementById("PwdEditer");
let confirmationMdpInput = document.getElementById("confirmationMdp");
let supprimPhoto = document.getElementById("supprimphoto");
document
  .getElementById("input-file")
  .addEventListener("change", function addProfilt(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        avatarProfil.src = e.target.result;
        profilSiebarre.src = e.target.result;
        localStorage.setItem("storedImage", avatarProfil.src);
      };
      reader.readAsDataURL(file);
    }
  });
supprimPhoto.addEventListener("click", function () {
  localStorage.removeItem("storedImage");
  if (localStorage.getItem("storedImage") === null) {
    profilSiebarre.src = "images/avatar.jpg";
    avatarProfil.src = "images/avatar.jpg";
  }
});
//================================== Editer passeword =======================================//
modifiPassword.addEventListener("click", function () {
  mdpSetting.classList.toggle("show");
});
envoyerNvMdp.addEventListener("click", function () {
  let recupDeaultUser = JSON.parse(localStorage.getItem("DeaulteProfilt"));
  let ancienMdp = ancienMdpInput.value;
  let nouveauMdp = nouveauMdpInput.value;
  let confirmationMdp = confirmationMdpInput.value;

  // Vérifier si recupDeaultUser est un tableau non vide
  if (recupDeaultUser && recupDeaultUser.length > 0) {
    const premierUtilisateur = recupDeaultUser[0];
    console.log(premierUtilisateur);
    let recupPassword = premierUtilisateur.Password;

    if (ancienMdp === recupPassword) {
      if (nouveauMdp === ancienMdp) {
        alert("Votre nouveau mot de passe est identique à l'ancien");
      } else if (nouveauMdp === confirmationMdp) {
        // Mettre à jour le mot de passe dans le tableau d'utilisateurs
        premierUtilisateur.Password = confirmationMdp;
        // Mettre à jour les données dans le local storage
        localStorage.setItem("DeaulteProfilt", JSON.stringify(recupDeaultUser));
        alert("votre mots de passer à été editer");
        mdpSetting.classList.remove("show");
      } else {
        alert(
          "La confirmation du mot de passe ne correspond pas au nouveau mot de passe"
        );
      }
    } else {
      alert("Mot de passe actuel incorrect");
    }
  } else {
    alert("Aucun utilisateur trouvé");
  }
});

/////////////////////// verfication scr img profilt////////////////////////////
if (localStorage.getItem("storedImage") === null) {
  profilSiebarre.src = "images/avatar.jpg";
  avatarProfil.src = "images/avatar.jpg";
}
//=======================================================================//
///////////////////////// delter compte///////////////////////////////////
supprimCompt.addEventListener("click", function () {
  let recupIdentifiantLocal = JSON.parse(
   localStorage.getItem("DeaulteProfilt")
   
  );
  recupIdentifiantLocal.shift();
  window.location.href = "index.html";
      //  let found = recupIdentifiantLocal.find((element) => element.id === 1);
      //   delete found
         localStorage.setItem("DeaulteProfilt", JSON.stringify(recupIdentifiantLocal));
    // var indexASupprimer = -1;
    // if (recupIdentifiantLocal[i].Identifiant === localStorage.getItem('user')){
    //     indexASupprimer = i;
    //     break;
    //     if (indexASupprimer !== -1) {
    //         recupIdentifiantLocal.splice(indexASupprimer, 1);

    //         // Mettre à jour les données dans le localStorage
    //         localStorage.setItem("DeaulteProfilt", JSON.stringify(recupIdentifiantLocal));
    //         alert("Objet supprimé avec succès.");
    //         localStorage.removeItem('user');
    //     }
    // }

});
