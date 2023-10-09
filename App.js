
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home/Home';
import Artist from './components/Artist/Artist';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


const router = createBrowserRouter([{
path:"",element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:"artist",element:<Artist/>},
  {path:"contact",element:<Contact/>},
  {path:"about",element:<About/>},

]
}])

function App() {
  return (
<RouterProvider router={router}>

</RouterProvider>
  );
}

export default App;
