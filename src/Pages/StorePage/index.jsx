import axios from 'axios';
import { useEffect, useState } from 'react'
import Container from '../../Components/Container';
import { PATHS } from '../../Components/router/paths';
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css";
import { API_URL } from '../../config/api';

const StorePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState(null);

  const handleEdit = () => {
    navigate(PATHS.STORES.EDIT.replace(":id", id));
  }

  useEffect(() => {
    (
      async () => {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${API_URL}stores/${id}`)
          setStore(data)
        } catch (error) {
          console.log(error.message)
          setError(error.message)
        } finally {
          setIsLoading(false)
        }
      }
    )();
  }, [id]);

  return (
    <div className='store-page'>
      <Container>
        <div>
          {isLoading ? (
            <h1 style={{ textAlign: 'center', margin: 20 }}>Loading...</h1>
          ) : (
            <>
              <h2>Store {store.id}</h2>
              <p>{store?.name}</p>
              <p>{store.cities}</p>
            </>
          )}
          <button onClick={handleEdit}>Edit</button>
        </div>
      </Container>
    </div>
  )
}

export default StorePage;