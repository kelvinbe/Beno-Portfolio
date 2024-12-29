import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useBreakpointValue,
  Text
} from '@chakra-ui/react';
import Image from "next/image";

import profile from '../../assets/profile-bg.png';
import me from '../../assets/me.jpg';
import { IoLocation } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";


const ModalComponent = ({ isOpen, onClose }) => {
  const modalSize = useBreakpointValue({ base: '404px', md: '500px' });

  const img = `url(${profile})`;

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          sx={{
            width: modalSize,
            height: '519px',
          }}
        >
          <div
            display={'flex'}
            className='mb-5'
          >
            
               <Image
                          src={profile}
                          width={300}
                          height={100}
                        
                          alt="Flowers"
                          className="w-full"
                        /> 
                 <Image
                          src={me}
                          width={100}
                          height={50}
                          alt="Flowers"
                          className="rounded-full ml-5 -mt-[55px]"
                          
                        /> 
          </div>
          <ModalCloseButton />
          <ModalBody>
            <Box className='flex justify-between mb-5'>
              <Box>
          <Text className='py-0'>
            Software Developer
          </Text>
          <Text className='py-1'>
            2019 - present
          </Text>
          </Box>
          <Box>
          <Text className='py-0 flex'>
          <BiSolidLike style={{marginTop: '2px', marginRight: '2px'}} />
          2 Followers
          </Text>
          <Text className='py-1 flex'>
          <IoLocation style={{marginTop: '2px', marginRight: '2px'}}  />
          Nairobi, Kenya
          </Text>
          </Box>
          </Box>
            
            As a software developer, my journey in the world of web and mobile development began with a curiosity
            for building interactive and seamless digital experiences. Over the years, including during
            university, I have honed my skills in both frontend and backend technologies to deliver robust
            and user-friendly applications.
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
