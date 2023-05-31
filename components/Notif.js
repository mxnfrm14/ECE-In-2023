import HeartIcon from './HeartIcon'

function Notif() {

  return (
    <div className="container mx-auto flex flex-col items-center gap-10" id="feed">
    <div className="navbar bg-neutral text-primary-content rounded-xl mt-6">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">J'ai eu une bourse ! <span className='pl-1 font-thin'> De Maxence</span></a>
      </div>
      <div className="flex-none mr-2">

          <HeartIcon/>
      </div>
    </div>
    </div>
  );
}

export default Notif;
