import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
export default function ScrollToTop({
  image,
  width,
  height,
  right,
  bottom,
  isMoveForHeight,
}: {
  image?: string
  width?: string
  height?: string
  right?: string
  bottom?: string
  isMoveForHeight?: boolean
}) {
  const [isTop, setIsTop] = useState(false)
  const handleClick = () => {
    window.scrollTo({
      top: isMoveForHeight ? window.pageYOffset - window.innerHeight : 0,
      behavior: 'smooth',
    })
  }

  const checkIsTop = () => {
    setIsTop(window.pageYOffset === 0)
  }

  useEffect(() => {
    ;(function () {
      window.addEventListener('scroll', checkIsTop)
    })()
    return () => {
      window.removeEventListener('scroll', checkIsTop)
    }
  })

  return (
    <>
      {!isTop && (
        <TopBtn onClick={handleClick} right={right} bottom={bottom}>
          <>
            {image ? (
              <Img src={image} width={width} height={height} />
            ) : (
              <FontAwesomeIcon
                icon={faArrowUp}
                size="2x"
                style={{
                  width: '50px',
                  padding: '10px 0',
                  border: '2px solid #000',
                  background: '#fff',
                  borderRadius: '50%',
                }}
              />
            )}
          </>
        </TopBtn>
      )}
    </>
  )
}

const TopBtn = styled.div<{ right?: string; bottom?: string }>`
  position: fixed;
  right: ${({ right }) => (right ? right : '90px')};
  bottom: ${({ bottom }) => (bottom ? bottom : '50px')};
  z-index: 1000;
  cursor: pointer;
`
const Img = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : '50px')};
  height: ${({ height }) => (height ? height : '50px')};
`
