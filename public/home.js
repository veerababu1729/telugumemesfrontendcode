document.addEventListener('DOMContentLoaded', () => {
  fetch('https://telugumemesbackend-v2-render-service.onrender.com/api/videos')
    .then(response => response.json())
    .then(videos => {
      const videoList = document.getElementById('video-list');
      videoList.innerHTML = videos.map(video => `
        <div class="video">
          <h2>${video.name}</h2>
          <iframe src="${video.previewLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
          <a href="${video.downloadLink}" class="download-button" download="${video.name}">Download</a>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
    });
});


// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mobile-menu');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
