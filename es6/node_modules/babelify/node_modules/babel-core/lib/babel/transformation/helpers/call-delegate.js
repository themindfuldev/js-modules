"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var t = _interopRequireWildcard(require("../../types"));

module.exports = function (node) {
  var container = t.functionExpression(null, [], node.body, node.generator, node.async);
  container.shadow = true;

  var call = t.callExpression(container, []);
  if (node.generator) call = t.yieldExpression(call, true);

  return t.returnStatement(call);
};