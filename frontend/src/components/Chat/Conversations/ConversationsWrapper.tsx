import { Box } from '@chakra-ui/react';
import { Session } from 'next-auth';
import ConverstionList from './ConversationList';

interface ConversationsWrapperProps {
  session: Session;
}

const ConversationsWrapper: React.FC<ConversationsWrapperProps> = ({ session }) => {
  return (
    <Box>
      <ConverstionList session={session} />
    </Box>
  );
};

export default ConversationsWrapper;
