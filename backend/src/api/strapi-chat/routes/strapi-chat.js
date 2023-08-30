module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/strapi-chat/chat',
     handler: 'strapi-chat.chat',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
