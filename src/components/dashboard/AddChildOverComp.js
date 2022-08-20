import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineLeft } from "react-icons/ai";
import Swal from "sweetalert2";
import moment from "moment";
import ProgressBar from "./ProgressBar";
import { AuthContext } from "../AuthState/AuthProvider";
import { ErrorFunction } from "../Error";

const AddChildOverComp = () => {
  const { parentid } = useParams();

  const { currentUser, value } = useContext(AuthContext);

  const { state, dispatch: ctxDispatch } = value;

  console.log(state.loading);

  const navigate = useNavigate();

  const childImage = localStorage.getItem("childImage")
    ? localStorage.getItem("childImage")
    : "";
  const childdetail = localStorage.getItem("childdetail")
    ? JSON.parse(localStorage.getItem("childdetail"))
    : [];

  const createAChild = async () => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("firstname", childdetail.firstname);
    formData.append("lastname", childdetail.lastname);
    formData.append("dob", childdetail.dob);
    formData.append("relationship", childdetail.relationship);
    formData.append("image", state.link);

    const mainLink = "https://earli.herokuapp.com";
    const mainLink1 = "http://localhost:2004";

    ctxDispatch({ type: "LoadingRequest" });

    try {
      const res = await axios.post(
        `${mainLink}/child/${parentid}`,
        formData,
        config
      );
      console.log(res.data.data);
      if (res) {
        ctxDispatch({ type: "LoadingSuccess" });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.data.data.firstname} account created successfully`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate(`/dashaccount/${parentid}/${res.data.data._id}`);
          localStorage.removeItem("childdetail");
          localStorage.removeItem("childImage");
        });
      }
    } catch (error) {
      ctxDispatch({ type: "LoadingFailed" });
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${ErrorFunction(error)}`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Wrapper>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/addchildimage/${parentid}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateText>Create New Account</CreateText>
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
                  <InputHead>Profile Overview</InputHead>
                  <Label>
                    Confirm the details of the account you are about to create
                  </Label>
                  <ImageAndLabel>
                    <Image src={childImage} />
                  </ImageAndLabel>
                  <DetailsCont>
                    <DetailItem>
                      <ItemName>First Name</ItemName>
                      <ItemValue>{childdetail?.firstname}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Last Name</ItemName>
                      <ItemValue>{childdetail?.lastname}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Relationship</ItemName>
                      <ItemValue>{childdetail?.relationship}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Date of Birth</ItemName>
                      <ItemValue>
                        {moment(childdetail?.dob).format("DD MM yy")}
                      </ItemValue>
                    </DetailItem>
                  </DetailsCont>

                  {
                    !state.loading ? (
                      <Button
                        onClick={() => {
                          createAChild();
                          console.log("hello");
                        }}
                      >
                        Create Account
                      </Button>
                    ) : (
                      <ProgressBar />
                    )
                    // (
                    //   <Button
                    //     onClick={() => {
                    //       createAChild();
                    //       console.log('hello');
                    //     }}
                    //   >
                    //     <ProgressBar />
                    //   </Button>
                    // )
                  }
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default AddChildOverComp;

const ItemValue = styled.div`
  font-weight: 500;
  color: black;
`;

const ItemName = styled.div``;

const DetailItem = styled.div`
  display: flex;
  font-size: 12px;
  color: lightgray;
  justify-content: space-between;
  padding-bottom: 13px;
  margin-top: 13px;
  border-bottom: 1px solid lightgray;
`;
const DetailsCont = styled.div`
  width: 100%;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 60px;
  background: red;
  height: 60px;
  object-fit: center;
  border-radius: 50%;
`;
const ImageAndLabel = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
`;
const Button = styled.div`
  width: 100%;
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
  :hover {
    transform: scale(1.02);
  }
`;

const Label = styled.div`
  font-size: 10px;
  margin-bottom: 7px;
  text-align: center;
`;

const InputHead = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
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
  height: 470px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  justify-content: center;
  @media screen and (max-width: 375px) {
    height: 430px;
  }
`;
const Line = styled.div`
  width: 33.4%;
  background: #7b69dd;
  height: 100%;
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

const Icon = styled(AiOutlineLeft)`
  margin-right: 5px;
`;
const MiddleComp = styled.div`
  width: 380px;
  @media screen and (max-width: 500px) {
    /* box-shadow:none; */
    width: 100%;
  }

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
  text-decoration: none;
  color: black;
  font-size: 13px;
  align-items: center;
  font-weight: 500;
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
  width: 600px;
  height: 670px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    box-shadow: none;
  }
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
