//Dette er udviklet af multimediedesignstuderende Johanne Vorre fra erhvervsakademi Dania i Skive. Koden er fremstillet i forbindelse med afsluttende hovedopgave sommeren 2019

//Først laves en variabel, der sætter slideIndex til at have værdien 1.
var slideIndex = 1;
showSlides(slideIndex);



//Der laves en funktion med navnet plusSlides, der beskriver at plusSlides med en uspecificeret værdi er showSlides med slideIndex+n, altså slideIndex plus et eller andet tal
function plusSlides(n) {
    showSlides(slideIndex += n);
}



//laver en funktion, der hedder currentSlide. Den har til formål at vise det seneste slide. Det kan vi se, fordi den viser variablen showSlides
function currentSlide(n) {
    showSlides(slideIndex = n);
}


//Vi laver en funktion, der som det første indholder tre variabler. Den leder efter det i dokumentet, der har klasserne som 'mySlides' og 'dot'
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
//n bruges for ikke at skrive et specifikt tal, så vi kan trykke uendeligt hen i billederne
//slides.lenght -> lenght af 'slides', som er "mySlides", der er vores billeder.
//Hvis n er større end slides.length, så skal slideIndex have samme værdi som 1. 
//Og hvis n er mindre end 1, så får slideIndex samme værdi som slides.length.
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
// der sættes gang i en for-løkke, der kører, så længe i har værdien af 0 og indtil værdien er mindre end slides.length. 
//Efter hver runde, lægges ++, altså 1, til værdien af i.
//Det kører altså kun én gang, fordi der lægges 1 til efter hver runde.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
//Denne forløkke har til formål at ændre på indikatorknapperne i bunden
//For-løkken kører så længe i har værdien af 0, og indtil værdien er mindre end dots.length.
//Efter hver runde lægges 1 til værdien af i, og derfor kører denne for-løkke også kun én gang.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
