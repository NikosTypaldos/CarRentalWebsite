const closeBtn = document.querySelector('.closeBtn');
const newsLetter = document.querySelector('.newsletter');

window.addEventListener("load", () => {
    
    setTimeout(function() {
        newsLetter.classList.add('show');
    }, 2000);

    closeBtn.onclick = () => {
            newsLetter.classList.remove('show');
    }
    
}) 
