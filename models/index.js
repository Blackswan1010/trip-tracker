const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
    through: Trip, 
    onDelete: 'CASCADE'
});

Location.belongsToMany(Traveller, {
    through: Trip, 
    onDelete: 'CASCADE'
});

