const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const baseController = require("../controllers/base.controller");
const userController = require("../controllers/user.controller");
const mapController = require("../controllers/map.controller");
// const teamController = require("../controllers/team.controller");

module.exports = router;

router.get("/", baseController.index);

// Authentication
// router.get('/signup/new',
//  authMiddleware.isNotAuthenticated, 
//  usersController.new
//  )

router.post('/signup', 
authMiddleware.isNotAuthenticated,
//  upload.single('avatar'), 
 userController.create
 )

router.post("/login", userController.login);
router.get("/logout", authMiddleware.isAuthenticated, userController.logout);

// Users
router.get("/user/:id", authMiddleware.isAuthenticated, userController.profile);

// Map
// router.get("/map", authMiddleware.isAuthenticated, mapController.map);
router.get("/map", authMiddleware.isAuthenticated, mapController.listPlaces);
// router.patch("/map", authMiddleware.isAuthenticated, mapController.conquer);


// Teams
// router.get("/team", authMiddleware.isAuthenticated, teamController.displayTeam)
