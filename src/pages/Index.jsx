import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Image, IconButton, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // TODO: Handle form submission
    onClose();
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fHx8MTcxMjYyMTc3OXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="100vh">
        <VStack justify="center" align="center" h="100%" bg="rgba(0,0,0,0.6)" color="white" spacing={8}>
          <Heading size="2xl">Your Local Construction Experts</Heading>
          <Text fontSize="xl">From the slab up, we've got you covered.</Text>
          <Button colorScheme="blue" size="lg">
            Get a Quote
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box p={12}>
        <Heading mb={8}>Our Services</Heading>
        <HStack spacing={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3VuZGF0aW9uJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTcxMjYyMTc4MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Foundation" />
            <Text mt={4} fontWeight="bold">
              Foundation
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1454694220579-9d6672b1ec2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFtaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTcxMjYyMTc4MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Framing" />
            <Text mt={4} fontWeight="bold">
              Framing
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1587052694737-a972e4186288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29maW5nJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTcxMjYyMTc4MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Roofing" />
            <Text mt={4} fontWeight="bold">
              Roofing
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" p={12}>
        <Heading mb={8}>About Us</Heading>
        <Text>We are a local construction company with over 20 years of experience. Our team of skilled professionals is dedicated to delivering high-quality work and exceptional customer service. From residential to commercial projects, we have the expertise to handle it all.</Text>
      </Box>

      {/* Chatbot */}
      <IconButton icon={<FaComment />} colorScheme="blue" size="lg" position="fixed" bottom={8} right={8} zIndex={9999} onClick={onOpen} aria-label="Open chatbot" />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>How can we help you?</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4}>
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Index;
