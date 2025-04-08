document.querySelectorAll('.work-title').forEach(title => {
    title.addEventListener('mouseenter', (e) => {
        const image = e.target.getAttribute('data-image');
        const workItem = e.target.closest('.work-item');
        const imageDiv = workItem.querySelector('.work-image');
        imageDiv.style.backgroundImage = `url(${image})`;
        imageDiv.style.opacity = '1';
    });

    title.addEventListener('mouseleave', (e) => {
        const workItem = e.target.closest('.work-item');
        const imageDiv = workItem.querySelector('.work-image');
        imageDiv.style.opacity = '0';
    });
});