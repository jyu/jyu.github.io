// Short form version of restaurants.js
const restaurants = {
  rubirosa: {
    name: "Rubirosa Ristorante",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://goo.gl/maps/AxMj5W2ptLqd3oyZ6",
    rating: "9",
    price: "1",
    style: "Italian",
    lastVisited: "2021-04-17",
    text: "Thin crust pizza, my favorite in NYC",
    times: 4,
  },
  upsidepizza: {
    name: "Upside Pizza",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://goo.gl/maps/Zz48qH8EN5L6WCT3A",
    rating: "5",
    price: "0",
    style: "Italian",
    lastVisited: "2021-05-28",
    text: "Sourdough crusted thick pizza",
    video: "https://www.youtube.com/watch?v=cTW1T3GAH_s?t=20",
    times: 1,
  },
  foxface: {
    url: "foxface",
    name: "Foxface",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://g.page/foxface?share",
    rating: "7",
    price: "1",
    style: "American",
    times: 1,
    text: "Smoky, meaty, delicious sandwiches",
  },
  bessou: {
    id: 9,
    url: "bessou",
    name: "Bessou",
    location: "New York City",
    district: "Noho",
    googleMaps: "https://goo.gl/maps/U5CZPHuTqjjk2ygUA",
    rating: "8",
    price: "2",
    style: "Japanese",
    lastVisited: "2021-03-26",
    text: "Japanese comfort food and super crispy fried chicken",
    video: "https://www.youtube.com/watch?v=dGeIla4Smoc",
    times: 4,
  },
};

let id = 0;
for (let i = 0; i < restaurants.length; i++) {
  const place = restaurants[i];
  const key = Object.keys(place)[0];
  place[key]["id"] = id;
  id += 1;
  restaurants[key] = place[key];
}

export default restaurants;
