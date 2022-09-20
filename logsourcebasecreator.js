function createLogSourceBase (execlib) {
  'use strict';

  var lib = execlib.lib,
    Destroyable = lib.Destroyable;

  function LogSourceBase (conf) {
    Destroyable.call(this);
    this.conf = conf;
    this.logEvent = new lib.HookCollection();
  }
  lib.inherit(LogSourceBase, Destroyable);
  LogSourceBase.prototype.__cleanUp = function () {
    if (this.logEvent) {
      this.logEvent.destroy();
    }
    this.logEvent = null;
    this.conf = null;
  };
  LogSourceBase.prototype.fireLogEvent = function (eventobj) {
    if (!this.logEvent) {
      return;
    }
    this.logEvent.fire(eventobj);
  };

  return LogSourceBase;
}
module.exports = createLogSourceBase;