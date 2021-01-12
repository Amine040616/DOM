let boutonPlus = Array.from(document.getElementsByClassName('plus'));
for (let i = 0; i < boutonPlus.length; i++) {
    boutonPlus[i].addEventListener('click', function () {
        boutonPlus[i].previousElementSibling.innerText++;
        leTotale ();
    });

}


let boutonMoins = Array.from(document.getElementsByClassName('minus'));
for (let i=0; i<boutonMoins.length; i++){
    boutonMoins[i].addEventListener('click', function () {
        if(boutonMoins[i].nextElementSibling.innerText>0){
        boutonMoins[i].nextElementSibling.innerText--;}
        leTotale ();
    });

}

let boutonLike = Array.from(document.getElementsByClassName('liko'));
for(let i =0; i<boutonLike.length; i++){
    boutonLike[i].addEventListener('click', function(){
        boutonLike[i].src = "./img/icons8-love.svg";
        boutonLike[i].nextElementSibling.innerText++;
    })
}

let boutonDelete = Array.from(document.getElementsByClassName('delito'));
for(let i = 0; i<boutonDelete.length; i++){
    boutonDelete[i].addEventListener('click', function (){
        boutonDelete[i].parentElement.remove();
        leTotale ();
    });

}

function leTotale (){
    let prix = document.getElementsByClassName('pu');
    let qte = document.getElementsByClassName('quantit');
    let somme = 0;
    for(let i = 0 ; i < prix.length ; i++){
        somme += prix[i].innerText * qte[i].innerText;
        console.log(somme);
    }
    document.getElementById('totalPrice').innerText = somme;
}