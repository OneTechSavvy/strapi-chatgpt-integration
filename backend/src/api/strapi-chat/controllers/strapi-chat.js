'use strict';

/**
 * A set of functions called "actions" for `strapi-chat`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
