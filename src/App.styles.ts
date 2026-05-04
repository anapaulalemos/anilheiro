import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 12px;
  max-width: 480px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #f5f5f5;
  margin-bottom: 4px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.85rem;
  color: #a0a0a0;
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PlatesSection = styled.section`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  color: #a0a0a0;
  margin-bottom: 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PlatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;