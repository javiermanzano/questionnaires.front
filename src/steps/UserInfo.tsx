import { values } from 'lodash';
import React, { useState } from 'react';
import { Container, Title, Button, FormLayout, FormRow, Label, Input, ErrorLabel } from '../common-styles';

type Props = {
  values: any;
  errors: any;
  touched: any;
  onNext: (...args: any[]) => any;
  handleChange: (...args: any[]) => any;
};

function UserInfo({ onNext, handleChange, values, errors }: Props) {
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <Container>
      <Title>
        User Info
      </Title>

      <FormLayout>
        <FormRow>
          <Label>What's your first name?</Label>
          <Input name="firstName" id="firstName" type="text" onChange={handleChange} />
          {errors?.firstName && <ErrorLabel>{errors?.firstName}</ErrorLabel>}
        </FormRow>
        <FormRow>
          <Label>What's your last name?</Label>
          <Input name="lastName" id="lastName" type="text" onChange={handleChange} />
          {errors?.firstName && <ErrorLabel>{errors?.lastName}</ErrorLabel>}
        </FormRow>
        <FormRow>
          <Label>What's your email?</Label>
          <Input name="email" id="email" type="email" onChange={handleChange} />
          {errors?.email && <ErrorLabel>{errors?.email}</ErrorLabel>}
        </FormRow>
      </FormLayout>

      <Button onClick={() => {
        setSubmitted(true);
        onNext();
      }}>Next</Button>
    </Container>
  );
}

export default UserInfo;
