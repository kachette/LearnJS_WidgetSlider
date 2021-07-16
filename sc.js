const slider = document.querySelector('.slider-container'),
    slides = Array.from(document.querySelectorAll('.slide'))


let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animtaionId = 0,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage, addEventListener('dragstart', (e) => e.preventDefault())

    //touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touched', touchEnd)

    //mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

function touchStart(index) {
    return function(event) {
        console.log('start')
    }
}

function touchEnd(event) {
    console.log('end')
}

function touchMove() {
    console.log('move')
}