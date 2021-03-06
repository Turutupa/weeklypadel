import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 100vw;
  padding: 10px;
  margin-top: -100px;

  @media (min-width: 768px) {
    margin-top: -25px;
  }
`;

const Title = styled.p`
  z-index: 10;
  color: white;
  word-wrap: break-word;
  font-family: Commando;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
  max-width: 85vw;
  text-shadow: 2px 2px black;
`;

const Subtitle = styled.p`
  color: white;
  z-index: 10;
  font-family: Neon;
  font-size: 0.9rem;
  color: rgb(230, 230, 230);
  max-width: 400px;
  text-align: center;
  margin-top: 0;
  max-width: 80vw;
  text-shadow: 2px 2px black;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export default function SiteDescription() {
  return (
    <Container>
      <Title>Generate Padel Tournaments</Title>
      <Subtitle>
        Easily create Round Robin and Brackets tournaments, for official
        competitions or weekly games with your friends
      </Subtitle>
    </Container>
  );
}
