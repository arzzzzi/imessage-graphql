import { SearchUsersData, SearchUsersInput } from '@/util/types';
import { useLazyQuery } from '@apollo/client';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import UserOperations from '../../../../graphql/operations/user';

interface ConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversationModal: React.FC<ConversationModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [searchUsers, { data, loading, error }] = useLazyQuery<SearchUsersData, SearchUsersInput>(
    UserOperations.Queries.searchUsers,
  );

  console.log('HERE IS WHAT U R LOOKING FOR', data);

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    searchUsers({ variables: { username } });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#2d2d2d" pb={4}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input
                  placeholder="Enter a username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <Button type="submit" isDisabled={!username} isLoading={loading}>
                  Search
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConversationModal;
