import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom';
import Events from './Components/Events';
import NavigationBar from './Components/NavigationBar';
import EventDetails from './Components/EventDetails';
import { Suspense } from 'react';
import AddEvent from './Components/AddEvent';


function App() {
  return (
    <>
    <Suspense fallback={<p>loading..</p>}>
    <NavigationBar/>
     <Routes>
      <Route path="/events">
        <Route index element={<Events/>}/>
        <Route path="details/:id" element={<EventDetails/>}/>
        <Route path="add" element={<AddEvent/>}/>

      </Route>
      <Route path="*" element={<> <p>Not Found</p></>}/>
     </Routes>
     </Suspense>
    </>
  );
}

export default App
