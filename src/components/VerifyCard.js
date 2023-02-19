import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { AuthContext } from './AuthState/AuthProvider';
import Swal from 'sweetalert2';
import { ErrorFunction } from './Error';
import ProgressBar from './dashboard/ProgressBar';
import {addCurrentUser,addEmail,addFirstname,addLastname,addPassword,logout} from "./Redux/EarliReducers"

const VerifyCard = () => {
  const { value } = useContext(AuthContext);

  const dispatchUser = useDispatch()

  const { state, dispatch: ctxDispatch } = value;
  const navigate = useNavigate();

  // to get the userdata from the state
  const firstname = useSelector((state) => state?.persistedReducer?.firstname);
  const lastname = useSelector((state) => state?.persistedReducer.lastname);
  const email = useSelector((state) => state?.persistedReducer.email);
  const password = useSelector((state) => state?.persistedReducer.password);

  const [num, setNum] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [counter, setCounter] = useState(300); 
   const inputRef = useRef(null);
  const [activeBox, setActiveBox] = useState(1);

 
  const verifyEmailAndLogin = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';
    ctxDispatch({ type: 'LoadingRequest' });
    try {

       // to verify the user otp and create the user
      const res = await axios.post(`${mainLink}/verify`, {
        firstname,
        lastname,
        email,
        password,
        otp: num + num1 + num2 + num3 + num4 + num5,
      });
      if (res) {

        // 
        ctxDispatch({ type: 'LoadingSuccess' });

        // it pushes the current user to redux state
        dispatchUser(addCurrentUser(res.data.data))

        //it changes the user input to empty string
        dispatchUser(addFirstname(""))
        dispatchUser(addLastname(""))
        dispatchUser(addPassword(""))
        dispatchUser(addEmail(""))


        localStorage.setItem('currentUser', JSON.stringify(res.data.data));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Verification Completed`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate(`/home/${res.data.data.data._id}`);
        });
      }
    } catch (error) {
      ctxDispatch({ type: 'LoadingFailed' });
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${ErrorFunction(error)}`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  // for the counter
  React.useEffect(() => {
    setInterval(() => {
      setCounter((e) => e - 1);
    }, 1000);
  }, []);



  useEffect(() => {
    inputRef.current?.focus();
  }, [activeBox]);


  return (
    <Container>
      <Wrapper>
        <VerifyText>
          <VerifyHead>Verify Your Email</VerifyHead>
          <VerifySub>
            Fill in the code we sent to <span>{email}</span>
          </VerifySub>
          <VerifyChange>
            <span
            onClick={()=>{
              navigate("/signup")
            }}
            >
               Change Email
            </span>
           
            </VerifyChange>
        </VerifyText>
        <InputsAndButton>
          <InputHolder>
            <Inputs
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
                if (e.target.value.length === 1) {
                  setActiveBox(2);
                } else if (e.target.value.length === 0) {
                  setActiveBox(2);
                }
              }}
              maxLength="1"
              ref={activeBox === 1 ? inputRef : null}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setActiveBox(1);
                } else if (e.target.value.length === 1) {
                  setActiveBox(2);
                }
              }}
            />
            <Inputs
             value={num1}
             onChange={(e) => {
               setNum1(e.target.value);
               if (e.target.value.length === 1) {
                 setActiveBox(3);
               } else if (e.target.value.length === 0) {
                 setActiveBox(2);
               }
             }}
             maxLength="1"
             ref={activeBox === 2 ? inputRef : null}
             onKeyDown={(e) => {
               if (e.key === "Backspace") {
                 setActiveBox(1);
               } else if (e.target.value.length === 1) {
                 setActiveBox(3);
               }
             }}
            />
            <Inputs
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
                if (e.target.value.length === 1) {
                  setActiveBox(4);
                } else if (e.target.value.length === 0) {
                  setActiveBox(3);
                }
              }}
              maxLength="1"
              ref={activeBox === 3 ? inputRef : null}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setActiveBox(2);
                } else if (e.target.value.length === 1) {
                  setActiveBox(4);
                }
              }}
            />
            <Inputs
               value={num3}
               onChange={(e) => {
                 setNum3(e.target.value);
                 if (e.target.value.length === 1) {
                   setActiveBox(5);
                 } else if (e.target.value.length === 0) {
                   setActiveBox(4);
                 }
               }}
               maxLength="1"
               ref={activeBox === 4 ? inputRef : null}
               onKeyDown={(e) => {
                 if (e.key === "Backspace") {
                   setActiveBox(3);
                 } else if (e.target.value.length === 1) {
                   setActiveBox(5);
                 }
               }}
            />
            <Inputs
            value={num4}
            onChange={(e) => {
              setNum4(e.target.value);
              if (e.target.value.length === 1) {
                setActiveBox(6);
              } else if (e.target.value.length === 0) {
                setActiveBox(5);
              }
            }}
            maxLength="1"
            ref={activeBox === 5 ? inputRef : null}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                setActiveBox(4);
              } else if (e.target.value.length === 1) {
                setActiveBox(6);
              }
            }}
            />
            <Inputs
             value={num5}
             onChange={(e) => {
               setNum5(e.target.value);
               setActiveBox(6);
             }}
             maxLength="1"
             ref={activeBox === 6 ? inputRef : null}
             onKeyDown={(e) => {
               if (e.key === "Backspace") {
                 setActiveBox(5);
               }
             }}
            />
          </InputHolder>
          {counter === 0 || counter < 0 ? (
            <Resend>Code Expired Already</Resend>
          ) : (
            <Resend>
              Code expires in <span>{counter}secs</span>
            </Resend>
          )}
          {counter === 0 || counter < 0 ? (
            <Button bg="lightgray">Continue</Button>
          ) : (
            <div style={{ width: '100%' }}>
              {!state.loading ? (
                <Button
                  tr
                  bg="#7B69DD"
                  onClick={() => {
                    verifyEmailAndLogin();
                  }}
                >
                  Continue
                </Button>
              ) : (
                <ProgressBar />
              )}
            </div>
          )}
        </InputsAndButton>
      </Wrapper>
    </Container>
  );
};

