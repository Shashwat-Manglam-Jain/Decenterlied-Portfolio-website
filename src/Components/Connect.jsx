import React, { useState } from 'react'
import ABI from '../ABI.json'
import Web3 from "web3";
const Connect = ({saveState}) => {
    const [connected,setConnected]=useState(true);
    const isAndroid = /android/i.test(navigator.userAgent);
    const init =async()=>{
    try{
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({method:'eth_requestAccounts'});
      const contract = new web3.eth.Contract(
          ABI,
          "0x039525be4e1d5cf1021c4b39a6acc70ff36a46f9"
      );
       setConnected(false);
       saveState({web3:web3,contract:contract});
    }catch(error){
      alert("Please Install Metamask");
    }
      
    }
  return (
    <div><nav className="navbar navbar-dark bg-dark p-3">
    <div className="container">
      <a className="navbar-brand fw-bold fs-3" style={{color:'#ed2e01'}}>Port<span style={{color:'#ffffff'}}>folio</span> </a>
      <form className="d-flex">
      <button type="button" className="btn btn-light" onClick={init} > {connected? "Connect Metamask":"Connected"}</button>
      </form>
    </div>
  </nav></div>
  )
}

export default Connect