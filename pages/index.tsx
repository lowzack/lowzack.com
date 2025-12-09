import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import EmploymentDetail from "../components/EmploymentDetail";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import employment from "../data/employment";

export const getStaticProps = async (_context) => {
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
        <link rel="preload" as="image" href="/static/prof.webp" />
        <meta
          name="description"
          content="AI-focused engineering leader passionate about building data-driven, product-focused agile engineering teams by fostering collaborative environments."
        />
      </Head>
      <Hero className="py-2">
        <div className="container mx-auto sm:px-4 p-6">
          <div className="flex flex-wrap items-center">
            <div className="sm:w-2/5 lg:w-1/4 pr-4 pl-4 pt-4 sm:pt-0 lg:ps-4 lg:pe-12 flex items-center">
              <div className="shadow-lg flex rounded-full overflow-hidden">
                <Image
                  src="/static/prof.webp"
                  className="profile"
                  width={600}
                  height={600}
                  alt="Profile picture of Zack Low"
                />
              </div>
            </div>
            <div
              className="sm:w-3/5 lg:w-3/4 pr-4 pl-4 flex items-center"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <div className="w-full text-white">
                <div className="block lg:inline-flex items-end">
                  <h1 className="pe-4 text-5xl">Zack Low</h1>
                  <h2 className="lg:pb-1 text-3xl lg:pl-4">Engineering Leader</h2>
                </div>
                <h3 className="pb-2 text-3xl">New York City</h3>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div
              className="sm:w-full pr-4 pl-4"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <p className="h5 px-2 mb-0 family-primary text-white">
                AI-focused engineering leader passionate about building
                data-driven, product-focused agile engineering teams by fostering
                collaborative environments. I leverage my technical expertise
                across large-language models, full-stack applications, API
                design, service decomposition, and observability to guide my
                teams&apos; product and technical vision. I also apply concepts of
                organizational design and behavior to my strategies to ensure
                operational efficiency across the teams I work within.
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <Section className="bg-white">
        <div className="p-6">
          <h2 className="h1 mt-1 border-b border-blue-600">
            Latest Employment
          </h2>
          <EmploymentDetail company={currentEmployment} />
        </div>
      </Section>
      <Section className="bg-gray-100">
        <div className="p-6">
          <h2 className="h1 mt-1 border-b border-blue-600">
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
