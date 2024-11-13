const player = document.getElementById('player');
const filepick = document.getElementById('file');
const pr = document.getElementById('pr');
const song = document.getElementById('id');

function change() {
  const file = filepick.files.item(0);

  if (file && file.type === 'audio/mpeg') {
    const audioURL = URL.createObjectURL(file);
    player.src = audioURL;
    song.innerHTML = file.name;

    player.play();

    player.onloadedmetadata = () => {
      pr.max = player.duration;
    };
  } else {
    alert('Please pick a valid audio file (.mp3)');
  }
}

const interval = setInterval(function() {
  if (!isNaN(player.currentTime)) {
    pr.value = player.currentTime;
  }
}, 1000);

pr.addEventListener('input', () => {
  player.currentTime = pr.value;
});

function adjustVolume(value) {
  player.volume = Math.min(Math.max(player.volume + value, 0), 1);
}
