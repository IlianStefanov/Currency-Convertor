/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#f96816',
  $primaryGreen: '#00ff87',
  $primaryPurple: '#5844ed',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
  //$outline: 1,
});

export default () => <Navigator />;
