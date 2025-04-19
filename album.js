document.addEventListener("DOMContentLoaded", () => {
  // Music functionality
  const music = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");
  
  // Initialize music as paused
  music.pause();
  musicToggle.textContent = "🔇"; // Muted icon

  // Memory data
  const memories = [
    {
      id: "first-day",
      name: "first-day",
      message: "It was just supposed to be a normal day—just go to school, learn, talk with friends, and laugh. Then I saw you. I thought it was just something like everyone else, like someone who just passed by and caught my attention a little. But it's starting to get stuck in my mind, so I think it's something like love at first sight (I don't believe in it HAHAHA—or so I thought). I just said, (Nah, I’ll forget this eventually) But after days and days, I didn’t. So I started wondering who that girl was. I even considered asking my friends (same class as you), but shyness got me first. So I just forced myself to forget (I can't 😭). Then I saw you smile... It was just a heavenly feeling..",
      unlockTime: "2025-04-19T10:00:00" // 2:00 PM, April 18
    },
    {
      id: "field-trip",
      name: "grad ball/practice",
      message: "So the day of practicing for the grad ball dance came. I thought you would already have a partner, since the intel I got from my STEM friends was that a partner was required. So I just sat in the school chair quietly, thinking(Sana wala). During the first practice, I didn’t see you. It was already dark when we got to the venue, kaya tamang sabay-sabay na lang ng sayaw sa solo. I even went to the partner section, hoping you'd be there (iniisip na sana wala). Then came another day of practice—and you were there. I was so happy. Same as the other day. And whenever our eyes met, I just couldn’t help but look away as fast as I could, then act like nothing happened. I even told one of my friends while we were in the gym (Palumco), when the partner group was practicing, that I just couldn’t help but look at you. It was just like a scene from the movie Interstellar—so beautiful, yet so far away and hard to reach. But then one day, you didn’t come to practice. I didn’t even have the energy to practice either HAHA. I kept telling my friends about you: how you’re just modest in attire, how beautiful and magnificent your smile is. It’s just... kinda with me, like it became a part of my memory. Then the day of the grad ball came. I kept wondering what you’d wear. Since you always wore long skirts and long sleeves, I thought it would be the same. So after I got to the venue at Astoria’s, my first goal was to find you. Second was to eat. But throughout the event, I couldn’t catch a glimpse of you—until the very end, when you were going home. I saw you walking down the stairs wearing that mesmerizing dress. I even thought about going down and asking for your name...But I couldn’t. My shyness took over again HAHAHA.",
      unlockTime: "2025-04-19T10:00:00" // 3:00 PM
    },
    
    {
      id: "school day",
      name: "school day",
      message:"School days na walang klase, sinusulit namin ‘to ng mga kaklase ko. Mga araw ng transition na gagawin lang ang mga katrantaduhan bago mawala sa school. Then one time, kasama ko sila Rievy sa Balayong Food Court (I didn’t know the exact date). Ayun na nga, umupo kami, tapos nagshi-ship kami since may mga classmates kami na may gusto sa isa’t isa. Tapos nagkaroon ng tanong-tanongan kung sino-sino ba ‘yung may crush-crush. Ako, tahimik lang, naka-upo. Pero biglang sa’kin napunta. Ang kulit pa nila. So what did I do? First, I told them it was someone from our batch. Then I described you, long hair, modest attire. Then Rievy said the exact things I said, and I just nodded. Tapos bigla na lang siyang tumayo at nagsabi ng pangalan. And I just thought, (Oh, so that’s her name). At first, I didn’t believe it, since I really didn’t know your name yet. Then Rievy grabbed her phone and started scrolling intensely, searching for something. Then she came up to me and showed a picture of you, Grade 10 pa, moving up. Your smile was still the same, bringing out a feeling I still can’t explain. After Rievy showed it to me, I just smiled… then got teased, HAHAHA. After that, it was time to go home. On my walk back to the house, I texted Rievy, asking what your name was. And I think that was a step up, at least now I knew your name. But still... I couldn’t add you. Shyness is always by my side.",
      unlockTime: "2025-04-19T10:00:00",
    },
    
    {
      id: "christmas",
      name: "graduation/practice",
      message: "Finally, the day we’ve all been waiting for, graduation day. The night before our graduation, I was lying on my bed thinking whether I should confess or just let it fade. But I ended up falling asleep. Surprisingly, I woke up at 4 AM, and my mind suddenly became active. I decided to write a confession letter, and I finished it by 5 AM, then went back to sleep, HAHAHA. The whole morning, it kept running through my mind, when will I confess? I even messaged Rievy that I was going to do it. But in my mind, I was still undecided. Kaya tumatakbo pa rin sa isip ko, HAHAHA. Then it was time to go to the coliseum. The first thing that came to mind was to find you again, HAHAHA (sorry). But I decided to just stay in our line. Then Rievy came and dragged me to find you. I was hesitant at first, but I went along. During our journey to find you, I got distracted by a lot of friends. I took pictures with them since it might be the last time I’d see them. And then I lost Rievy. I couldn’t find her anymore, so I just went outside, bought some food, and came back to our line. When I got back, they told me that you were there, looking for someone (I know you were giving a flower someone paid for). I just said, (Sayang). Then the graduation started, and we were all in line. I kept thinking about whether I should send the letter I wrote that morning, since it might be the last time I’d see you. I stared at the send button, then one of my friends clicked it for me. I immediately turned off my data, closed my phone, and gasped for air, HAHAHA. Each student was being called, but my ears were focused only on one name, yours. That was the only name I wanted to hear. And of course, when your name was called, I cheered for you. After the event, we started taking pictures with friends and per block. Then Rievy came to me again, and we went on the second phase of trying to find you and also her crush in STEM 4. Sadly, I didn’t find you, so I just sat on one of the chairs, HAHAHA. After everything, I went to McDo. It was such a memorable and thrilling day.",
      unlockTime: "2025-04-19T10:00:00"
    }
  ];

  // DOM elements
  const memoryList = document.getElementById("memory-list");
  const messageBox = document.getElementById("memory-message");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const popup = document.getElementById("popup");
  const continueBtn = document.getElementById("continueBtn");
  const scrollableContent = document.getElementById("scrollableContent");

  // Initialize memory list
  memories.forEach(memory => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = memory.name;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const now = new Date();
      const unlockDate = new Date(memory.unlockTime);

      if (now >= unlockDate) {
        messageBox.innerHTML = `<h2>${memory.name}</h2><p>${memory.message}</p>`;
        messageBox.classList.remove("hidden");
      } else {
        const remaining = Math.ceil((unlockDate - now) / 60000); // mins left
        messageBox.innerHTML = `<p><strong>"${memory.name}"</strong> will unlock in ${remaining} minute(s). Please come back later.</p>`;
        messageBox.classList.remove("hidden");
      }
    });

    li.appendChild(link);
    memoryList.appendChild(li);
  });

  // Button functionality
  button1.addEventListener("click", function() {
    popup.style.display = 'flex';
    scrollableContent.scrollTop = 0;
    continueBtn.style.display = 'none';
    
    scrollableContent.addEventListener("scroll", function() {
      const isAtBottom = this.scrollHeight - this.scrollTop <= this.clientHeight + 1;
      continueBtn.style.display = isAtBottom ? 'inline-block' : 'none';
    });
  });

  continueBtn.addEventListener("click", function() {
    popup.style.display = 'none';
    button2.style.display = 'inline-block';
  });

  // Improved music toggle function
  function toggleMusic() {
    // First ensure we have user interaction
    if (music.paused) {
      // Try to play immediately
      const playPromise = music.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Successfully started playback
          musicToggle.textContent = "🔊"; // Speaker icon
        })
        .catch(error => {
          // Show play button to indicate music needs user interaction
          musicToggle.textContent = "▶️";
          // Add event listener for when user clicks again
          musicToggle.onclick = function() {
            music.play()
              .then(() => {
                musicToggle.textContent = "🔊";
                musicToggle.onclick = toggleMusic; // Reset to original handler
              })
              .catch(e => console.log("Playback failed:", e));
          };
        });
      }
    } else {
      music.pause();
      musicToggle.textContent = "🔇"; // Muted icon
    }
  }

  // Assign the toggle function
  musicToggle.addEventListener('click', toggleMusic);

  // Stop music when leaving page
  window.addEventListener("beforeunload", () => {
    music.pause();
    music.currentTime = 0;
  });
});