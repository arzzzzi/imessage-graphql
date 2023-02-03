import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();

  console.log('THIS IS DATA', data);
  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign In</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign Out</button>
      )}
      {data?.user?.name}
    </div>
  );
};

export default Home;
