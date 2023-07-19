import { useState } from 'react'
import Container from '../../Components/Container';
import StoreForm from '../../Components/StoreForm';
import axios from 'axios';
import { PATHS } from '../../Components/router/paths';
import { Navigate } from 'react-router-dom';
import "./style.css"

const CreateStorePage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isGoToListPage, setIsGoToListPage] = useState(false);

  const handleCreateStore = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`https://some-data.onrender.com/stores`, body)
      console.log(res.data)
      setIsLoading(false);
      setIsGoToListPage(true);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='create-page'>
      <Container>
        <div className='create-page'>
          <h1>Create Store</h1>
          <StoreForm 
            handleSubmit={handleCreateStore} 
            isLoading={isLoading}
          />
        </div>
      </Container>

      {isGoToListPage && (<Navigate to={PATHS.STORES.ROOT} replace />)}
    </div>
  )
}

export default CreateStorePage;