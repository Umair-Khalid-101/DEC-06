import React, { useContext } from "react";
import Navbar from "./Navbar";
import landingpageimage from "../images/landingpage.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import UserContext from "../context/userContext";
import LandingFeaturedCampaigns from "./FeaturedCampaigns/LandingFeaturedCampaigns";
import LandingPageCategories from "./LandingPageCategories";

export default function LandingPage() {
  const { userdata } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row landingpagediv">
          <div className="col-6">
            <p
              className="text-center"
              style={{
                color: "#242F9B",
                fontWeight: "bolder",
                fontSize: 40,
                display: "flex",
                alignSelf: "flex-start",
              }}
            >
              Welcome to Funderrr
            </p>
            <div
              style={{
                backgroundColor: "#242F9B",
                borderRadius: "50px",
                width: "50%",
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn"
                style={{ color: "white", fontWeight: "bold" }}
                onClick={() => {
                  if (userdata) {
                    if (userdata.role === "user") {
                      navigate("/UserDashboard/NewCampaign");
                    }
                  } else {
                    navigate("/login");
                  }
                }}
              >
                Create Campaign
              </button>
            </div>
          </div>
          <div className="col-6">
            <img
              src={landingpageimage}
              alt=""
              style={{ width: "100%", display: "flex", alignSelf: "flex-end" }}
            />
          </div>
        </div>
      </div>
      <div
        className="container mt-4"
        style={{
          color: "#242F9B",
          fontSize: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        <p style={{ marginTop: "6rem" }}>Featured Projects</p>
      </div>
      <div style={{ marginLeft: "4rem" }}>
        <LandingFeaturedCampaigns />
      </div>
      <div
        className="container mt-5"
        style={{
          color: "#242F9B",
          fontSize: 25,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ marginTop: "7rem" }}>What we have?</p>
      </div>
      <div
        className="container"
        style={{
          color: "#242F9B",
          fontSize: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <p>
          We have vast amount of Categories having enormous number of talented
          people
        </p>
      </div>
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          <LandingPageCategories />
        </div>
      </div>
      <div
        className="container mt-4"
        style={{ color: "#242F9B", fontSize: 20 }}
      >
        <p>How it Works</p>
      </div>
      <div
        style={{
          backgroundColor: "#242F9B",
          width: "100%",
          height: 400,
          borderRadius: "50px",
        }}
      >
        <div className="container">
          <p className="pt-4" style={{ color: "white", fontSize: 20 }}>
            CrowdFunding
          </p>
          <p style={{ color: "white", fontWeight: "lighter" }}>
            Crowdfunding platforms are websites that enable interaction between
            fundraisers and the crowd. Financial pledges can be made and
            collected through the crowdfunding platform. Fundraisers are usually
            charged a fee by crowdfunding platforms if the fundraising campaign
            has been successful. In return, crowdfunding platforms are expected
            to provide a secure and easy to use service. Many platforms operate
            an all-or-nothing funding model. This means that if you reach your
            target you get the money and if you don’t, everybody gets their
            money back – no hard feelings and no financial loss. There are a
            number of crowdfunding types which are explained below. This guide
            provides unbiased advice to help you understand the three most
            common types of crowdfunding used by profit-making SMEs and
            startups: peer-to-peer, equity and rewards crowdfunding.
            Peer-to-peer lending The crowd lends money to a company with the
            understanding that the money will be repaid with interest. It is
            very similar to traditional borrowing from a bank, except that you
            borrow from lots of investors. Equity crowdfunding Sale of a stake
            in a business to a number of investors in return for investment. The
            idea is similar to how common stock is bought or sold on a stock
            exchange, or to a venture capital. Rewards-based crowdfunding
            Individuals donate to a project or business with expectations of
            receiving in return a non-financial reward, such as goods or
            services, at a later stage in exchange of their contribution.
            Donation-based crowdfunding Individuals donate small amounts to meet
            the larger funding aim of a specific charitable project while
            receiving no financial or material return. Profit-sharing /
            revenue-sharing Businesses can share future profits or revenues with
            the crowd in return for funding now. Debt-securities crowdfunding
            Individuals invest in a debt security issued by the company, such as
            a bond. Hybrid models Offer businesses the opportunity to combine
            elements of more than one crowdfunding type.
          </p>
        </div>
      </div>
      <div>
        <div className="container mt-5">
          <p style={{ color: "#242F9B", fontSize: 20 }}>About Us</p>
          <p style={{ color: "#242F9B" }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classNameical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classNameical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>

      <div>
        <p className="text-center" style={{ color: "#242F9B", fontSize: 15 }}>
          Funderrr, Funderr is a CrowdFunding platform growing very fastly and
          helping indivisuals around.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
