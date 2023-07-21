import Options from "./Options";
import Navbar from "./Navbar";

function Menu({selectedCategory, setSelectedCategory, selectedLanguage, setSelectedLanguage}) {

    return ( 
        <menu className="main">
            <Options 
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            <nav className="navbar">
                <Navbar 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </nav>
        </menu>
     );
}

export default Menu;