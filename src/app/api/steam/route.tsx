'use server';
import { NextResponse } from 'next/server';

// Define the endpoint URLs
const STEAM_WEB_API =
  'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002';

// Fetch environment variables
const steam_key = process.env.STEAM_API_KEY ?? '';
const steam_id = process.env.STEAM_ID ?? '';

const favoriteGames = [
  '730', // CS2
  '427520', // Factorio
  '1245620', // Elden Ring
];

async function getGameStats(gameId: string) {
  const getStats = await fetch(
    STEAM_WEB_API + `/?appid=${gameId}&key=${steam_key}&steamid=${steam_id}`,
    {
      method: 'GET',
    },
  );

  const gameStats = await getStats.json();
  return {
    game_stats: gameStats.playerstats.stats,
  };
}

async function getGameDetails(gameId: string) {
  const getDetails = await fetch(
    `https://store.steampowered.com/api/appdetails?l=english&appids=${gameId}`,
    {
      method: 'GET',
    },
  );

  const gameDetails = await getDetails.json();
  return {
    game_name: gameDetails[gameId].data.name,
    game_banner: gameDetails[gameId].data.header_image,
  };
}

function handleCsStats(gameStats: object) {
  const stats = gameStats as Array<{ name: string; value: number }>;

  const findStat = (statName: string): number => {
    const stat = stats.find((item) => item.name === statName);
    return stat ? stat.value : 0;
  };

  const formattedStats = {
    game_stats: {
      total_kills: {
        icon: '<i class="fa-solid fa-skull-crossbones"></i>',
        label: 'Total Kills',
        value: findStat('total_kills'),
      },
      total_wins: {
        icon: '<i class="fa-solid fa-crown"></i>',
        label: 'Total Wins',
        value: findStat('total_wins'),
      },
      total_time_played: {
        icon: '<i class="fa-solid fa-clock"></i>',
        label: 'Total Time Played',
        value: findStat('total_time_played'),
      },
      total_money_earned: {
        icon: '<i class="fa-solid fa-dollar-sign"></i>',
        label: 'Total Money Earned',
        value: findStat('total_money_earned'),
      },
    },
  };

  return formattedStats;
}

function handleFactorioStats(gameStats: object) {
  const stats = gameStats as Array<{ name: string; value: number }>;

  const findStat = (statName: string): number => {
    const stat = stats.find((item) => item.name === statName);
    return stat ? stat.value : 0;
  };

  const formattedStats = {
    game_stats: {
      electronic_circuits_production_overall: {
        icon: '<i class="fa-solid fa-bolt"></i>',
        label: 'Total Circuits Made',
        value: findStat('electronic-circuits-production-overall'),
      },
      iron_plates_per_hour: {
        icon: '<i class="fa-solid fa-weight-hanging"></i>',
        label: 'Most Iron Plates /h',
        value: findStat('iron-plates-per-hour'),
      },
      longest_train_path: {
        icon: '<i class="fa-solid fa-train"></i>',
        label: 'Longest Train Path',
        value: findStat('longest-train-path'),
      },
    },
  };

  return formattedStats;
}

async function constructGameData() {
  const gameData: object[] = [];

  // Use Promise.all to wait for all async operations to complete
  const promises = favoriteGames.map(async (gameId) => {
    const gameDetails = await getGameDetails(gameId);
    const gameStats = await getGameStats(gameId);

    const constructedGameStats: object[] = [];

    // Handle stats
    if (gameId === '730') {
      constructedGameStats.push(handleCsStats(gameStats.game_stats));
    } else if (gameId === '427520') {
      constructedGameStats.push(handleFactorioStats(gameStats.game_stats));
    }

    return { game_id: gameId, ...gameDetails, ...constructedGameStats[0] };
  });

  const results = await Promise.all(promises);
  gameData.push(...results);
  return gameData;
}

export async function GET() {
  try {
    const gameData = await constructGameData();
    return NextResponse.json(gameData);
  } catch (error) {
    console.error(error);
  }
}
