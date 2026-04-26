import React from 'react';
import type { TotalDisplayProps } from '../../types';
import { KG_TO_LB_FACTOR } from '../../constants';
import {
  Container,
  Title,
  WeightContainer,
  TotalWeight,
  WeightInLbs,
  ClearButton,
  Divider,
} from './TotalDisplay.styles';

const TotalDisplay: React.FC<TotalDisplayProps> = ({ totalWeight, onClear }) => {
  const totalInLbs = (totalWeight * KG_TO_LB_FACTOR).toFixed(1);

  return (
    <Container>
      <Title>Peso Total</Title>
      <Divider />
      <WeightContainer>
        <TotalWeight>{totalWeight}kg</TotalWeight>
        <WeightInLbs>({totalInLbs} lb)</WeightInLbs>
      </WeightContainer>
      <ClearButton onClick={onClear} aria-label="Limpar todas as anilhas">
        Limpar
      </ClearButton>
    </Container>
  );
};

export default TotalDisplay;