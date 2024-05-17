import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faUser, faCode, faBuilding, faChartBar, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

// Définition du type pour les données de chaque carte
type CategoryJobs = {
    icon: IconDefinition;
    title: string;
    jobCount: number;
};

// Tableau de données pour chaque carte
const jobData: CategoryJobs[] = [
    { icon: faBriefcase, title: "Emplois disponibles", jobCount: 325 },
    { icon: faUser, title: "Utilisateurs actifs", jobCount: 200 },
    { icon: faCode, title: "Projets en cours", jobCount: 150 },
    { icon: faBuilding, title: "Entreprises partenaires", jobCount: 400 },
    { icon: faChartBar, title: "Rapports générés", jobCount: 275 }
];

const CategoryJobsGrid: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => { 
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="container">
            <h1 className='mb-4'>Explore By <span className='text-primary'>categogy</span></h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {jobData.map((data, index) => (
                    <div key={index} className={`col mb-4 ${index > 0 ? "mt-md-4" : ""}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}>
                        <div className={`card h-100 ${hoveredIndex === index ? "bg-primary" : ""}`}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={data.icon} size="4x" className={`${hoveredIndex === index ? "text-white" : "text-primary"} mb-3`} />
                                <h5 className={`card-title ${hoveredIndex === index ? "text-white" : ""}`}>{data.title}</h5>
                                <p className={`card-text ${hoveredIndex === index ? "text-white" : ""}`}>{data.jobCount} jobs disponibles <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryJobsGrid;
