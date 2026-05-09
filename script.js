// Collapsible cards
document.querySelectorAll('.card').forEach(card => {
  const header = card.querySelector('.card-header');
  const content = card.querySelector('.card-content');
  const icon = card.querySelector('.toggle-icon');

  header.addEventListener('click', () => {
    content.classList.toggle('show');
    if (content.classList.contains('show')) {
      icon.textContent = '−';
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.textContent = '+';
    }
  });
});

// Elevator pitch video placeholder
const recordBtn = document.getElementById('recordBtn');
const videoContainer = document.getElementById('videoContainer');
const pitchVideo = document.getElementById('pitchVideo');

recordBtn.addEventListener('click', () => {
  if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
    videoContainer.style.display = 'block';
    recordBtn.innerHTML = '<i class="fas fa-video"></i> Hide video preview';
    // For now we show a placeholder message.
    // Next week you can replace the video source with your actual recorded file:
    // pitchVideo.src = "pitch_recording.mp4";
  } else {
    videoContainer.style.display = 'none';
    recordBtn.innerHTML = '<i class="fas fa-video"></i> Watch my pitch';
  }
});