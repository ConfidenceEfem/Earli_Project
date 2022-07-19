import React from 'react';
import styled from 'styled-components';
import avatar from '../images/avatar.png';
import * as yup from 'yup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import ProgressBar from './ProgressBar';

const AddChildAccount = () => {
  const { parentid } = useParams();

  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstname: yup.string().required('This field is reequired'),
    lastname: yup.string().required('This field is reequired'),
    relationship: yup.string().required('This field is reequired'),
    dob: yup.date().required('This field is required'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    console.log(data);
    const { firstname, lastname, relationship, dob } = data;
    localStorage.setItem('childdetail', JSON.stringify(data));

    // const mainLink = "http://localhost:2004"
    // const res = await axios.post(`${mainLink}/child/${id}`)

    navigate(`/addchildimage/${parentid}`);
  });
  return (
    <Container>
      <Wrapper>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/home/${parentid}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateText>Create New Account</CreateText>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 1 of 3</ProgressText>
                <LineCont>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer onSubmit={submit}>
                <InputContWrapper>
                  <InputHead>Personal Information</InputHead>
                  <InputLabel>
                    <Label>First Name</Label>
                    <Input
                      placeholder="Input First Name"
                      {...register('firstname')}
                    />
                    <Error>{errors?.firstname?.message}</Error>
                  </InputLabel>
                  <InputLabel>
                    <Label>Last Name</Label>
                    <Input
                      placeholder="Input Last Name"
                      {...register('lastname')}
                    />
                    <Error>{errors?.lastname?.message}</Error>
                  </InputLabel>
                  <InputLabel>
                    <Label>Relationship</Label>
                    <Select {...register('relationship')}>
                      <option>Dad</option>
                      <option>Mom</option>
                      <option>Guardian</option>
                    </Select>
                    <Error>{errors?.relationship?.message}</Error>
                  </InputLabel>
                  <InputLabel>
                    <Label>Date of Birth</Label>
                    <Input type="date" {...register('dob')} />
                    <Error>{errors?.dob?.message}</Error>
                  </InputLabel>
                  <Button>Next</Button>
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default AddChildAccount;

const Button = styled.button`
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  align-items: center;
  color: white;
  background-color: #7b69dd;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition: all 550ms;
  margin-top: 25px;
  :hover {
    transform: scale(1.02);
  }
`;
const Select = styled.select`
  width: 100%;
  padding: 0 10px;
  border: none;
  outline: 1px solid lightgray;
  border-radius: 5px;
  font-family: work sans;
  height: 40px;
  option {
    font-size: 11px;
    color: gray;
    font-family: work sans;
  }
`;
const Input = styled.input`
  width: 95%;
  padding: 0 10px;
  border: none;
  outline: 1px solid lightgray;
  border-radius: 5px;
  height: 40px;
  ::placeholder {
    font-size: 11px;
    color: gray;
    font-family: work sans;
  }
`;
const Label = styled.div`
  width: 100%;
  justify-content: flex-start;
  font-size: 11px;
  margin-bottom: 7px;
`;
const InputLabel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;
const InputHead = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: 600;
  margin: 20px 0;
`;
const InputContWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.form`
  width: 100%;
  display: flex;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  justify-content: center;
`;
const Line = styled.div`
  width: 33.4%;
  background: #7b69dd;
  height: 100%;
  border-radius: 10px;
`;
const LineCont = styled.div`
  width: 100%;
  display: flex;
  background-color: whitesmoke;
  border-radius: 10px;
  height: 3px;
`;
const ProgressText = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
`;
const ProgressContianer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Error = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: red;
  margin-top: 5px;
  width: 100%;
`;

const Icon = styled(AiOutlineLeft)`
  margin-right: 5px;
`;
const MiddleComp = styled.div`
  width: 340px;
  /* height: 500px; */
`;

const CreateText = styled.div`
  display: flex;
  flex: 2;
  font-size: 16px;
  font-weight: 600;
`;
const IconAndBack = styled(Link)`
  display: flex;
  flex: 1;
  font-size: 13px;
  align-items: center;
  font-weight: 500;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
const CreateHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const AddChildWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const AddChildCard = styled.div`
  width: 550px;
  height: 680px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
