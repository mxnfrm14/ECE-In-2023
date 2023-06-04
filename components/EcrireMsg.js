import {BsCameraVideo} from 'react-icons/bs';

function EcrireMsg({ vari }) {
    
    var zone=
    <div className="m-4 mt-4 max-w-lg mx-auto">
        <button className="btn btn-primary m-1"><BsCameraVideo/></button>
       <input type="text" placeholder="Type here" className="input input-bordered input-primary w-2/4 max-w-lg m-1" />
       <button className="btn btn-outline btn-primary m-1">Envoyer</button>
    </div>
    ; 


    return (

        zone

    );
  };
  
  export default EcrireMsg;