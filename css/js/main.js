// 
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

// commit 7

// on attend que la page html  soit completement chargee avant de lancer le script
document.addEventListener("DOMContentLoaded",  ()  =>{

    // selection de tous les elements qui ont la class statistique
    const counters = document.querySelectorAll('.statistique');

    // plus le chiffre est grand plus l'animation est lente
    const speed = 1500;

    // fonction principal qui va animer le chiffre du compteur 
    const animateCounter = (counter) => {
        const value= +counter.getAttribute('data-target');
        const data= +counter.innerText;
        const time= value / speed;
        if (data< value ) {

            // arrondit au superieur et ajoute la valeur calculée
            counter.innerText= Math.ceil(data + time);

            // settimeout permet de definir un minuteur qui execute une fonction donné apres la fin du delai indiqué
            setTimeout(()  => animateCounter(counter), 1);
        }else{
            counter.innerText= value
        }
    };

    // intersection observer permet d'observer de maniere asynchrone l'evolution de l'intersection d'un element
    const observer= new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const counter= entry.target;
                animateCounter(counter)
                observer.unobserve(counter)
            }
        });
    }, {
        // la fonction sera declenchée lorsque 20% de l'element sera visible à l'ecran
        threshold:0.2
    });

    // parcourir
    counters.forEach(counter => observer.observe(counter));

    // section de tous les sections à animer
    const fadeSections = document.querySelectorAll('.fade-in-section');

    // creation de l'observateur pour les sections
    const fadeObserver= new IntersectionObserver((entries,fadeObserver)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
                fadeObserver.unobserve(entry.target);
            }
        });
        
    } ,{
        // declenche des le debut de l'apparition
        threshold:0.1
    });

    // lancer l'observation sur chaque section
    fadeSections.forEach(section =>{
        fadeObserver.observe(section);
    })
});
// commit8

// FILTRAGE PAR CATEGORIE
 document.addEventListener('DOMContentLoaded', () =>{
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    buttons.forEach(button =>{
        button.addEventListener('click', () =>{
            // recuperr la categorie du bouton clique
            const target = button.getAttribute('data-target');
            // filtre les cartes de freelances
            cards.forEach(card =>{
                const category = card.getAttribute('data-category');
                if(target === 'all' || category === target){
                    card.style.display = 'block';

                }else{
                    card.style.display='none'
                }
            } );
        });
    });
 });

// validation du formulaire

document.addEventListener('DOMContentLoaded', function(){
    // recuperation des element
    const form= document.getElementById('form');
    const nom= document.getElementById('nom');
     const prenom= document.getElementById('prenom');
    const email= document.getElementById('email');

    // recuperation des elements de messages erreur
    const nomError= document.getElementById('nomError');
    const prenomErrornom= document.getElementById('prenomError');
     const emailError= document.getElementById('emailError');
    const messageError= document.getElementById('messageError');

    if(form){
        form.addEventListener('submit', function(event){
        let valid = true;
        // reinitialisation des mess d'erreur à chaque tentative
        document.getElementById('nomError').textContent='';
         document.getElementById('prenomError').textContent='';
          document.getElementById('emailError').textContent='';

        //   validation du nom
        if(nom.value.trim() == '')
            document.getElementById('nomError').textContent='Le nom est requis.';
            valid= false;

        // validation du prenom
         if(prenom.value.trim() == '')
            document.getElementById('prenomError').textContent='Le prenom est requis.';
            valid= false;

        // validation de l'email
         if(!email.value.includes('@')){
            document.getElementById('emailError').textContent='email invalide.';
            valid= false;
         }

         if(message.value.trim().length < 20){
            document.getElementById('messageError').textContent='Le message doit contenir au moins 20 caracteres';
         }

        //  empeche la soumission du formulaire
        if(!valid){
            event.preventDefault();
        }else{
           alert('Inscription reussie')
        }
    });
    };

    
});

