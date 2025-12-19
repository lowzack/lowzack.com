import { FC } from "react";
import Image from "next/image";
import employment from "../data/employment";

type Employment = {
  company: typeof employment.previousEmployment[0];
};

const EmploymentDetail: FC<Employment> = ({ company }) => {
  const [firstRole, ...roles] = company.roles;

  return (
    <div className="md:px-6">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-2/3 pr-4 py-2 order-2 md:order-1">
          <h2 className="mt-4 mb-2">
            {company.company}&nbsp;
            <small className="text-penumbra-gray">{company.dates}</small>
          </h2>
          <h3 className="border-b border-wine-red pb-2 mb-2" style={{ borderBottomWidth: '3px' }}>
            {firstRole.title}{" "}
            <small className="text-penumbra-gray">{firstRole.dates}</small>
          </h3>
          <p className="pb-2">{company.overview}</p>
        </div>
        <div className="w-full order-1 md:order-2 md:w-1/3 pr-4 pl-4 flex items-center justify-center py-6 md:py-0">
          <div
            style={{ 
              position: "relative", 
              width: "280px",
              height: "180px",
              ...(company.company === "GlossGenius" && {
                transform: "scale(1.5)",
                transformOrigin: "center"
              })
            }}
          >
            <a href={company.website} target="_blank" rel="noreferrer">
              <Image
                src={company.logo}
                layout="fill"
                alt={company.logoAlt}
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>
      <ul>
        {firstRole.highlights.map((highlight, index) => {
          return <li key={index}>{highlight}</li>;
        })}
      </ul>
      {roles.map(({ title, dates, highlights }, key) => (
        <div key={key}>
          <h3 className="border-b border-wine-red py-2 mb-2" style={{ borderBottomWidth: '3px' }}>
            {title} <small className="text-penumbra-gray">{dates}</small>
          </h3>
          <ul>
            {highlights.map((highlight, index) => {
              return <li key={index}>{highlight}</li>;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EmploymentDetail;
