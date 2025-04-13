import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GameComponent() {
  const [GameData, setGameData] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      const res = await fetch('/api/steam');
      const data = await res.json();
      console.log(data);
      // setGameData(data);
    };

    fetchSpotifyData();
  }, []);

  return <div>beep</div>;
}
