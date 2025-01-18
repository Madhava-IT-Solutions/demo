import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const categories = [
  { name: "Economical Construction", image: "Economical.jpg" },
  { name: "Construction methods for Long Life", image: "longlife.jpg" },
  { name: "Quality Construction", image: "quality.jpg" },
  { name: "Faster Construction", image: "FasterConstruction.jpg" },
  { name: "Material Selection", image: "MaterialSelection.jpg" },
  { name: "Construction with Safety", image: "safety.jpg" },
  { name: "Efficient Construction", image: "Efficient.jpg" },
  { name: "Low Maintenance", image: "lowMaintenance.jpg" }
];

const Navbar = () => {
  return (
    <nav>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-card" 
            style={{ backgroundImage: `url(/images/${category.image})` }} // Adjusted path
          >
            <p></p>
            <Link to={`/category/${category.name.replace(/\s+/g, '-')}`} className="category-link">
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
