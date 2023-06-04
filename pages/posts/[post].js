import {useRouter} from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import PostPreview from '../../components/PostPreview'
import Layout from '../../components/Layout'
export default function Tag_Page(props) {
    const router = useRouter()
    const { post } = router.query
    // console.log(props);
    const data = props.posts_data[0];
    // console.log(data);

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [utilisateur, setUtilisateur] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const author = data.USERID;
            const user_raw = await fetch(`/api/getUser?IDENTIFIANT=${author}`);
            const user = await user_raw.json();
            const user_data = user.results || [];
            setContent(user_data);
            setLoading(false);
            setUtilisateur(user_data[0]);

            console.log('-----------------------------------------------');
            console.log(data.USERID);
    
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
        <Head>
          <title> Post de {utilisateur.PSEUDO} </title>
        </Head>
        <Layout>
            <div className="flex flex-col items-center justify-center mt-20">
            <h1>Post de {utilisateur.PSEUDO}</h1>
            <PostPreview
                id={data.USERID}
                pseudo={utilisateur.PSEUDO}
                role={data.ROLE}
                content={data.TEXTE}
                lieu = {data.LIEU}
                date = {data.DATE}
                heure = {data.HEURE}
                link={`/posts/${data.POSTID}`}
              />
            </div>
        </Layout>
        </>
    )
}

export async function getStaticProps(context) {

    const posts_raw = await fetch(`http://192.168.1.254:5443/api/getPost?post=${context.params.post}`);
    const posts = await posts_raw.json()
    const posts_data = posts.results;
    
    return {
      props: {
        posts_data
      }
    }
  }

    export async function getStaticPaths() {
    const posts_raw = await fetch(`http://192.168.1.254:5443/api/getPosts`);
    const posts = await posts_raw.json()
    const posts_data = posts.results;
    const paths = posts_data.map((post) => ({
        params: { post: post.POSTID.toString() },
        }))
    return {
        paths,
        fallback: false
        }
    }