'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = component;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _component = require('../../../templates/component');

var _component2 = _interopRequireDefault(_component);

var _create_file = require('../../../utils/create_file');

var _create_file2 = _interopRequireDefault(_create_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathes = {
  components: 'src/Components'
};

function component(_ref) {
  var name = _ref.name;

  var filePath = _path2.default.join(pathes.components, name + '.js');

  (0, _create_file2.default)({
    filePath: filePath,
    content: (0, _component2.default)({ name: name })
  });
}