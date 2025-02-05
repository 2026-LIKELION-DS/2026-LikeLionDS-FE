import styled from "styled-components";
import palette from "@lib/colorPalette";

export const NoticeForm = styled.div`
  /* width: calc(100vw - 48px); */
    @media (hover: hover) and (pointer: fine) {
      width: 342px;
    }
  padding: 80px 24px 0 24px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${palette.boldBlack.ex5};
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  border: none;
  background: transparent;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 24px;
  color: ${palette.boldBlack.ex6};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.48px;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px 0 24px;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; 
  scrollbar-width: none;
`;

export const ImagePicker = styled.div`
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid ${palette.boldBlack.ex2};
  background: ${palette.boldBlack.ex9};
  & img {
    width: 40px;
    height: 40px;
  }
  cursor: pointer;
`;

export const PreviewImage = styled.div`
  position: relative;
  & img {
    width: 128px;
    height: 128px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  & img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  width: calc(100vw - 28px);
    @media (hover: hover) and (pointer: fine) {
      width: 362px;
    }
  padding: 42px 14px 0 14px;
`;