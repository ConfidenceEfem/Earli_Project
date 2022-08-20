import styled from "styled-components"
import DashNav from "./DashNavs"
import DashWelcome from "./DashWelcome"

const DashboardOn = () => {
    return (
       <Container>
           <Wrapper>
           <DashNav/>
           <DashWelcome/>
           </Wrapper>
       </Container>
    )
}

export default DashboardOn

const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
/* min-height: 100vh; */
height: 100%;
display: flex;
background-color: #fafcff;
font-family: work sans;
`