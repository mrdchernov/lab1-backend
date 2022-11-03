const { Router } = require('express');
const { handleDogsGet, handleDogsPost } = require("../controllers/dog");
const router = new Router();

router.get('/', handleDogsGet);
router.post('/', handleDogsPost);


module.exports = router;