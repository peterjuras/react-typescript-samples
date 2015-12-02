/* */ 
(function(process) {
  var common = require('./src/common');
  var _cd = require('./src/cd');
  exports.cd = common.wrap('cd', _cd);
  var _pwd = require('./src/pwd');
  exports.pwd = common.wrap('pwd', _pwd);
  var _ls = require('./src/ls');
  exports.ls = common.wrap('ls', _ls);
  var _find = require('./src/find');
  exports.find = common.wrap('find', _find);
  var _cp = require('./src/cp');
  exports.cp = common.wrap('cp', _cp);
  var _rm = require('./src/rm');
  exports.rm = common.wrap('rm', _rm);
  var _mv = require('./src/mv');
  exports.mv = common.wrap('mv', _mv);
  var _mkdir = require('./src/mkdir');
  exports.mkdir = common.wrap('mkdir', _mkdir);
  var _test = require('./src/test');
  exports.test = common.wrap('test', _test);
  var _cat = require('./src/cat');
  exports.cat = common.wrap('cat', _cat);
  var _to = require('./src/to');
  String.prototype.to = common.wrap('to', _to);
  var _toEnd = require('./src/toEnd');
  String.prototype.toEnd = common.wrap('toEnd', _toEnd);
  var _sed = require('./src/sed');
  exports.sed = common.wrap('sed', _sed);
  var _grep = require('./src/grep');
  exports.grep = common.wrap('grep', _grep);
  var _which = require('./src/which');
  exports.which = common.wrap('which', _which);
  var _echo = require('./src/echo');
  exports.echo = _echo;
  var _dirs = require('./src/dirs').dirs;
  exports.dirs = common.wrap("dirs", _dirs);
  var _pushd = require('./src/dirs').pushd;
  exports.pushd = common.wrap('pushd', _pushd);
  var _popd = require('./src/dirs').popd;
  exports.popd = common.wrap("popd", _popd);
  var _ln = require('./src/ln');
  exports.ln = common.wrap('ln', _ln);
  exports.exit = process.exit;
  exports.env = process.env;
  var _exec = require('./src/exec');
  exports.exec = common.wrap('exec', _exec, {notUnix: true});
  var _chmod = require('./src/chmod');
  exports.chmod = common.wrap('chmod', _chmod);
  var _tempDir = require('./src/tempdir');
  exports.tempdir = common.wrap('tempdir', _tempDir);
  var _error = require('./src/error');
  exports.error = _error;
  exports.config = common.config;
})(require('process'));