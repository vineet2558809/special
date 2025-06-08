let userName = null;

// All compliments
const compliments = [
    "You are the heartbeat of my happiness! 💓 Every moment with you is a treasure. 💎",
    "Your smile is my favorite sunrise. 🌅💕",
    "You fill my world with endless love and laughter! 😍😂💖",
    "You are my dream come true and my forever person! 🥰🌈",
    "With you, every day feels like a fairytale. 🏰💗✨",
    "Your kindness wraps my soul in a warm hug. 🤗💞",
    "You are the magic in my ordinary days! ✨💘",
    "My love for you grows stronger with every heartbeat. 💗🔗",
    "You are my sunshine after every storm. ☀️🌧️❤️",
    "You make my heart dance with joy! 💃🕺💖",
    "You are my favorite chapter in the story of life. 📖💝",
    "You are loved more than words can ever say! 🥹❣️",
    "You are the reason my heart sings! 🎶💓",
    "You are my forever and always. ♾️💑",
    "You are the sparkle in my eyes and the joy in my heart! ✨😍",
    "You are the melody in my life's song! 🎵💖",
    "You make every moment magical! 🪄💞",
    "You are my sweetest adventure! 🌍💘",
    "You are the wish my heart made! 🌠💝",
    "You are love, laughter, and light all in one! 🌟💕"
];

// Copy and shuffle compliments for unique display
let complimentsQueue = [];

function shuffleCompliments() {
    complimentsQueue = compliments.slice();
    for (let i = complimentsQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [complimentsQueue[i], complimentsQueue[j]] = [complimentsQueue[j], complimentsQueue[i]];
    }
}

function showSpecialMessage() {
    if (!userName) {
        userName = prompt("What's your name?");
        if (userName) {
            document.getElementById('greeting').textContent = `💖 Hey ${userName}! 💖`;
            document.getElementById('greeting').style.display = "block";
            document.getElementById('greeting').classList.add('pop-greeting');
            setTimeout(() => {
                document.getElementById('greeting').classList.remove('pop-greeting');
            }, 1200);
        }
    }
    // Shuffle if all compliments have been shown
    if (complimentsQueue.length === 0) {
        shuffleCompliments();
    }
    const compliment = complimentsQueue.pop();
    let message;
    if (userName) {
        message = `❤️ ${compliment} ❤️`;
    } else {
        message = `You are special, no matter what! ${compliment}`;
    }
    document.getElementById('message').textContent = message;
    launchConfetti();
    emojiRain(); // Add this line for emoji animation
}
// On page load, hide the greeting and shuffle compliments
window.onload = function() {
    document.getElementById('greeting').style.display = "none";
    shuffleCompliments();
}

// Confetti animation
function launchConfetti() {
    const colors = ['#ffb3c6', '#b5ead7', '#ffdac1', '#c7ceea', '#f6dfeb', '#f7b7a3', '#ff7eb9', '#fff0f6'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-2vh';
        confetti.style.width = '16px';
        confetti.style.height = '16px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = 0.85;
        confetti.style.zIndex = 9999;
        confetti.style.transition = 'top 2.5s linear, left 1.5s linear';
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.style.top = '100vh';
            confetti.style.left = (Math.random() * 100) + 'vw';
        }, 10);
        setTimeout(() => {
            confetti.remove();
        }, 2600);
    }
}function emojiRain() {
    const emojis = ["❤️", "💕", "💖", "💗", "💓", "💞", "💝", "💘", "💟", "❣️", "😍", "🥰", "😘", "😻", "💋", "💑", "💐", "🫶"];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const emoji = document.createElement('span');
            emoji.className = 'emoji-float';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 90 + 'vw';
            emoji.style.bottom = '-40px';
            document.getElementById('emoji-rain').appendChild(emoji);
            setTimeout(() => emoji.remove(), 3000);
        }, i * 200);
    }
}