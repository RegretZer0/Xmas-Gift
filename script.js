const messages = [
    "Wassup! Dabhy,",
    "Merry Christmas to you!",
    "I hope you have fun during the holidays.",
    "Well, knowing you,",
    "I know you would eat a lot,",
    "Filling that belly of yours to the brim.",
    "HAHAHAHAHAHAHAHA",
    "....",
    "Well, jokes aside,",
    "It's been quite a journey for us,",
    "You and I.",
    "When was it our first meeting?",
    "When you were trying to find a guild in Toram,",
    "And I was trying to recruit one person,",
    "'Cause they asked me to do it.",
    "AHAHAHAHAHAHAHA",
    "Was it almost or less 3 years already since that happened?",
    "Who knew that a random meeting",
    "Would lead us to where we are now,",
    "In a relationship,",
    "A boyfriend and a girlfriend,",
    "A daddy and a baby.",
    "Dabhy to Dabhy,",
    "We really call each other differently sometimes,",
    "Aren’t we?",
    "AHAHAHAHAHAHAHAHA",
    "You know,",
    "That time that I knew",
    "That you felt the same way I do about you,",
    "You know how my heart beat so fast,",
    "I literally could hear it beating.",
    "The feeling of adrenaline,",
    "Excitement,",
    "Happiness,",
    "Flowed through me like a raging wave.",
    "Really,",
    "One of the best moments of my life.",
    "Heck, I even got myself",
    "A really beautiful and cute girlfriend.",
    "I hope it's the same with you too.",
    "After that,",
    "We spend our days together,",
    "Play games,",
    "Share videos,",
    "Talk with each other,",
    "Gossip with each other,",
    "Heck, we even trash-talk other people.",
    "AHAHAHAHAHAHAHAHA",
    "Good times.",
    "Really good times.",
    "I know we’ve had some boring days",
    "Where we don’t talk that much.",
    "I know I’m not talking as much",
    "As I did in the past.",
    "Know this,",
    "It's not because of you.",
    "It's just mom and dad checking up on me.",
    "I'm just being conscious for now.",
    "I repeat,",
    "It's not because of you, okay?",
    "If you want to talk more,",
    "We’ll do it via chat. ;)",
    "I know we fight sometimes,",
    "Maybe not sometimes,",
    "‘Cause we don’t fight as much as",
    "Normal couples do in this generation.",
    "Thankfully.",
    "But hey,",
    "It's part of the process",
    "To strengthen the foundation",
    "Of our relationship.",
    "Right?",
    "Well, I'm really bad at comforting someone online.",
    "Thanks for putting up with me",
    "At that one.",
    "I’ll try to be better at it.",
    "Really, thanks a bunch.",
    ".....................",
    ".....................",
    ".....................",
    ".....................",
    "HEH,",
    "You thought that was the end?",
    "Hell nah,",
    "I still haven’t talked about YOU.",
    "Did you know that every time you laugh?",
    "That cute giggle of yours?",
    "Really puts a smile on my face.",
    "Heck, that laugh of yours makes me happy,",
    "Like a joy that shows up out of nowhere.",
    "You can make me happy with just that,",
    "Simply like that.",
    "You know that your simple actions",
    "Are cute and lovely, right?",
    "The sound of you sneezing,",
    "The way you sulk,",
    "When you're excited,",
    "When you're mad,",
    "When you're annoyed,",
    "When you call out to me,",
    "All of that,",
    "Everything you do",
    "Is cute and lovely to me.",
    "Even you,",
    "YOU,",
    "Are beautiful, cute, and lovely.",
    "I know,",
    "Sometimes there are times",
    "That I need to take it seriously,",
    "But I just can’t help feeling",
    "Like that, you know?",
    "‘Cause I love you",
    "So much,",
    "That it can’t be helped",
    "That I feel like this.",
    "I love you, Dabhy,",
    "I love you so, so, so much.",
    "Again,",
    "Merry Christmas and Happy New Year!",
    "Loving you truly,",
    "Regret_Zer0",
  ];
  
  let currentMessageIndex = 0;
  
  function showNextMessage() {
    const messageElement = document.getElementById("message");
    if (currentMessageIndex < messages.length) {
      messageElement.textContent = messages[currentMessageIndex];
      currentMessageIndex++;
      confetti();
    } else {
      messageElement.textContent = "End of the message. Merry Christmas!";
      fireworks();
    }
  }

function fireworks() {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}