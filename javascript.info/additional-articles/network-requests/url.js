const url = new URL("/home", "https://www.rajeev.com/");
url.searchParams.set("name", "rajeev dodda");
url.searchParams.set("tbs", "qdr:y"); // added parameter with a colon :

console.log(url);
console.log(url.toString());

const urlString = "http://site.com/привет";

console.log(encodeURI(urlString));
console.log(decodeURI(urlString));
let music = encodeURIComponent("Rock&Roll");

console.log(`https://google.com/search?q=${music}`); // https://google.com/search?q=Rock%26Roll
