import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

import { useState } from 'react';
// import { useForm } from "react-hook-form";

function Login(props) {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', email, password);
  };
    return (
        <>
            <Head>
              <title> Se connecter | ECE In </title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>

            <Layout>

<div className="hero">
  <div className="hero-content mt-10 gap-10 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Se connecter</h1>
      <p className="py-6">Connectes-toi avec ton compte afin de commencer à échanger avec ton réseau ! </p>
    </div>
    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
    <div className="card-body">
      <div className="mb-4">
              <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
          </label>
        </div>
      </div>
      <div className="form-control">
  <label className="label">
    <span className="label-text">Mot de passe</span>
  </label>
  <label className="input-group">
    <span className="fit-content  cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
      <i
        className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
      ></i>
    </span>
    <input
      type={showPassword ? 'text' : 'password'} 
      placeholder="Mot de passe.."
      className="input input-bordered w-full"
    />
  </label>
</div>
        <div className="mt-6">
            <button className="btn btn-primary w-full">Se connecter</button>
        </div>
    </div>
    </form>
  </div>
</div>
        
        </Layout>
      </>
    );
}

export default Login