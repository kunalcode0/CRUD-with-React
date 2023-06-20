import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Read.css';  

function Read() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://649040af1e6aa71680cae60f.mockapi.io/crud/cr/Create';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const dataJson = await response.json();
      setData(dataJson);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://649040af1e6aa71680cae60f.mockapi.io/crud/cr/Create/${id}`,
        {
          method: 'DELETE',
        }
      );

      setData(data.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  };

  return (
    <div className='read_main'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='read_container'>
           <div className="read_title">
        <div className="read_create">Read Data</div>
        <Link to = "/">
        <button className="show_create">Create Items</button>
        </Link>
        </div>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Update</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <th scope='row'>{user.id}</th>
                  <td className='td_name'>{user.name}</td>
                  <td className='td_email'>{user.email}</td>
                  <td>
                    <Link to='/update'>
                      <button onClick={() => toLocalStorage(user.id, user.name, user.email)} className='read_update'>
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user.id)} className='read_delete'> Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Read;
