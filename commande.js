let iconsCache1 = document.querySelector(".iconsCache1");
let iconsCache2 = document.querySelector(".iconsCache2");
let iconsCache3 = document.querySelector(".iconsCache3");
let iconsCache4 = document.querySelector(".iconsCache4");
let Facture = document.getElementById("Facture");
let Laboratoire = document.getElementById("Laboratoire");
let Date = document.getElementById("Date");
let Cliquer = document.getElementById("Cliquer");
let Statu = document.getElementById("Statu");
let inputValue = document.getElementById("inputValue");
let commandeTbody = document.getElementById("commandeTbody");
const tbody = document.querySelector("tbody");
let monArray = allcommande;
const thx = document.querySelectorAll("th");
const trxb = tbody.querySelectorAll("tr");
const myTd = tbody.querySelectorAll("td");
Facture.addEventListener("click", function () {
  iconsCache1.classList.toggle("show");
  iconsCache2.classList.remove("show");
  iconsCache3.classList.remove("show");
  iconsCache4.classList.remove("show");
});
Laboratoire.addEventListener("click", function () {
  iconsCache2.classList.toggle("show");
  iconsCache1.classList.remove("show");
  iconsCache3.classList.remove("show");
  iconsCache4.classList.remove("show");
});
Date.addEventListener("click", function () {
  iconsCache3.classList.toggle("show");
  iconsCache2.classList.remove("show");
  iconsCache4.classList.remove("show");
  iconsCache1.classList.remove("show");
});
Statu.addEventListener("click", function () {
  iconsCache4.classList.toggle("show");
  iconsCache2.classList.remove("show");
  iconsCache3.classList.remove("show");
  iconsCache1.classList.remove("show");
});
//==================== Tableau trier==================================//
/*VERSION LONGUE*/
const compare = function (ids, asc) {
  return function (row1, row2) {
    const tdValue = function (row, ids) {
      return row.children[ids].textContent;
    };
    const tri = function (v1, v2) {
      if (v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)) {
        return v1 - v2;
      } else {
        return v1.toString().localeCompare(v2);
      }
      return v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2);
    };
    return tri(
      tdValue(asc ? row1 : row2, ids),
      tdValue(asc ? row2 : row1, ids)
    );
  };
};
thx.forEach(function (th) {
  th.addEventListener("click", function () {
    let classe = Array.from(trxb).sort(
      compare(Array.from(thx).indexOf(th), (this.asc = !this.asc))
    );
    classe.forEach(function (tr) {
      tbody.appendChild(tr);
    });
  });
});
//==============================================================================//

// ======================== search input ==============================
inputValue.addEventListener("input", function () {
  let valueInputSearch = inputValue.value.toLowerCase();
  commandeTbody.innerHTML = "";
  let correspondanceTrouvee = false;

  allcommande.forEach((element) => {
    let allId = element.id.toLowerCase();
    let allDate = element.date.toLowerCase();
    let allNames = element.names.toLowerCase();
    let allSatu = element.statu.toLowerCase();

    // Recherche dans allId, allDate, et allNames
    if (
      allId.includes(valueInputSearch) ||
      allSatu.includes(valueInputSearch) ||
      allNames.includes(valueInputSearch)
    ) {
      commandeTbody.innerHTML += `<tr>
        <td style="border-left: none;">${allId}</td>
        <td>${allNames}</td>
        <td>${allDate}</td>
        <td>${allSatu}</td>
        <td style="border-right: none;">
          <button class="btn">voir</button>
        </td>
      </tr>`;
      correspondanceTrouvee = true;
    }
  });

  // Si aucune correspondance n'est trouvée, ajoute la ligne "Aucun résultat trouvé"
  if (!correspondanceTrouvee) {
    commandeTbody.innerHTML += `<tr class='RAS'>
      <th colspan="5">Aucun résultat trouvé</th>
    </tr>`;
  }
});

//====================================== editer profilt= ==============================//
let getProfilt = localStorage.getItem("storedImage");
let modifiPassword = document.getElementById("modifiPassword");
let mdpSetting = document.querySelector(".mdpSetting");
let profilSiebarre = document.getElementById("profilSiebarre");
profilSiebarre.src = getProfilt;
if (localStorage.getItem('storedImage') === null) {
  profilSiebarre.src ="images/avatar.jpg";
  
}
