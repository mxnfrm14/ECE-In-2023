import HeartIcon from './HeartIcon';
import { AiOutlineComment } from 'react-icons/ai';
import { BiShare, BiCopy, BiMailSend } from 'react-icons/bi';
import {FiTwitter} from 'react-icons/fi';

function Post({ pseudo, role, content, lieu, date, heure }) {
  return (
    <>
    <figure class="md:flex bg-base-200 rounded-xl p-8 md:p-0 w-11/12">
        <img class="object-cover w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full md:mx-0 mx-auto" src="https://media.licdn.com/dms/image/C4E03AQFEo5Tb_-L_vw/profile-displayphoto-shrink_800_800/0/1667984961925?e=2147483647&v=beta&t=q6ihAEkfP7Fgjuet886Zv7qYKwXp5NTcu8gHUv1Lc-0" alt="" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4  w-full">
          <div className="card-body">
                <p class="text-lg font-medium">
                    {content}
                </p>
              <figcaption class="font-medium">
                <h2 className="card-title text-primary">
                  {pseudo}
                </h2>
                <div class="text-slate-700 dark:text-slate-500">
                  {role}
                </div>
                <div class="text-slate-700 dark:text-slate-500 w-full flex">
                  À {lieu} <span className='ml-auto'>Le { date + ' à ' + heure }</span>
                </div>
              </figcaption>
          </div>
          <div className="flex gap-10">
            <HeartIcon/>
            <div>
              <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="cursor-pointer"><AiOutlineComment size={32} className="text-green-500 pointer"/></label>
                <div tabIndex={0} className="dropdown-content card card-compact w-96 p-2 shadow bg-base-100 text-primary-content">
                  <div className="card-body">
                    <h3 className="card-title">Commentaire</h3>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Commentaire.."></textarea>
                    <button className="btn btn-secondary mt-2">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              
              <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="cursor-pointer"><BiShare size={32} className="text-blue-500"/></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a><FiTwitter/>Twitter</a></li>
                  <li><a><BiMailSend/>E-mail</a></li>
                  <li><a><BiCopy/>Copier le lien</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        </figure>
    </>

  );
}

export default Post;
