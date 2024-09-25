import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> My new BFF 😍 </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
                {/* LEFT SIDE */}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              {/* RIGHT SIDE */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Software Engineer" />
              </FormControl>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUserModal;
