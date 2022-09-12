import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineWechat } from 'react-icons/ai'

export const SearchChat = ({ onSearch }) => {
  return (
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={
          <AiOutlineWechat color="#0088CC" className="w-7 h-7" />
        }
      />
      <Input
        type="search"
        placeholder="Поиск чата"
        className="text-center border !border-[#0088CC]"
        colorScheme="telegram"
        onChange={onSearch}
      />
    </InputGroup>
  )
}
