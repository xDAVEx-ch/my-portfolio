import React from "react"

import Layout from '../components/layout/layout.component';
import Banner from '../components/banner/banner.component';
import AboutMe from '../components/about-me/about-me.component';

import '../sass/main.styles.scss';

export default function Home() {
  return(
    <>
      <Layout>
        <Banner />
        <AboutMe />
      </Layout>
    </>
  );
}
