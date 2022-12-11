import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=9e7fd1bed96b980baeacdc8c5eee2b77&language=en-US&page=1',
    })
      .then(function (response) {
        setData(response.data.results)
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
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Popularity</th>
            <th>Overview</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.original_title}</td>
              <td><img src={'https://image.tmdb.org/t/p/w500' + item.poster_path}></img></td>
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