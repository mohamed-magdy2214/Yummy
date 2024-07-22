import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Search() {

  let [name, setName]= useState(null);
  let [meal, setMeal] = useState([]);


  function handleChange(e) {
    setName(e.target.value);
  }

  async function getMeal(mealName){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    setMeal(data.meals);
  }

  getMeal(name);

  return <>
  <Helmet>
      <title>Search</title>
    </Helmet>
  <div className="container mt-5">
    <div className="form w-75 mx-auto">
      <input className='form-control' type="text" name="name" id='nameInp' placeholder='Search By Name' onChange={handleChange} />
    </div>
    <div className="row gy-4 mt-4">
      {meal?.map((meal)=>(
        <div className="col-md-3">
          <Link to={`/mealdetails/${meal.idMeal}`}>
          <div className="meal rounded-3 position-relative overflow-hidden">
                <img src={meal.strMealThumb} className='w-100 rounded-3'/>
                <div className="layer d-flex align-items-center justify-content-center flex-column p-3 rounded-3">
                  <h2 className='text-black'>{meal.strMeal}</h2>
                </div>
            </div>
              </Link>
        </div>
      ))}
    </div>
  </div>
  
  </>
}
