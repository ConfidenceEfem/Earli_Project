import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const NewCardModa = ({ setShowPayment, showPayment }) => {
  // validation for the inputs using yup and react-hook-form

  const schema = yup.object().shape({
    cardName: yup.string().required('Please input your card Name'),
    cardNumber: yup.string().required('Input Card Number'),
    expiryDate: yup.date().required('Input Card Expiry Date'),
    cvv: yup.string().required('Input Card Cvv'),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    // this is where you would do the function
    // so it will contain the function to add a card

    const { cardName, cardNumber, expiryDate, cvv } = data;

    console.log(cardName, cardNumber, cvv, expiryDate);

    // this is to close the modal
    setShowPayment(!showPayment);
  });

  return (
    <Container
      onClick={() => {
        setShowPayment(!showPayment);
      }}
    >
      <Wrapper>
        <Wrap
          onSubmit={submit}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Title>Add New Card</Title>
          <InputHolder>
            <InputHold>
              <Label>Name on Card</Label>
              <Input placeholder="Card Holder Name" {...register('cardName')} />
              <Error>{errors?.cardName?.message}</Error>
            </InputHold>
            <InputHold>
              <Label>Card Number</Label>
              <Input placeholder="Input Number" {...register('cardNumber')} />
              <Error>{errors?.cardNumber?.message}</Error>
            </InputHold>
            <InputHold1>
              <OneInput>
                <OneLabel>Expiry Date</OneLabel>
                <OneInputTag type="date" {...register('expiryDate')} />
                <Error>{errors?.expiryDate?.message}</Error>
              </OneInput>
              <OneInput>
                <OneLabel>CVV</OneLabel>
                <OneInputTag
                  type="text"
                  placeholder="***"
                  {...register('cvv')}
                />
                <Error>{errors?.cvv?.message}</Error>
              </OneInput>
            </InputHold1>
          </InputHolder>{' '}
          <Button type="submit">Add Card</Button>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default NewCardModa;

const Error = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  color: red;
  margin-top: 6px;
`;
const OneInputTag = styled.input`
  font-family: work sans;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  outline: 1px solid lightgray;
  padding: 8px;
  color: black;
  height: 30px;
  width: 95%;
  ::placeholder {
    font-size: 13px;
    color: lightgray;
  }
`;
const OneLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
  width: 100%;
`;
const OneInput = styled.div`
  width: 47%;
`;
const InputHold1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 13px 0;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  background: #7b69dd;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 660ms;
  :hover {
    transform: scale(1.02);
  }
`;
const Input = styled.input`
  font-family: work sans;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  outline: 1px solid lightgray;
  padding: 8px;
  color: black;
  height: 30px;
  width: 95%;
  ::placeholder {
    font-size: 13px;
    color: lightgray;
  }
`;
const Label = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
  width: 100%;
  /* color: lightgray; */
`;
const InputHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 13px 0;
`;
const InputHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const Wrap = styled.form`
  width: 90%;
  height: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: red; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  background-color: rgb(0,0,0,0.3);
  font-family: work sans;
`;
const Wrapper = styled.div`
  width: 420px;
  /* min-height: 500px; */
  height: auto;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 30px 0;

  @media screen and (max-width: 450px) {
    width: 85%;
  }
`;
