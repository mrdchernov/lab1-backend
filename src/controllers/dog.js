const models = require('../db/models');
const { dogDTOSchema } = require("../utils/validator");

async function handleDogsGet(req, res) {
    const dogs = await models.dogs.findAndCountAll({
        order: [
            ['id', 'DESC'],
        ],
    });

    res.status= 200;
    return res.json(dogs.rows);
}

async function  handleDogsPost (req, res) {
    const dog  = req.body;
    try {
        const dogObj = await dogDTOSchema.validate(dog, { abortEarly: false });
        const dbObj = await models.dogs.create(dogObj);
        res.json({ ok : true, id: dbObj.id });
    } catch (e) {
        res.status = 400;
        res.json(e.errors)
    }

}

module.exports = {
    handleDogsGet,
    handleDogsPost
}