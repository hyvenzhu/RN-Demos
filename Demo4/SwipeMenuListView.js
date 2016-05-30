'use strict';
 
var { requireNativeComponent,PropTypes,View } = require('react-native');

var iface = {
  name: 'SwipeMenuListView',
  propTypes: {
      ...View.propTypes // 包含默认的View的属性
  },
};

module.exports = requireNativeComponent('SwipeMenuListView', iface);