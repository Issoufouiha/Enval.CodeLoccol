let iconsCache1 = document.querySelector(".iconsCache1");
let iconsCache2 = document.querySelector(".iconsCache2");
let iconsCache3 = document.querySelector(".iconsCache3");
let iconsCache4 = document.querySelector(".iconsCache4");
let filterIcon = document.getElementById("filterIcon");
let Rapport = document.getElementById("Rapport");
let Etat = document.getElementById("Etat");
let Date = document.getElementById("Date");
let inputValue = document.getElementById("inputValue");
let suiviTbody = document.getElementById("suiviTbody");
const tbody = document.querySelector("tbody");
const thx = document.querySelectorAll("th");
const trxb = tbody.querySelectorAll("tr");
const myTd = tbody.querySelectorAll("td");
let btn = document.querySelectorAll('.btnLink');
filterIcon.addEventListener("click", function () {
  iconsCache1.classList.toggle("show");
  iconsCache2.classList.remove("show");
  iconsCache3.classList.remove("show");
  iconsCache4.classList.remove("show");
});
Etat.addEventListener("click", function () {
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
Rapport.addEventListener("click", function () {
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

//======================== search input ===========================================//
inputValue.addEventListener("input", function () {
  let valueInputSearch = inputValue.value.toLowerCase();
  suiviTbody.innerHTML = "";
  let correspondanceTrouvee = false;

  allSuivi.forEach((element) => {
    let allId = element.lot.toLowerCase();
    let allDate = element.Etat.toLowerCase();
    let allNames = element.DatePrèvuete.toLowerCase();
    let allSatu = element.Rapport
    if (allSatu === 'disponible') {
      console.log(allSatu);
      btn.forEach(element => {
        element.setAttribute('href', 'suividetail.html');
        
      });
    }

    // Recherche dans allId, allDate, et allNames
    if (
      allId.includes(valueInputSearch) ||
      allNames.includes(valueInputSearch) ||
      allSatu.includes(valueInputSearch)
    ) {
      suiviTbody.innerHTML += `<tr>
        <td style="border-left: none;">${allId}</td>
        <td>${allNames}</td>
        <td>${allDate}</td>
        <td>${allSatu}</td>
        <td style="border-right: none;">
        <a class="btnLink"> <button class="btn">voir</button></a>
        </td>
      </tr>`;
      correspondanceTrouvee = true;
    }
  });

  // Si aucune correspondance n'est trouvée, ajoute la ligne "Aucun résultat trouvé"
  if (!correspondanceTrouvee) {
    suiviTbody.innerHTML += `<tr class='RAS'>
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
