import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Component, useState } from 'react';
import { set } from 'react-hook-form';
import { useForm } from "react-hook-form";
import LoginForm from '@/components/LoginForm';


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Submitted:', email, password);
  // };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  // console.log(errors);


 

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
            {/* <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
              <div className="card-body">
                <div className="mb-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                      <span>Email</span>
                      <input type="text" {...register("Email", { required: true })} placeholder="info@site.com" className="input input-bordered w-full" />
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
                      {...register("Mot de Passe", { required: true })}
                      placeholder="Mot de passe.."
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="mt-6">
                  <button type='submit' className="btn btn-primary w-full">Se connecter</button>
                </div>
              </div>
            </form> */}
            <LoginForm />
          </div>
        </div>

      </Layout>
    </>
  );
}

export default Login


// export async function getStaticProps() {
//   const users_raw = await fetch('http://localhost:3000/api/getUser')
//   const users = await users_raw.json()
//   const users_data = users.results;

//   return {
//     props: {
//       users_data
//     }
//   }
// }

