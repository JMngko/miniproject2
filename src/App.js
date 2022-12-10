import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function App() {
  const [data, setData] = useState([]);
  
  const getData = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9e7fd1bed96b980baeacdc8c5eee2b77&language=en-US&page=1')
        .then(response => {
          const movies = response.data.results
          console.log(movies);
        })

        axios.get('https://image.tmdb.org/t/p/w500/')
        .then(response => {
          const image = response.data.results
          console.log(image);
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
            <th>#</th>
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
              <td>{item.backdrop_path}</td>
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
