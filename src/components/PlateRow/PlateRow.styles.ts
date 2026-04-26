import styled from 'styled-components';

export const Container = styled.div<{ $plateColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: linear-gradient(135deg, #2d2d30 0%, #3a3a3f 100%);
  border-radius: 6px;
  border-left: 4px solid ${props => props.$plateColor};
  margin-bottom: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-left-width: 5px;
  }
`;

export const WeightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const Weight = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #f5f5f5;
  min-width: 40px;
`;

export const WeightInLbs = styled.span`
  font-size: 0.75rem;
  color: #a0a0a0;
  font-weight: 500;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button<{ $variant: 'increment' | 'decrement' }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props =>
    props.$variant === 'increment'
      ? 'linear-gradient(135deg, #1f721d 0%, #1c7519 100%)'
      : 'linear-gradient(135deg, #E53E3E 0%, #C53030 100%)'
  };
  color: white;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CountDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 50px;
  justify-content: center;
`;

export const CountValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f5f5f5;
  min-width: 20px;
  text-align: center;
`;

export const CountUnit = styled.span`
  font-size: 0.7rem;
  color: #a0a0a0;
  font-weight: 500;
`;