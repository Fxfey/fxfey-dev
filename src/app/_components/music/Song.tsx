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

export default function SpotifyComponent() {
  const [songData, setSongData] = useState<SongData | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      const res = await fetch('/api/music');
      const data = await res.json();
      setSongData(data);
      console.log(data);
    };

    fetchSpotifyData();
  }, []);

  return (
    <div>
      {songData ? (
        <>
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
                <p>
                  {songData.artists.map((artist) => artist.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
