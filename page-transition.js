// smooth page transitions with diagonal wipe effect
document.addEventListener('DOMContentLoaded', () => {
    // get all internal navigation links
    const links = document.querySelectorAll('a[href^="index.html"], a[href^="about.html"], a[href^="natural-habitat.html"], a[href^="type-as-image.html"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // don't transition if it's the current page
            if (href === window.location.pathname.split('/').pop()) {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            
            // fade out current content first
            document.body.style.opacity = '0';
            
            // then trigger diagonal wipe
            setTimeout(() => {
                document.body.classList.add('page-exit');
            }, 200);
            
            // navigate after animations complete
            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
});
