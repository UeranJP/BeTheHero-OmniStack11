const knex = require('knex');
const confituration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? confituration.test : confituration.development;

const connection = knex(config);

module.exports = connection;