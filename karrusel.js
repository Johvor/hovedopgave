//Først laves en variabel, der sætter slideIndex til at have værdien 1.
var slideIndex = 1;
        showSlides(slideIndex);

//Der laves en funktion med navnet plusSlides
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
 //laver en funktion, der hedder currentSlide. Den har til formål at vise det seneste slide. Det kan vi se, fordi den vise variablen showSlides
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
//Vi laver en funktion, der som det første indholder tre variabler. Den leder efter det i dokumentet, der har klasserne som 'mySlides' og 'dot'
//n bruges for ikke at skrive et specifikt tal, så vi kan trykke uendeligt hen i billederne
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }