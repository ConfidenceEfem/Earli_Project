import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DashBoardHeader from "../DashBoardHeader";
import DashNav from "../DashNavs";
import KoloOverviewComp from "./KoloOverviewComp";
import { useParams } from "react-router-dom";
import axios from "axios";

const KoloOverviewPage = () => {
  const { savingsid } = useParams();
  console.log(savingsid);
  const [savings, setSavings] = useState();

  useEffect(() => {
    const mainLink = "https://earli.herokuapp.com";

    const res = axios.get(`${mainLink}/savings/${savingsid}`);
    setSavings(res?.data?.data);
    console.log(res);
  }, []);

  return (
    <Container>
      <Wrapper>
        <DashNav />
        <Cont>
          <Wrap>
            <DashBoardHeader />
            <KoloOverviewComp savings={savings} />
          </Wrap>
        </Cont>
      </Wrapper>
    </Container>
  );
};

export default KoloOverviewPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Cont = styled.div`
  width: 82%;
  height: 100%auto;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  display: flex;
  background-color: #fafcff;
  font-family: work sans;
`;
