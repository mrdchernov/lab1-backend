'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class dogs extends Model {

        static associate(models) {
            // define association here
        }
    }

    dogs.init({
        breed_name: DataTypes.STRING,
        experience_required: DataTypes.INTEGER,
        walk_distance: DataTypes.INTEGER,
        dog_size: DataTypes.INTEGER,
        grooming_time: DataTypes.INTEGER,
        guard: DataTypes.INTEGER,
        drools: DataTypes.INTEGER,
        allergy: DataTypes.INTEGER,
        noise: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'dogs',
    });
    return dogs;
};