export default VerifyCard;

const Resend = styled.div`
  font-size: 12px;
  font-family: work sans;
  margin-bottom: 25px;
  span {
    color: #7b69dd;
  }
  @media screen and (max-width: 400px) {
  margin-bottom: 35px;
  margin-top: 10px;
  }
`;
const Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
  border-radius: 5px;
  font-size: 15px;
  font-family: work sans;
  color: whitesmoke;
  /* font-weight: bold; */
  /* font-weight: 600; */
  transform: scale(1);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(${({ tr }) => (tr ? 1.02 : 1)});
  }
  @media screen and (max-width: 400px) {
    height: 40px;
    font-size: 13px;
  }
`;
const Inputs = styled.input`
  width: 35px;
  height: 30px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #7b69dd;
  display: flex;
  font-size: 25px;
  text-align: center;
  font-family: work sans;
  font-weight: 600;
  @media screen and (max-width: 400px) {
    width: 28px;
    height: 25px;
  }
  ::placeholder {
    font-size: 30px;
  }
  input[type='text'] {
    font-size: 20px;
  }
`;
const InputHolder = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  /* background-color: red; */
`;
const VerifyChange = styled.div`
  font-size: 12px;
  color: #7b69dd;
  font-family: work sans;
  text-decoration: none;
  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 25px;
  }
`;
const VerifySub = styled.div`
 font-size: 14px;
  color: gray;
  font-family: work sans;
  margin: 10px 0;
  letter-spacing: 0.3px;
  line-height: 25px;
  /* background: green; */
 
  span {
    font-weight: 500;
    color: black;
    margin-left: 5px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
    /* width: 100%; */
    flex-wrap: wrap;
    /* height: auto; */
  display:flex;
  span {
    margin-left: 0px;
  }
  }
 
`;
const VerifyHead = styled.div`
  font-weight: bold;
  font-size: 27px;
  font-family: work sans;
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
  @media screen and (max-width: 420px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

const InputsAndButton = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  @media screen and (max-width: 400px) {
  margin-top: 35px;
  }
`;
const VerifyText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.099);
  @media screen and (max-width: 400px) {
    display:flex;
    flex-wrap: wrap;
    border-bottom: solid 1px silver;
  }
`;
const Wrapper = styled.div`
 width: 87%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  @media screen and (max-width: 500px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    align-items: center;
    justify-content: flex-start;
  }
`;
const Container = styled.div`
   width: 470px;
  height: 200px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-right: 10px;
  border-radius: 10px;
  min-height: 300px;
  height: 340px;

  @media screen and (max-width: 1100px) {
    margin-right: 0px;
    width: 430px;
  }
  @media screen and (max-width: 950px) {
    width: 400px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    background-color: #fafcff;
    box-shadow: none;
    margin-top: 10px;
  }
  @media screen and (max-width: 400px) {
    height: auto;
  }
`;
