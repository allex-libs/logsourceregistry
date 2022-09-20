function createLogsourceRegistry(execlib){
  'use strict';
  var lib = execlib.lib,
    q = lib.q,
    execSuite = execlib.execSuite,
    gateLoggerRegistry = execSuite.additionalRegistries.get('logsources'),
    reg;
  if(!gateLoggerRegistry){
    reg = new execSuite.RegistryBase();
    reg.register('.', require('./logsourcebasecreator')(execlib));
    execSuite.additionalRegistries.add('logsources', reg);
  }
  return {};
}

module.exports = createLogsourceRegistry;