import { useEffect, useState } from 'react'
import Container from '../../Components/Container';
import WithParams from '../../Components/WithParams';
import StoreForm from '../../Components/StoreForm';
import axios from 'axios';
import { PATHS } from '../../Components/router/paths';
import { Navigate, useParams } from 'react-router-dom';
import "./style.css"


const EditStorePage = (props) => {

  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoToListPage, setIsGoToListPage] = useState(false);
  const [, setError] = useState(null);

  // const id = props?.params?.id;

  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await axios.get(`https://some-data.onrender.com/stores/${id}`)
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

  const handleEditStore = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.put(`https://some-data.onrender.com/stores/${id}`, body)
      setStore(res.data);
      setIsLoading(false);
      setIsGoToListPage(true);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <Container>
        <div className="edit-page">
          <h1>Edit Store {id}</h1>
          <StoreForm 
            store={store} 
            handleSubmit={handleEditStore} 
            isLoading={isLoading} 
          />
        </div>
      </Container>

      {isGoToListPage && (<Navigate to={PATHS.STORES.ROOT} replace />)}
    </div>
  )
}

export default WithParams(EditStorePage);