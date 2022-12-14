
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import router from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div data-theme="light">
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
