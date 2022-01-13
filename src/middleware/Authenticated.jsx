import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';

function Authenticated(props) {
    const auth = useRecoilValue(authenticated);

    useEffect(() => {
        if(!auth.check){
            <Navigate to="/login" />
        }
    });
    
    return props.children
}

export default Authenticated;
