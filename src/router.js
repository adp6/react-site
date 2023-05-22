import { createBrowserRouter } from 'react-router-dom'
import HomePage from './view/HomePage'
import NoPage from './view/NoPage'
import Page from './view/Page';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import FullDev from './components/FullDev';
import ApiPosts from './view/ApiPosts';

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/api',
        element:<ApiPosts/>
    },
    {
        path:'/page',
        element:<Page/>
    },
    {
        path:'/front',
        element:<FrontEnd/>
    },
    {
        path:'/back',
        element:<BackEnd/>
    },
    {
        path:'/full',
        element:<FullDev/>
    },
    {
        path:'*',
        element:<NoPage/>
    }
], {basename:"/react-site"})

export default router