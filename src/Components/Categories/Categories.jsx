import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Categories() {

  function getCategories(){
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  let {data, isLoading} = useQuery('getCategories', getCategories);
  return <>
  <Helmet>
      <title>Categories</title>
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
          {data?.data.categories.map((category) =>(
            <div className="col-md-3" key={category.idCategory}>
              <Link to={`/categorymeals/${category.strCategory}`}>
              <div className="meal rounded-3 position-relative overflow-hidden">
                <img src={category.strCategoryThumb} className='w-100 rounded-3' />
                <div className="layer p-3 rounded-3 text-center overflow-auto">
                  <h2 className='text-black h3'>{category.strCategory}</h2>
                  <p className='text-black'>{category.strCategoryDescription}</p>
                  
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
