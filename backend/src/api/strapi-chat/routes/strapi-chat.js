module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/strapi-chat',
     handler: 'strapi-chat.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
