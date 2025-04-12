'use server';
import { NextResponse } from 'next/server';

// Define the endpoint URLs
const STEAM_WEB_API =
  'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002';

// Fetch environment variables
const steam_key = process.env.STEAM_API_KEY ?? '';
const steam_id = process.env.STEAM_ID ?? '';

const response = await fetch(
  STEAM_WEB_API + `/?appid=730&key=${steam_key}&steamid=${steam_id}`,
  {
    method: 'GET',
  },
);

const data = await response.json();

// if (!response.ok) {
//   throw new Error(`Failed to get token`);
// }

export async function GET() {
  try {
    console.log('ff');
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
  }
}
