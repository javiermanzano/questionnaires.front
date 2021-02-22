import React, { useState } from 'react';
import { useFormik } from 'formik';

import './App.css';
import Welcome from './steps/Welcome';
import UserInfo from './steps/UserInfo';
import MusicPreference from './steps/MusicPreference';
import Summary from './steps/Summary';

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
  providers: Array<string>,
};

function App() {
  const [step, setStep] = useState(0);
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    providers: []
  };
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const values = formik?.values;

  const STEPS = [
    <Welcome
      onNext={() => setStep(step + 1)} />,
    <UserInfo
      onNext={() => {
        if (!values.firstName || !values.lastName && !values.email) {
          return;
        }
        setStep(step + 1);
      }}
      handleChange={formik.handleChange} />,
    <MusicPreference
      onNext={() => setStep(step + 1)}
      values={formik?.values}
      handleChange={formik.handleChange} />,
    <Summary values={formik?.values} />,
  ];

  return (
    <div className="App">
      <header className="App-header">
        {STEPS[step]}
      </header>
    </div>
  );
}

export default App;
