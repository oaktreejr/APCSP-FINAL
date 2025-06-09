//initialize variables
var lastStreak = 0;
var bestStreak = 0;
var correctMovie;
var movie1;
var movie2;
var index1;
var index2;

// movie data set
var movies =  [
  {
    "name": "Star Wars: Episode VII - The Force Awakens",
    "gross": 936662225.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚀"
  },
  {
    "name": "Avengers: Endgame",
    "gross": 858373000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🛡️"
  },
  {
    "name": "Avatar",
    "gross": 760507625.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌌"
  },
  {
    "name": "Avengers: Infinity War",
    "gross": 678815482.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸"
  },
  {
    "name": "Titanic",
    "gross": 659325379.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚢"
  },
  {
    "name": "The Avengers",
    "gross": 623279547.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸"
  },
  {
    "name": "Incredibles 2",
    "gross": 608581744.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸‍♂️"
  },
  {
    "name": "The Dark Knight",
    "gross": 534858444.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦇"
  },
  {
    "name": "Rogue One",
    "gross": 532177324.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🛰️"
  },
  {
    "name": "The Dark Knight Rises",
    "gross": 448139099.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦇"
  },
  {
    "name": "E.T. the Extra-Terrestrial",
    "gross": 435110554.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👽"
  },
  {
    "name": "Toy Story 4",
    "gross": 434038008.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤠"
  },
  {
    "name": "The Lion King",
    "gross": 422783777.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦁"
  },
  {
    "name": "Toy Story 3",
    "gross": 415004880.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY98_CR1,0,67,98_AL_.jpg",
    "emoji": "🤠"
  },
  {
    "name": "Captain America: Civil War",
    "gross": 408084349.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🛡️"
  },
  {
    "name": "Jurassic Park",
    "gross": 402453882.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦖"
  },
  {
    "name": "Guardians of the Galaxy Vol. 2",
    "gross": 389813101.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌌"
  },
  {
    "name": "Harry Potter and the Deathly Hallows: Part 2",
    "gross": 381011219.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "Finding Nemo",
    "gross": 380843261.0,
    "art": "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐠"
  },
  {
    "name": "The Lord of the Rings: The Return of the King",
    "gross": 377845905.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👑"
  },
  {
    "name": "Deadpool",
    "gross": 363070709.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎯"
  },
  {
    "name": "Inside Out",
    "gross": 356461711.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🧠"
  },
  {
    "name": "The Lord of the Rings: The Two Towers",
    "gross": 342551365.0,
    "art": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTctNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏰"
  },
  {
    "name": "Zootopia",
    "gross": 341268248.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐰"
  },
  {
    "name": "Joker",
    "gross": 335451311.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎭"
  },
  {
    "name": "Guardians of the Galaxy",
    "gross": 333176600.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌌"
  },
  {
    "name": "Forrest Gump",
    "gross": 330252182.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY98_CR0,0,67,98_AL_.jpg",
    "emoji": "🏃"
  },
  {
    "name": "Deadpool 2",
    "gross": 324591735.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_UY98_CR15,0,67,98_AL_.jpg",
    "emoji": "🎯"
  },
  {
    "name": "Star Wars",
    "gross": 322740140.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚔️"
  },
  {
    "name": "Iron Man",
    "gross": 318412101.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "Harry Potter and the Sorcerer's Stone",
    "gross": 317575550.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "The Lord of the Rings: The Fellowship of the Ring",
    "gross": 315544750.0,
    "art": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💍"
  },
  {
    "name": "Thor: Ragnarok",
    "gross": 315058289.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚡"
  },
  {
    "name": "Star Wars: Episode VI - Return of the Jedi",
    "gross": 309125409.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌌"
  },
  {
    "name": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "gross": 305413918.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏴‍☠️"
  },
  {
    "name": "Skyfall",
    "gross": 304360277.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎩"
  },
  {
    "name": "Harry Potter and the Half-Blood Prince",
    "gross": 301959197.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "Harry Potter and the Deathly Hallows: Part 1",
    "gross": 295983305.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "The Sixth Sense",
    "gross": 293506292.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👻"
  },
  {
    "name": "Up",
    "gross": 293004164.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏠"
  },
  {
    "name": "Inception",
    "gross": 292576195.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⏳"
  },
  {
    "name": "Star Wars: Episode V - The Empire Strikes Back",
    "gross": 290475067.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "❄️"
  },
  {
    "name": "Harry Potter and the Goblet of Fire",
    "gross": 290013036.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "Monsters, Inc.",
    "gross": 289916256.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👹"
  },
  {
    "name": "Home Alone",
    "gross": 285761243.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏠"
  },
  {
    "name": "The Hangover",
    "gross": 277322503.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🍻"
  },
  {
    "name": "Gravity",
    "gross": 274092705.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌌"
  },
  {
    "name": "Shrek",
    "gross": 267665011.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💚"
  },
  {
    "name": "The Incredibles",
    "gross": 261441092.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸"
  },
  {
    "name": "Jaws",
    "gross": 260000000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦈"
  },
  {
    "name": "Captain America: The Winter Soldier",
    "gross": 259766572.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY98_CR0,0,67,98_AL_.jpg",
    "emoji": "🛡️"
  },
  {
    "name": "The Hobbit: The Desolation of Smaug",
    "gross": 258366855.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐉"
  },
  {
    "name": "The Lego Movie",
    "gross": 257760692.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🧱"
  },
  {
    "name": "Star Trek",
    "gross": 257730019.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🖖"
  },
  {
    "name": "The Blind Side",
    "gross": 255959475.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏈"
  },
  {
    "name": "Despicable Me",
    "gross": 251513985.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🍌"
  },
  {
    "name": "Harry Potter and the Prisoner of Azkaban",
    "gross": 249358727.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "Moana",
    "gross": 248757044.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌊"
  },
  {
    "name": "Raiders of the Lost Ark",
    "gross": 248159971.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤠"
  },
  {
    "name": "Toy Story 2",
    "gross": 245852179.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤠"
  },
  {
    "name": "Ghostbusters",
    "gross": 238632124.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👻"
  },
  {
    "name": "X-Men: Days of Future Past",
    "gross": 233921534.0,
    "art": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸"
  },
  {
    "name": "Cast Away",
    "gross": 233632142.0,
    "art": "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏝️"
  },
  {
    "name": "The Exorcist",
    "gross": 232906145.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "😈"
  },
  {
    "name": "Star Trek Into Darkness",
    "gross": 228778661.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🖖"
  },
  {
    "name": "The Martian",
    "gross": 228433637.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪐"
  },
  {
    "name": "The Bourne Ultimatum",
    "gross": 227471070.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🔫"
  },
  {
    "name": "Logan",
    "gross": 226277068.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐺"
  },
  {
    "name": "WALL·E",
    "gross": 223808164.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "Big Hero 6",
    "gross": 222527829.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_UY98_CR1,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "Mission: Impossible - Fallout",
    "gross": 220159104.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💥"
  },
  {
    "name": "Beauty and the Beast",
    "gross": 218967624.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌹"
  },
  {
    "name": "How to Train Your Dragon",
    "gross": 217581231.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐉"
  },
  {
    "name": "Twister",
    "gross": 241721524.0,
    "art": "https://m.media-amazon.com/images/M/MV5BODExYjQyNzYtMTYxOC00YTYzLTgyYmQtNWEwYzc2MjBhZmZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌪️"
  },
  {
    "name": "Dunkirk",
    "gross": 188373000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzY5MS00NGQzLTg0MTEtYzJjYTA5ZDQyZjhhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚢"
  },
  {
    "name": "Saving Private Ryan",
    "gross": 216540909.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYmIyMTQ5NzktNzQ5ZS00NzMxLTkxZDMtOTJkOWI3YmM4MjliXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎖️"
  },
  {
    "name": "Interstellar",
    "gross": 188020017.0,
    "art": "https://m.media-amazon.com/images/M/MV5BZjdkOTI3MDktNjg2OC00ZDYzLThlMDAtNDZjNTc5ODI1NWVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚀"
  },
  {
    "name": "Spider-Man: Homecoming",
    "gross": 334201140.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzMzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕷️"
  },
  {
    "name": "The Matrix",
    "gross": 171479930.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDdkYWY0MjBjMzc1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕶️"
  },
  {
    "name": "The Conjuring",
    "gross": 137400141.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTk1OTM0MzU2NF5BMl5BanBnXkFtZTcwNTgyMzEyOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👻"
  },
  {
    "name": "Gladiator",
    "gross": 187705427.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkYzMyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚔️"
  },
  {
    "name": "Spider-Man: Far from Home",
    "gross": 390532085.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjY0LTlhNzMtNjlkN2ZlNjNiMGMwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕷️"
  },
  {
    "name": "The Pursuit of Happyness",
    "gross": 163566459.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI4NF5BMl5BanBnXkFtZTcwNDExNDYxNw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👟"
  },
  {
    "name": "It",
    "gross": 327481748.0,
    "art": "https://m.media-amazon.com/images/M/MV5BZDVkZmI0MzFhZmNkNDktMzIxMjY1ZTQwMzVlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎈"
  },
  {
    "name": "The Da Vinci Code",
    "gross": 217536138.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY2MjMzMDUwM15BMl5BanBnXkFtZTcwMDQzMzgxMQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "📜"
  },
  {
    "name": "Mr. & Mrs. Smith",
    "gross": 186336103.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg0NTY4MjM0Nl5BMl5BanBnXkFtZTcwMTYzMTU0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🔫"
  },
  {
    "name": "The Revenant",
    "gross": 183637894.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMGUzYTIxM2EtZmM0NC00NzE4LThkYjAtYWNhMzgtZTRhYjEyNmFlOWEwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐻"
  },
  {
    "name": "Coco",
    "gross": 209728217.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtZTk5ZS00OWY0LTk0NmMtYzAxZDQyODg2YWNkXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎶"
  },
  {
    "name": "Fast & Furious 6",
    "gross": 238679852.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTM3NjQxMDMzNV5BMl5BanBnXkFtZTcwNzU3MTQ0OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "Spider-Man 2",
    "gross": 373585825.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtNyNMZC00MTY0LThhYmQtZGYzYmRjNWI3MjAxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕷️"
  },
  {
    "name": "Finding Dory",
    "gross": 486295561.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTMxODE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐠"
  },
  {
    "name": "Frozen",
    "gross": 400738009.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTc1MDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "❄️"
  },
  {
    "name": "Minions",
    "gross": 336045770.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzYzMl5BMl5BanBnXkFtZTgwOTU3ODU2NzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🍌"
  },
  {
    "name": "Maleficent",
    "gross": 241410378.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjAwNDIyMzY2OV5BMl5BanBnXkFtZTgwNDYyODc2MjE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "😈"
  },
  {
    "name": "Spider-Man 3",
    "gross": 336530303.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtMjFhYi00NDU1LTgyZDQtMWEzYTRjM2EzZTRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕷️"
  },
  {
    "name": "Suicide Squad",
    "gross": 325100054.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzIxOV5BMl5BanBnXkFtZTgwMzcxOTIxMDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦹"
  },
  {
    "name": "Batman v Superman: Dawn of Justice",
    "gross": 330360194.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYThjYzcyODM3NF5BMl5BanBnXkFtZTgwLzg0MjRhMjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦇"
  },
  {
    "name": "Harry Potter and the Order of the Phoenix",
    "gross": 292000866.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTM0NTc2NDEzNl5BMl5BanBnXkFtZTcwNjg0MTYxNw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🪄"
  },
  {
    "name": "Man of Steel",
    "gross": 291045518.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjI3ODkxNDkxMF5BMl5BanBnXkFtZTgwNzg1NjYzMTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸‍♂️"
  },
  {
    "name": "Night at the Museum",
    "gross": 250863268.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ4MzExMzU0Nl5BMl5BanBnXkFtZTcwNDc1NzAyMQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏛️"
  },
  {
    "name": "Spectre",
    "gross": 200075841.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOWQ1MDg1NGMtYTI2NC00YWI2LThhMjEtNmY0MzVjNDY3ZGI0XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎩"
  },
  {
    "name": "The Grinch",
    "gross": 270622287.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNTgxNDYxNTU0NV5BMl5BanBnXkFtZTgwNzYyMTU0NTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎄"
  },
  {
    "name": "Independence Day",
    "gross": 306124000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtZTQ1My00NmNkLWE0ZWEtZWE0YzIxZjliYThjXkEyXkFqcGdeQXVyNDAyMDg5MDk@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👽"
  },
  {
    "name": "Aladdin",
    "gross": 355559216.0,
    "art": "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtNjkzYi00ZTNhLWIwYTYtOWIxODhlNTYzYzEzXkEyXkFqcGdeQXVyNjk1NzEzOTI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🧞"
  },
  {
    "name": "Alice in Wonderland",
    "gross": 334191110.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTcwMjE4NDYyMV5BMl5BanBnXkFtZTcwMjgxNjg3NA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐇"
  },
  {
    "name": "The Secret Life of Pets",
    "gross": 368381310.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMzNjE2MDE0MV5BMl5BanBnXkFtZTgwNjAwNDQxMTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐶"
  },
  {
    "name": "The Jungle Book",
    "gross": 364001123.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMwNDg3MzA4MF5BMl5BanBnXkFtZTgwNDY0MjY1OTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐻"
  },
  {
    "name": "War of the Worlds",
    "gross": 234280354.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNDQzNDE3NzYxMF5BMl5BanBnXkFtZTcwMzk1MjE2NA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👽"
  },
  {
    "name": "Mission: Impossible - Ghost Protocol",
    "gross": 209399963.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY4NzM4NTIyNl5BMl5BanBnXkFtZTcwNDAyMTc2Nw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💥"
  },
  {
    "name": "A Beautiful Mind",
    "gross": 170742341.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMjktZTkzMi00NzY3LTg3MzQtMmE5NDhjZmQyMmY5XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🧠"
  },
  {
    "name": "Catch Me If You Can",
    "gross": 164615351.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNGEtZmRmNC00YzA0LWJjMWMtZTk3NmExYjQzNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "✈️"
  },
  {
    "name": "Jumanji: Welcome to the Jungle",
    "gross": 404500000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTM3NDg0MzkzOV5BMl5BanBnXkFtZTgwNjAyOTI1MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌳"
  },
  {
    "name": "Avengers: Age of Ultron",
    "gross": 459005868.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NDE3LThlYTQtMDNmNjAxYTNkMzA0XkEyXkFqcGdeQXVyNTU3NzQ0MjY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "Wonder Woman",
    "gross": 412563408.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNDFhZDMyNTg2My00YjVlLWI2YTQtYmY3MTQ2OTkzYmRhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸‍♀️"
  },
  {
    "name": "Captain Marvel",
    "gross": 426829839.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjE3NzQxMzgyNl5BMl5BanBnXkFtZTgwNzE0MDkyODE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦸‍♀️"
  },
  {
    "name": "Furious 7",
    "gross": 353007020.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQxMTEzMjY4Nl5BMl5BanBnXkFtZTgwNzg4NDI0NDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "American Sniper",
    "gross": 350126372.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyM15BMl5BanBnXkFtZTgwMDMyMTg0MzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🔫"
  },
  {
    "name": "Despicable Me 2",
    "gross": 368065385.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjExNjgyNzQwM15BMl5BanBnXkFtZTcwNjgyODU3OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🍌"
  },
  {
    "name": "The Fate of the Furious",
    "gross": 226008389.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg0LTlkZWItYTYwNmE2YTUzNzYxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "Transformers: Dark of the Moon",
    "gross": 352390543.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTU3NTg4MDgwNl5BMl5BanBnXkFtZTcwNzQ4NDc1Nw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "Iron Man 3",
    "gross": 409013994.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjQ1MjQ4NjIwOV5BMl5BanBnXkFtZTcwNTE5NDkxOQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "Spider-Man",
    "gross": 403706375.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMyMzgyODE3OV5BMl5BanBnXkFtZTgwMjcwNzU4NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕷️"
  },
  {
    "name": "Frozen II",
    "gross": 477373576.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYWZhMjY0NDEtMzIyZi00Nzc4LTliMGYtYTc2NDUyMTMyMTA2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "❄️"
  },
  {
    "name": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "gross": 291710928.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTYxOF5BMl5BanBnXkFtZTcwMjAwMzkxMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦁"
  },
  {
    "name": "Doctor Strange",
    "gross": 232641933.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMDk2NDA3MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🧘"
  },
  {
    "name": "The Amazing Spider-Man",
    "gross": 262030663.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwODc4MzcyNw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🕷️"
  },
  {
    "name": "Black Panther",
    "gross": 700059566.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwNjUkNzUyNjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐾"
  },
  {
    "name": "Shrek 2",
    "gross": 441226247.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFhMDAtYjUwMmMyMTg0Mzc4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💚"
  },
  {
    "name": "Monsters University",
    "gross": 268492764.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ4Mzk3NDczNF5BMl5BanBnXkFtZTcwODQ0MTU2OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎓"
  },
  {
    "name": "Cars",
    "gross": 244082982.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MDIzNF5BMl5BanBnXkFtZTcwMzE4MjU0MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "Ratatouille",
    "gross": 206445654.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTUxMjEwNDQ1Ml5BMl5BanBnXkFtZTcwMjQ5MDYyMw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👨‍🍳"
  },
  {
    "name": "Brave",
    "gross": 237283207.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzcwODg2MzYzOC00OGE5LThhNGYtYzc2YzAyMWE3MWEwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏹"
  },
  {
    "name": "Cars 2",
    "gross": 191452396.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQxNzIwMjYxNV5BMl5BanBnXkFtZTcwNTE5NDc1NQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "The Good Dinosaur",
    "gross": 123087120.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTc5OTM2Mzk4N15BMl5BanBnXkFtZTgwODM1NDU5NzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦖"
  },
  {
    "name": "Cars 3",
    "gross": 152914594.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg2NzQzMjg3NV5BMl5BanBnXkFtZTgwOTEyMTgwMjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "Pirates of the Caribbean: Dead Man's Chest",
    "gross": 423315812.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNTIyMGE5MDAtYzVlYy00ZGQ0LTk4YjAtZmE3YzkzZDZkZDBlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏴‍☠️"
  },
  {
    "name": "Pirates of the Caribbean: At World's End",
    "gross": 309420425.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxOTI5NV5BMl5BanBnXkFtZTcwODg2Mjg0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏴‍☠️"
  },
  {
    "name": "Pirates of the Caribbean: On Stranger Tides",
    "gross": 241071477.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTYyMTcyMzQ0NF5BMl5BanBnXkFtZTcwOTc4MDczNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏴‍☠️"
  },
  {
    "name": "Captain America: The First Avenger",
    "gross": 176654505.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NTY3NV5BMl5BanBnXkFtZTcwNDY3ODM3NA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🛡️"
  },
  {
    "name": "Thor",
    "gross": 181030624.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzA1Nzk0OWUtNjM1NC00YTA3LThiOTItMDhmZmNkMzFjODk0XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚡"
  },
  {
    "name": "Iron Man 2",
    "gross": 312433331.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTM0NjAxNDIyMV5BMl5BanBnXkFtZTcwNjIyNDU0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤖"
  },
  {
    "name": "X-Men: Apocalypse",
    "gross": 155400000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxNl5BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": " 🦸"
  },
  {
    "name": "X-Men: First Class",
    "gross": 146405367.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTc1MjAwNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": " 🦸"
  },
  {
    "name": "X-Men Origins: Wolverine",
    "gross": 179883157.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNDQwMjdlNDItMzk1MC00MGUzLWIyMWUtOWZlZmNkYzgzNTE2XkEyXkFqcGdeQXVyMTAyNjg4NjQ0._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐺"
  },
  {
    "name": "The Wolverine",
    "gross": 132556852.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzQ1Nzg2MjQ0M15BMl5BanBnXkFtZTcwODE3NDU2OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐺"
  },
  {
    "name": "American Hustle",
    "gross": 150117807.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjM4NDAzMjQxMl5BMl5BanBnXkFtZTgwODAyNTM5MDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💸"
  },
  {
    "name": "The Wolf of Wall Street",
    "gross": 116900694.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTcxMjQ5Mzc3Nl5BMl5BanBnXkFtZTcwMzk4ODg3MDg@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐺"
  },
  {
    "name": "A Quiet Place",
    "gross": 188024361.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjI0MjMzNzA2M15BMl5BanBnXkFtZTgwNjQ5MDI1MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🤫"
  },
  {
    "name": "San Andreas",
    "gross": 155100000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNzZhYmQ2NGMtZmVkMS00ZTFmLTkzMDUtYzhkZjIzMzgxODI5XkEyXkFqcGdeQXVyODg2MTM0MDk@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌍"
  },
  {
    "name": "Annabelle",
    "gross": 84273520.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTg1NjIwMTQ0OF5BMl5BanBnXkFtZTgwNzQwMzM1MjE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👻"
  },
  {
    "name": "The Croods",
    "gross": 187168425.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjIwMzQwODIzNF5BMl5BanBnXkFtZTcwMjM3MDc1OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🗿"
  },
  {
    "name": "A Star Is Born",
    "gross": 215288866.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNmE5ZmE2OGYtOGM0YS00OWY0LTg0ZGUtZWNjYjZkMjM4MzFhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⭐"
  },
  {
    "name": "Madagascar 3: Europe's Most Wanted",
    "gross": 216391167.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ5MjQwMzg5Nl5BMl5BanBnXkFtZTcwNjk2NDk3Nw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦁"
  },
  {
    "name": "The SpongeBob Movie: Sponge Out of Water",
    "gross": 162900000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ2MDQ0OF5BMl5BanBnXkFtZTgwMzUzNzA5NDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🍍"
  },
  {
    "name": "Kung Fu Panda 2",
    "gross": 165250692.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzJjMTIzOWItZWRhNy00ZDRiLWIyM2QtOTE0YzhkZWMyODhiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐼"
  },
  {
    "name": "The Equalizer",
    "gross": 101500000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ4NTUyNzAxNjF5BMl5BanBnXkFtZTgwNTg3NDM4MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🔫"
  },
  {
    "name": "Get Out",
    "gross": 176040665.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjEwMzgwMDEyNF5BMl5BanBnXkFtZTgwNTU3ODA3MDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👁️"
  },
  {
    "name": "Sing",
    "gross": 270395425.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTYzODYzODczOF5BMl5BanBnXkFtZTgwNDg4NTc4MTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎤"
  },
  {
    "name": "Night at the Museum: Secret of the Tomb",
    "gross": 113700000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMyMjI3MjQ2OV5BMl5BanBnXkFtZTgwNTU5NzE0MzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏛️"
  },
  {
    "name": "Hotel Transylvania 2",
    "gross": 169700000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTU3MTU2OTE1Ml5BMl5BanBnXkFtZTgwOTM5NDQxNzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🧛"
  },
  {
    "name": "Annabelle: Creation",
    "gross": 102070000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjkyNjQxMDc5OV5BMl5BanBnXkFtZTgwOTY5MDg0MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👻"
  },
  {
    "name": "The Boss Baby",
    "gross": 175026600.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ0OTU5NTgwNl5BMl5BanBnXkFtZTgwNTYyMzE1MjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👶"
  },
  {
    "name": "Shazam!",
    "gross": 140300000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYWVhZjZkMjYtMmFjZC00YTAwLTk2OGUtYzliMTBhMjkzZjBlXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚡"
  },
  {
    "name": "Ralph Breaks the Internet",
    "gross": 201100000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYmQ2MzA4OTItNGY4MS00Y2NhLWE0OTgtYjY1NzM5ZDczNDgxXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🌐"
  },
  {
    "name": "How to Train Your Dragon: The Hidden World",
    "gross": 160800000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjIwMjE4MTQwNl5BMl5BanBnXkFtZTgwNzAyNzc4NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🐉"
  },
  {
    "name": "Green Book",
    "gross": 85100000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMyNDg2MjQ4MV5BMl5BanBnXkFtZTgwNjgxNTI3NjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚗"
  },
  {
    "name": "The Greatest Showman",
    "gross": 174340798.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjI1NDAxMzgyOF5BMl5BanBnXkFtZTgwNjAyNDMyNTM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎪"
  },
  {
    "name": "Rocketman",
    "gross": 96350000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTEwNzY0MTEwOTJfQTJeQWpwZ15BbWU4MDU0ODUzODQx._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🚀"
  },
  {
    "name": "Hidden Figures",
    "gross": 169600000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjQyNjEwODc4N15BMl5BanBnXkFtZTgwNDg2OTgwNzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👩‍🔬"
  },
  {
    "name": "Ready Player One",
    "gross": 137700000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzJjMTIzOWItZWRhNy00ZDRiLWIyM2QtOTE0YzhkZWMyODhiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎮"
  },
  {
    "name": "It Chapter Two",
    "gross": 211600000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYTJmYjZmMmYtMzdjNS00YmMyLTg5YjItNTE1ZGQxZTY2MzA4XkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎈"
  },
  {
    "name": "The Conjuring 2",
    "gross": 102470000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzQyOTliNjUtNDUxNS00YjIzLTllZmItN2RiNTliMDRmZmE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👻"
  },
  {
    "name": "The Meg",
    "gross": 145400000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjM2NzMxNzEwNl5BMl5BanBnXkFtZTgwNzYwMzE0NjM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦈"
  },
  {
    "name": "Straight Outta Compton",
    "gross": 161200000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjE3NzQ3MzYxM15BMl5BanBnXkFtZTgwODIzMjg0NTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎤"
  },
  {
    "name": "Black Swan",
    "gross": 106954678.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjliZmRkODItOTU1Ni00NTgwLTlkZGUtYzYxYWZmMzYzNTZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🦢"
  },
  {
    "name": "The Graduate",
    "gross": 104900000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE4MV5BMl5BanBnXkFtZTgwNDU1MTU1MzI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎓"
  },
  {
    "name": "Mary Poppins",
    "gross": 102272727.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTY0Nzg5ODU0OV5BMl5BanBnXkFtZTcwMDQ4NTYwMg@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "☂️"
  },
  {
    "name": "Million Dollar Baby",
    "gross": 100492203.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMTI5NzkzMjQxNF5BMl5BanBnXkFtZTcwODczMTIwNA@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🥊"
  },
  {
    "name": "Se7en",
    "gross": 100125643.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZTQ5NC00NzMwLTkwMmMtNmVkZTg3ZmZmZGQxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🔪"
  },
  {
    "name": "The Social Network",
    "gross": 96962694.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOGUyZDUgZjEtMmIzMS00YjE0LTk4NDQtZDQzNWMyZDQ1ZjM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "💻"
  },
  {
    "name": "Schindler's List",
    "gross": 96898818.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNDQ4OTQzYjMtNWMyMi00ZmQxLThkZjUtZjYwY2EwYzUzMzZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "📜"
  },
  {
    "name": "Dead Poets Society",
    "gross": 95860116.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNTIzMjk2YjMtODViOS00YTJmLTk4NmMtYjc1ZWUwNjFhOWFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "📚"
  },
  {
    "name": "The Grand Budapest Hotel",
    "gross": 59300000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMzM5NzUxOTEyMl5BMl5BanBnXkFtZTgwNTQzNzAxMjE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🛎️"
  },
  {
    "name": "Moneyball",
    "gross": 75600000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjAxOTU2NTM2Nl5BMl5BanBnXkFtZTcwNDIyOTE0Ng@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚾"
  },
  {
    "name": "Whiplash",
    "gross": 13900000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOTdmNDc4MGMtOWIwYy00OWQ1LWI4ODUtZWVhMzkzYzQ4ZDNkXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🥁"
  },
  {
    "name": "Once Upon a Time in Hollywood",
    "gross": 142500000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNjkxMGU4Mzg2MV5BMl5BanBnXkFtZTgwMzIxMzA4OTE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎬"
  },
  {
    "name": "Little Women",
    "gross": 108100000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BODU2Yzc4MjQtMDExNS00NjA2LWIxYzUtYzJlYTgzZTA2NTA0XkEyXkFqcGdeQXVyMzQyNzE2Ng@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👧"
  },
  {
    "name": "Darkest Hour",
    "gross": 56500000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjA2NDgxOTQ4M15BMl5BanBnXkFtZTgwNzk3NzIyODE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⌚"
  },
  {
    "name": "Call Me by Your Name",
    "gross": 18100000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc3M15BMl5BanBnXkFtZTgwNzYxNTY0NjI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🍑"
  },
  {
    "name": "Parasite",
    "gross": 53360000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjAxMjk3NDQ0Mjc2NWFhZTljM2NiMTg1MTcwYWQ4NWFlMGFmOWVlMDcyYTRjODIzNWY3MjFhZDRmOTI5ZTFhODkyMWQxNGZiMzYwNzYwMDYxM2YxMmM2MzE3YmEzMWI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏠"
  },
  {
    "name": "Ford v Ferrari",
    "gross": 117600000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BYzAwMTYxNTEtZGEyMS00ZTQyLTkxMzYtMzE4NzY1NDYzMzhjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🏎️"
  },
  {
    "name": "1917",
    "gross": 159200000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BOTBhYjQxNTAtY2Q4MS00MTc0LThkODMtMzQzOWU3ZGMwMmI5XkEyXkFqcGdeQXVyMjQ4NTUzOTg@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "⚔️"
  },
  {
    "name": "Bohemian Rhapsody",
    "gross": 216694688.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjQyNjA0MDYwMF5BMl5BanBnXkFtZTgwNjczMTAwMDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🎤"
  },
  {
    "name": "Knives Out",
    "gross": 165300000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjMyMjgyNDc4Ml5BMl5BanBnXkFtZTgwOTc5OTY3NzE@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "🔪"
  },
  {
    "name": "The Irishman",
    "gross": 7000000.0,
    "art": "https://m.media-amazon.com/images/M/MV5BMjNiY2RmZGMtZWZiNS00ZGM0LWIwYjQtY2Y4Zjc1MjE0ZGE4XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "emoji": "👴"
  }
]

