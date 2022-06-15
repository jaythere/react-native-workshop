import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS, FONT} from '../utils';

const Link = ({label, onPressHandler}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPressHandler}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  label: {
    color: COLORS.linkPrimary,
    fontSize: FONT.medium,
  },
});

Link.propTypes = {
  label: PropTypes.string,
  onPressHandler: PropTypes.func,
};

Link.defaultProps = {
  label: '',
  onPressHandler: () => {},
};

export default Link;
