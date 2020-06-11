import React from 'react';
import { array, object, string } from 'yup';
import { useReactiveForm } from 'use-reactive-form';

export default function App() {
  const fields = {
    user: '',
    books: [
      {
        title: '',
        author: '',
      }
    ]
  }

  const schema = object().shape({
    user: string().max(20, 'Character limit exceeded')
      .required('This field is required'),
    books: array().of(object().shape({
      title: string().required('This field is required'),
      author: string().required('This field is required'),
    })),
  });

  const config = {
    fields: fields,
    schema: schema
  };

  const { values, ref, validate, errors } = useReactiveForm(config);

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
    } else {
      console.log(errors);
    }
  };

  return (
    <form ref={ref} onSubmit={onSubmit}>
      <div>
        <label htmlFor="user">User</label>
        <input type="text" name="user" id="user" defaultValue={values.name} />
        {errors.user.error && <p> {errors.user.error} </p>}
      </div>

      {values.books.map((b, i) => (
        <div key={`book${i}`}>
          <input type="text" name={`books_${i}_title`} />
          <input type="text" name={`books_${i}_author`} />
        </div>
      ))}

      <button type="submit" onClick={onSubmit}>Submit</button>
    </form>
  )
}
