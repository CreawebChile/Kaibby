document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const arrow = item.querySelector('.accordion-arrow');

        header.addEventListener('click', () => {
            const isActive = content.classList.contains('active');

            // Cerrar todos los acordeones
            accordionItems.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.accordion-content');
                const otherArrow = otherItem.querySelector('.accordion-arrow');
                otherContent.classList.remove('active');
                otherArrow.classList.remove('active');
            });

            // Abrir/cerrar el acordeón actual
            if (!isActive) {
                content.classList.add('active');
                arrow.classList.add('active');
            }
        });
    });
});
