import { Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

interface IAuthProps {}

const Auth: React.FC<IAuthProps> = (props) => {
  return (
    <div>
      <Button onClick={() => signIn('google')}>Login</Button>
    </div>
  );
};

export default Auth;
