import React, { useState, useMemo } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import BarSelector from './components/BarSelector/BarSelector';
import PlateRow from './components/PlateRow/PlateRow';
import TotalDisplay from './components/TotalDisplay/TotalDisplay';
import { BAR_WEIGHTS, PLATE_WEIGHTS } from './constants';
import type { BarType, PlateCounts } from './types';
import {
  Container,
  Header,
  Title,
  Subtitle,
  PlatesSection,
  SectionTitle,
  PlatesList,
} from './App.styles';

const App: React.FC = () => {
  const [selectedBar, setSelectedBar] = useState<BarType>('FEMININA');
  const [plateCounts, setPlateCounts] = useState<PlateCounts>(() => {
    const initialCounts: PlateCounts = {};
    PLATE_WEIGHTS.forEach(weight => {
      initialCounts[weight] = 0;
    });
    return initialCounts;
  });

  const incrementPlate = (weight: number) => {
    setPlateCounts(prev => ({
      ...prev,
      [weight]: prev[weight] + 1,
    }));
  };

  const decrementPlate = (weight: number) => {
    setPlateCounts(prev => ({
      ...prev,
      [weight]: Math.max(0, prev[weight] - 1),
    }));
  };

  const clearAllPlates = () => {
    const clearedCounts: PlateCounts = {};
    PLATE_WEIGHTS.forEach(weight => {
      clearedCounts[weight] = 0;
    });
    setPlateCounts(clearedCounts);
  };

  const totalWeight = useMemo(() => {
    const barWeight = BAR_WEIGHTS[selectedBar];
    const platesWeight = Object.entries(plateCounts).reduce((total, [weight, count]) => {
      return total + (parseFloat(weight) * count); // Individual plates, not pairs
    }, 0);

    return barWeight + platesWeight;
  }, [selectedBar, plateCounts]);

  return (
    <Router>
      <GlobalStyles />
      <Container>
        <Header>
          <Title>Anilheiro</Title>
          <Subtitle>Calculadora de Peso para LPO</Subtitle>
        </Header>

        <BarSelector
          selectedBar={selectedBar}
          onBarChange={setSelectedBar}
        />

        <PlatesSection>
          <SectionTitle>Anilhas Disponíveis</SectionTitle>
          <PlatesList>
            {PLATE_WEIGHTS.slice().reverse().map(weight => (
              <PlateRow
                key={weight}
                weight={weight}
                count={plateCounts[weight]}
                onIncrement={() => incrementPlate(weight)}
                onDecrement={() => decrementPlate(weight)}
              />
            ))}
          </PlatesList>
        </PlatesSection>

        <TotalDisplay
          totalWeight={totalWeight}
          onClear={clearAllPlates}
        />
      </Container>
    </Router>
  );
};

export default App;