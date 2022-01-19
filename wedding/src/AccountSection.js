import styled from "styled-components";
import { useState } from "react";

const AccountSection_div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 100%;
`;
const AccountSection_div_inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Btn_Close = styled.button``;
const Btn_Account = styled.button`
  height: 4vh;
  width: 10vh;
  background-color: cornsilk;
  border: none;
  border-radius: 10px;
  margin: 0.4rem;
`;
const Account_title = styled.text`
  color: cornsilk;
  font-size: 1.2rem;
  margin: 1rem;
`;

const Account_subTitle = styled.text`
  color: cornsilk;
  font-size: 1rem;
  margin: 1rem;
`;
const PopUpWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 45vh;
  left: 5vh;
  width: 80%;
  height: 15%;
  background-color: cornsilk;
  border-radius: 5px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid cornsilk;
  width: 15vh;
  height: 20vh;
`;

const AccountSection = () => {
  const [btnPopUp, setBtnPopUp] = useState(false);

  const PopUP = (props) => {
    return props.trigger ? (
      <PopUpWindow>
        병주네 계좌번호
        <button onClick={() => setBtnPopUp(false)}> close </button>
      </PopUpWindow>
    ) : (
      ""
    );
  };

  return (
    <AccountSection_div>
      <Account_title> 병주와 민지에게 마음 전달하기 </Account_title>
      <AccountSection_div_inner>
        <Section>
          <Account_subTitle> 신랑측 </Account_subTitle>
          <Btn_Account onClick={() => setBtnPopUp(true)}>계좌번호 </Btn_Account>
          <Btn_Account onClick={() => setBtnPopUp(true)}>계좌번호 </Btn_Account>
          <PopUP trigger={btnPopUp} />
        </Section>
        <Section>
          <Account_subTitle> 신부측 </Account_subTitle>
          <Btn_Account onClick={() => setBtnPopUp(true)}>계좌번호 </Btn_Account>
          <Btn_Account onClick={() => setBtnPopUp(true)}>계좌번호 </Btn_Account>
          <PopUP trigger={btnPopUp} />
        </Section>
      </AccountSection_div_inner>
    </AccountSection_div>
  );
};

export default AccountSection;
