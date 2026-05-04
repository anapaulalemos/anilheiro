import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(135deg, #f5f5f5 0%, #a0a0a0 100%);
  border-radius: 12px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow:
    0 8px 24px rgba(160, 160, 160, 0.3),
    inset 0 2px 8px rgba(255, 255, 255, 0.3);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h2`
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: none;
`;

export const WeightContainer = styled.div`
  margin-bottom: 12px;
`;

export const TotalWeight = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  color: #1a1a1a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const WeightInLbs = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #2d2d30;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ClearButton = styled.button`
  background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #c53030 0%, #e53e3e 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(229, 62, 62, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 16px;
  }
`;

export const Divider = styled.div`
  width: 40px;
  height: 2px;
  background: #1a1a1a;
  margin: 0 auto 8px;
  border-radius: 2px;
  opacity: 0.6;
`;