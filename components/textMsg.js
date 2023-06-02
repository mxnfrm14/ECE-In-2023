function textMsg({ texte, nomdest, pfpdest, recu0envoye1 }) {
    /* jsp si ça fonction mais deja ce qui est pas commenté s'affiche pas
    //MSG DE L'UTILISATEUR
    var Msg=`
    <div className="m-8 chat chat-end">
        <div className="chat-bubble chat-bubble-primary"> holaaa</div>
    </div>
    `;

    //Si c'est un message reçu :
    if(recu0Envoiye1==0){
        //MSG DE L'INTERLOCUTEUR / DESTINATAIRE
        Msg=`
        <div className="m-8 chat chat-start">
            <div className="chat-image avatar">
                
                <div className="w-10 rounded-full">
                    <img src=" `+ pfpDest ` " />
                </div>
            </div>
   
            <div className="chat-header">
            `+ nomDest `
            </div>
            <div className="chat-bubble chat-bubble-secondary">`+ texte `</div>
        </div>
        `;
    } 
    */

    return (

        <div className="m-4 chat chat-start">
            {/**pfp */}
            <div className="chat-image avatar">
                <div className="w-10 rounded-full"> <img src= {pfpdest} /> </div>
            </div>
            {/**pseudo */}
            <div className="chat-header"> {nomdest} </div>
            {/**message */}
            <div className="chat-bubble chat-bubble-secondary"> {texte} </div>
         </div>  

    );
  };
  
  export default textMsg;