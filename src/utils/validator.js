const yup = require('yup');

const dogDTOSchema = yup.object().shape({
    breed_name: yup.string().required(),
    experience_required: yup.number().integer().required(),
    walk_distance: yup.number().integer().required(),
    dog_size: yup.number().integer().required(),
    grooming_time: yup.number().integer().required(),
    guard: yup.number().integer().required(),
    drools: yup.number().integer().required(),
    allergy: yup.number().integer().required(),
    noise: yup.number().integer().required(),
});

const findDogDTOSchema = yup.object().shape({
    experience_required: yup.number().integer(),
    walk_distance: yup.number().integer(),
    dog_size: yup.number().integer(),
    grooming_time: yup.number().integer(),
    guard: yup.number().integer(),
    drools: yup.number().integer(),
    allergy: yup.number().integer(),
    noise: yup.number().integer(),
});

module.exports = {
    dogDTOSchema,
    findDogDTOSchema
};
