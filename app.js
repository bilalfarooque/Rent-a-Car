document.addEventListener("DOMContentLoaded", function() {
    const cardCarousel = document.querySelector(".card-carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    // Function to move to the previous card
    function showPreviousSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cardCarousel.childElementCount - 1;
        }
        updateCarousel();
    }

    // Function to move to the next card
    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= cardCarousel.childElementCount) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    // Function to update the carousel's position
    function updateCarousel() {
        const translateValue = -currentIndex * 100;
        cardCarousel.style.transform = `translateX(${translateValue}%)`;
    }

    // Attach event listeners to the previous and next buttons
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
});
