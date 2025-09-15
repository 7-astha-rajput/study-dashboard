import React from "react";

function Music() {
  return (
    <div>
      <h2>🎵 Music Player</h2>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Music;
