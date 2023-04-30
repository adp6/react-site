import { createBrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import NoPage from './NoPage'
import UsersPost from "./UsersPost";
import Page from './Page';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import FullDev from './components/FullDev';
import ApiPosts from './ApiPosts';

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/posts',
        element:<UsersPost/>
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