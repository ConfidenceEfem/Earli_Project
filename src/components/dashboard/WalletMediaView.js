import React,{useContext} from "react"
import styled from "styled-components"
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaPiggyBank, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../AuthState/AuthProvider';
import axios from 'axios';

const WalletMediaView = ({childid}) => {
    const { currentUser } = useContext(AuthContext);

    const [childData, setChildData] = React.useState([]);
  
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
    return (
        <Container>
            <Card>
                <CardWrapper>
                        <IconCircle>
                            <FaWallet/>
                        </IconCircle>
                        <NameAndAmount>
                            <Name>{childData?.firstname}'s Wallet</Name>
                            <Amount>N0.00</Amount>
                        </NameAndAmount>
                </CardWrapper>
            </Card>
            <Card>
                <CardWrapper>
                        <IconCircle>
                            <FaPiggyBank/>
                        </IconCircle>
                        <NameAndAmount>
                            <Name>{childData?.firstname}'s  Savings</Name>
                            <Amount>N0.00</Amount>
                        </NameAndAmount>
                </CardWrapper>
            </Card>
            <Card>
                <CardWrapper>
                        <IconCircle>
                            <BsFillBarChartFill/>
                        </IconCircle>
                        <NameAndAmount>
                            <Name>{childData?.firstname}'s Investment</Name>
                            <Amount>N0.00</Amount>
                        </NameAndAmount>
                </CardWrapper>
            </Card>
           
        </Container>
    )
}

export default WalletMediaView

const Amount = styled.div`
font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.1px;
`
const Name = styled.div`
font-size: 12px;
font-weight: 500;
margin-bottom: 3px;
`
const NameAndAmount = styled.div`
display: flex;
flex-direction: column;
`
const IconCircle = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background: #f2f0fc;
display: flex;
justify-content: center;
align-items: center;
color: #7b69dd;
margin-right: 15px;
font-size: 20px;
`
const CardWrapper = styled.div`
width: 85%;
height: 90%;
display:flex;
align-items: center;

`
const Card = styled.div`
width: 290px;
background-color: white;
height: 150px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 15px;
display:flex;
justify-content: center;
align-items: center;
`
const Container = styled.div`
display:none;
@media screen and (max-width: 1000px){
    width: 100%;
display:flex;
// background-color: red;
flex-wrap: wrap;
}

`