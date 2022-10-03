import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import ProgressBar from '../ProgressBar';
import earli from '../../images/eali.png';
import master from '../../images/mastercard.png';
import visa from '../../images/visa.png';
import Swal from 'sweetalert2';
import { AuthContext } from './../../AuthState/AuthProvider';
import { ErrorFunction } from './../../Error';
import { usePaystackPayment } from 'react-paystack';

const Step3Comp = () => {
  const { parentid, childid, plan } = useParams();

  const { currentUser, value } = useContext(AuthContext);

  const { state, dispatch: ctxDispatch } = value;

  const navigate = useNavigate();

  const [childData, setChildData] = useState([]);

  const [cardsData, setCardsData] = useState([]);

  const [selectCard, setSelectCard] = useState();

  const [config, setConfig] = useState({
    publicKey: "pk_test_43a24eab923416dd3f8c295ba9fc5f97f2013b01",
  });

  const initializePayment = usePaystackPayment(config);

  const ChildData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
    console.log(childData);
  };

  React.useEffect(() => {
    ChildData();
  }, []);

  const fetchCardsData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';
    const res = await axios.get(`${mainLink}/parentcards/${parentid}`);
    if (!res) {
      console.log('error');
    } else {
      setCardsData(res?.data?.data?.cards);
      console.log(res?.data?.data?.cards);
    }
  };
  const fetchConfigData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';
    const fetchPayData = await axios.get(`${mainLink}/cardlink/${parentid}`);
    if (fetchPayData) {
      const payData = fetchPayData?.data;
      console.log(payData);
      setConfig((prev) => ({
        ...prev,
        ...payData,
      }));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Unable to load Paystack',
        timer: 4000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    fetchCardsData();
    ChildData();
    fetchConfigData();
  }, []);

  const plan_details = localStorage.getItem('plan_details')
    ? JSON.parse(localStorage.getItem('plan_details'))
    : [];

  const frequency = localStorage.getItem('frequency')
    ? localStorage.getItem('frequency')
    : '';

  const createPlan = async () => {
    const data = JSON.stringify({
      amount: plan_details.amount,
      startDate: plan_details.start,
      duration: plan_details.duration,
      frequency: frequency,
      cardId: cardsData[selectCard]?._id,
      plan: plan,
    });

    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: `${mainLink}/createplan/${childid}`,
      data: data,
    };
    ctxDispatch({ type: 'LoadingRequest' });

    await axios(config)
      .then((res) => {
        ctxDispatch({ type: 'LoadingSuccess' });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${plan} plan created successfully`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate(`/dashaccount/${parentid}/${childid}`);
          localStorage.removeItem('frequency');
          localStorage.removeItem('plan_detail');
        });
      })
      .catch((error) => {
        ctxDispatch({ type: 'LoadingFailed' });
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${ErrorFunction(error)}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const addCard = async () => {
    const mainLink = 'https://earli.herokuapp.com/savecard';
    const mainLink1 = 'http://localhost:2004';
    const onSuccess = (reference) => {
      console.log(reference);
      axios
        .get(
          `${mainLink}?trxref=${reference.reference}&reference=${reference.reference}`
        )
        .then((res) => {
          fetchCardsData();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Card added successfully`,
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `Card Already Used`,
            showConfirmButton: false,
            timer: 2500,
          });
        });
    };

    const onClose = (reference) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Couldn't complete card link`,
        showConfirmButton: false,
        timer: 2500,
      });
    };
    initializePayment(onSuccess, onClose);
  };

  return (
    <Container>
      <Wrapper>
        <ChildAccountCard>
          <ChildImage src={childData?.image} />
          <ChildAccountName>
            <AccountNo>Account 1</AccountNo>
            <AccountName>
              {childData?.firstname}{" "}{childData?.lastname}
            </AccountName>
          </ChildAccountName>
        </ChildAccountCard>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/earlioverview/${parentid}/${childid}/${plan}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateAndIcon>
                <CreateIcon src={earli} />
                <CreateText>Create An Earli Saving Plan</CreateText>
              </CreateAndIcon>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 3 of 3</ProgressText>
                <LineCont>
                  <Line></Line>
                  <Line></Line>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer>
                <InputContWrapper>
                  <InputHead>
                    <MainInputHead> Payment Method </MainInputHead>
                    <SubInputText>Choose a Payment Method</SubInputText>
                  </InputHead>

                  {cardsData?.map((props, i) => (
                    <PaymentCard
                      bg={i % 2 === 0 ? "#f2f0fc" : "#f9f9f9"}
                      bd={i === selectCard ? " 0.5px solid #A594F9" : "none"}
                      key={props._id}
                      onClick={() => {
                        setSelectCard(i);
                      }}
                    >
                      <PaymentCardWrapper>
                        <PayNoAndName fl>
                          <PayNo>**** *** *** {props?.last4}</PayNo>
                          <PayName>{props?.bank}</PayName>
                        </PayNoAndName>
                        <PayNoAndName>
                          <PayImage
                            src={props?.card_type === 'master' ? master : visa}
                          />
                          <PayExpire>EXP:{props?.exp_month}/2026</PayExpire>
                        </PayNoAndName>
                      </PaymentCardWrapper>
                    </PaymentCard>
                  ))}

                  <PlusIconAndText>
                    <PlusIcon />
                    <AddPay
                      // this is to trigger the add card page
                      onClick={() => {
                        addCard();
                      }}
                    >
                      Add New Payment Method
                    </AddPay>
                  </PlusIconAndText>
                  {!state.loading ? (
                    <Button
                      onClick={() => {
                        createPlan();
                      }}
                    >
                      Next
                    </Button>
                  ) : (
                    <ProgressBar />
                  )}
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default Step3Comp;

const CreateIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-right: 10px;
  @media screen and (max-width: 370px) {
    margin-right: 6px;
    width: 20px;
    height: 20px;
  }
`;
const CreateAndIcon = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  flex: 2;
`;

const AddPay = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
`;
const PlusIcon = styled(FiPlus)`
  font-size: 18px;
  font-weight: bold;
`;
const PlusIconAndText = styled.div`
  display: flex;
  align-items: center;
  color: #7b69dd;
  margin-bottom: 20px;
`;
const PayExpire = styled.div`
  font-size: 9px;
  color: gray;
`;
const PayImage = styled.img`
  width: 50px;
  height: 30px;
  object-fit: cover;
  margin-bottom: 13px;
`;
// const PayImage = styled.img`
//   width: 30px;
//   height: 25px;
//   object-fit: contain;
//   margin-bottom: 13px;
// `;
const PayName = styled.div`
  margin-top: 13px;
`;
const PayNo = styled.div``;
const PayNoAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ fl }) => (fl ? 'flex-start' : 'flex-end')};
  font-size: 11px;
  font-weight: 500;
`;
const PaymentCardWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PaymentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: ${({ bg }) => bg};
  border: ${({ bd }) => bd};
`;
const AccountName = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const AccountNo = styled.div`
  text-transform: uppercase;
  color: lightgray;
  font-size: 13px;
  margin-bottom: 5px;
`;
const ChildAccountName = styled.div`
  flex-direction: column;
`;
const ChildImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  margin-right: 15px;
`;
const ChildAccountCard = styled.div`
  width: 550px;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Button = styled.div`
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

const MainInputHead = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const SubInputText = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
const InputHead = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
`;
const InputContWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  height: 380px;
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
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const CreateText = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  @media screen and (max-width: 395px) {
    font-size: 13px;
  }
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
  @media screen and (max-width: 500px) {
    flex: 0;
    margin-right: 25px;
  }
  @media screen and (max-width: 400px) {
    font-size: 11px;
    margin-right: 29px;
  }
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
  height: 580px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    box-shadow: none;
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
