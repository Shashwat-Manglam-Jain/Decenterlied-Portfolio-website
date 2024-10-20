import React, { useEffect, useState } from 'react';

const Name = ({ state }) => {
  const [desc, setdesc] = useState("");
  const [imgw, setImgw] = useState("");

  useEffect(() => {
    const { contract } = state;
    if (!contract) {
      console.log("Contract not found");
      return;
    }

    const fetchdesc = async () => {
      try {
        const fedesc = await contract.methods.getDescription().call();
        console.log(fedesc);
        setdesc(fedesc);
      } catch (error) {
        console.error("Error fetching description", error);
      }
    };

    const fprofileimg = async () => {
      try {
        const feprofileimg = await contract.methods.getProfileImg().call();
        console.log(feprofileimg);
        setImgw(feprofileimg);
      } catch (error) {
        console.error("Error fetching profile image", error);
      }
    };

    fetchdesc();
    fprofileimg();

  }, [state]);

  return (
    <>
      <br />
      <div className="container justify-content-center mt-4 pt-4">
  <div className="row">
    <div className="col-lg-7 col-md-12 mb-4"> {/* Added responsive column sizes */}
      <div className='p-3'>
        <p className="fw-bold fs-1">Hi</p>
        <p className="fw-bolder fs-1 p-0">I'm <span style={{ color: '#f5470c' }}>Shashwat</span> Manglam Jain</p>
        <p className="fw-bolder fs-1 p-0">a Blockchain Developer</p>
        {/* Display fetched description */}
        <p className="text-start">{desc || "Blockchain is a decentralized, distributed ledger technology that securely records transactions across multiple computers. It consists of blocks of data, each containing a set of transactions, which are linked together chronologically in a chain. Each block is verified through a consensus mechanism, ensuring accuracy and trust without the need for intermediaries. Once added, blocks are immutable, meaning they cannot be altered or deleted. Blockchain is the backbone of cryptocurrencies like Bitcoin but also has broader applications, including supply chain management, voting systems, and digital identity verification, where transparency, security, and decentralization are crucial..."}</p>
        <div className="d-flex my-4">
          <button type="button" className="btn btn-dark me-3">Resume</button>
          <button type="button" className="btn ms-3" style={{ background: '#f5470c', color: "#ffffff" }}>Experience</button>
        </div>
      </div>
    </div>

    <div className="card col-lg-4 col-md-12 p-0 mx-4" style={{ borderRadius: '50rem', overflow: 'hidden' }}>
      {/* Display fetched profile image */}
      <img src={imgw || "https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764524_1280.jpg"} alt="Profile" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
    </div>
  </div>
</div>

    </>
  );
}

export default Name;
