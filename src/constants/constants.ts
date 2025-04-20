export const PER_PAGE = 10;
export const NAME_REGEX = /^(?=.*[a-z])[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_2 = /^[a-zA-Z]{2}[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_3 = /^(?=.*[a-z])[a-zA-Z' -]*$/;
export const USERNAME_REGEX = /^[a-zA-Z]{1}[a-zA-Z0-9 -]*$/;
export const ONLY_ALPHABETS_SPACES = /[^a-zA-Z\s]/gi;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,128})/;
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const URL_REGEX =
  /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;

export const US_PHONE_NUMBER_REGEX =
  /^((\()?[1-9]{1}[0-9]{2}(\))?)[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
export const FACEBOOK_URL_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/;
export const INSTAGRAM_URL_REGEX =
  /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim;
export const LINKEDIN_URL_REGEX =
  /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm;
export const TWITTER_URL_REGEX =
  /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/;

export const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA3Ez-kmiyeVLDrvMXcl8XxrtNBoFmM0VA",
  authDomain: "educorp-33c03.firebaseapp.com",
  projectId: "educorp-33c03",
  storageBucket: "educorp-33c03.appspot.com",
  messagingSenderId: "498257080395",
  appId: "1:498257080395:web:4083150091de4fab5fddce",
  measurementId: "G-0HRD869RYL",
};

export const KEY_PAIR =
  "BLgqOLksAQvaxAyMxYeci6cGR-8uGMidzgnK56ddJJMIBIgtyB30xa_weV83kSR00id6L6y09hEi4ewcQKRHA4A";

export const CAMPAIGN_TYPE = [
  { id: "pages", value: "Drive traffic on your page" },
  { id: "organizationPosts", value: "Drive traffic on your post" },
  { id: "organizationEvents", value: "Drive traffic on your events" },
  { id: "organizationArticle", value: "Drive traffic on your articles" },
  { id: "jobs", value: "Drive traffic on your jobs" },
];
