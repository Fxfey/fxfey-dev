'use server';
import { NextResponse } from 'next/server';

// Define the endpoint URLs
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Fetch environment variables
const client_id = process.env.SPOTIFY_CLIENT ?? '';
const client_secret = process.env.SPOTIFY_SECRET ?? '';
const refresh_token = process.env.SPOTIFY_REFRESH ?? '';

async function getSpotifyToken(
  refresh_token: string,
  client_id: string,
  client_secret: string,
) {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      client_id: client_id,
      client_secret: client_secret,
    }),
  });

  const { access_token } = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to get token`);
  }

  return access_token;
}

async function getCurrentSong(access_token: string) {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to get token`);
  }

  return data;
}

export async function GET() {
  try {
    const spotifyToken = await getSpotifyToken(
      refresh_token,
      client_id,
      client_secret,
    );

    const currentSong = await getCurrentSong(spotifyToken);

    const songResponse = {
      song_name: currentSong.item.name,
      artists: currentSong.item.artists,
      album_name: currentSong.item.album.name,
      cover_image: currentSong.item.album.images,
    };
    console.log(songResponse);
    return NextResponse.json(songResponse);
  } catch (error) {
    console.error(error);
  }
}
