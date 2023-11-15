import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Categories from './Components/Categories/Categories'
import Area from './Components/Area/Area'
import Ingredients from './Components/Ingredients/Ingredients'
import Contact from './Components/Contact/Contact'
import Search from './Components/Search/Search'
import MealDetails from './Components/MealDetails/MealDetails'
import CategoryMeals from './Components/CategoryMeals/CategoryMeals'
import AreaMeals from './Components/AreaMeals/AreaMeals'
import IngredientMeals from './Components/IngredientMeals/IngredientMeals'
import NotFound from './Components/NotFound/NotFound'


export default function App() {

  let routers = createBrowserRouter([

    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: '/categories', element: <Categories/>},
      {path: '/area', element: <Area/>},
      {path: '/ingredients', element: <Ingredients/>},
      {path: '/contact', element: <Contact/>},
      {path: '/search', element: <Search/>},
      {path: '/mealdetails/:id', element: <MealDetails/>},
      {path: '/categorymeals/:catName', element: <CategoryMeals/>},
      {path: '/areameals/:areaName', element: <AreaMeals/>},
      {path: '/ingredientmeals/:ingName', element: <IngredientMeals/>},
      {path: '*', element: <NotFound/>},
    ]}
  ])

  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
