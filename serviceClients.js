//====================================== editer profilt= ==============================//
let getProfilt = localStorage.getItem('storedImage');
let modifiPassword = document.getElementById('modifiPassword');
let mdpSetting = document.querySelector('.mdpSetting');
let profilSiebarre = document.getElementById('profilSiebarre')
profilSiebarre.src = getProfilt; 
if (localStorage.getItem('storedImage') === null) {
    profilSiebarre.src ="images/avatar.jpg";
    
}