import { useState } from 'react'
import Container from '../../Components/Container';
import StoreForm from '../../Components/StoreForm';
import axios from 'axios';
import { PATHS } from '../../Components/router/paths';
import { useNavigate } from 'react-router-dom';
import "./style.css"
import { API_URL } from '../../config/api';

const CreateStorePage = () => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateStore = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${API_URL}stores`, body)
      console.log(res.data)
      setIsLoading(false);
      navigate(PATHS.STORES.ROOT);
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
    </div>
  )
}

export default CreateStorePage;