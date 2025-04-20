// Set the username (you can dynamically set this from the login page or another part of your app)
const username = localStorage.getItem('username') || 'Guest';


// Update greeting message at the top
document.getElementById('greetingMessage').innerHTML = `Hi, ${username}! Pick a space that matches how you feel right now:`;

// Show welcome modal
window.onload = function () {
  const welcomeModal = document.getElementById('welcomeModal');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const closeWelcome = document.getElementById('closeWelcome');

  welcomeMessage.innerHTML = `Hi, ${username}! Greetings from the dev (Zyrus)`;
  welcomeModal.style.display = 'block';

  closeWelcome.onclick = () => {
    welcomeModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === welcomeModal) {
      welcomeModal.style.display = 'none';
    }
  };
};
// Display greeting message at the top


document.getElementById('greetingMessage').innerHTML = `Hi, ${username}! Pick a space that matches how you feel right now:`;

// Function to show the message with the username in the greeting and the specific message for the selected topic
function showMessage(message, topic) {
  // Update the greeting with username when topic is clicked
  document.getElementById('greetingMessage').innerHTML = `Hi, ${username}! You clicked on: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`;

  // Show the modal with the specific message
  const modal = document.getElementById("myModal");
  const modalContent = document.querySelector(".modal-content");

  modal.style.display = "block";  // Open the modal
  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <p>${message}</p>
  `;

  // Close the modal when the user clicks the "x"
  const closeModal = document.querySelector(".close");
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  // Also close the modal if the user clicks anywhere outside the modal
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

const musicBtn = document.getElementById('music-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const bgMusic = document.getElementById('bg-music');

let isPlaying = false;

const playlist = [
  '/music/[SPOTDOWNLOADER.COM] blue.mp3',
  '/music/[SPOTDOWNLOADER.COM] Ikaw Lang Patutunguhan.mp3',
  '/music/[SPOTDOWNLOADER.COM] Leonora.mp3'
];

let currentTrack = 0;

function loadTrack(index) {
  bgMusic.src = playlist[index];
  if (isPlaying) {
    bgMusic.play();
  }
}

function togglePlay() {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = 'Play';
  } else {
    bgMusic.play();
    musicBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
}

musicBtn.addEventListener('click', togglePlay);

prevBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  if (!isPlaying) togglePlay();
});

nextBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  if (!isPlaying) togglePlay();
});

// Auto play next song when current ends
bgMusic.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  bgMusic.play(); // play automatically
});

// Initial load
loadTrack(currentTrack);

window.onload = function () {
  // Welcome Modal
  const welcomeModal = document.getElementById('welcomeModal');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const closeWelcome = document.getElementById('closeWelcome');
  welcomeMessage.innerHTML = `Hi, ${username}! Greetings from the dev (Zyrus)`;
  welcomeModal.style.display = 'block';
  closeWelcome.onclick = () => welcomeModal.style.display = 'none';
  window.onclick = function (event) {
    if (event.target === welcomeModal || event.target === modal) {
      welcomeModal.style.display = 'none';
      modal.style.display = 'none';
    }
  };

  // Countdown Button
  const btn = document.getElementById('countdownBtn');
  const countdownSeconds = 10000000;
  const key = 'countdownEndTime';
  btn.disabled = true;
  btn.style.backgroundColor = 'grey';
  btn.style.cursor = 'not-allowed';

  let endTime = parseInt(localStorage.getItem(key));

const now = Date.now();
if (!endTime || endTime <= now) {
  endTime = now + countdownSeconds * 1000;
  localStorage.setItem(key, endTime);
}

  const interval = setInterval(() => {
    const now = Date.now();
    const remaining = Math.floor((endTime - now) / 1000);
    if (remaining > 0) {
      btn.textContent = `don't mind this.. ${remaining}s`;
    } else {
      clearInterval(interval);
      btn.textContent = 'Go to Next Page';
      btn.disabled = false;
      btn.style.backgroundColor = '#4CAF50';
      btn.style.cursor = 'pointer';
      btn.onclick = () => window.location.href = 'anotherpage.html';
    }
  }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
  // Admin password
  const adminPassword = "letmein";  

  // Admin button event
  const adminButton = document.getElementById('adminToggle');
  if (adminButton) {
    adminButton.onclick = function (e) {
      e.preventDefault(); // Prevents the default action (in case it's a link)

      // Prompt the user for the admin password
      const input = prompt("Enter admin password:");

      // Check if the entered password is correct
      if (input === adminPassword) {
        // Show the admin panel if the password is correct
        document.getElementById('adminPanel').style.display = 'block';  
      } else {
        alert("Incorrect password."); // Alert the user if the password is incorrect
      }
    };
  } else {
    console.error('Admin button not found!');
  }
});

function resetCountdown() {
  clearInterval(countdownInterval); // stop the current countdown
  countdownValue = 60; // reset the value
  document.getElementById("countdownDisplay").textContent = countdownValue;
  document.getElementById("messageDisplay").textContent = ""; // clear any message
  startCountdown(); // restart the countdown
}

if (input === adminPassword) {
  console.log("Password correct, displaying admin panel...");
  document.getElementById('adminPanel').style.display = 'block';  
} else {
  console.log("Incorrect password entered.");
  alert("Incorrect password.");
}