import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values)
      // Movie DB auth step 1
      axios.get(`${process.env.REACT_APP_BASEURL}authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`)
        .then(response => {
          const requestToken = response.data.request_token
          console.log(requestToken);

          axios.post(`${process.env.REACT_APP_BASEURL}authentication/token/validate_with_login?api_key=${process.env.REACT_APP_APIKEY}`,
            {
              username: values.username, // jmanongko
              password: values.password, // juanmanongko18
              request_token: requestToken
            }).then(res => {
              const validatedRequestToken = res.data.request_token
              console.log(validatedRequestToken);

              axios.post(`${process.env.REACT_APP_BASEURL}authentication/session/new?api_key=${process.env.REACT_APP_APIKEY}`,
                {
                  request_token: validatedRequestToken
                }).then(res => {
                  const sessionID = res.data.session_id
                  localStorage.setItem("session", sessionID);

                  // navigate('/profile');
                  // window.location.href = "/profile";
                  window.location.assign = ("/profile");

                  // console.log(sessionID);
                })
            })    
        })
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label 
        // style={{ color : 'red' }}
        htmlFor="username">
          Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
         <div style={{ color : 'red' }}>{formik.errors.username}</div>
       ) : null}

      <br />
      <label 
        // style={{ color : 'red' }}
        htmlFor="password">
          Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
         <div style={{ color : 'red' }}>{formik.errors.password}</div>
       ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};


export default Login;