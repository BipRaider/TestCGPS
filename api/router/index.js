'use strict';

module.exports = server => {
   server.set('views engine', 'hbs');
   server.engine('html', require('hbs').__express);
   server.use('/', require('../memos/router/memo.router'));
};
