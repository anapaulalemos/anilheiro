import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(135deg, #2d2d30 0%, #3a3a3f 100%);
  border: 2px solid #a0a0a0;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  color: #f5f5f5;
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const Option = styled.label<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.$isSelected ? '#f5f5f5' : '#a0a0a0'};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  border: 2px solid ${props => props.$isSelected ? '#f5f5f5' : 'transparent'};
  background: ${props => props.$isSelected ? 'rgba(245, 245, 245, 0.1)' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    color: #f5f5f5;
    border-color: #f5f5f5;
    background: rgba(245, 245, 245, 0.1);
  }
`;

export const RadioInput = styled.input`
  margin-right: 6px;
  transform: scale(1.1);
  accent-color: #f5f5f5;
`;

export const WeightInfo = styled.span`
  margin-left: 4px;
  color: #a0a0a0;
  font-weight: 500;
  font-size: 0.85rem;
`;