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
        <div className="md:w-2/3 pr-4 py-2 order-2 md:order-1">
          <h2 className="mt-4 mb-2">
            {company.company}&nbsp;
            <small className="text-gray-700">{company.dates}</small>
          </h2>
          <h3 className="border-b border-yellow-500 pb-2 mb-2">
            {firstRole.title}{" "}
            <small className="text-gray-700">{firstRole.dates}</small>
          </h3>
          <p className="pb-2">{company.overview}</p>
        </div>
        <div className="order-1 md:order-2 md:w-1/3 pr-4 pl-4 flex items-center">
          <div
            className="py-4 md:py-12 px-5 md:px-0"
            style={{ position: "relative", height: "100%", width: "100%" }}
          >
            <a href={company.website} target="_blank" rel="noreferrer">
              <Image
                src={company.logo}
                fill
                alt={company.logoAlt}
                style={{ objectFit: "scale-down" }}
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
          <h3 className="border-b border-yellow-500 py-2 mb-2">
            {title} <small className="text-gray-700">{dates}</small>
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
