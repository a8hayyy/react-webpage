import React, { useState } from "react";
import axios from "axios";
import Each from '../components/Each'

function News() {
  const [news, setNews] = useState([]);
  const [place, setPlace] = useState("in");

  function fetch(value) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${value}&apiKey=c91dab34418f407a82c4b210e790e512`
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }

  function setValue(value){
    setPlace(value)
    console.log(value)
    }

  return (
    <>
    <div className="container">
      <div className="row">
      <div className="col-4">
        <button className='btn btn-primary' onClick={fetch} style={{marginTop: 50}}>Fetch News</button>
        <input type="text" value={setValue}/>
      </div>
      </div>
    </div>
    <div className='container'>
        <div className="row">

      {news.map((value) => {
        return (
          <Each image={value.urlToImage} title={value.title} description={value.description}/>
        );
      })}
      </div>
    </div>
    </>
  );
}

export default News;
