var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Data
// ===========================================================
var favoriteShows = [
  {
    id: 1,
    category: "Anime",
    title: "Avatar the last airbender",
  },
  {
    id: 2,
    category: "comedy",
    title: "Parks and Recreation",
  },
  {
    id: 3,
    category: "comedy",
    title: "The Office",
  },
  {
    id: 4,
    category: "Reality",
    title: "Wipe-Out",
  },
  {
    id: 5,
    category: "anime",
    title: "Full-metal",
  },
];

// Routes
// ===========================================================
app.get("/", function (req, res) {
  res.send("Here are our favorite shows!");
});

// Displays all characters
app.get("/api/favoriteShows", function (req, res) {
  return res.json(favoriteShows);
});

// Displays a single show, or shows "No show found"
app.get("/api/favoriteShows/:id", function (req, res) {
  // Grab the selected parameter
  var chosen = parseInt(req.params.id);
  console.log(chosen);

  // Filter to show only the selected character
  for (var i = 0; i < favoriteShows.length; i++) {
    if (chosen === favoriteShows[i].id) {
      return res.json(favoriteShows[i]);
    }
  }

  // Otherwise display "No character found"
  return res.send("No TV show found");
});

app.post("/api/favoriteShows", function (req, res) {
  var newShow = req.body;

  console.log(newShow);

  favoriteShows.push(newShow);

  res.json(newShow);
});

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
