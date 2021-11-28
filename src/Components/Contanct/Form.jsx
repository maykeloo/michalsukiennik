/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  ErrorBar,
  ErrowText,
  FormBox,
  FormContent,
  FormLabel,
  Input,
  LeftSize,
  SentText,
  Submit,
  Text,
} from "./contactElements";

const Form = () => {
  const formValidation = () => {
    let nameCorrect = false;
    let emailCorrect = false;
    let numberCorrect = false;
    let correct = false;

    if (name.length > 3) {
      nameCorrect = true;
    }

    if (email.indexOf("@") !== -1) {
      emailCorrect = true;
    }

    if (!isNaN(number)) {
      numberCorrect = true;
    }

    if (nameCorrect && emailCorrect && numberCorrect) {
      correct = true;
    }

    return {
      correct,
      nameCorrect,
      emailCorrect,
      numberCorrect,
    };
  };

  const [name, setName] = useState("");
  const setNameHandler = (e) => setName(e.target.value);

  const [email, setEmail] = useState("");
  const setEmailHandler = (e) => setEmail(e.target.value);

  const [number, setNumber] = useState("");
  const setNumberHandler = (e) => setNumber(e.target.value);

  const [sent, setSend] = useState(false);
  const setSendHandler = (check) => setSend(check);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    const validation = formValidation();

    if (validation.correct) {
      emailjs
        .sendForm(
          "gmail",
          "template_ggiaevr",
          form.current,
          "user_rynbkHgMtGUpzN0yaxlEP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();

      setNameError(false);
      setEmailError(false);
      setNumberError(false);
      setSendHandler(true);
    } else {
      setNameError(!validation.nameCorrect);
      setEmailError(!validation.emailCorrect);
      setNumberError(!validation.numberCorrect);
      setSendHandler(false);
    }
  };

  const messages = {
    nameError: "The name must be longer than 3 characters.",
    emailError: "@ is missing in the e-mail.",
    phoneError: "The telephone number must consist of numbers.",
  };

  return (
    <>
      <FormContent>
        <LeftSize>
          <form
            ref={form}
            onSubmit={sendMail}
            noValidate
            style={{ width: "80%", height: "100%", zIndex: '100' }}
          >
            <FormBox>
              <FormLabel>
                <Input
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={setNameHandler}
                />
                {nameError && (
                  <ErrorBar>
                    <ErrowText>{messages.nameError}</ErrowText>
                  </ErrorBar>
                )}
              </FormLabel>
              <FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={setEmailHandler}
                />
                {emailError && (
                  <ErrorBar>
                    <ErrowText>{messages.emailError}</ErrowText>
                  </ErrorBar>
                )}
              </FormLabel>
              <FormLabel>
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={number}
                  onChange={setNumberHandler}
                />
                {numberError && (
                  <ErrorBar>
                    <ErrowText>{messages.phoneError}</ErrowText>
                  </ErrorBar>
                )}
              </FormLabel>
              <FormLabel>
                <Text placeholder="Text" name="message" />
              </FormLabel>
              <FormLabel>
                <Submit type="submit" value="Send message" />
                {sent && (
                  <ErrorBar>
                    <SentText>Email was sent.</SentText>
                  </ErrorBar>
                )}
              </FormLabel>
            </FormBox>
          </form>
        </LeftSize>
      </FormContent>
    </>
  );
};

export default Form;
