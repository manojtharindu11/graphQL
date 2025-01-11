let games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch"],
  },
  {
    id: "2",
    title: "Elden Ring",
    platform: ["PlayStation 5", "Xbox Series X", "PC"],
  },
  { id: "3", title: "Minecraft", platform: ["PC", "Mobile", "Console"] },
  {
    id: "4",
    title: "God of War: Ragnarok",
    platform: ["PlayStation 5", "PlayStation 4"],
  },
];

let reviews = [
  {
    id: "1",
    rating: 5,
    content: "An amazing experience with stunning visuals and gameplay.",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 4,
    content: "A great game, but the story could have been better.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 3,
    content: "Good, but repetitive after a while.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 5,
    content: "Masterpiece! Every gamer should try it.",
    author_id: "4",
    game_id: "4",
  },
  {
    id: "5",
    rating: 2,
    content: "Disappointing, not what I expected.",
    author_id: "5",
    game_id: "1",
  },
  {
    id: "6",
    rating: 4,
    content: "Loved the open-world exploration.",
    author_id: "1",
    game_id: "2",
  },
  {
    id: "7",
    rating: 5,
    content: "Absolutely flawless gameplay and mechanics.",
    author_id: "2",
    game_id: "3",
  },
  {
    id: "8",
    rating: 3,
    content: "Fun for a while, but gets dull quickly.",
    author_id: "3",
    game_id: "4",
  },
  {
    id: "9",
    rating: 5,
    content: "Incredible graphics and a captivating story.",
    author_id: "4",
    game_id: "1",
  },
];

let authors = [
  { id: "1", name: "John Doe", verified: true },
  { id: "2", name: "Jane Smith", verified: false },
  { id: "3", name: "Sam Wilson", verified: true },
  { id: "4", name: "Emily Carter", verified: false },
  { id: "5", name: "Chris Brown", verified: true },
  { id: "6", name: "Alex Johnson", verified: true },
];

export default { games, reviews, authors };
