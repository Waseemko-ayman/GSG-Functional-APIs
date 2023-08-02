import axios from 'axios';
import React, { useState } from 'react'
import { GIPHY_API_KEY, GIPHY_URL } from '../../config/api';
import Container from '../../Components/Container';

const GifsPage = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Request To Submit:
    try {
      setIsLoading(true);
      const res = await axios.get(`${GIPHY_URL}stickers/search`, {
        params: {
          api_key: GIPHY_API_KEY,
          q: search,
          limit: 30,
        }
      });
      setData(res.data.data)
    }catch (error) {
      setError(error)
    }finally {
      setIsLoading(false);
    }
  }

  // console.log(data);

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data.map((item) => (
              <img 
                key={item.id}
                src={item.images.downsized_medium.url}
                alt={item.title}
              />
            ))
          )}
        </div>
      </Container>
    </div>
  )
}

export default GifsPage;