const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        trip_budget: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
              }
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "traveller",
                key: "id",
                unique: false,
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "location",
                key: "id",
                unique: false,
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
    }
)

module.exports = Trip;
    
