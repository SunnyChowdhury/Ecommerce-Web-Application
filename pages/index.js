import React from "react";
import { HeroBanner, Product, FooterBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Computers</h2>
        <h3>Computers for All Your Needs</h3>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </div>
  );
};

// To pre-render this page on each requst using the data returned by getServerSideProps
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// Quering the data from sanity to Home Page

export async function getServerSideProps(context) {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }, // will be passed to the page component as props
  };
}

export default Home;
