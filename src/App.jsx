import './App.css'
// import Body from './component/Body'
import Head from './component/Head'
import { Provider } from 'react-redux'
import store from "./component/utils/Store.jsx"
import MainContainer from './component/MainContainer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './component/pages/WatchPage.jsx'
import ButtonList from './component/ButtonList.jsx'
import VideoContainer from './component/VideoContainer.jsx'
import Body from './component/Body.jsx'

const appRouter = createBrowserRouter(
  [ 
    {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      },
    ]
    }  

  ]
)

function App() {

  return (
<>
    <Provider store={store}>
      
      <RouterProvider router={appRouter}/>
    </Provider>
</>



  )
}

export default App
