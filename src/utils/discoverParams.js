export const today = new Date().toISOString().split("T")[0];
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
export const min_date = sevenDaysAgo.toISOString().split("T")[0];
export const getDiscoverParams = (endpoint) => {


  switch (endpoint) {

    case "now_playing":
      return {
        sort_by: "popularity.desc",
        with_release_type: "2|3", 
        "release_date.gte": min_date,
        "release_date.lte": today,
      };
    case "top_rated":
      return {
        sort_by: "vote_average.desc",
        "vote_count.gte": 200
      };
    case "upcoming":

      return {
        sort_by: "popularity.desc",
        with_release_type: "2|3",
        "release_date.gte": today,
      };

    case "popular":
      return {
        sort_by: "popularity.desc",
      };
    case "popular_people":
      return {};

    default:
      return {};
  }
};
