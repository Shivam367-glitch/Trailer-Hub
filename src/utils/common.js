import { IMG_CDN_URL } from "./Constants";

 export const getImagePath = (item, people) =>
    people
      ? item?.profile_path
        ? IMG_CDN_URL + item.profile_path
        : "/person.png"
      : item?.poster_path
      ? IMG_CDN_URL + item.poster_path
      : "";
