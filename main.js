let roleHarvester = require('role/harvester');

module.exports.loop = function () {

    for (let creep of Game.creeps) {
        roleHarvester.run(creep);
    }
}