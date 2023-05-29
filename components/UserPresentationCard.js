const UserPresentationCard = (props) => {
    return (
      <div className="max-w-md mx-auto bg-neutral rounded-xl shadow-md">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Presentation</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-white">{props.UserName}</a>
            <p className="mt-2 text-gray-500">{props.City}</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet eu lorem id congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque vehicula ultricies metus ac hendrerit.</p>
            <button className="btn btn-primary mt-6">Button</button>
        </div>
      </div>
    );
  };
  
  export default UserPresentationCard;