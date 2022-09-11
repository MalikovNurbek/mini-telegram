import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Button, IconButton, Skeleton, SkeletonCircle, Tooltip, useDisclosure } from '@chakra-ui/react'
import { lastActivityDate } from 'helpers'
import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const ChatMemberHeaderSkeleton = () => {
  return (
    <div className="flex items-center border-b p-3">
      <SkeletonCircle size={12} className="mr-3"/>
      <div className="flex flex-col w-[300px]">
        <Skeleton className="h-5 mb-2" />
        <div className="flex">
          <Skeleton className="w-full h-3 mr-3" />
          <Skeleton className="w-full h-3" />
        </div>
      </div>
    </div>
  )
}

export const ChatMemberheader = ({
  chatMember,
  isLoadingChatMember,
  deleteChat,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const onDelete = () => {
    onOpen()

    askDelete && deleteChat()
  }
  if (isLoadingChatMember || !chatMember) return <ChatMemberHeaderSkeleton />

  const { first_name, last_name, last_activity, username } = chatMember

  return (
    <div className="flex justify-between w-full p-3 border-b">
      <div className="flex">
        <Avatar
          className="mr-3"
          name={`${first_name} ${last_name}`}
        />
        <div>
          <p className="text-lg">{first_name} {last_name} <strong>({username})</strong></p>
          <p className="text-sm text-gray-500">Последнее посещение: {lastActivityDate(last_activity)}</p>
        </div>
      </div>

      <Tooltip label="Удалить чат" color="white" bg="telegram.500">
        <IconButton
          icon={<AiFillDelete/>}
          colorScheme="red"
          variant="outline"
          onClick={onOpen}
        />
      </Tooltip>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Подтвердите действие:
            </AlertDialogHeader>

            <AlertDialogBody>
              Вы действительно хотите удалить данный чат?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Отмена
              </Button>
              <Button
                colorScheme="red"
                onClick={deleteChat}
                ml={3}
              >
                Удалить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    </div>
  )
}
