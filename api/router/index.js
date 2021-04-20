'use strict';

module.exports = server => {
   server.set('views engine', 'hbs');
   server.engine('html', require('hbs').__express);
   server.use('/', require('../modules/router/memo.router'));
   server.use('/category', require('../modules/router/category.router'));
};
