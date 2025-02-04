import * as M from "@styles/FAQWritingStyle";

import writingLottie from "@assets/motions/입력중 모션/writing.json";
import Lottie from "lottie-react";

const FAQWriting = ({ isClicked }) => {
  return (
    <M.ComponentContainer $isClicked={isClicked === 7}>
      <M.AnimationContainer>
        <M.AnimationWrapper>
          <Lottie animationData={writingLottie} loop autoplay />
        </M.AnimationWrapper>
      </M.AnimationContainer>
    </M.ComponentContainer>
  );
};

export default FAQWriting;
