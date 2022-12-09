import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get(`${process.env.REACT_APP_BASEURL}authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`)
        .then(response => {
          const movie = response.data.id
          console.log(movie);
        })
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Popularity</th>
            <th>Overview</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <tr key={index}>
              <td>{item.id}</td>
              <td>{item.original_title}</td>
              <td>{item.image}</td>
              <td>{item.popularity}</td>
              <td>{item.overview}</td>
            </tr>
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
