import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import treasury from '../../images/treasury.png';
import Swal from 'sweetalert2';

const TreasuryStep1 = () => {
  const { parentid, childid, invest } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [childData, setChildData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res?.data?.data?.children);
    // console.log(data);
  };

  const ChildData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
    console.log(childData);
  };

  useEffect(() => {
    fetchData();
    ChildData();
  }, []);

  const [paymentMethod, setPaymentMethod] = useState('30 Days');

  const submitPayment = () => {
    if (paymentMethod === '') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Please Choose A Duration`,
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      localStorage.setItem('invest_frequency', paymentMethod);
      navigate(`/${parentid}/${childid}/${invest}/amount`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ChildAccountCard>
          <ChildImage src={childData?.image} />
          <ChildAccountName>
            <AccountNo>Account 1</AccountNo>
            <AccountName>
              {childData?.firstname}
              {childData?.lastname}
            </AccountName>
          </ChildAccountName>
        </ChildAccountCard>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/dashaccount/${parentid}/${childid}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateAndIcon>
                <CreateIcon src={treasury} />
                <CreateText>Invest In {invest}</CreateText>
              </CreateAndIcon>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 1 of 3 </ProgressText>
                <LineCont>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer>
                <InputContWrapper>
                  <InputHead>
                    <MainInputHead>
                      {' '}
                      How Long Will You Like to Invest
                    </MainInputHead>
                    <SubInputText>
                      You can invest in treasury bills within a selected period
                      of time.
                    </SubInputText>
                  </InputHead>
                  <InputLabel>
                    <Input
                      type="radio"
                      id="30 Days"
                      label="30 Days"
                      value="30 Days"
                      checked={paymentMethod === '30 Days'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    />
                    <Label>30 Days</Label>
                  </InputLabel>
                  <InputLabel>
                    <Input
                      type="radio"
                      id="60 Days"
                      value="60 Days"
                      label="60 Days"
                      checked={paymentMethod === '60 Days'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    />
                    <Label>60 Days</Label>
                  </InputLabel>
                  <InputLabel>
                    <Input
                      type="radio"
                      id="90 Days"
                      label="90 Days"
                      value="90 Days"
                      checked={paymentMethod === '90 Days'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    />
                    <Label>90 Days</Label>
                  </InputLabel>

                  <Button
                    onClick={() => {
                      submitPayment();
                    }}
                  >
                    Next
                  </Button>
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default TreasuryStep1;

const CreateIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-right: 10px;
  @media screen and (max-width: 340px) {
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
  @media screen and (max-width: 580px) {
    width: 480px;
  }

  @media screen and (max-width: 500px) {
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
  margin: 25px 0;
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
  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* border: none; */
  /* outline: 1px solid lightgray; */
  border-radius: 5px;
  height: 40px;

  ::placeholder {
    font-size: 11px;
    background: purple;
    font-family: work sans;
  }
`;
const Label = styled.div`
  width: 100%;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: 500;
  margin-left: 7px;
`;
const InputLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  /* margin: px 0; */
`;
const MainInputHead = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;
const SubInputText = styled.div`
  width: 85%;
  text-align: center;
  justify-content: center;
  font-size: 12px;
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
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  /* height: 330px; */
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 20px;
  background: white;
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
  @media screen and (max-width: 400px) {
    margin-right: 3px;
  }
`;
const MiddleComp = styled.div`
  width: 380px;
  @media screen and (max-width: 440px) {
    width: 100%;
  }
  /* height: 500px; */
`;

const CreateText = styled.div`
  font-size: 15px;
  font-weight: 600;
  @media screen and (max-width: 375px) {
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
    margin-right: 15px;
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
  /* height: 520px; */
  height: auto;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  @media screen and (max-width: 580px) {
    width: 480px;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    box-shadow: none;
    background: #fafcff;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    /* box-shadow:none; */
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
  @media screen and (max-width: 500px) {
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
