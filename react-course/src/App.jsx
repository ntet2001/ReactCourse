import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from "react";
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { LoaderJob } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage/>}/>
      <Route path='/jobs/:id' loader= {LoaderJob} element={<JobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
