var server = require('./9.node_router');
var router = require('./9.router');

server.start(router.route);