import { Button, Modal, ModalOverlay, ModalContent, useDisclosure, ModalHeader, 
    ModalCloseButton,
    ModalBody,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    ModalFooter,
    IconButton} from '@chakra-ui/react'
import { BiEditAlt } from 'react-icons/bi'
import React from 'react'

const EditModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <IconButton onClick={onOpen}
				variant='ghost'
				colorScheme='blue'
				aria-label='See menu'
				size={"sm"}
				icon={<BiEditAlt size={20} />} />
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
            <ModalHeader>Edit Employee</ModalHeader>
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
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}>Edit</Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  )
}

export default EditModal