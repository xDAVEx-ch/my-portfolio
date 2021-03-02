import React from "react"

import Layout from '../components/layout/layout.component';
import Banner from '../components/banner/banner.component';

import '../sass/main.styles.scss';

export default function Home() {
  return(
    <>
      <Layout>
        <Banner />
        <h2>Hello World</h2>
      </Layout>
    </>
  );
}
