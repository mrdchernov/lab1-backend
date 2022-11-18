const models = require('../db/models');
const { dogDTOSchema, findDogDTOSchema } = require("../utils/validator");

async function handleDogsGet(req, res) {
    try {
        const dogs = await models.dogs.findAndCountAll({
            order: [
                ['id', 'DESC'],
            ],
        });

        res.status = 200;
        return res.json(dogs.rows);
    } catch (e) {
        res.status = 500;
        return res.json(e.errors);
    }
}

async function handleFindDog(req, res) {
    const searchCondition = req.body;
    try {
        const searchSchema = await findDogDTOSchema.validate(searchCondition, { abortEarly: false });
        delete searchSchema.breed_name;

        const allDogs = await models.dogs.findAll();
        let amountOfParams = 0;
        for (const it in searchSchema) {
            amountOfParams++;

        }
        const result = [];
        for (const dog of allDogs) {
            // start with 0 matches
            let matches = 0;

            for (const search in searchSchema) {
                if (searchSchema[search] === 0 || dog[search] === searchSchema[search]) {
                    matches++;
                }
                // as this params are not so strict - we can count not full match as a half
                if (['experience_required', 'grooming_time', 'walk_distance'].includes(search) && dog[search] < searchSchema[search]) {
                    matches += .5;
                }
            }
            const probability = Number(matches/amountOfParams).toFixed(2);
            result.push({ dog, probability })
        }

        res.status = 200;
        res.json(result);

    } catch (e) {
        res.status = 400;

        return res.json(e.errors);
    }
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
    handleDogsPost,
    handleFindDog
}