document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const skipBtn = document.getElementById('skip-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const playlistItems = document.querySelectorAll('#playlist-list li');
  
    let currentSongIndex = 0;
  
    function playSong(index) {
      const song = playlistItems[index].getAttribute('data-src');
      audioPlayer.src = song;
      audioPlayer.play();
    }
  
    playBtn.addEventListener('click', function () {
      audioPlayer.play();
    });
  
    pauseBtn.addEventListener('click', function () {
      audioPlayer.pause();
    });
  
    skipBtn.addEventListener('click', function () {
      currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
      playSong(currentSongIndex);
    });
  
    volumeSlider.addEventListener('input', function () {
      audioPlayer.volume = volumeSlider.value / 100;
    });
  
    playlistItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        currentSongIndex = index;
        playSong(currentSongIndex);
      });
    });
  });
  