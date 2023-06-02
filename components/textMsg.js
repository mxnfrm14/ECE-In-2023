function textMsg({ texte, nomdest, pfpdest, recu0envoye1 }) {
    
    //MSG DE L'UTILISATEUR (on affiche seulement la bulle de texte)
    var Msg=
    <div className="mx-4 mt-4 chat chat-end">
        <div className="chat-bubble chat-bubble-primary"> {texte} </div>
    </div>
    ;

    //Si c'est un message reçu :
    if(recu0envoye1==0){
        //MSG DE L'INTERLOCUTEUR / DESTINATAIRE (on affiche la bulle de texte + pfp + nom)
        Msg=
        <div className="mx-4 mt-4 chat chat-start">
            <div className="chat-image avatar">
                
                <div className="w-10 rounded-full">
                    <img src={pfpdest}  />
                </div>
            </div>
   
            <div className="chat-header">
            {nomdest}
            </div>
            <div className="chat-bubble chat-bubble-secondary"> {texte} </div>
        </div>
        ;
    } 

    return (

        Msg

    );
  };
  
  export default textMsg;