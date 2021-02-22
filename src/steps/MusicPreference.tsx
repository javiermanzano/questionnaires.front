import React from 'react';
import { Container, Title, Button, FormLayout, FormRow, CheckboxContainer } from '../common-styles';
import { post } from '../lib/restClient';

type Props = {
  onNext: (...args: any[]) => any;
  handleChange: (...args: any[]) => any;
  values: any;
};

const MUSIC_SERVICES = [
  { key: 'spotify', label: 'Spotify' },
  { key: 'soundcloud', label: 'Soundcloud' },
  { key: 'pandora', label: 'Pandora' },
  { key: 'googleMusic', label: 'Google Music' },
];

function UserInfo({ onNext, handleChange, values }: Props) {
  return (
    <Container>
      <Title>
      What Streaming services do you use?
      </Title>

      <FormLayout>
        <FormRow>
          {MUSIC_SERVICES.map(service => (
            <CheckboxContainer>
              <input id={`providers`}type="checkbox" onChange={handleChange} value={service.key} />
              <label>{service.label}</label>
            </CheckboxContainer>
          ))}
        </FormRow>
      </FormLayout>

      <Button onClick={async () => {
        const data = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          providers: values.providers.join(','),
        }
        await post('questionnaires/collected-data/', data);
        onNext();
      }}>Save</Button>
    </Container>
  );
}

export default UserInfo;
