import React from 'react';
import { Container, Title, Button, FormLayout, FormRow, CheckboxContainer } from '../common-styles';
import { downloadFile } from '../lib/downloads';

type Props = {
  values: any;
};

function Summary({ values }: Props) {
  return (
    <Container>
      <Title>
      Summary
      </Title>

      <FormLayout>
        <FormRow>
          <b>First Name: </b> {values.firstName}
        </FormRow>
        <FormRow>
          <b>Last Name: </b> {values.lastName}
        </FormRow>
        <FormRow>
          <b>Email: </b> {values.email}
        </FormRow>
        <FormRow>
          <b>Music Services: </b> {values.providers.join(', ')}
        </FormRow>
      </FormLayout>

      <Button onClick={() => {
        downloadFile({
          url: 'http://127.0.0.1:8000/questionnaires/collected-data/',
          name: 'data.csv',
          contentType: 'text/csv',
        })
      }}>
        Download .CSV
      </Button>

    </Container>
  );
}

export default Summary;
