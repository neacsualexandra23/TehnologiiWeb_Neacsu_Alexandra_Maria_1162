import express from "express";
//import { saveSong, searchSpotify, getHistory, clearHistory } from "../controllers/songsController.js";




import {
  saveSong,
  searchSpotify,
  getHistory,
  clearHistory,
  markFavorite,
  unmarkFavorite,
  getFavorites,
  getAllSaved,
  deleteSong   // <--- adauga
} from "../controllers/songsController.js";


const router = express.Router();

router.get("/spotify/search", searchSpotify);
router.post("/save", saveSong);

// istoricul căutărilor
router.get("/history", getHistory);
router.delete("/history", clearHistory);
router.put("/favorite/:id", markFavorite);       // add to favorites
router.put("/unfavorite/:id", unmarkFavorite);   // remove from favorites
router.get("/favorites", getFavorites);          // list favorites
router.get("/all", getAllSaved);
router.delete("/delete/:id", deleteSong);



export default router;

