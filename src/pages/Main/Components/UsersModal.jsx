import React from 'react'
import { Avatar, Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure } from '@chakra-ui/react'
import { MdOutlineCreate } from 'react-icons/md'
import { IoIosCreate } from 'react-icons/io'
import { Loader } from 'Components/Loader'

const UsersModalBody = ({ isLoading, children }) => {
  if (isLoading) return <Loader />

  return <div className="h-[450px] overflow-auto ">{children}</div>
}

const UsersList = ({ users, createChat, isLoadingCreateChat }) => {
  if (!users) return null

  if (!users.length) return <h3 className="text-2xl text-center">Список пользователей пуст!</h3>
  console.log(users)
  return (
    <div>
      {
        users.map(({ id, first_name, last_name, username }) => (
          <div
            className="flex items-center justify-between pb-2 mb-3 border-b last:mb-0"
            key={id}
          >
            <div className="flex items-center">
              <Avatar
                name={`${first_name} ${last_name}`}
                className="mr-3"
              />
              <div className="flex flex-col">
                <h4 className="text-lg">{first_name} {last_name}</h4>
                <h5 className="text-sm"><strong>{username}</strong></h5>
              </div>
            </div>

            <div className="pr-4">
              <Tooltip
                label={`Создать чат с ${username}`}
                bg="telegram.500"
                color="white">
                <IconButton
                  colorScheme="telegram"
                  variant="outline"
                  icon={<MdOutlineCreate/>}
                  onClick={() => createChat(id)}
                  isLoading={isLoadingCreateChat}
                />
              </Tooltip>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export const UsersModal = ({
  isLoading,
  users,
  userChats,
  createChat,
  isLoadingCreateChat,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="ml-3">
      {
        !userChats?.length ? (
          <Tooltip
            label="Создать чать"
            placement="top"
            isOpen
            hasArrow
            bg="telegram.500"
            color="white"
          >

            <IconButton
              variant="outline"
              colorScheme="telegram"
              fontSize="20px"
              icon={<IoIosCreate />}
              onClick={onOpen}
            />
          </Tooltip>
        ) : (
          <Tooltip
            label="Создать чать"
            placement="top"
            hasArrow
            bg="telegram.500"
            color="white"
          >
            <IconButton
              variant="outline"
              colorScheme="telegram"
              fontSize="20px"
              icon={<IoIosCreate />}
              onClick={onOpen}
            />
          </Tooltip>
        )
      }
      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Список пользователей</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UsersModalBody
              isLoading={isLoading}>
              <UsersList users={users}
                createChat={createChat}
                isLoadingCreateChat={isLoadingCreateChat}
              />
            </UsersModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
