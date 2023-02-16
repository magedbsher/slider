var myImages = Array.from(document.querySelectorAll(".item img"));
var lighrBoxContainer = document.querySelector("#lighrBoxContainer");
var lightBox = document.querySelector("#lightBox")
var closeBtn = document.querySelector("#closeBtn")
var prevBtn = document.querySelector("#prevBtn")
var nextBtn = document.querySelector("#nextBtn")
var currentIndex = 0;




for (var i = 0; i < myImages.length; i++) {
    myImages[i].addEventListener("click", function (e) {


        var currenImage = e.target.getAttribute("src");

        currentIndex = myImages.indexOf(e.target);
        console.log(currentIndex);



        lighrBoxContainer.classList.replace("d-none", "d-flex");
        lightBox.style.backgroundImage = `url(${currenImage})`;

    })
}


closeBtn.addEventListener("click", closeSlider);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);



function closeSlider() {
    lighrBoxContainer.classList.replace("d-flex", "d-none");

}


function nextSlide(){
    currentIndex++;
    if(currentIndex >= myImages.length){
        currentIndex = 0;
    }
    myImages[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${ myImages[currentIndex].getAttribute("src")})`;
}


function prevSlide(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = myImages.length - 1;   // because the index is smaller than the length by 1
    }
    myImages[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${ myImages[currentIndex].getAttribute("src")})`;
}




document.addEventListener("keyup",function(e){
if(lighrBoxContainer.classList.contains("d-flex")){
    switch (e.key) {
    case "ArrowLeft":
        prevSlide();
        
        break;
        case "ArrowRight":
            nextSlide();
            
            break;
            case "Escape":
            closeSlider();
            
            break;
    
}
}
})