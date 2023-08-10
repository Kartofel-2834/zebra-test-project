export const { VUE_APP_BASE_API: BASE_URL } = process.env;

export function useRequest(localUrl, method = "GET", options) {
  return fetch(`${BASE_URL}${localUrl}`, { method, ...options });
}

export async function fetchNews(page) {
  const url = "/news" + (isNaN(page) || page < 1 ? "" : `/${page}`);
  const res = await useRequest(url);

  if (!res.ok) throw new Error("Something went wrong!");

  const { nav, items } = await res.json();
  const { total, current } = nav;

  const formattedNews = items.map((item) => ({
    ...item,
    date: new Date(item.date * 1000),
  }));

  return {
    total,
    current,
    news: formattedNews,
  };
}
