import { useContext, useState } from 'react';
import styled from 'styled-components';
import avatar from '../images/avatar.png';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineCamera } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../AuthState/AuthProvider';
import Swal from 'sweetalert2';

const AddChildImage = () => {
  const { parentid } = useParams();

  const { currentUser, value } = useContext(AuthContext);

  const { state, dispatch: ctxDispatch } = value;


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [image, setImage] = useState(avatar);
  const [imageLink, setImageLink] = useState('');

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setImageLink(file);
  };

  const submit = async () => {
    // console.log(imageLink);
    // console.log(image);
    if (imageLink === '') {
      Swal.fire('Please input an Image');
    } else {
      ctxDispatch({ type: 'AddImageLink', payload: imageLink });
      // dispatch(addChildLink(imageLink));
      localStorage.setItem('childImage', image);
      navigate(`/childoverview/${parentid}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/addchild/${parentid}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateText>Create New Account</CreateText>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 2 of 3</ProgressText>
                <LineCont>
                  <Line></Line>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer>
                <InputContWrapper>
                  <InputHead>Profile Picture</InputHead>
                  <Label>
                    Put a face to help you differentiate this account
                  </Label>
                  {imageLink === '' ? (
                    <ImageAndLabel>
                      <ImageAndIcon htmlFor="pix">
                        <CameraIcon />
                      </ImageAndIcon>
                      <Change htmlFor="pix">Choose Picture</Change>
                      <input
                        type="file"
                        id="pix"
                        style={{ display: 'none' }}
                        onChange={uploadImage}
                      />
                    </ImageAndLabel>
                  ) : (
                    <ImageAndLabel>
                      <Image src={image} />
                      <Change htmlFor="pix">Change Picture</Change>
                      <input
                        type="file"
                        id="pix"
                        style={{ display: 'none' }}
                        onChange={uploadImage}
                      />
                    </ImageAndLabel>
                  )}

                  <Button
                    onClick={() => {
                      submit();
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

export default AddChildImage;

const CameraIcon = styled(AiOutlineCamera)`
  color: #7b69dd;
  font-size: 25px;
`;
const ImageAndIcon = styled.label`
  width: 70px;
  background: rgba(123, 105, 221, 0.5);
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 550ms;
  :hover {
    transform: scale(1.02);
  }
`;
const Change = styled.label`
  font-size: 10px;
  color: #7b69dd;
  margin-top: 10px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
const ImageAndLabel = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
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
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  justify-content: center;
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
  @media screen and (max-width: 450px) {
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
  color: black;
  text-decoration: none;
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
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const AddChildCard = styled.div`
  width: 580px;
  height: 500px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  @media screen and (max-width: 620px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    box-shadow: none;
    /* width: 90%; */
  }
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
