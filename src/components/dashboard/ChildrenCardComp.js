import axios from 'axios';
import moment from 'moment';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import ChildInfo from './ChildInfo';
 
const ChildrenCardComp = ({childid, parentid}) => {
  const navigate = useNavigate()
  const [data, setData] = React.useState([])

  const fetchChildData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';
    const res = await axios.get(`${mainLink}/child/${childid}`);
    setData(res?.data?.data)
  }

  useEffect(()=>{
fetchChildData()
  },[])

  return (
                <ChildrenCard
                  onClick={() => {
                    navigate(`/dashaccount/${parentid}/${data?._id}`);
                  }}
                >
                        <ChildrenCardWrapper>
                          <ChildrenDetails>
                            <ChildrenProfile>
                              <ChildrenImage 
                              src={data?.image} 
                              />
                            </ChildrenProfile>
                            <ChildrenName>
                              {data?.firstname} {data?.lastname}
                            </ChildrenName>
                            <ChildrenAge>
                              {moment().diff(data?.dob, "years", false)} years
                            </ChildrenAge>
                          </ChildrenDetails>{" "}
                          
                          <ChildInfo myid={childid}/>
                          <ChildrenButton
                           onClick={() => {
                            // navigate(`/dashaccount/${parentid}/${props?._id}`);
                          }}
                          >View Account</ChildrenButton>
                        </ChildrenCardWrapper>
                      </ChildrenCard>
  )
}

export default ChildrenCardComp





const ChildrenButton = styled.div`
  width: 180px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #7b69dd;
  background-color: #eeebfe;
  opacity: 0.5;
  border-radius: 3px;
  font-weight: 450;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.01);
  }
`;

const ChildrenAmount = styled.div`
  font-size: 13px;
  color: #7b69dd;
  font-weight: 600;
`;

const ChildrenSaving = styled.div`
  font-size: 10px;
  color: gray;
  margin-bottom: 5px;
`;

const ChildrenSavingAndAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChildrenSavingAndAmountHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ChildrenAge = styled.div`
  font-size: 13px;
  color: gray;
`;

const ChildrenName = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 5px;
`;

const ChildrenImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChildrenProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 15px; */
  border: 1px solid #7b69dd;
`;
const ChildrenDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 53%;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
  transition: all 550ms;
  :hover {
    transform: scale(1.01);
  }
`;

const ChildrenCardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChildrenCard = styled.div`
  min-width: 260px;
  width: 270px;
  height: 260px;
  background: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  margin-right: 20px;

`;


