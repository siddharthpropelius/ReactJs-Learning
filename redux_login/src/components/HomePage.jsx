import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { authActions , fetchPost} from '../redux/reducers/authSlice'
import { useEffect } from 'react'


const HomePage = () => {
    const dispatch = useDispatch();
    const handleBtn=()=>{
        dispatch(authActions.logout());
    }
    useEffect(()=>{
        dispatch(fetchPost());
    },[])
  return (
    <div>
      Home
      <button onClick={handleBtn} style={{paddingLeft:100}}>logout</button>
    </div>
  )
}

export default HomePage