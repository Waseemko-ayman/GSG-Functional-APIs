import { useEffect, useState } from 'react'
import Table from '../../Components/Table';
import { STORES_COLUMNS } from '../../Components/Constants/stores';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../Components/router/paths';
import "./style.css"
import axios from 'axios';

const StoresPage = () => {

  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [rowId, setRowId] = useState('');
  const [editId, setEditId] = useState('');
  const [, setError] = useState(null);

  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await axios.get('https://some-data.onrender.com/stores')
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
    console.log(id, "is Delted")
    try {
      axios.delete(`https://some-data.onrender.com/stores/${id}`)
      setStores(stores.filter((store) => store.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  const handleEdit = (id) => {
    console.log(id, "is Deleted")
    setEditId(id)
  }

  const handleView = (row) => {
    console.log(row.id, "is View")
    setRowId(row.id)
  }

  return (
    <div className='stores-page'>
      <h1>StoresPage</h1>

      <button onClick={() => setIsCreating(true)}>
        Create Post
      </button>

      <Table 
        columns={STORES_COLUMNS(handleDelete, handleEdit)}
        data={stores}
        onRowClick={handleView}
        isLoading={isLoading}
      />
      {rowId && <Navigate to={`${rowId}`} replace />}
      {editId && <Navigate to={PATHS.STORES.EDIT.replace(":id", editId)} replace />}
      {isCreating && <Navigate to={PATHS.STORES.CREATE} replace />}
    </div>
  )
}

export default StoresPage;