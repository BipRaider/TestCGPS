'use strict';

module.exports = server => {
   server.use('/api/bicycles', require('../modules/bicycles/router/bike.router'));
   server.use('/api-docs', require('../modules/swagger/router/swagger.router'));
};
