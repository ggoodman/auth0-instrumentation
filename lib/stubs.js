var noop = function() {};
var emptyMiddleware = function (a, b, next) { next(); };

var emptyLogger = {
  trace: noop,
  debug: noop,
  info: noop,
  warn: noop,
  error: noop,
  fatal: noop,
  common: require('./logger/common')
};

var emptyErrorReporter = {
  isActive: false,
  captureException: noop,
  patchGlobal: noop,
  hapi: {
    plugin: {
      register: emptyMiddleware
    }
  },
  express: {
    requestHandler: emptyMiddleware,
    errorHandler: emptyMiddleware
  },
};
emptyErrorReporter.hapi.plugin.register.attributes = { pkg: require('../package.json') };

var emptyMetrics = {
  isActive: false,
  gauge: noop,
  increment: noop,
  histogram: noop,
  flush: noop,
  setDefaultTags: noop
};

module.exports = {
  logger: emptyLogger,
  errorReporter: emptyErrorReporter,
  metrics: emptyMetrics
};
