// export default function EventPreview(props) {
//     return (
//     <div className="card card-side bg-base-200 shadow-xl h-64 w-11/12">
//           <figure>
//             <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src="https://www.ece.fr/app/uploads/sites/2/2021/11/ece-pourquoi-choisir-lece-2-750x563.jpg" className="w-full object-cover" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full object-cover" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
// </div>
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">Journée porte ouverte</h2>
//             <p>Le 25 Avril 2023</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-secondary">En savoir plus</button>
//             </div>
//           </div>
//         </div>
// )}

import React from "react";

export default function EventPreview(props) {
  const { event } = props;
  const { EVENTID, MEDIA, TITRE, DATE } = event;

  return (
    <div className="card card-side bg-base-200 shadow-xl h-64 w-11/12">
      <figure>
        <div className="carousel w-full">
          {MEDIA.map((media, index) => (
            <div
              key={index}
              id={`slide${EVENTID}_${index + 1}`}
              className={`carousel-item relative w-full ${
                index === 0 ? "active" : ""
              }`}
            >
              <img src={media} className="w-full object-cover" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${EVENTID}_${index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${EVENTID}_${index + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </figure>
      <div className="card-body w-11/12">
        <h2 className="card-title">{TITRE}</h2>
        <p>{DATE}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">En savoir plus</button>
        </div>
      </div>
    </div>
  );
}
