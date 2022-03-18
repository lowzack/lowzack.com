import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import EmploymentDetail from "../components/EmploymentDetail";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import employment from "../data/employment";

export const getStaticProps = async (context) => {
  return {
    props: {
      employment,
    }, // will be passed to the page component as props
  };
};

export default function Home({
  employment,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { currentEmployment, previousEmployment } = employment;
  return (
    <div>
      <Head>
        <title>Zack Low - Engineering Leader</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="preload" as="image" href="/static/prof.jpeg" />
      </Head>
      <Hero className="py-2">
        <div
          className="container p-4 text-white"
          style={{
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(0,0,0,.5)",
          }}
        >
          <div className="row">
            <div className="order-2 order-lg-1 col-sm-5 col-lg-3 pt-4 pt-sm-0 ps-lg-3 pe-lg-5 d-flex align-items-center">
              <div className="shadow-lg border-chip d-flex">
                <Image
                  src="/static/prof.jpeg"
                  className="profile border-chip"
                  layout="intrinsic"
                  width={600}
                  height={600}
                  alt="Profile picture of Zack Low"
                />
              </div>
            </div>
            <div className="order-1 order-lg-2 col-sm-7 col-lg-9 d-flex align-items-center">
              <div className="w-100">
                <div className="d-block d-lg-inline-flex align-items-end">
                  <h1 className="pe-4">Zack Low</h1>
                  <h2 className="pb-lg-1">Engineering Leader</h2>
                </div>
                <h3 className="pb-2">New York City</h3>
                <SocialLinks
                // class="h1 w-100 list-inline social-links"
                // itemClass="list-inline-item mx-3"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xs-12">
              <p className="h5 px-2 mb-0 family-primary">
                Engineering leader passionate about building highly efficient
                and technically precise engineering teams by fostering
                collaborative data-driven environments with short feedback
                loops. I utilize my experience across full stack web
                applications, API design, microservices, service decomposition
                and component based front-end engineering to guide the technical
                direction of my teams. Effective collaborator across business
                functions including but not limited to: engineering, product,
                design, ops, infrastructure, marketing and support functions.
                Strong product and UX fundamentals with a focus on market trends
                and technical innovation. Extremely effective recruiter with an
                eye for identifying and developing top performing talent across
                engineering, design, and product functions.
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <Section className="bg-white">
        <div className="p-4">
          <h2 className="h1 mt-1 border-bottom border-primary">
            Current Employment
          </h2>
          <EmploymentDetail company={currentEmployment} />
        </div>
      </Section>
      <Section className="bg-light">
        <div className="p-4">
          <h2 className="h1 mt-1 border-bottom border-primary">
            Previous Employment
          </h2>
          {previousEmployment.map((company, index) => (
            <EmploymentDetail key={index} company={company} />
          ))}
        </div>
      </Section>
    </div>
  );
}
