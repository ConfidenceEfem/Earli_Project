import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { usePaystackPayment } from "react-paystack";

const FundWalletPage = ({ parentid, childid }) => {
  console.log(parentid, childid);

  const navigate = useNavigate();
  const [amount, setAmount] = useState();

  const [config, setConfig] = useState({
    publicKey: "pk_test_43a24eab923416dd3f8c295ba9fc5f97f2013b01",
  });

  const initializePayment = usePaystackPayment(config);

  const fetchConfigData = async () => {
    const mainLink = "https://earli.herokuapp.com";
    const mainLink1 = "http://localhost:2004";

    await axios
      .get(`${mainLink}/getfund/${childid}`)
      .then((res) => {
        const payData = res?.data;

        setConfig((prev) => ({
          ...prev,
          ...payData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
    };
    
    useEffect(() => {
      fetchConfigData();
    }, []);
    
    const fundWallet = async () => {
    console.log(amount);
    const mainLink = "https://earli.herokuapp.com/fundachild";
    const onSuccess = (reference) => {
      console.log(reference);
      axios
        .get(
          `${mainLink}?trxref=${reference.reference}&reference=${reference.reference}`
        )
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Wallet funded successfully`,
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Child not found`,
            showConfirmButton: false,
            timer: 2500,
          });
        });
    };

    const onClose = (reference) => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Couldn't Fund wallet`,
        showConfirmButton: false,
        timer: 2500,
      });
    };
    initializePayment(onSuccess, onClose);
  };

  return (
    <LastCard>
      <CreateSavingsPlan>
        <SavingsPlanWrapper>
          <InputHead>Amount</InputHead>
          <Input
            type="number"
            placeholder="Input Amount"
            min={100}
            onChange={(e) => {
              setAmount(e.target.value * 100);
              console.log(amount);
              setConfig((prev) => ({
                ...prev,
                amount: amount,
              }));
            }}
          />
          <Button
            onClick={() => {
              fundWallet();
            }}
          >
            Fund Wallet
          </Button>
          <Button
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Copy fund link`,
                text: `https://earli.herokuapp.com/fund/${childid}`,
                showConfirmButton: true,
              });
            }}
          >
            Generate Payment Link
          </Button>
        </SavingsPlanWrapper>
      </CreateSavingsPlan>
    </LastCard>
  );
};

export default FundWalletPage;
const Button = styled.div`
  padding: 10px 30px;
  background-color: #7b69dd;
  margin: 10px 0;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 660ms ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`;
const InputHead = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: 600;
  margin: 20px 0;
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
const SavingsPlanWrapper = styled.div`
  //   width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CreateSavingsPlan = styled.div`
  display: flex;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  height: 300px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 410px;
    // background-color: red;
  }
  @media screen and (max-width: 980px) {
    width: 395px;
  }
  @media screen and (max-width: 970px) {
    width: 385px;
  }
  @media screen and (max-width: 950px) {
    // width: 380px;
    width: 90%;
    margin: 15px 0;
  }
  @media screen and (max-width: 910px) {
    // width: 380px;

    // background-color: red;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    // background-color: red;
  }
`;

const LastCard = styled.div`
  width: 100%;
  height: 100%;
  // padding-bottom: 40px;
  justify-content: center;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  // margin-bottom: 40px;
  @media screen and (max-width: 950px) {
    justify-content: center;
    // background-color: red;
  }
`;
