import { useEffect, useState } from 'react';
import Image from 'next/image';

type Artist = {
  name: string;
};

type Image = {
  url: string;
  height?: number;
  width?: number;
};

type SongData = {
  song_name: string;
  album_name: string;
  artists: Artist[];
  cover_image: Image[];
};

type RecentSongs = RecentSong[];

type RecentSong = {
  artists: Artist[];
  cover_image: Image[];
  song_name: string;
};

export default function SpotifyComponent() {
  const [songData, setSongData] = useState<SongData | null>(null);
  const [recentSongs, setRecentSongs] = useState<RecentSongs | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      const res = await fetch('/api/music');
      const data = await res.json();
      if (data.song_name && data.album_name) {
        setSongData(data);
      } else {
        setRecentSongs(data);
      }
    };

    fetchSpotifyData();
  }, []);

  function renderNowPlaying(songData: SongData) {
    return (
      <>
        <div className="flex items-center">
          <h3>Music</h3>
          <div className="relative animate-bounce ml-auto h-3 w-3 bg-green-600/80 rounded-sm group">
            <span className="absolute bg-text-base text-sm text-center p-1 rounded-sm w-36 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Im listening to this right now!
            </span>
          </div>
        </div>
        <p>Currently listening to:</p>
        <div className="relative w-full flex overflow-hidden rounded-sm">
          <div
            className="absolute inset-0 bg-center bg-cover rounded-sm blur-sm scale-115 opacity-50"
            style={{
              backgroundImage: `url('${songData.cover_image[0].url}')`,
            }}
          ></div>
          <div className="z-10 flex">
            <Image
              alt="Spotify cover art"
              src={songData.cover_image[0].url}
              width={100}
              height={100}
              className="m-2 rounded-md"
            ></Image>
            <div className="my-2 flex flex-col justify-center">
              <p className="font-bold stroke-1">{songData.song_name}</p>
              <p>{songData.artists.map((artist) => artist.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderRecentSongs(recentSongs: RecentSongs) {
    return (
      <div>
        <div className="flex items-center">
          <h3>Music</h3>
          <div className="relative animate-bounce ml-auto h-3 w-3 bg-red-400/80 rounded-sm z-20 group">
            <span className="absolute bg-text-base text-sm text-center p-1 rounded-sm w-36 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              I{"'"}m not currently listening to any music.
            </span>
          </div>
        </div>
        <p className="mb-2">Recently played:</p>
        <div className="flex justify-evenly gap-4">
          {recentSongs.map((song: RecentSong) => (
            <div
              key={song.song_name}
              className="relative w-1/3 flex overflow-hidden rounded-sm 2xl:flex-1"
            >
              <div
                className="absolute inset-0 bg-center bg-cover rounded-sm blur-sm scale-115 opacity-50"
                style={{
                  backgroundImage: `url('${song.cover_image[0].url}')`,
                }}
              ></div>
              <div className="z-10 flex flex-col items-center w-full">
                <Image
                  alt="Spotify cover art"
                  src={song.cover_image[0].url}
                  width={100}
                  height={100}
                  className="m-2 2xl:mx-auto 2xl:mt-2 rounded-md"
                ></Image>
                <div className="2xl:block m-2 flex flex-col text-center justify-center">
                  <p className="font-bold stroke-1">{song.song_name}</p>
                  <p>
                    {song.artists
                      .map((artist: Artist) => artist.name)
                      .join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  let spotifyOutput;

  if (songData) {
    spotifyOutput = renderNowPlaying(songData);
  } else if (recentSongs) {
    spotifyOutput = renderRecentSongs(recentSongs);
  } else {
    spotifyOutput = <p>Loading...</p>;
  }

  return <div>{spotifyOutput}</div>;
}
