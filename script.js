const mainBtn = document.querySelector('.mobile-nav-btn');
const headerSelect = document.querySelector('.header-content');

mainBtn.addEventListener("click", function() {
    headerSelect.classList.toggle('active');
})

