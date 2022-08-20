import React from "react";
import styled from "styled-components";
import img from "./images/about.jpg";
import { IoIosArrowForward } from "react-icons/io";
const AboutComp = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <RightItems>
          <AboutAndLine>
            <AboutText>About Us</AboutText>
            <Line></Line>
          </AboutAndLine>
          <AboutQuestion>Who we are at Earli</AboutQuestion>
          <AboutContent>
            At Earli, we pride ourselves in creating wealth for youngsters. We
            believe starting your financial freedom journey early enough will
            give you the leading advantage in attaining wealth at a young age.{" "}
            <br />
            We created Earli to help parents start investing and saving towards
            the future of their children
          </AboutContent>
          <AboutSub>Here are some of the features of Earli:</AboutSub>
          <AboutListHolder>
            <AboutAndCircle>
              <Circle></Circle>
              <ListText>Savings</ListText>
            </AboutAndCircle>
            <AboutAndCircle>
              <Circle></Circle>
              <ListText>Investments</ListText>
            </AboutAndCircle>
            <AboutAndCircle>
              <Circle></Circle>
              <ListText>Financial Literacy for kids</ListText>
            </AboutAndCircle>
          </AboutListHolder>
          <LearnButton>
            <LearnText>Learn More</LearnText>
            <Icon />
          </LearnButton>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default AboutComp;

const Icon = styled(IoIosArrowForward)`
  font-size: 28px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1375px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1320px) {
    font-size: 22px;
  }
`;
const LearnText = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-right: 15px;
  font-family: work sans;
  @media screen and (max-width: 1375px) {
    font-size: 18px;
  }
  @media screen and (max-width: 970px) {
    margin-right: 12px;
    font-size: 16px;
  }
`;
const LearnButton = styled.div`
  display: flex;
  margin-top: 30px;
  color: #7b69dd;
  transform: scale(1);
  transition: all 350ms;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(0.95);
  }
  @media screen and (max-width: 1375px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 1320px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 1095px) {
    margin-top: 12px;
  }
  @media screen and (max-width: 970px) {
    margin-top: 9px;
  }
`;
const ListText = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: work sans;
  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
  @media screen and (max-width: 880px) {
    font-size: 17px;
  }
  @media screen and (max-width: 426px) {
    font-size: 15px;
  }
`;
const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #7b69dd;
  border: none;
  margin-right: 20px;
  @media screen and (max-width: 1320px) {
    width: 16px;
    height: 16px;
  }
  @media screen and (max-width: 900px) {
    width: 14px;
    height: 14px;
  }
`;
const AboutAndCircle = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  @media screen and (max-width: 1320px) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1095px) {
    margin-bottom: 12px;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 880px) {
    margin-bottom: 25px;
  }
`;
const AboutListHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutSub = styled.div`
  margin: 30px 0;
  font-family: work sans;
  font-weight: 450;
  font-size: 16px;
  @media screen and (max-width: 1375px) {
    margin: 25px 0;
  }
  @media screen and (max-width: 1320px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1095px) {
    margin: 20px 0;
  }
  @media screen and (max-width: 970px) {
    font-size: 14px;
    margin: 15px 0;
  }
  @media screen and (max-width: 880px) {
    margin: 30px 0;
    font-size: 15px;
    line-height: 25px;
  }
`;
const AboutContent = styled.div`
  font-size: 16px;
  font-family: work sans;
  line-height: 25px;
  font-weight: 450;
  letter-spacing: 0.1px;
  color: black;
  flex-wrap: wrap;
  @media screen and (max-width: 1320px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1095px) {
    line-height: 23px;
  }
  @media screen and (max-width: 970px) {
    font-size: 14px;
  }
  @media screen and (max-width: 880px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media screen and (max-width: 426px) {
    font-size: 14px;
    line-height: 25px;
  }
`;
const AboutQuestion = styled.div`
  font-size: 40px;
  font-family: work sans;
  color: #7b69dd;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 600;
  @media screen and (max-width: 1375px) {
    font-size: 36px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 1320px) {
    font-size: 34px;
  }
  @media screen and (max-width: 1095px) {
    font-size: 31px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 970px) {
    font-size: 28px;
  }
  @media screen and (max-width: 880px) {
    font-size: 35px;
    margin-top: 20px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
const Line = styled.div`
  border: solid 0.1px rgb(138, 150, 160, 0.1);
  width: 400px;
  @media screen and (max-width: 1375px) {
    width: 70%;
  }
  @media screen and (max-width: 1095px) {
    width: 60%;
  }
  @media screen and (max-width: 350px) {
    width: 55%;
  }
`;
const AboutText = styled.div`
  font-size: 19px;
  font-family: work sans;
  color: #8a96a0;
  margin-right: 20px;
  font-weight: 600;
  @media screen and (max-width: 970px) {
    font-size: 17px;
  }
  @media screen and (max-width: 880px) {
    font-size: 25px;
  }
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`;
const AboutAndLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const RightItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 550px;
  @media screen and (max-width: 1375px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 560px;
  height: 530px;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 45px;
  @media screen and (max-width: 1425px) {
    width: 530px;
    height: 500px;
  }
  @media screen and (max-width: 1375px) {
    width: 500px;
    height: 470px;
  }
  @media screen and (max-width: 1270px) {
    width: 480px;
  }
  @media screen and (max-width: 1095px) {
    width: 450px;
  }
  @media screen and (max-width: 995px) {
    width: 420px;
    height: 450px;
  }
  @media screen and (max-width: 970px) {
    width: 410px;
  }
  @media screen and (max-width: 900px) {
    width: 390px;
  }
  @media screen and (max-width: 880px) {
    /* display: none; */
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100%;
    height: 450px;
    border-radius: 10px;
    margin-right: 0px;
  }
  @media screen and (max-width: 590px) {
    height: 300px;
  }
  @media screen and (max-width: 580px) {
    height: 270px;
    border-radius: 7px;
  }
  @media screen and (max-width: 390px) {
    height: 230px;
  }
  @media screen and (max-width: 340px) {
    margin: 20px 0;
  }
  @media screen and (max-width: 360px) {
    height: 190px;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 82%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 883px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;

    justify-content: center;
  }
`;
const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 85vh;
  /* background-color:red; */
  height: 100%auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
  @media screen and (max-width: 880px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 450px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 370px) {
    margin-top: 50px;
    margin-bottom: 60px;
  }
`;
