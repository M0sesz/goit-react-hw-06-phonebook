import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer, StyledInput, StyledButton } from './Form.styled';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number'
    )
    .required('Phone number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <h2>Add New Contact</h2>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact({ ...values }));
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field as={StyledInput} type="text" id="name" name="name" />

          <label htmlFor="number">Number</label>
          <Field as={StyledInput} type="tel" id="number" name="number" />

          <StyledButton type="submit">Add contact</StyledButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ContactForm;
