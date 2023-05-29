function Post({ content, author }) {
  return (
    <>
    <figure class="md:flex bg-base-200 rounded-xl p-8 md:p-0 w-11/12">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full md:mx-0 mx-auto" src="https://media.licdn.com/dms/image/C4E03AQFEo5Tb_-L_vw/profile-displayphoto-shrink_800_800/0/1667984961925?e=2147483647&v=beta&t=q6ihAEkfP7Fgjuet886Zv7qYKwXp5NTcu8gHUv1Lc-0" alt="" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <div className="card-body">
              <p class="text-lg font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            <figcaption class="font-medium">
              <h2 className="card-title text-primary">
                Maxence Fromentin
              </h2>
              <div class="text-slate-700 dark:text-slate-500">
                Étudiant, ECE Paris
              </div>
            </figcaption>
        </div>
        </div>
        </figure>
    </>

  );
}

export default Post;
