import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let accessToken = "";

// --- Get new access token ---
const getAccessToken = async () => {
  try {
    const encoded = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${encoded}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    accessToken = response.data.access_token;
    console.log("Spotify token obtained.");
  } catch (err) {
    console.error("❌ ERROR obtaining Spotify token:", err.response?.data || err.message);
    throw err;
  }
};

// --- Search tracks ---
export const searchTracks = async (query) => {
  if (!accessToken) {
    await getAccessToken();
  }

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return response.data;

  } catch (err) {
    console.error("❌ Spotify search failed on first attempt:", err.response?.data || err.message);

    // token expired → retry once
    try {
      await getAccessToken();

      const retry = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      return retry.data;

    } catch (retryErr) {
      console.error("❌ Spotify search failed even after retry:", retryErr.response?.data || retryErr.message);
      throw retryErr;
    }
  }
};
