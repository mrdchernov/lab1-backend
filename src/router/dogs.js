const { Router } = require('express');
const { handleDogsGet, handleDogsPost, handleFindDog } = require("../controllers/dog");
const router = new Router();

router.get('/', handleDogsGet);
router.post('/', handleDogsPost);
router.post('/search', handleFindDog);

module.exports = router;