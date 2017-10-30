'use strict';
module.exports = (sequelize, DataTypes) => {
    var Media = sequelize.define('Media', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return Media;
};