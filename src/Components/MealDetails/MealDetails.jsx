import axios from 'axios';
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

export default function MealDetail() {

  let params = useParams();

  function getMealDetails(id){
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

  let {data , isLoading} = useQuery('MealDetails', ()=> getMealDetails(params.id));

  console.log(data?.data.meals);
  return <>
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
          {data?.data.meals.map((meal)=>(
            <>
            <div className="col-md-4" key={meal.idMeal}>
              <div className="image rounded-3">
                <img src={meal.strMealThumb} className='w-100 rounded-3'/>
              </div>
              <h2 className='h1 mt-2'>{meal.strMeal}</h2>
            </div>
            <div className="col-md-8">
              <h2 className='h1'>Instructions</h2>
              <p className='meal-par my-3'>{meal.strInstructions}</p>
              <h4 className='h2 fw-bolder'>Category : <span className='fw-normal'>{meal.strCategory}</span></h4>
              <h4 className='h2 fw-bolder'>Area : <span className='fw-normal'>{meal.strArea}</span></h4>
              <span className='d-block h4 mb-3'>Recipes : </span>
              <span className='recipes'>{meal.strMeasure1}{meal.strIngredient1}</span>
              <span className='recipes'>{meal.strMeasure2}{meal.strIngredient2}</span>
              <span className='recipes'>{meal.strMeasure3}{meal.strIngredient3}</span>
              <span className='recipes'>{meal.strMeasure4}{meal.strIngredient4}</span>
              <span className='recipes'>{meal.strMeasure5}{meal.strIngredient5}</span>
              <span className='recipes'>{meal.strMeasure6}{meal.strIngredient6}</span>
              <span className='recipes'>{meal.strMeasure7}{meal.strIngredient7}</span>
              <span className='recipes'>{meal.strMeasure8}{meal.strIngredient8}</span>

              <span className='d-block h4 my-3'>Soup : </span>
              <div className='mb-3'><span className='recipes'>{meal.strTags}</span></div>

            <button className='btn btn-success me-2'><a href={meal.strSource} target='_blank'>Source</a></button>
            <button className='btn btn-danger'><a href={meal.strYoutube} target='_blank'>Youtube</a></button>

            </div>
            </>
          ))}
        </>
        }
      </div>
    </div>
  </>
  
}
