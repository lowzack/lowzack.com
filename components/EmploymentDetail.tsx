import { FC } from "react";
import Image from 'next/image';
import employment from '../data/employment';

type Employment = { 
    company: typeof employment.previousEmployment[0]
}

const EmploymentDetail: FC<Employment> = ({ company }) => {
    const [firstRole, ...roles] = company.roles;
    
    return (
        <div className="px-md-4">
            <div className="row">
                <div className="col-md-8 order-2 order-md-1">
                    <h2 className="mt-4 mb-2">
                    {company.company}&nbsp;
                    <small className="text-muted">{company.dates}</small>
                    </h2>
                    <h3 className="border-bottom border-warning pb-2">
                    {firstRole.title} <small className="text-muted">{firstRole.dates}</small>
                    </h3>
                    <p>{company.overview}</p>
                </div>
                <div className="order-1 order-md-2 col-md-4 d-flex align-items-center">
                    <div className="py-4 py-md-5 px-5 px-md-0" style={{position: 'relative', height: '100%', width: '100%'}}>
                        <Image src={company.logo} layout="fill" alt={company.logoAlt} objectFit="scale-down" />
                    </div>
                </div>
            </div>
            <ul>
                {firstRole.highlights.map((highlight, index) => {
                return <li key={index}>{highlight}</li>
                })}
            </ul>
            { roles.map(({title, dates, highlights}, key) => 
                <div key={key}>
                <h3 className="border-bottom border-warning pb-2">
                    {title} <small className="text-muted">{dates}</small>
                </h3>
                <ul>
                    {highlights.map((highlight, index) => {
                    return <li key={index}>{highlight}</li>
                    })}
                </ul>
                </div>
            )}
        </div>
    );
}

export default EmploymentDetail;