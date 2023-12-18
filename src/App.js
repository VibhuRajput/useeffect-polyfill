import React, { useEffect, useState } from 'react';
import './style.css';
import Counter from './components/counter';

export default function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts'
  //     );
  //     if (!response.ok) {
  //       throw new Error('response not OK');
  //     }
  //     const fetchedData = await response.json();
  //     setData(fetchedData);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // //useEffect takes two things, a callback and a dependency array
  // useEffect(() => {
  //   // console.log('fetching goodness');
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>Hey Man!</h1>
      <h3>Learning for 69 years of Goodluck :)</h3>
      <Counter />
      {/* <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}
//useEffect is a hook to perform side effects after rendering such as Fetch, manual DOM render, subscription, etc
