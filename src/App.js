import { RouterProvider } from "react-router-dom";
import router from './router'
import { useState } from "react";

function App() {
  const[loading,setLoading] = useState(false)
  const load = document.querySelector('.load_screen')
  if(load){
    setTimeout(()=>{
      load.style.display='none'
      setLoading(true)
    },2000)
  }
  return (
    <div className="App">
      {loading?<RouterProvider router={router}/>:null}
    </div>
  );
}

export default App;