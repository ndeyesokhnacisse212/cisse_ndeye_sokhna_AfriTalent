// recupere le bouton html de la navbar grace à son id theme-toggle
const toggleBtn = document.getElementById('theme-toggle');

// regarde dans la memoire du navigateur localstorage s'il ya un theme enregistre
const currentTheme = localStorage.getItem('theme');

// verifie si le theme recuperer dans la memoire correspond au mode sombre(dark)
if(currentTheme == 'dark'){

    // si oui ajoute l'attribut data-theme = dark à la balise principal html du site
    document.documentElement.setAttribute('data-theme','dark');
}

// Ajoute un ecouteur d'evenement pour detecter le clic de l'utilisateur
toggleBtn.addEventListener('click', () => {

    // recupere la valeur actuelle de l'attribut data-theme sur la balise html
    let theme = document.documentElement.getAttribute('data-theme');

    // verifie si le site est actuellement affiche en mode sombre
    if (theme == 'dark'){

        // si le site etait en mode sombre supprime l'attribut pour le faire repasser en mode clair
        document.documentElement.removeAttribute('data-theme');

        // enregistre le choix light dans la memoire du navigateur pour s'en souvenir
        localStorage.setItem('theme', 'light');
    }else{

        // sinon si le site etait clair ajoute l'attribut pour activer le mode sombre
        document.documentElement.setAttribute('data-theme', 'dark');

        // enregistre le choix dark dans la memoire du navigateur pour s'en souvenir
        localStorage.setItem('theme', 'dark');
    }
})

const backToTopBtn = document.getElementById('back-to-top');

// ecoute le defilement pour afficher ou masquer le bouton
window.addEventListener('scroll', () => {

    // si l'utilisateur defile plus de 300px vers le bas
    if(window.scrollY > 300 ){

        // affiche le bouton
        backToTopBtn.classList.add('show');
    }else{
        
        // sinon cache le bouton
        backToTopBtn.classList.remove('show')
    }
})

// ecoute le click sur le bouton pour remonter tout en haut
backToTopBtn.addEventListener('click', ()  =>{
    window.scrollTo({
        top:0,

        // remonte fluide et animee
        behavior: 'smooth'
    })

} );
                    