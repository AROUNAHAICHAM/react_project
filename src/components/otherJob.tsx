
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faUser, faCode, faBuilding, faChartBar, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

// Définition du type pour les données de chaque carte
type otherJobs = {
    icon: IconDefinition;
    title: string;
    jobCount: number;
    description:string;
};

// Tableau de données pour chaque carte
const jobData: otherJobs[] = [
    { icon: faBriefcase, title: "Emplois ", jobCount: 325, description:'Description1' },
    { icon: faUser, title: "Utilisateurs actifs", jobCount: 200, description:'Description2'},
    { icon: faCode, title: "Projets en cours", jobCount: 150, description:'Description3' },
    { icon: faBuilding, title: "Entreprises ", jobCount: 400, description:'Description4' },
    { icon: faChartBar, title: "Rapports générés", jobCount: 275, description:'Description5' }
];

const OtherJobsGrid: React.FC = () => {
   

    return (
        <div className="container">
            <h1 className='mb-4'>Explore By <span className='text-primary'>categogy</span></h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {jobData.map((data, index) => (
                    <div key={index} className={`col mb-2 `}>
                        <div className={`card h-80 `}>
                            <div className="card-body">
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={data.icon} size="2x" className={` text-primary mb-1 me-4`} />
                                    <h5 className={`card-title `}>{data.title}</h5>
                                </div>
                                
                                <h6 className={`card-title `}>{data.description}</h6>
                                <p className={`card-text`}>{data.jobCount} jobs disponibles <FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
                                <button type="button" className="btn btn-outline-success btn-sm  me-2">Warning</button>
                                <button type="button" className="btn btn-outline-warning btn-sm">Warning</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OtherJobsGrid;
