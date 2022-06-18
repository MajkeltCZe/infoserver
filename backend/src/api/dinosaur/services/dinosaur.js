'use strict';

/**
 * dinosaur service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dinosaur.dinosaur');
