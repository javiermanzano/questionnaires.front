import React from 'react';
import { Container, Title, HeroImage, Button } from '../common-styles';

function Welcome({
  onNext = () => {}
}) {
  return (
    <Container>
      <Title>
        Welcome to the application
      </Title>
      <HeroImage src="https://st.hzcdn.com/simgs/pictures/gardens/tropical-landscape-design-sample-the-garden-planners-img~bed19f4707df3352_9-9230-1-b76c7f8.jpg" />

      <Button onClick={() => onNext() }>Let's get started</Button>
    </Container>
  );
}

export default Welcome;
