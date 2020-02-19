const router = require("express").Router();
const restrictedMiddleware = require("../restricted_routes/restricted-middleware.js");
const checkRole = require("../auth/check-role-middleware.js");

// router imports
const authRouter = require("../auth/auth-router.js");
const memberRouter = require("../restricted_routes/restricted-member-routers.js");
const adminRouter = require("../restricted_routes/restricted-admin-routers.js");

router.use("/auth", authRouter);
// end of router imports

// admin role routes

router.use("/admin", restrictedMiddleware, checkRole("admin"), adminRouter);

// member routes
router.use("/member", restrictedMiddleware, checkRole("member"), memberRouter);

router.get("/", (req, res) => res.send("api route is running"));

module.exports = router;
