import React, { useState, useEffect, useContext } from 'react';
import { getUser,deleteUser } from '../../api/user';
import ViewUser from './components/ViewUser';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import { StoreContext } from '../../context/StoreContext';


const AdminDashboard = () => {
  const {currentUser}=useContext(StoreContext)
  const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState('view');
  

  useEffect(() => {
    // Fetch user data from an API or database
    const fetchUsers = async () => {
      try {
        const response = await getUser();
        const data = await response.data;
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'add':
        return <AddUser />;
      case 'view':
        return <ViewUser users={users} handleRemoveUser={handleRemoveUser} />;
      case 'update':
        return <UpdateUser />;
      default:
        return null;
    }
  };
  if(currentUser.role==='admin'){
    

  return (
    <div>
       <div className="container mx-auto py-6">
       <h1 className="text-4xl font-bold text-center mb-8">Welcome to Admin Dashboard</h1>
       <Navbar setCurrentPage={setCurrentPage} />
        
        <div className="container mx-auto py-6">{renderPage()}</div>
      </div>
      
     
    </div>
  );
  }else{
    return(
      <>
      You do not have permission to view this page
      </>
    )
  }
  
};

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-[#8a4af3] py-4 px-6 mb-6">
      <ul className="flex space-x-4">
        <li>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setCurrentPage('add')}
          >
            Add User
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setCurrentPage('view')}
          >
            View Users
          </button>
        </li>
      </ul>
    </nav>
  );
};


export default AdminDashboard;
