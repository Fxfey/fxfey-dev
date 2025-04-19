import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GameComponentID {
  gameID: string;
}

type SingleStat = {
  icon: string;
  label: string;
  value: string | number;
};

type Stats = {
  [key: string]: SingleStat;
};

type GameData = {
  game_id: string;
  game_name: string;
  game_banner: string;
  game_stats: Stats;
};

function renderGameStats(gameStats: Stats) {
  if (!gameStats) {
    return <p className="text-sm mt-1.5">No stats available for this game.</p>;
  }

  return (
    <div className="mt-2 space-y-2 pb-10">
      {Object.entries(gameStats).map(([key, stat]) => {
        let formattedValue =
          typeof stat.value === 'number'
            ? stat.value.toLocaleString()
            : stat.value;

        if (key === 'total_time_played') {
          // convert to hours
          const hours = Number(stat.value) / 3600;
          formattedValue = Math.trunc(hours) + ' Hours';
        } else if (key === 'total_money_earned') {
          // convert to currency
          formattedValue = '$' + formattedValue;
        }

        return (
          <div key={key} className="flex justify-between gap-2">
            <div>
              {/* TODO icon */}
              <span className="font-medium text-sm">{stat.label}:</span>
            </div>
            <span className="text-sm text-right">{formattedValue}</span>
          </div>
        );
      })}
    </div>
  );
}
export default function GameComponent({ gameID }: Readonly<GameComponentID>) {
  const [gameData, setGameData] = useState<GameData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchGameData = async () => {
      try {
        const response = await fetch('/api/steam');

        if (!response.ok) {
          throw new Error(`Failed to fetch game data: ${response.status}`);
        }

        const data = await response.json();
        setGameData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  if (loading) return <div>Loading game data...</div>;
  if (!gameData) return <div>Failed to load games.</div>;

  const requestedGame = gameData.find((item) => item.game_id === gameID);
  console.log(requestedGame);

  if (requestedGame) {
    return (
      <div className="h-full">
        <p className="text-lg font-bold mb-0.5">{requestedGame.game_name}</p>
        <Image
          src={requestedGame.game_banner}
          width={1000}
          height={1000}
          alt="game banner"
          className="w-full rounded-sm"
        />
        {renderGameStats(requestedGame?.game_stats)}
      </div>
    );
  }
}
