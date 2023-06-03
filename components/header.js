import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import React, { useState } from 'react';
import { useEffect } from 'react';

const header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user'); 
    window.location.href = '/login';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const me = JSON.parse(localStorage.getItem('user')).id;
        const users_raw = await fetch(`/api/getUser?IDENTIFIANT=${me}`);
        const users = await users_raw.json();
        const users_data = users.results || [];
        setContent(users_data[0]);
        setLoading(false);
        console.log(users_data[0].PRENOM);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/">
        <img
          className="btn btn-ghost normal-case text-xl"
          src="https://media.discordapp.net/attachments/1112677982973210654/1112680389853581363/logo.png?width=1439&height=424"
          alt="ECE Paris"
        />
        </Link>
      </div>
        <div className="flex-none">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href='reseau'>Mon Réseau</a>
              </li>
              <li>
                <a href='notifications'>Notifications</a>
              </li>
              <li>
                <a href='messagerie'>Messagerie</a>
              </li>
              <li>
                <a href='emplois'>Emplois</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-neutral right-0"
            >
              <li>
                <a href='reseau'>Mon Réseau</a>
              </li>
              <li>
                <a href='notifications'>Notifications</a>
              </li>
              <li>
                <a href='messagerie'>Messagerie</a>
              </li>
              <li>
                <a href='emplois'>Emplois</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          { isAuthenticated ? 
          <>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* <img
                alt="Vous"
                src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              /> */}
              {
                content.PHOTO ?
                <img
                alt="Vous"
                src={content.PHOTO}
              />
              :
              <img
                
                alt="Vous"
                src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              />
              }
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 bg-neutral"
          >
            <li>
              <h2>{content.PRENOM}</h2>
            </li>
            <li>
              <a href="mon_profil" className="justify-between">Mon profil</a>
            </li>
            <li>
              <a onClick={handleLogout}>
                Se déconnecter</a>
            </li>
          </ul>
          </>
          : 
          <>
          <Link href="/login" className="btn btn-primary">
            Se connecter
          </Link>
          </>
          }
        </div>
    </div>
  );
};

export default header;
