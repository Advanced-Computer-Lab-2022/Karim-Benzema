const router = require("express").Router();

router.post("/", async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.cookie('role', '', { maxAge: 1 });
    res.status(200).json({ msg: "logged out!" })
}
)


module.exports = router 