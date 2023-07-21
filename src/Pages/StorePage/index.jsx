import axios from 'axios';
import { useEffect, useState } from 'react'
import Container from '../../Components/Container';
import { PATHS } from '../../Components/router/paths';
import { Navigate, useParams } from 'react-router-dom';
import WithParams from '../../Components/WithParams';
import "./style.css";
import { API_URL } from '../../config/api';

const StorePage = () => {

  const { id } = useParams();
  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [, setError] = useState(null);

  const handleEdit = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    (
      async () => {
        try {
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
          {isEditing && <Navigate to={PATHS.STORES.EDIT.replace(":id", id)} replace />}
        </div>
      </Container>
    </div>
  )
}

export default WithParams(StorePage);