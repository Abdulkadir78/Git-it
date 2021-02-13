import moment from "moment";

const fetchUserData = async (user) => {
  try {
    const url = `https://api.github.com/users/${user}`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.status === 404) {
      return { error: "User not found.", status: 404 };
    }
    if (response.status === 403) {
      return {
        error: "You have used your 60 hourly requests. ",
        status: 403,
      };
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRepos = async (user) => {
  try {
    const url = `https://api.github.com/users/${user}/repos?per_page=100`;
    const response = await fetch(url);
    let data = await response.json();

    if (response.status === 404) {
      return [null, null];
    }
    if (response.status === 403) {
      return [null, null];
    }

    data = data.filter((repo) => !repo.fork); // filter out forked repos
    const sortByStars = data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8);

    return [data, sortByStars];
  } catch (error) {
    console.log(error);
  }
};

const fetchRateLimit = async () => {
  const url = "https://api.github.com/rate_limit";
  const response = await fetch(url);
  const data = await response.json();

  // Convert the reset cooldown from unix epoch time to relative time
  const resetIn =
    data.rate.remaining === 0 ? moment.unix(data.rate.reset).fromNow() : null;

  return { remaining: data.rate.remaining, resetIn };
};

export { fetchUserData, fetchRepos, fetchRateLimit };
