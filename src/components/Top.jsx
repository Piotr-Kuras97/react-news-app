import { useState } from "react";
import Article from "./Article";


import { InfinitySpin } from  'react-loader-spinner'

import newsImage from '../images/news-image.jpg'

function Top({ data }) {
    const [showArticleIndex, setShowArticleIndex] = useState(null);
    const [showArticle, setShowArticle] = useState(false)
  
    const handleToggleArticle = (index) => {
        setShowArticle(true)
        setShowArticleIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="category__container">
        {data === null
          ? <InfinitySpin 
                width='200'
                color="#fff"
                className="spinner"
            />
          : data.map((item, index) => (
              <div key={item.link} className="category__item">
                <div className="category__img-container">
                    <img src={item.image_url ? item.image_url : newsImage} alt="" />
                </div>
                <h3 className="category__title">{item.title}</h3>
                <p className="category__pubdate">{item.creator} {item.pubDate.slice(0, -3)}</p>
                <button
                  to={`article/${item.title}`}
                  className="category__btn"
                  onClick={() => handleToggleArticle(index)} 
                >
                  Read article
                </button>
  
                {showArticleIndex === index && showArticle ? <Article title={item.title} content={item.content} link={item.link} setShowArticle={setShowArticle}/> : null}
              </div>
            ))}
      </div>
    );
  }

export default Top;