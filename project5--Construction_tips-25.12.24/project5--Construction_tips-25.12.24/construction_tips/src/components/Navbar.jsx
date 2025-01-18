
// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

import economicalImg from '../components/images/economical.jpg';
import longlifeImg from '../components/images/longlife.jpg';
import qualityImg from '../components/images/quality.jpg';
import fasterConstructionImg from '../components/images/FasterConstruction.jpg';
import materialSelectionImg from '../components/images/MaterialSelection.jpg';
import safetyImg from '../components/images/safety.jpg';
import efficientImg from '../components/images/Efficient.jpg';
import lowMaintenanceImg from '../components/images/lowMaintenance.jpg';



const categories = [
  { name: "Economical Construction", image: economicalImg },
  { name: "Construction methods for Long Life", image: longlifeImg },
  { name: "Quality Construction", image: qualityImg },
  { name: "Faster Construction", image: fasterConstructionImg },
  { name: "Material Selection", image: materialSelectionImg },
  { name: "Construction with Safety", image: safetyImg },
  { name: "Efficient Construction", image: efficientImg },
  { name: "Low Maintenance", image: lowMaintenanceImg }
];

const Navbar = () => {
  return (
    <nav>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card" style={{ backgroundImage: `url(${category.image})` }}>
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
