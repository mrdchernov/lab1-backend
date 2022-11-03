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

module.exports = {
    dogDTOSchema
};
