require('dotenv').config()
const db = require('../database/models');
const rp = require("request-promise-native");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = db.sequelize.models;
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const superhero_api = `https://superheroapi.com/api/${process.env.SUPERHEROAPI_TOKEN}`;

async function getAll(req, res) {
    const data = await models.powerstats.findAll();
    res.status(200).json(data);
};

async function getById(req, res) {
    const id = req.params.id;

    // Load saved superheroes.
    // Clients should handle savedPowerStat || superheroesapi.powerstats to load the savedPowerstat first
    const savedPowerstat = await models.powerstats.findAll({
        where: {
            id: id
        }
    });

    const superhero = await rp({ url: superhero_api.concat(`/${id}`) });
    if (superhero) {

        // Include savedImage key and value if the file exist.
        // Client handles loading image using this condition: <savedImage || superheroesapi.url>

        if (fs.existsSync(path.join(__dirname, '../public/images/').concat(`${id}.jpeg`)))
            res.status(200).json({
                // superhero result is a string and should be parse as json.
                defaults: JSON.parse(`${superhero}`),
                savedPowerStat: savedPowerstat[0],
                savedImage: `/api/images/${id}.jpeg`
            });
        else res.status(200).json({
            defaults: JSON.parse(`${superhero}`),
            savedPowerStat: savedPowerstat[0],
        });
    } else {
        res.status(404).send('404 - Not found');
    }
};

// Handles single entry point to search heroes by name for future changes. For example, client can handle
// styles if the search heroes has been modified or not.
async function searchByName(req, res) {
    const name = req.params.name;

    const superheroes = await rp({ url: superhero_api.concat(`/search/${name}`) });

    res.status(200).json(superheroes);
}

async function upsert(req, res) {

    if (!req.body.id) {
        res.status(400).send({ error: `Bad request: Invalid ID` })
    } else {
        await models.powerstats.upsert(req.body)
            .then(function (isUpdate) {
                fetch(req.body.imageUrl).then(res => {
                    const dest = fs.createWriteStream(
                        path.join(__dirname, '../public/images/').concat(`${req.body.id}.jpeg`)
                    );
                    res.body.pipe(dest);
                });
                if (isUpdate) res.status(200).send({ message: "Successfully stored" })
                else res.status(200).send({ message: "Successfully inserted" });
            });
    }
};

module.exports = {
    upsert,
    getAll,
    getById,
    searchByName,
};