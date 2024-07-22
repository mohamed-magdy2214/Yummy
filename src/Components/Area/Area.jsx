import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Area() {

  function getArea(){
    return axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }

  let {data, isLoading} = useQuery('getArea', getArea);
  return <>
    <Helmet>
      <title>Area</title>
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
            <div className="col-md-3">
              <Link to={`/areameals/${meal.strArea}`}>
              <div className="area rounded-3 text-center">
              <i className="fa-solid fa-house-laptop fa-4x"></i>
              <h2>{meal.strArea}</h2>
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
