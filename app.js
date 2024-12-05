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
    });
    donnee.services.forEach(service => {
        afficheUnService(service)
    });
    donnee.temoignages.forEach(temoignage => {
        afficheUnTemoignage(temoignage)
    });
    
})
function afficheInfos(info){
    document.querySelector("#nomEntreprise").innerHTML = info.nomEntreprise
}

function afficheUnProduit(p){
    // Role: affiche un produit dans la div qui a l'id produits
    // parametre : p, le produit à afficher
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
    // Role: affiche un service dans la div qui a l'id "services"
    // parametre : p, le service à afficher
    // retour rien
    console.log(p.nom)
    console.log(p.description)
    console.log(p.imageurl)
    let template = `<div class="card>"
            <img src="${p.imageurl}" alt="">
            <h4>${p.nom}</h4>
            <p>${p.description}</p>
        </div>`
    document.querySelector("#services").innerHTML += template
}

function afficheUnTemoignage(p){
    // Role: affiche un temoignage dans la div qui a l'id "temoignage"
    // parametre : p, le temoignage à afficher
    // retour rien
    console.log(p.prenom)
    console.log(p.prestation)
    console.log(p.commentaire)
    console.log(p.note)
    let template = `<div class="card>"
            <h4>${p.prenom}</h4>
            <p>${p.prestation}</p>
            <p>${p.commentaire}</p>
            <p>${etoile(p.note)}</p>
        </div>`
    document.querySelector("#temoignages").innerHTML += template
}

function etoile(note) {
    return "★".repeat(note) + "☆".repeat(5-note)
}