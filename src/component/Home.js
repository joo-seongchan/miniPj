import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://t1.daumcdn.net/cfile/tistory/99280D3E5B28527629")
    no-repeat center/cover;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 150px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
`;
const Title = styled.div`
  font-size: 120px;
  color: white;
  font-weight: 900;
  margin-bottom: 150px;
`;
const Button = styled.div`
  width: 300px;
  height: 120px;
  background-color: #3f9eff;
  border-radius: 25px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: white;
  }
`;

export const Home = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Section>
      <Wrap style={{ display: `${location?.state ? "none" : "flex"}` }}>
        <Title>로그인 PJ</Title>
        <Button>
          <Link to="/login">로그인</Link>
        </Button>
      </Wrap>
      <Wrap style={{ display: `${location?.state ? "flex" : "none  "}` }}>
        <Title>감사합니다.</Title>
        <Button>
          <Link to="#">새로고침</Link>
        </Button>
      </Wrap>
    </Section>
  );
};
