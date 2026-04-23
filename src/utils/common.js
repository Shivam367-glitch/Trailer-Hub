import { IMG_CDN_URL } from "./constant";

 export const getImagePath = (item, people) =>
    people
      ? item?.profile_path
        ? IMG_CDN_URL + item.profile_path
        : "/person.png"
      : item?.poster_path
      ? IMG_CDN_URL + item.poster_path
      : "";


export const formatMoneyShort = (amount) => {
  if (!amount) return "Not Available";

  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(0)}M`;
  }

  return `$${amount}`;
}; 

// Format runtime from minutes to hours and minutes, if runtime is not available return not available message
export const formatRuntime = (runtime) => {
  if (!runtime) return "Runtime information not available.";
  const hr = Math.floor(runtime / 60);
  const min = runtime % 60;
  return `Runtime: ${hr} hr ${min} min`;
}; 
// Format currency with label, if value is not available return not available message
export const formatCurrency = (value, label) => {
  return value
    ? `${label}: $${value.toLocaleString()}`
    : `${label} information not available.`;
}; 

// Format date from YYYY-MM-DD to DD-MM-YYYY
export const formatDate=(date)=>{ 
  return date.split("-").reverse().join("-");
}
