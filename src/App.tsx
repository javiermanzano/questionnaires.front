import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const DataCollectionSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

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
    validationSchema: DataCollectionSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const values = formik?.values;

  console.log({ errors: formik?.errors });
  console.log({ touched: formik?.touched });
  const STEPS = [
    <Welcome
      onNext={() => setStep(step + 1)} />,
    <UserInfo
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
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
