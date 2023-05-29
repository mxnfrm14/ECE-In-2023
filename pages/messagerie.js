import Head from 'next/head';
import Link from 'next/link';
import UserPresentationCard from '../components/UserPresentationCard';
import Layout from '../components/Layout';
import EventPreview from '../components/EventPreview';
import PostPreview from '../components/PostPreview';

function Messagerie(props) {
  const isAuthenticated = true;

  const content = props.users_data;
  // console.log(content);
  return (
    <>
      <Head>
        <title> Messagerie | ECE In </title>
      </Head>

      <Layout>


      <div className="chat chat-start">
        <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
      
      

      </Layout>   
    </>
  );
}

// export async function getStaticProps() {
//   const users_raw = await fetch('http://192.168.1.254:5443/api/users')
//   const users = await users_raw.json()
//   const users_data = users.results;
//   return {
//     props: {
//       users_data
//     }
//   }
// }

export default Messagerie