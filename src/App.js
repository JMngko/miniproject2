import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function App() {

  const getData = () => {
    Axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/550?api_key=9e7fd1bed96b980baeacdc8c5eee2b77',
    })
      .then(function (response) {
        setData(response.data.data)
      });
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
