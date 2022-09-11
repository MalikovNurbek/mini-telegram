import { Avatar, IconButton, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const CurrentUserCardSkeleton = () => {
  return (
    <div className="flex items-center w-full mb-3">
      <SkeletonCircle
        size={12}
      />
      <div className="flex flex-col w-[200px] ml-3">
        <Skeleton className="w-full h-5 mr-2" />
        <Skeleton className="w-full h-3" />
      </div>
    </div>
  )
}

export const CurrentUserCard = ({ user }) => {
  if (!user) return <CurrentUserCardSkeleton/>

  const {
    first_name,
    last_name,
    username,
  } = user

  const navigate = useNavigate()

  const goToSettings = () => navigate('/settings')

  return (
    <div className="flex items-center mb-3">
      <Avatar
        name={`${first_name} ${last_name}`}
        className="mr-3"
      />
      <div className="flex flex-col">
        <h4 className="text-lg">{first_name} {last_name}</h4>
        <h5 className="text-sm"><strong>{username}</strong></h5>
      </div>

      <IconButton
        icon={<IoMdSettings /> }
        onClick={goToSettings}
        colorScheme="telegram"
        variant="outline"
        className="ml-auto"
      />
    </div>
  )
}
