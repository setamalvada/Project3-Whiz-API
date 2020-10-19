const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const baseController = require("../controllers/base.controller");
const userController = require("../controllers/user.controller");
const mapController = require("../controllers/map.controller");
const teamController = require("../controllers/team.controller");

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
router.patch("/user/:id", authMiddleware.isAuthenticated, userController.editProfile);
// Map
// router.get("/map", authMiddleware.isAuthenticated, mapController.map);
router.get("/map", authMiddleware.isAuthenticated, mapController.listPlaces);
router.patch("/map/:id", authMiddleware.isAuthenticated, mapController.conquer);


// Teams
router.get("/team/general", authMiddleware.isAuthenticated, teamController.displayTeam)
router.get("/team/yellow", authMiddleware.isAuthenticated, teamController.displayTeamYellow)
router.get("/team/purple", authMiddleware.isAuthenticated, teamController.displayTeamPurple)