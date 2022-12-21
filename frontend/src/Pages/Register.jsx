import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import left_arrow from "../Assets/left-arrow.svg";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <Box mt={"16px"} ml={"16px"} mb={"16px"}>
        <Image src={left_arrow} width={"34px"} height={"24px"} />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Text fontWeight={"bold"} pl={"24px"} pt={"10px"}>
            Create account
          </Text>
          <Heading pl={"24px"} fontWeight={"700"} pt={"9px"} width={"80%"}>
            Let's get to know you better !
          </Heading>
        </Box>
        <Box width={"90%"}>
          <FormControl pt="39px">
            <FormLabel className={styles.FormLabelDiv}>Your Name</FormLabel>
            <Box className={styles.InputBox}>
            <Input
              type="text"
              placeholder="Type your name here"
              name="name"
              className={styles.InputBox}
            />
            </Box>
          </FormControl>

          <FormControl mt="5">
            <FormLabel className={styles.FormLabelDiv}>User Name</FormLabel>
          <Box className={styles.InputBox}>
          <Input
              type="text"
              placeholder="Type Your user name here"
              name="user_name"
              className={styles.InputBox}
            />
          </Box>
          </FormControl>

          <FormControl mt="5">
            <FormLabel className={styles.FormLabelDiv}>Email</FormLabel>
            <Box className={styles.InputBox}>
            <Input
              type="email"
              placeholder="Type your gmail here"
              name="email"
              className={styles.InputBox}
            />
            </Box>
          </FormControl>

          <FormControl mt="5">
            <FormLabel fontWeight={"700"}>Password</FormLabel>
            <Box className={styles.InputBox}>
            <Input
              type="text"
              placeholder="Type your password here"
              name="password"
              className={styles.InputBox}
            />
            </Box>
          </FormControl>
          <Button mt="73px" w={'100%'} mb={'10px'}>
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Register;