//Define randomNumber function (not defined outside of app lab)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectMovies() {
    index1 = randomNumber(0, movies.length - 1);
    index2 = randomNumber(0, movies.length - 1);
    
    while (index1 == index2) {
        index2 = randomNumber(0, movies.length - 1);
    }
    
    //define movie1&2 for use
    movie1 = movies[index1];
    movie2 = movies[index2];

    //determine correct answer
    if(movie1.gross > movie2.gross){
      correctMovie = movie1.name;
    } else {
      correctMovie = movie2.name;
    }

    // Update the display
    $("#movieButton1").html(movie1.name);
    $("#movieButton2").html(movie2.name);
    $("#img1Emoji").html(movie1.emoji);
    $("#img2Emoji").html(movie2.emoji);
    
  
    //console logs movies and their revenues and the correct one out of the two for testing purposes
    console.log("Movie 1:", movie1.name, "($" + movie1.gross.toLocaleString() + ")");
    console.log("Movie 2:", movie2.name, "($" + movie2.gross.toLocaleString() + ")");
    console.log("Correct answer (higher gross):", correctMovie);
}

function gameEnd() {
    if (lastStreak > bestStreak) {
        bestStreak = lastStreak;
    }
    
    $("#prevScore").html("Previous Score: " + lastStreak);
    $("#bestScore").html("Personal Best: " + bestStreak);

    $("#gamescreen").hide()
    $("#loseScreen").show()
}

//checks user input and if that matches highest gross
function checkAnswer(selectedMovie) {
    if (correctMovie == selectedMovie.name) {
        lastStreak++;
        console.log("Correct! Streak:", lastStreak);
        selectMovies();
    } else {
        console.log("Incorrect! Final streak:", lastStreak);
        gameEnd();
        $("#gameScreen").hide();
        $("#loseScreen").show();
    }
}

$(document).ready(function() {
    console.log("Game loaded");
    
    // Hide screens
    $("#loseScreen").hide();
    $("#gameScreen").hide();
    
    // Start game
    $("#startButton").click(function() {
        console.log("Starting game");
        $("#startScreen").hide();
        $("#gameScreen").show();
        lastStreak = 0;
        selectMovies();
    });
    
    // Replay game
    $("#replayButton").click(function() {
        $("#startScreen").show();
        $("#loseScreen").hide();
    });
    
    // Movie choice buttons
    $("#movieButton1").click(function() {
        checkAnswer(movie1);
    });
    
    $("#movieButton2").click(function() {
        checkAnswer(movie2);
    });
});