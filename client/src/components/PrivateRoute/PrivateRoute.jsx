import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import getPrivateRoute from '../../services/getPrivateRoute';

const PrivateRoute = () => {
    const [ privateView, setPrivateView ] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getPrivateRoute().then(
            (response) => {
            setPrivateView(response.data);
    },
    (error) => {
        console.log("Private page", error.response);
        // Invalid token
        if (error.response && error.response.status === 403) {
          authService.logut()
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  return (
    <div>
        <h3>{privateView.map(p => p)}</h3>
    </div>
  )
}

export default PrivateRoute