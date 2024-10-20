import React, { useEffect, useState } from "react";

const About = ({ state }) => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    const { contract } = state;
    if (!contract) {
      console.log("Contract not found");
      return;
    }

    const fetchAbout = async () => {
      try {
        const fegetAboutMe = await contract.methods.getAboutMe().call();
        console.log(fegetAboutMe);
        setAbout(fegetAboutMe);
      } catch (error) {
        console.error("Error fetching about me", error);
      }
    };

    fetchAbout();
  }, [state]);

  return (
<div className="container mt-4">
  <p className="fs-1 fw-bold">About Me</p>

  <p className="text-break">
    {about.length > 0 ? (
      about
    ) : (
      <>
        I am a passionate blockchain enthusiast and aspiring developer,
        driven by a deep fascination for decentralized technologies and
        their potential to transform industries. With a robust understanding
        of blockchain fundamentals, including smart contracts, consensus
        mechanisms, and cryptographic protocols, I’m committed to leveraging
        this cutting-edge technology to build secure, transparent, and
        efficient solutions for the future. What excites me most about
        blockchain is its disruptive potential to reshape industries like
        finance, supply chain, healthcare, and beyond by eliminating
        intermediaries, increasing transparency, and fostering trust. I am
        particularly interested in how decentralized applications (dApps)
        and smart contracts can automate processes and introduce new levels
        of autonomy and security to digital ecosystems. I thrive on
        problem-solving, and blockchain development provides the perfect
        blend of innovation and technical challenge. I’m dedicated to
        mastering the latest frameworks and tools, such as Ethereum,
        Hyperledger, Solidity, and Web3.js, to build real-world applications
        that solve complex problems. With a mindset geared toward
        continuous learning, I actively stay updated on industry trends and
        advancements, eager to implement cutting-edge solutions. My ultimate
        goal is to contribute to groundbreaking projects that push the
        boundaries of what's possible with blockchain. I’m ready to
        collaborate with visionary teams and bring ideas to life, working to
        create systems that are not only decentralized but also scalable and
        user-friendly. In my journey to become a blockchain developer, I am
        committed to making a tangible impact by utilizing technology to
        drive innovation and empower communities worldwide.
      </>
    )}
  </p>
</div>

  );
};

export default About;
