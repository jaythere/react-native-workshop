import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../utils';

const Loader = ({show}) => {
  return show ? (
    <View style={styles.wrapper}>
      <ActivityIndicator size={50} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
  },
});

Loader.propTypes = {
  show: PropTypes.bool,
};

Loader.defaultProps = {
  show: false,
};

export default Loader;
