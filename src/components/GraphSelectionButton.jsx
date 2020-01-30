import React from 'react';
import { GraphSelectionButtonStyle } from '../styles/GraphSelectionButtonStyles';

const GraphSelectionButton = ({ type }) => {
  return <GraphSelectionButtonStyle>{type}</GraphSelectionButtonStyle>;
};

export default GraphSelectionButton;
