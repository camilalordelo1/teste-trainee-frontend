import styled from "styled-components";

// ITEMS HEADER2
export const ButtonHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin-left: 15px;
  max-height: 35px;
  font-family: "GothamBold";
  font-size: 12px;
  background: #117eff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: ease-out 1s;
  cursor: pointer;
  &:hover {
    background: rgb(159, 232, 255);
    background: linear-gradient(
      105deg,
      rgba(159, 232, 255, 1) 20%,
      rgba(17, 126, 255, 1) 100%
    );
  }
  p {
    margin-left: 5px;
  }
`;

export const Style = {
  fontFamily: "GothamBook",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  padding: 4,
  h3: {
    fontFamily: "GothamBold",
    color: "#9196AB",
    fontSize: "16px",
    mb: "20px",
  },
  hr: {
    color: "#9196AB",
    mb: "30px",
  },
  input: {
    width: "calc(100% - 20px)",
    mt: "20px",
    border: "1px solid #cccfde",
    borderRadius: "5px",
    p: "10px 10px",
  },
  "input:focus": {
    outlineWidth: 0,
  },
  h4: {
    color: "#9196AB",
    mt: "10px",
  },
};

export const Strong = styled.text`
  font-family: "GothamBold";
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
`;

export const ButtonModal = styled.button`
  cursor: pointer;
  margin-top: 30px;
  background: none;
  border: none;
  font-family: "GothamBold";
  margin-bottom: 10px;
`;

export const ButtonModalBlue = styled(ButtonModal)`
  color: #117eff;
`;
