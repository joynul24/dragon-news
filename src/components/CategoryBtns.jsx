import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CategoryBtns() {
    const [categoryBtn, SetCategoryBtn] = useState([]);

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => SetCategoryBtn(data.data.news_category))
        .catch(error => {
            alert("Error: " + error.message)
        })
    },[])

  return (
    <div>
      <h3 className='font-semibold text-gray-500'>All Caterogy ({categoryBtn.length})</h3>
      <div className="flex flex-col gap-2 mt-5">
        {
         categoryBtn.map(btn => 
  
         <NavLink to={`/category/${btn.category_id}`} key={btn.category_id} className="btn w-full border-0">{btn.category_name}</NavLink>
        )
        }
      </div>
    </div>
  )
}
