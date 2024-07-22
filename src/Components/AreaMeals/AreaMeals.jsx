import axios from 'axios';
import React from 'react'
import { Helmet } from 'react-helmet';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function AreaMeals() {

    let params = useParams();

    function getAreaMeals(areaName){
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
    }
    let {data, isLoading} = useQuery('getAreaMeals', ()=> getAreaMeals(params.areaName))
    console.log(data?.data.meals);
  return <>
    <Helmet>
      <title>Area Meals</title>
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
                <Link to={`/mealdetails/${meal.idMeal}`}>
              <div className="meal rounded-3 position-relative overflow-hidden">
                <img src={meal.strMealThumb} className='w-100 rounded-3' />
                <div className="layer d-flex align-items-center justify-content-center  p-3 rounded-3">
                  <h2 className='text-black'>{meal.strMeal}</h2>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </>
        }
      </div>
    </div>
  </>
}
