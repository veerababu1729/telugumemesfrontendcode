document.addEventListener('DOMContentLoaded', function() {
  const uploadButton = document.getElementById('upload_button');
  const fileInput = document.getElementById('file_input');
  const videoPlayer = document.getElementById('video-player');

  uploadButton.addEventListener('click', function() {
    const file = fileInput.files[0];
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://telugumemesbackend-v2-render-service.onrender.com/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('File uploaded successfully:', data);
      alert('File uploaded successfully');
      displayFiles();
    })
    .catch(error => {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    });
  });

  function displayFiles() {
    fetch('https://telugumemesbackend-v2-render-service.onrender.com/files')
    .then(response => response.json())
    .then(files => {
      const fileList = document.getElementById('file-list');
      fileList.innerHTML = files.map(file => 
        `<li>
          <a href="${file.webViewLink}" target="_blank">${file.name}</a>
          <button onclick="playVideo('${file.webViewLink}')">Play</button>
        </li>`
      ).join('');
    })
    .catch(error => {
      console.error('Error fetching files:', error);
    });
  }

  function playVideo(link) {
    const embedLink = link.replace('/view?usp=sharing', '/preview');
    videoPlayer.src = embedLink;
  }

  displayFiles(); 
});
