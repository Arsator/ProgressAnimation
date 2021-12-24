const progress = document.getElementById('progress-line');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll(".circle");

let curActive = 1;
nextBtn.addEventListener('click', () => {
    curActive++;
    if(curActive > circles.length) {
        curActive = circles.length;
    }

    updateState();
});

prevBtn.addEventListener('click', () => {
    curActive--;
    if(curActive < 1) {
        curActive = 1;
    }

    updateState();
})

function updateState() {
    circles.forEach((circle, index) => {
        if(index < curActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = ((curActive - 1) / (circles.length - 1) * 100) + "%";
    
    if(curActive === circles.length) {
        nextBtn.disabled = true;
    }
    else if(curActive === 1) {
        prevBtn.disabled = true;
    }
    else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
}