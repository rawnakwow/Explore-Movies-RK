const BASE_URL = "https://api.tvmaze.com";

const request = async (url, signal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
};

export const getAllShows = async (signal) => {
  const data = await request(`${BASE_URL}/shows`, signal);
  return data;
};

export const searchShows = async (query, signal) => {
  const data = await request(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`,
    signal,
  );
  return data.map((item) => item.show);
};
