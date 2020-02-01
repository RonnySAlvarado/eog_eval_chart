import React from 'react';
import { GraphSelectionButtonStyle } from '../styles/GraphSelectionButtonStyles';

const GraphSelectionButton = ({ type, setMetricType }) => {
  return <GraphSelectionButtonStyle onClick={() => setMetricType(type)}>{type}</GraphSelectionButtonStyle>;
};

export default GraphSelectionButton;
