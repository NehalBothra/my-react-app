import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/navbar'
import States from './components/class28';
import Garage from './components/class29';
import Computer from './components/class 27';
import EmployeeDetails from './components/state';
import Test from './components/class 30';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";


export default function App() {
  return (
    <>
    <NavBar></NavBar>
     <EmployeeDetails></EmployeeDetails>
     <States></States>
     <Garage></Garage>
     <Computer></Computer>
     <Test></Test>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


