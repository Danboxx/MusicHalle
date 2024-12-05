fetch("data.json")
.then(rep=>{
    return rep.json()
})
.then(donnee=>{
    console.log(donnee)
    afficheInfos(donnee)
    // j'affiche les produits
    // donnee.produits est un tableau
    //je boucle sur le tableau et pour chacun des produits : je l'affiche
    donnee.produits.forEach(produits => {
        afficheUnProduit(produits)
    
    donnee.services.forEach(services)
        afficheUnService(services)
    });
})
function afficheInfos(info){
    document.querySelector("#nomEntreprise").innerHTML = info.nomEntreprise
}

function afficheUnProduit(p){
    // ROle: affiche un produit dans la div qui a l'id "produits"
    //parametre : p, le produit à afficher
    // retour rien
    console.log(p.nom)
    console.log(p.description)
    console.log(p.imageurl)
    let template = `<div class="card">
            <img src="${p.imageurl}" alt="">
            <h4>${p.nom}</h4>
            <p>${p.description}</p>
        </div>`
    document.querySelector("#produits").innerHTML += template
}

function afficheUnService(p){
    // ROle: affiche un service dans la div qui a l'id "services"
    //parametre : p, le service à afficher
    // retour rien
    console.log(p.nom)
    console.log(p.description)
    console.log(p.imageurl)
    let template = `<div class="card>"
            <img src="${p.imageurl}" alt="">
            <h4>${p.nom}</h4>
            <p>${p.description}</p>
        </div>`
    document.querySelector("#services)").innerHTML += template
}