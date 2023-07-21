import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Article({title, link, setShowArticle, content}) {
    return ( 
        <div className="article-container">
             <article className="article">
                <FontAwesomeIcon icon={faXmark} className='article__icon' onClick={() => setShowArticle(false)}/>
                <h3 className="article__title">{title}</h3>

                <p className='article__content'>{content}</p>
                <div className="article__btn-group">
                    <button className="article__btn">
                        <a href={link} target="_blank" rel="noreferrer">Move to article page</a>
                    </button>
                    <button className="article__btn" onClick={() => setShowArticle(false)}>Back</button>
                </div>
            </article>
        </div>
     );
}

export default Article;