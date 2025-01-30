import * as M from "@styles/JoinRectangleStyle";

const JoinRectangle = ({
  width,
  height,
  $borderRadius,
  children,
  $bgr,
  color,
  fontWeight,
  fontSize,
  $textAlign,
  letterSpacing,
}) => {
  return (
    <M.RectangleDiv
      width={width}
      height={height}
      $borderRadius={$borderRadius}
      $bgr={$bgr}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      $textAlign={$textAlign}
      letterSpacing={letterSpacing}>
      <p> {children}</p>
    </M.RectangleDiv>
  );
};

export default JoinRectangle;
