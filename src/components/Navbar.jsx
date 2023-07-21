import { categories } from "../utils/constants";
import { Link } from "react-router-dom";


function Navbar({selectedCategory, setSelectedCategory}) {
    return ( 
        <>
            {categories.map(category => (
                <Link to={category.name === "Top" ? "/" : category.name.toLowerCase()} className={selectedCategory === category.name ? "navbar__btn navbar__btn--active" : "navbar__btn"} key={category.name} onClick={() => setSelectedCategory(category.name)}>
                    <img className="navbar__btn-icon" src={category.icon} alt={category.name} />
                    {category.name}
                </Link>
            ))}
        </>
    );
}

export default Navbar;