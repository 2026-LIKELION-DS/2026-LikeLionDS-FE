import * as M from "@styles/FAQLineStyle";

const FAQLine = ({ text }) => {
  return (
    <M.LineWrapper>
      <M.Line></M.Line>
      <M.Text>{text}</M.Text>
      <M.Line></M.Line>
    </M.LineWrapper>
  );
};

export default FAQLine;
