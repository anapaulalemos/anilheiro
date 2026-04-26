import React from 'react';
import type { PlateRowProps } from '../../types';
import { KG_TO_LB_FACTOR, PLATE_COLORS } from '../../constants';
import {
  Container,
  WeightInfo,
  Weight,
  WeightInLbs,
  Controls,
  Button,
  CountDisplay,
  CountValue,
  CountUnit,
} from './PlateRow.styles';

const PlateRow: React.FC<PlateRowProps> = ({ weight, count, onIncrement, onDecrement }) => {
  const weightInLbs = (weight * KG_TO_LB_FACTOR).toFixed(1);
  const plateColor = PLATE_COLORS[weight as keyof typeof PLATE_COLORS] || '#6B7280';

  return (
    <Container $plateColor={plateColor}>
      <WeightInfo>
        <Weight>{weight}kg</Weight>
        <WeightInLbs>({weightInLbs}lb)</WeightInLbs>
      </WeightInfo>

      <Controls>
        <Button
          $variant="decrement"
          onClick={onDecrement}
          disabled={count === 0}
          aria-label={`Remover anilha de ${weight}kg`}
        >
          −
        </Button>

        <CountDisplay>
          <CountValue>{count}</CountValue>
          <CountUnit>un</CountUnit>
        </CountDisplay>

        <Button
          $variant="increment"
          onClick={onIncrement}
          aria-label={`Adicionar anilha de ${weight}kg`}
        >
          +
        </Button>
      </Controls>
    </Container>
  );
};

export default PlateRow;