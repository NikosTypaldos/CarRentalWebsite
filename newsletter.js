const closeBtn = document.querySelector('.closeBtn');
const newsLetter = document.querySelector('.newsletter');
const subscribeBtn = document.querySelector('.subscribe');

window.addEventListener("load", () => {
    
    setTimeout(function() {
        newsLetter.classList.add('show');
    }, 1000);

    subscribeBtn.onclick = () => {
        subscribeBtn.classList.add("success");
        subscribeBtn.innerHTML = "Thank you for subscribing!";
        setTimeout(function() {
            newsLetter.classList.remove('show');
        }
        ,2000)
    }

    closeBtn.onclick = () => {
        newsLetter.classList.remove('show');
    }
    
}) 
