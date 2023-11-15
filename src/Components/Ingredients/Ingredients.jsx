import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';

export default function Ingredients() {
  function getIngredients(){
    return axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  }

  let {data, isLoading} = useQuery('getIngredients', getIngredients);
  return <>
  <Helmet>
      <title>Ingredients</title>
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
              <Link to={`/ingredientmeals/${meal.strIngredient}`}>
              <div className="meal rounded-3 text-center">
                <i className="fa-solid fa-drumstick-bite fa-4x"></i>
                <h2 className='mb-3'>{meal.strIngredient}</h2>
                <p>{meal.strDescription?.split(' ').slice(0, 40).join(' ')}</p>
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
