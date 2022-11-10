import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function ScrollToTop({
  image,
  width,
  height,
  right,
  bottom,
  isMoveForHeight, // 사용자가 버튼 위치조정 가능하게 해주기
}: {
  image?: string;
  width?: string;
  height?: string;
  right?: string; // string으로 타입 설정
  bottom?: string; // ? : 있냐고 확인, 있어도 되고 없어도 되지만 있으면 string으로 타입 설정
  isMoveForHeight?: boolean;
}) {
  const [isTop, setIsTop] = useState(false);
  // isTop의 상태를 false로 정의하는 것 , isTop의 상태를 setIsTop으로 바꿔줄수도 있음
  const handleClick = () => {
    window.scrollTo({
      top: isMoveForHeight ? window.pageYOffset - window.innerHeight : 0,
      // 현재 높이 - 페이지내 전체 높이, isMoveForHeight가 실행되면 현재 높이만큼 올라감
      behavior: "smooth",
      // auto와 smooth 2가지가 있고 auto 지정시 부자연스럽게 스크롤되기 때문에 자연스러운 smooth로 설정
    });
  };

  const checkIsTop = () => {
    setIsTop(window.pageYOffset === 0);
    // 현재 위치가 0이면 true로 상태 변경 , 0이 아니면 false로 상태 변경
  };

  // checkIsTop은 스크롤할때마다 계속 렌더링 되야하는 함수, 그걸 useEffect가 하게해준다.
  useEffect(() => {
    // useEffect는 렌더링 될때 마다 특정 상황에서만 함수가 일어날수 있도록 제어해준다.
    (function () {
      window.addEventListener("scroll", checkIsTop);
    })(); // 브라우저 전역에서 스크롤이벤트 발생시 checkIsTop 함수 실행됨
    return () => {
      window.removeEventListener("scroll", checkIsTop);
    };
  }); // 브라우저 전역에서 스크롤이벤트 없으면 checkIsTop remove됨

  return (
    <>
      {!isTop && ( // 조건부 렌더링, isTop이 true로 상태가 바뀌면 버튼이 보이지않음
        <TopBtn onClick={handleClick} right={right} bottom={bottom}>
          <>
            {image ? (
              <Img src={image} width={width} height={height} /> // 사용자가 이미지 변경할수있게 해주기
            ) : (
              // 삼항연산자, image가 없으면 fontawesome
              <FontAwesomeIcon
                icon={faArrowUp}
                size="2x"
                style={{
                  width: "50px",
                  padding: "10px 0",
                  border: "2px solid #000",
                  background: "#fff",
                  borderRadius: "50%",
                }}
              />
            )}
          </>
        </TopBtn>
      )}
    </>
  );
}

const TopBtn = styled.div<{
  right?: string;
  bottom?: string;
}>`
  // styled-components에서 props를 받을때 <{}>를 사용한다.
  position: fixed;
  right: ${({ right }) =>
    right
      ? right
      : "90px"}; // 삼항연산자, ${{}} 으로 props 가져와서 있으면 사용자 설정값 실행 없으면 디폴트값 실행
  bottom: ${({ bottom }) => (bottom ? bottom : "50px")};
  z-index: 1000; // 디폴트값 :1, 1000을 주는것은 레이어중 제일 맨위로 올라와서 어디서든 나오게끔 해주는 설정
  cursor: pointer; // button에 스타일줄때는 디폴트값수준이니 꼭 넣어주기
`;
const Img = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : "50px")};
  height: ${({ height }) => (height ? height : "50px")};
`;
