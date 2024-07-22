import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThreeCircles } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'


export default function Home() {

  function getMeals(){

    return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  }

  let {data, isLoading} = useQuery('getMeals', getMeals )
  return <>
    <Helmet>
      <title>Yummy</title>
    </Helmet>
    <div className="container mt-5">
      <div className="row gy-4">
        {isLoading? (
          <div className="d-flex justify-content-center align-items-center pt-5">
            <h1>
            <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
            </h1>
          </div>
        ) : <>
          {data?.data.meals.map((meal) =>(
            <div className="col-md-3" key={meal.idMeal}>
              <div className="meal rounded-3 position-relative overflow-hidden">
                <img src={meal.strMealThumb} className='w-100 rounded-3' alt="meal image" />
                <div className="layer d-flex align-items-center justify-content-center flex-column p-3 rounded-3">
                  <h2 className='text-black'>{meal.strMeal}</h2>
                  <Link to={`/mealdetails/${meal.idMeal}`} className='btn btn-danger w-100'>More Details</Link>
                </div>
              </div>
            </div>
          ))}
        </>
        }
      </div>
    </div>
    
  </>
}
