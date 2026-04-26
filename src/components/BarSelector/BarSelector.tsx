import React from 'react';
import type { BarSelectorProps } from '../../types';
import { BAR_WEIGHTS } from '../../constants';
import {
  Container,
  Title,
  OptionsContainer,
  Option,
  RadioInput,
  WeightInfo,
} from './BarSelector.styles';

const BarSelector: React.FC<BarSelectorProps> = ({ selectedBar, onBarChange }) => {
  return (
    <Container>
      <Title>Tipo de Barra</Title>
      <OptionsContainer>
        <Option $isSelected={selectedBar === 'FEMININA'}>
          <RadioInput
            type="radio"
            name="barType"
            value="FEMININA"
            checked={selectedBar === 'FEMININA'}
            onChange={() => onBarChange('FEMININA')}
          />
          Feminina
          <WeightInfo>({BAR_WEIGHTS.FEMININA}kg)</WeightInfo>
        </Option>
        <Option $isSelected={selectedBar === 'MASCULINA'}>
          <RadioInput
            type="radio"
            name="barType"
            value="MASCULINA"
            checked={selectedBar === 'MASCULINA'}
            onChange={() => onBarChange('MASCULINA')}
          />
          Masculina
          <WeightInfo>({BAR_WEIGHTS.MASCULINA}kg)</WeightInfo>
        </Option>
      </OptionsContainer>
    </Container>
  );
};

export default BarSelector;