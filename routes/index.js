const { Router } = require("express");
const ctr = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));

// Rutas users
router.post("/users", ctr.createUser);
router.get("/users",  ctr.getAllUsers);
router.put("/users/:id",    ctr.updateUser);
router.patch("/users/:id",  ctr.updateUser);    // opcional
router.delete("/users/:id", ctr.deleteUser);

module.exports = router;

