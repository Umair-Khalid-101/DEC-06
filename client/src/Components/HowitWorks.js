import React from "react";
import Navbar from "./Navbar";

export default function HowitWorks() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <p className="pt-4" style={{ color: "#242F9B", fontSize: 20 }}>
          CrowdFunding
        </p>
        <p style={{ color: "#242F9B", fontWeight: "lighter" }}>
          Crowdfunding platforms are websites that enable interaction between
          fundraisers and the crowd. Financial pledges can be made and collected
          through the crowdfunding platform. Fundraisers are usually charged a
          fee by crowdfunding platforms if the fundraising campaign has been
          successful. In return, crowdfunding platforms are expected to provide
          a secure and easy to use service. Many platforms operate an
          all-or-nothing funding model. This means that if you reach your target
          you get the money and if you don’t, everybody gets their money back –
          no hard feelings and no financial loss. There are a number of
          crowdfunding types which are explained below. This guide provides
          unbiased advice to help you understand the three most common types of
          crowdfunding used by profit-making SMEs and startups: peer-to-peer,
          equity and rewards crowdfunding. Peer-to-peer lending The crowd lends
          money to a company with the understanding that the money will be
          repaid with interest. It is very similar to traditional borrowing from
          a bank, except that you borrow from lots of investors. Equity
          crowdfunding Sale of a stake in a business to a number of investors in
          return for investment. The idea is similar to how common stock is
          bought or sold on a stock exchange, or to a venture capital.
          Rewards-based crowdfunding Individuals donate to a project or business
          with expectations of receiving in return a non-financial reward, such
          as goods or services, at a later stage in exchange of their
          contribution. Donation-based crowdfunding Individuals donate small
          amounts to meet the larger funding aim of a specific charitable
          project while receiving no financial or material return.
          Profit-sharing / revenue-sharing Businesses can share future profits
          or revenues with the crowd in return for funding now. Debt-securities
          crowdfunding Individuals invest in a debt security issued by the
          company, such as a bond. Hybrid models Offer businesses the
          opportunity to combine elements of more than one crowdfunding type.
        </p>
      </div>
    </div>
  );
}
