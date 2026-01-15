document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('main-search');
    const articles = document.querySelectorAll('.news-item');
    const filters = document.querySelectorAll('.nav-link');

    // 1. Fungsi Pencarian
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        articles.forEach(article => {
            const text = article.innerText.toLowerCase();
            article.style.display = text.includes(query) ? 'flex' : 'none';
            // Gunakan 'flex' atau 'block' tergantung struktur
            if (article.classList.contains('lg:col-span-8')) article.style.display = text.includes(query) ? 'block' : 'none';
        });
    });

    // 2. Fungsi Filter Kategori
    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            const category = filter.getAttribute('data-filter');
            
            articles.forEach(article => {
                const artCat = article.getAttribute('data-category');
                if (category === 'all' || artCat === category) {
                    article.style.opacity = '1';
                    article.style.pointerEvents = 'auto';
                    article.style.display = 'flex'; // Default
                    if (article.classList.contains('lg:col-span-8')) article.style.display = 'block';
                } else {
                    article.style.opacity = '0';
                    article.style.pointerEvents = 'none';
                    article.style.display = 'none';
                }
            });
        });
    });
});