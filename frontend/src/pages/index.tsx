import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign In</button>
    </div>
  );
};

export default Home;