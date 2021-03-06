'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

exports.__esModule = true;

var _ContainerComponent2 = require('../abstract/ContainerComponent');

var _ContainerComponent3 = _interopRequireWildcard(_ContainerComponent2);

var Label = (function (_ContainerComponent) {
  function Label() {
    _classCallCheck(this, Label);

    if (_ContainerComponent != null) {
      _ContainerComponent.apply(this, arguments);
    }

    this.displayName = 'Label';
  }

  _inherits(Label, _ContainerComponent);

  _createClass(Label, [{
    key: 'displayName',
    value: undefined,
    enumerable: true
  }]);

  return Label;
})(_ContainerComponent3['default']);

exports['default'] = Label;
module.exports = exports['default'];