import {useSelector,useDispatch} from 'react-redux'
import {actions} from './redux/store/index'


function App() {
  const counter = useSelector((state)=>state.counter);
const dispatch = useDispatch();
  const increment=()=>{ 
    dispatch(actions.increment());
  }

  const des=()=>{
    dispatch(actions.des());
  }
  const add =()=>{
    dispatch(actions.add(10));
  }

  
  return <div >
<h1>Counter App</h1>
{counter}
<button onClick={increment}>+</button>
<button onClick={des}>-</button>
<button onClick={add}>Add by 10</button>
  </div>
}

export default App;
