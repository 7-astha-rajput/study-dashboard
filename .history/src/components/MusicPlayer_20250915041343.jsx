import React, { useState } from "react";

const playlists = [
  {
    name: "Rainy Focus 1",
    url: "https://www.youtube.com/embed/3Q5f1TgG8O0?autoplay=0&loop=1",
  },
  {
    name: "Rain & Thunder",
    url: "https://www.youtube.com/embed/8vMnxJdFwUM?autoplay=0&loop=1",
  },
  {
    name: "Rain Sounds for Concentration",
    url: "https://www.youtube.com/embed/e5QF1IvkHzQ?autoplay=0&loop=1",
  },
];

export default function MusicPlayer() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-indigo-600 mb-4">🎵 Focus Music</h2>

      <div className="mb-4">
        <iframe
          width="100%"
          height="200"
          src={playlists[current].url}
          title={playlists[current].name}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex justify-center gap-2 flex-wrap">
        {playlists.map((pl, index) => (
          <button
            key={pl.name}
            onClick={() => setCurrent(index)}
            className={`px-3 py-1 rounded-xl text-white ${
              current === index ? "bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {pl.name}
          </button>
        ))}
      </div>
    </div>
  );
}
