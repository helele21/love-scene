// Animated hearts (now with scaled-aware positioning)
const heartContainer = document.querySelector('.heart-container');
for (let i = 0; i < 40; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = 12 + Math.random() * 16;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = `${40 + Math.random() * 60}px`; // start from bottom-ish
  heart.style.animationDelay = `${Math.random() * 8}s`;
  heart.style.opacity = (0.3 + Math.random() * 0.4).toFixed(2);

  heartContainer.appendChild(heart);
}

// BF walk animation toward GF
const bf = document.getElementById('bf');
const targetX = window.innerWidth / 2.5 * 0.6 - 64;

let x = 0;
function walk() {
  if (x < targetX) {
    x += 1.5;
    bf.style.left = `${x}px`;
    requestAnimationFrame(walk);
  }
}
walk();

// Play → fullscreen video
const video = document.getElementById('video');
const playLabel = document.querySelector('.play-label');

playLabel.addEventListener('click', async () => {
  try {
    playLabel.style.display = 'none';
    document.body.requestFullscreen?.();
    video.style.display = 'block';
    await video.play();
  } catch (err) {
    alert('Could not play video: ' + err.message);
  }
});
