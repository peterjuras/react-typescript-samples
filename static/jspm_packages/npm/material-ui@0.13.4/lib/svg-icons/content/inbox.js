/* */ 
'use strict';
var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var SvgIcon = require('../../svg-icon');
var ContentInbox = React.createClass({
  displayName: 'ContentInbox',
  mixins: [PureRenderMixin],
  render: function render() {
    return React.createElement(SvgIcon, this.props, React.createElement('path', {d: 'M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z'}));
  }
});
module.exports = ContentInbox;
