import Head from 'next/head'
import Image from 'next/image';
import Hero from '../components/Hero'

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zack Low - Software Engineer</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="preload" as="image" href="/static/prof.jpeg" />
      </Head>
      <Hero className="py-2">
        <div className="container p-4 text-white" style={{backdropFilter: "blur(2px)", backgroundColor: "rgba(0,0,0,.5)"}}>
          <div className="row">
            <div className="order-2 order-lg-1 col-sm-5 col-lg-3 pt-4 pt-sm-0 pe-lg-5 d-flex align-items-center">
              <Image src="/static/prof.jpeg" className="profile border-chip" layout="intrinsic" width={600} height={600} alt="Profile picture of Zack Low" />
            </div>
            <div className="order-1 order-lg-2 col-sm-7 col-lg-9 d-flex align-items-center">
              <div className="w-100">
                <div className="d-block d-lg-inline-flex align-items-end">
                  <h1 className="pe-4">Zack Low</h1>
                  <h2>Software Engineer</h2>
                </div>
                <h3 className="pb-2">New York City</h3>
                {/* <social-links
                  class="h1 w-100 list-inline social-links"
                  itemClass="list-inline-item mx-3"
                /> */}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xs-12">
              <p className="h5 px-2 mb-0 family-primary">
                Full stack web applications engineer utilizing skills in API design, microservices, service decompizition and component based front-end engineering to build performant, scalable and observable modern web applications. Passionate about building efficient and technically precise teams by fostering collaborative environments with short feedback loops and providing goal-based mentorship in order to elevate other team members.
            </p>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  )
}
