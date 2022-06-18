'use strict';

/**
 * dinosaur router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dinosaur.dinosaur');
