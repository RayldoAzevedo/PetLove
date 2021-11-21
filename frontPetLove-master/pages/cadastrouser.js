import React from 'react';

// import Top from '../components/Top';
import TopLogin from '../components/TopLogin';
import CadastroUser from '../components/CadastroUser'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      {/* <Top/>  */}
        <TopLogin/> 
        <CadastroUser/>
        <Footer/>
    </div>
  )
}
