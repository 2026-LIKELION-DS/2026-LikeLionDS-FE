import * as M from "@styles/JoinRectangleStyle";

const JoinRectangle = ({ width, height, borderRadius, children, bgr, color, fontWeight, fontSize }) => {
  return (
    <M.RectangleDiv
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgr={bgr}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}>
      {children}
    </M.RectangleDiv>
  );
};

export default JoinRectangle;
