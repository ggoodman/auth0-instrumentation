module.exports.watch = function (logger, server) {
  server.on('listening', function () {
    var address = this.address();
    var port = typeof address === 'string' ? address : address.port;

    logger.info({
      log_type: 'listening',
      port: port
    },'listening on ' + port);

  });
};
