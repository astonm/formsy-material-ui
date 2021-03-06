'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormsySelect = _react2.default.createClass({
  displayName: 'FormsySelect',


  propTypes: {
    children: _react2.default.PropTypes.node,
    name: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func,
    requiredError: _react2.default.PropTypes.string,
    validationError: _react2.default.PropTypes.string,
    validationErrors: _react2.default.PropTypes.object,
    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
    value: _react2.default.PropTypes.any
  },

  mixins: [_formsyReact2.default.Mixin],

  getInitialState: function getInitialState() {
    return {
      hasChanged: false
    };
  },
  handleChange: function handleChange(event, index, value) {
    this.setValue(value);

    this.setState({
      hasChanged: value !== ''
    });

    if (this.props.onChange) this.props.onChange(event, value, index);
  },


  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

  render: function render() {
    var value = this.props.value;

    var _props = this.props,
        validations = _props.validations,
        validationError = _props.validationError,
        validationErrors = _props.validationErrors,
        rest = _objectWithoutProperties(_props, ['validations', 'validationError', 'validationErrors']);

    value = this.state.hasChanged ? this.getValue() : value;
    var requiredError = this.props.requiredError;
    var isRequired = this.isRequired,
        isPristine = this.isPristine,
        isValid = this.isValid,
        isFormSubmitted = this.isFormSubmitted;

    var isRequiredError = isRequired() && !isPristine() && !isValid() && isFormSubmitted() && requiredError;
    var errorText = this.getErrorMessage() || isRequiredError;
    return _react2.default.createElement(
      _SelectField2.default,
      _extends({}, rest, {
        errorText: errorText,
        onChange: this.handleChange,
        ref: this.setMuiComponentAndMaybeFocus,
        value: value
      }),
      this.props.children
    );
  }
});

exports.default = FormsySelect;