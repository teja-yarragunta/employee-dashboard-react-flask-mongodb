import { Button, Modal, ModalOverlay, ModalContent, useDisclosure, ModalHeader, 
    ModalCloseButton,
    ModalBody,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    RadioGroup,
    Radio,
    ModalFooter} from '@chakra-ui/react'
import { BiAddToQueue } from 'react-icons/bi'
import React from 'react'

const CreateUserModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue />
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>New Employee</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Flex alignItems={"center"} gap={4}>
                    <FormControl> {/* left */}
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='enter full name' />
                    </FormControl>
                    <FormControl> {/* right */}
                        <FormLabel>Role</FormLabel>
                        <Input placeholder='enter the role' />
                    </FormControl>
                </Flex>
                <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea resize={'none'} overflowY={'hidden'} placeholder='he/she codes in C++' />
                </FormControl>
                <RadioGroup mt={4}>
                    <Flex gap={5}>
                        <Radio value='male'>Male</Radio>
                        <Radio value='female'>Female</Radio>
                    </Flex>
                </RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}>Add</Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  )
}

export default CreateUserModel