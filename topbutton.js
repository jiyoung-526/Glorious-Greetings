const scrollTopButton = document.getElementById('scrollTopButton');

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); //부드럽게 스크롤
});
