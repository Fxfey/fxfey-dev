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

async function constructGameData() {
  const gameData: object[] = [];

  // Use Promise.all to wait for all async operations to complete
  const promises = favoriteGames.map(async (gameId) => {
    const gameDetails = await getGameDetails(gameId);
    const gameStats = await getGameStats(gameId);

    // Handle stats
    if (gameId === '730') {
      console.log('ggg');
    }

    return { ...gameDetails, ...gameStats };
  });

  const results = await Promise.all(promises);
  gameData.push(...results);
  return gameData;
}

export async function GET() {
  try {
    const gameData = await constructGameData();
    // return NextResponse.json({ data });
    return NextResponse.json(gameData);
  } catch (error) {
    console.error(error);
  }
}
