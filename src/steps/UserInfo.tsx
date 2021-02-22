import React from 'react';
import { Container, Title, Button, FormLayout, FormRow, Label, Input } from '../common-styles';

type Props = {
  onNext: (...args: any[]) => any;
  handleChange: (...args: any[]) => any;
};

function UserInfo({ onNext, handleChange }: Props) {
  return (
    <Container>
      <Title>
        User Info
      </Title>

      <FormLayout>
        <FormRow>
          <Label>What's your first name?</Label>
          <Input name="firstName" id="firstName" type="text" onChange={handleChange} />
        </FormRow>
        <FormRow>
          <Label>What's your last name?</Label>
          <Input name="lastName" id="lastName" type="text" onChange={handleChange} />
        </FormRow>
        <FormRow>
          <Label>What's your email?</Label>
          <Input name="email" id="email" type="email" onChange={handleChange} />
        </FormRow>
      </FormLayout>

      <Button onClick={() => onNext()}>Next</Button>
    </Container>
  );
}

export default UserInfo;
