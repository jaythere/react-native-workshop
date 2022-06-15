import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS, FONT} from '../utils';

const Button = ({label, onPressHandler, backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[{backgroundColor}, styles.wrapper]}
      onPress={onPressHandler}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 10,
    width: 'auto',
  },
  label: {
    color: COLORS.white,
    fontSize: FONT.medium,
    fontWeight: 'bold',
  },
});

Button.propTypes = {
  label: PropTypes.string,
  onPressHandler: PropTypes.func,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  onPressHandler: () => {},
  backgroundColor: COLORS.buttonPrimary,
};

export default Button;
