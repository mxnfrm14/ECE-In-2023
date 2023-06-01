function textMsg({ texte, nomDest, pfpDest, recu0Envoiye1 }) {
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

        <div className='m-5 space-y-4  max-w-md mx-auto bg-base-300 rounded-lg shadow-md'>
            {/**MSG DE L'INTERLOCUTEUR */}
            <div className="m-4 chat chat-start">
            {/**pfp */}
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img src="admin.jpg" />
                </div>
            </div>
            {/**pseudo */}
            <div className="chat-header">
                Obi-Wan Kenobi
            </div>
            {/**message */}
            <div className="chat-bubble chat-bubble-secondary">message reçu</div>
            </div>

            {/**MSG DE L'UTILISATEUR*/}
            <div className="m-8 chat chat-end">
            <div className="chat-bubble chat-bubble-primary">message envoyé zhnkz zjfnkje edfk fedf eeeeeeeeeeeeeeeeee z</div>
            </div>
        </div>      

    );
  };
  
  export default textMsg;