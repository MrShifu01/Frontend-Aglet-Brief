// Select all image containers
const containers = document.querySelectorAll('.image-container');

containers.forEach(container => {
    // When the mouse enters the container, play the video
    container.addEventListener('mouseover', function() {
        const video = container.querySelector('video');
        if (video) video.play();
    });

    // When the mouse leaves the container, pause the video
    container.addEventListener('mouseout', function() {
        const video = container.querySelector('video');
        if (video) video.pause();
    });
});