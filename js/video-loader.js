class YouTubeLoader {
    constructor() {
        this.initializeVideoContainers();
        this.setupIntersectionObserver();
    }

    initializeVideoContainers() {
        document.querySelectorAll('.video-container[data-youtube]').forEach(container => {
            const videoId = container.dataset.youtube;
            this.createThumbnail(container, videoId);
        });
    }

    createThumbnail(container, videoId) {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'video-thumbnail';
        thumbnail.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`;
        
        const playButton = document.createElement('div');
        playButton.className = 'play-button';
        
        thumbnail.appendChild(playButton);
        container.appendChild(thumbnail);

        thumbnail.addEventListener('click', () => this.loadVideo(container, videoId));
    }

    loadVideo(container, videoId) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`);
        
        container.innerHTML = '';
        container.appendChild(iframe);
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.video-container').forEach(container => {
            observer.observe(container);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new YouTubeLoader();
});
