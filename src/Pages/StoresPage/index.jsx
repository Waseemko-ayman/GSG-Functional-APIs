import { useEffect, useState } from 'react'
import Table from '../../Components/Table';
import { STORES_COLUMNS } from '../../Components/Constants/stores';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../Components/router/paths';
import "./style.css"
import axios from 'axios';
import { API_URL } from '../../config/api';

const StoresPage = () => {

  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await axios.get(`${API_URL}stores`)
          setStores(data)
        } catch (error) {
          console.log(error.message)
          setError(error.message)
        } finally {
          setIsLoading(false)
        }
      }
    )();
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`${API_URL}stores/${id}`)
      setStores(stores.filter((store) => store.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  const handleEdit = (id) => {
    navigate(PATHS.STORES.EDIT.replace(":id", id));
  }

  const handleView = (row) => {
    navigate(PATHS.STORES.VIEW.replace(':id', row.id));
  }

  return (
    <div className='stores-page'>
      <h1>StoresPage</h1>

      <button onClick={() => navigate(PATHS.STORES.CREATE)}>
        Create Post
      </button>

      <Table 
        columns={STORES_COLUMNS(handleDelete, handleEdit)}
        data={stores}
        onRowClick={handleView}
        isLoading={isLoading}
      />
    </div>
  )
}

export default StoresPage;