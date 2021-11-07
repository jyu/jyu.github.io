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
    text: "Thin crust pizza, the best in NYC",
    times: "5",
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
    times: "1",
  },
  foxface: {
    name: "Foxface",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://g.page/foxface?share",
    rating: "7",
    price: "1",
    style: "American",
    times: "1",
    text: "Smoky, meaty, delicious sandwiches",
  },
  bessou: {
    name: "Bessou",
    location: "New York City",
    district: "Noho",
    googleMaps: "https://goo.gl/maps/U5CZPHuTqjjk2ygUA",
    rating: "8",
    price: "1",
    style: "Japanese",
    text: "Japanese comfort food and super crispy fried chicken",
    video: "https://www.youtube.com/watch?v=dGeIla4Smoc",
    times: "4",
  },
  brotherjimmys: {
    name: "Brother Jimmys",
    location: "New York City",
    district: "Murray Hill",
    googleMaps: "https://g.page/brotherjimmysnyc?share",
    rating: "5",
    price: "1",
    style: "American",
    text: "BBQ, would rec fish bowl and brisket",
    times: "1",
  },
  chachantang: {
    name: "Cha Chan Tang",
    location: "New York City",
    district: "Chinatown",
    googleMaps: "https://goo.gl/maps/TncHwxs5GfTm94UJ6",
    rating: "7",
    price: "0",
    style: "Chinese",
    text: "Eastern taken on Western food",
    times: "4",
  },
  cote: {
    name: "Cote",
    location: "New York City",
    district: "Flatiron",
    googleMaps: "https://g.page/cote_nyc?share",
    rating: "9",
    price: "4",
    style: "Korean",
    text: "Highroll kbbq, would rec the steak omakase",
    times: "3",
    michelin: "*",
  },
  itaewonpocha: {
    name: "Itaewon Pocha",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://goo.gl/maps/qLopW8hECZDQkNB2A",
    rating: "7",
    price: "2",
    style: "Korean",
    text: "Korean drinking spot, would rec seafood ricecake",
    times: "3",
  },
  kimura: {
    name: "Kimura",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/9x79BuK7iVw3azEh7",
    rating: "6",
    price: "2",
    style: "Japanese",
    text: "Shabushabu with great sauces",
    times: "1",
  },
  koko: {
    name: "Koko Sushi",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/s551Ebi1zQ4aULTt6",
    rating: "3",
    price: "1",
    style: "Japanese",
    text: "AYCE sushi lol, quantity over quality",
    times: "1",
  },
  littlealley: {
    name: "Little Alley",
    location: "New York City",
    district: "Murray Hill",
    googleMaps: "https://goo.gl/maps/ywVakh2NjtBEaw26A",
    rating: "4",
    price: "1",
    style: "Chinese",
    text: "Shanghainese food, would rec Yan Du Xian",
    times: "3",
  },
  lostacosno1: {
    name: "Los Tacos No 1",
    location: "New York City",
    district: "Midtown",
    googleMaps: "https://goo.gl/maps/kFCCm9fiVjLE97ee6",
    rating: "7",
    price: "1",
    style: "Mexican",
    text: "Pricy but high quality adobada + carne asada tacos",
    times: "3",
  },
  nowon: {
    name: "Nowon",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://g.page/nowon-nyc?share",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "Korean American Pocha with delicious food + drinks",
    times: "3",
  },
  pocha32: {
    name: "Pocha 32",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://g.page/Pocha32NYC?share",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "Soy garlic fried chicken is the optimal drinking food",
    times: "5",
  },
  raku: {
    name: "Raku",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/HgQjwt7wg78Ec3cS7",
    rating: "8",
    price: "2",
    style: "Japanese",
    text: "Udon spot with great karaage",
    times: "3",
  },
  santambroeus: {
    name: "Sant Ambroeus",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://goo.gl/maps/g7F3vgJqqjWSYRai7",
    rating: "6",
    price: "2",
    style: "Italian",
    text: "Pasta",
    times: "1",
  },
  scampi: {
    name: "Scampi",
    location: "New York City",
    district: "Flatiron",
    googleMaps: "https://goo.gl/maps/FbbSJGW8c9mDK3aP9",
    rating: "7",
    price: "2",
    style: "Italian",
    text: "Pasta",
    times: "1",
  },
  uluh: {
    name: "Uluh",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://g.page/uluhny?share",
    rating: "8",
    price: "2",
    style: "Chinese",
    text: "Authentic Chinese food from multiple regions",
    times: "1",
  },
  wokuni: {
    name: "Wokuni",
    location: "New York City",
    district: "Murray Hill",
    googleMaps: "https://goo.gl/maps/ziKDdeC9T7ZijrtZ8",
    rating: "7",
    price: "2",
    style: "Japanese",
    text: "Super fresh fish, would rec the tempura and karaage as well.",
    times: "1",
  },
  wokwok: {
    name: "Wok Wok",
    location: "New York City",
    district: "Chinatown",
    googleMaps: "https://goo.gl/maps/HvJuhyqD3N29Zeyx8",
    rating: "7",
    price: "1",
    style: "Malaysian",
    text:
      "Malaysian Chinese food, would rec their salted fish egg plant stone rice",
    times: "1",
  },
  thaidiner: {
    name: "Thai Diner",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://goo.gl/maps/JqXtrkkrzVsx1i186",
    rating: "8",
    price: "1",
    style: "Thai",
    text: "Thai fusion food, big fan of their fried chicken pad see ew",
    times: "4",
  },
  abckitchen: {
    name: "ABC Kitchen",
    location: "New York City",
    district: "Flatiron",
    googleMaps: "https://goo.gl/maps/scycdjaXHvVM2Knp6",
    rating: "6",
    price: "2",
    style: "American",
    text: "Fresh modern American food, crab toast is great",
    times: "2",
  },
  atoboy: {
    name: "Atoboy",
    location: "New York City",
    district: "Nomad",
    googleMaps: "https://goo.gl/maps/2f9amt8idHJ538vD9",
    rating: "7",
    price: "3",
    style: "Korean",
    text:
      "Fine dining-esque Korean fusion tapas, prepare to be exposed to new flavors",
    times: "1",
  },
  baekjong: {
    name: "Baekjong",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://goo.gl/maps/3F5XKRkLeML3RVdo8",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "High quality super tender KBBQ ",
    times: "2",
  },
  barnjoo: {
    name: "Barn Joo",
    location: "New York City",
    district: "Union Square",
    googleMaps: "https://goo.gl/maps/oD3u6nN6BxDoT8bm9",
    rating: "5",
    price: "2",
    style: "Korean",
    text: "Good drinks + Korean tapas",
    times: "2",
  },
  bbqchicken: {
    name: "BBQ Chicken",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://g.page/bbqchickenktownnyc?share",
    rating: "6",
    price: "2",
    style: "Korean",
    text: "Korean fried chicken and beer",
    times: "2",
  },
  bobwhites: {
    name: "Bobwhite Counter",
    location: "New York City",
    district: "Alphabet City",
    googleMaps: "https://g.page/BobwhiteCounter?share",
    rating: "7",
    price: "0",
    style: "American",
    text: "Buffalo Fried Chicken Sandwich + Mac",
    times: "4",
  },
  gammeok: {
    name: "Gameeok",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://g.page/BobwhiteCounter?share",
    rating: "6",
    price: "1",
    style: "American",
    text: "Traditional korean soups and food",
    times: "1",
  },
  gogocurry: {
    name: "Go Go Curry",
    location: "New York City",
    district: "Financial District",
    googleMaps: "https://goo.gl/maps/am2tgMH8VKyGurRn6",
    rating: "5",
    price: "0",
    style: "Japanese",
    text: "Fast food Japanese curry",
    times: "2",
  },
  jejunoodlebar: {
    name: "Jeju Noodle Bar",
    location: "New York City",
    district: "West Village",
    googleMaps: "https://g.page/jejunoodlebar?share",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "Korean Ramyun with strong broths",
    times: "2",
    michelin: "*",
  },
  mamounsfalafel: {
    name: "Mamoun's",
    location: "New York City",
    district: "Greenwich Village",
    googleMaps: "https://g.page/MamounsGreenwichVillageManhattan?share",
    rating: "7",
    price: "0",
    style: "Middle Eastern",
    text: "Fast, cheap, delicious falfel + shawarma sandwiches",
    times: "3",
  },
  nonono: {
    name: "Nonono",
    location: "New York City",
    district: "Nomad",
    googleMaps: "https://g.page/nonono-new-york?share",
    rating: "7",
    price: "2",
    style: "Japanese",
    text: "Yakitori skewers + ramen spot, Japanese Tapas",
    times: "3",
  },
  cocoron: {
    name: "Cocoron",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://goo.gl/maps/auqkFMUhPHma7YPdA",
    rating: "6",
    price: "1",
    style: "Japanese",
    text: "Japanese curry and udon spot",
    times: "1",
  },
  princest: {
    name: "Prince St Pizza",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://goo.gl/maps/nuG6WxNaHMWyXN4U9",
    rating: "7",
    price: "1",
    style: "American",
    text: "Thick crust square pizza with thick grease pool peps",
    times: "3",
  },
  shabushabumayumon: {
    name: "Shabushabu Mayumon",
    location: "New York City",
    district: "Lower East Side",
    googleMaps: "https://goo.gl/maps/ymcrSnG3rJa9RuXP9",
    rating: "10",
    price: "4",
    style: "Japanese",
    text: "Mindblowing A5 Miyazaki wagyu with assorted sauces and preparation",
    times: "1",
  },
  sushinakazawa: {
    name: "Sushi Nakazawa",
    location: "New York City",
    district: "West Village",
    googleMaps: "https://goo.gl/maps/vNXEdeY2AxFUvzc57",
    rating: "8",
    price: "4",
    style: "Japanese",
    text: "Omakase, favorites were smoked mackarel, chutoro, otoro, monkfish",
    times: "1",
    michelin: "*",
  },
  tacombi: {
    name: "Tacombi",
    location: "New York City",
    district: "Flatiron",
    googleMaps: "https://goo.gl/maps/CHRGuVtF8z4TcrQ47",
    rating: "6",
    price: "1",
    style: "Mexican",
    text: "Would rec adobada and ensenada burritos",
    times: "3",
  },
  taiwanporkchophouse: {
    name: "Taiwan Porkchop House",
    location: "New York City",
    district: "Chinatown",
    googleMaps: "https://goo.gl/maps/ch2t8vbQMvKD9gVp6",
    rating: "8",
    price: "0",
    style: "Taiwanese",
    text: "Would rec porkchop + rice, salt + pepper chicken",
    times: "4",
  },
  tomoesushi: {
    name: "Tomoe Sushi",
    location: "New York City",
    district: "Greenwich Village",
    googleMaps: "https://goo.gl/maps/7ZyeaqbTRifJCSe2A",
    rating: "8",
    price: "1",
    style: "Japanese",
    text: "The best non omakase sushi in NYC, but permanently closed",
    times: "4",
  },
  tonybaloneys: {
    name: "Tony Baloneys",
    location: "Jersey City",
    district: "",
    googleMaps: "https://g.page/tony-boloneys-jersey-city?share",
    rating: "4",
    price: "1",
    style: "American",
    text: "Fun pizza but really heavy ",
    times: "4",
  },
  banhmisaigon: {
    name: "Banh Mi Saigon",
    location: "New York City",
    district: "Chinatown",
    googleMaps: "https://goo.gl/maps/ioqVc8BEWrABLfe58",
    rating: "8",
    price: "0",
    style: "Vietnamese",
    text: "Best Banh Mi in NYC",
    times: "4",
  },
  benemon: {
    name: "Benemon",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/gkuAB145cKaaWuiE6",
    rating: "6",
    price: "1",
    style: "Japanese",
    text: "Donburi bowls and Japanese comfort food",
    times: "1",
  },
  blackseedbagels: {
    name: "Black Seed Bagels",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://g.page/blackseedbagelsnolita?share",
    rating: "7",
    price: "1",
    style: "American",
    text: "Bagel sandwiches",
    times: "1",
  },
  bricklanecurry: {
    name: "Brick Lane Curry",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://g.page/bricklanenyc?share",
    rating: "5",
    price: "2",
    style: "American",
    text: "Major hubris on phaal spice challenge but would rec",
    times: "1",
  },
  elgallotacqueria: {
    name: "El Gallo Tacqueria",
    location: "New York City",
    district: "Nolita",
    googleMaps: "https://g.page/elgallo-taqueria-nolita?share",
    rating: "7",
    price: "1",
    style: "American",
    text: "Satisfies burrito fix in NYC",
    times: "5",
  },
  houyihotpot: {
    name: "Hou Yi Hot Pot",
    location: "New York City",
    district: "Lower East Side",
    googleMaps: "https://goo.gl/maps/18zJBvprz1hMPtSTA",
    rating: "7",
    price: "1",
    style: "American",
    text: "Cheap AYCE Hot Pot",
    times: "3",
  },
  joesriceroll: {
    name: "Joe's Steamed Rice Roll",
    location: "New York City",
    district: "Lower East Side",
    googleMaps: "https://goo.gl/maps/zWqBmmJxZk4iZhuM6",
    rating: "5",
    price: "0",
    style: "Chinese",
    text: "Rice rolls",
    times: "1",
  },
  jongrobbq: {
    name: "Jongro BBQ",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://goo.gl/maps/zWqBmmJxZk4iZhuM6",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "High quality super tender KBBQ, rec the goblet",
    times: "2",
  },
  lilfrankies: {
    name: "Lil Frankies",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/FAr5n66wZwH2vP997",
    rating: "7",
    price: "1",
    style: "Italian",
    text: "Cheap, simple pasta and tiramisu",
    times: "4",
  },
  loscarnalitos: {
    name: "Los Carnalitos",
    location: "Bay Area",
    district: "Hayward",
    googleMaps: "https://goo.gl/maps/NQs5BFF7DHhehh6XA",
    rating: "7",
    price: "0",
    style: "Mexican",
    text: "Al pastor is amazing here",
    times: "1",
  },
  misoya: {
    name: "Misoya",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/eYRRF8Dh4HHpDjvu5",
    rating: "6",
    price: "0",
    style: "Japanese",
    text: "Fun selection of miso flavored broth to try",
    times: "2",
  },
  miznon: {
    name: "Miznon",
    location: "New York City",
    district: "Chelsea",
    googleMaps: "https://goo.gl/maps/eYRRF8Dh4HHpDjvu5",
    rating: "6",
    price: "0",
    style: "Israeli",
    text: "Super unique grilled cheese pita burger",
    times: "1",
  },
  newmizusushi: {
    name: "New Mizu Sushi",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://goo.gl/maps/z52bD9z2WUjLC1Gx7",
    rating: "7",
    price: "0",
    style: "Japanese",
    text: "Great cheap American-Japanese sushi",
    times: "1",
  },
  saltiegirl: {
    name: "Saltie Girl",
    location: "Boston",
    district: "",
    googleMaps: "https://goo.gl/maps/qbVRguWReyxFrTweA",
    rating: "7",
    price: "2",
    style: "American",
    text: "Super fresh oysters and seafood",
    times: "1",
  },
  shanghai21: {
    name: "Shanghai 21",
    location: "New York City",
    district: "Chinatown",
    googleMaps: "https://goo.gl/maps/F281UJNUbhi6QBAv6",
    rating: "7",
    price: "1",
    style: "Chinese",
    text: "Great soup dumplings, would rec salt and pepper pork chop",
    times: "1",
  },
  take31: {
    name: "Take31",
    location: "New York City",
    district: "Koreatown",
    googleMaps: "https://g.page/take31nyc?share",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "Modern Korean pub food with cozy vibes, would rec white peach Makgeolli",
    times: "4",
  },
  thaivilla: {
    name: "Thai Villa",
    location: "New York City",
    district: "Flatiron",
    googleMaps: "https://goo.gl/maps/u46azUs6MJUUkQ8z5",
    rating: "7",
    price: "1",
    style: "Thai",
    text: "Upscale Thai food served in a beautiful palace",
    times: "2",
  },
  thursdaykitchen: {
    name: "Thursday Kitchen",
    location: "New York City",
    district: "East Village",
    googleMaps: "https://g.page/thursdaykitchen?share",
    rating: "8",
    price: "2",
    style: "Korean",
    text: "Fusion Korean tapas with strong and unique flavors",
    times: "1",
  },
  tonchin: {
    name: "Tonchin",
    location: "New York City",
    district: "Midtown",
    googleMaps: "https://g.page/tonchinnewyork?share",
    rating: "7",
    price: "1",
    style: "Japanese",
    text: "My favorite ramen in NYC, the tokyo pork tonkatsu is great",
    times: "4",
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
