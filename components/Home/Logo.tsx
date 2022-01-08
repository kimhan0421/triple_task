import styled from '@emotion/styled'

import { GRAY70 } from '../../styles/colors'
import { RisingProps } from '../common/animation'

const LogoWapper = styled.div<RisingProps>`
  position: absolute;
  top: 150px;
  background: url('/images/ic-triple.png') center no-repeat;
  background-size: 400px 338px;
  color: ${GRAY70};
  font-size: 15px;
  text-align: center;
  box-sizing: border-box;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  opacity: ${(props) => (props.opacityControl ? '1' : '0')};
  transform: translateY(${(props) => (props.transY ? '0px' : '12px')});
  transition: all 700ms ease-in-out 100ms;
`

function Logo({ opacityControl, transY }: RisingProps) {
  return (
    <LogoWapper opacityControl={opacityControl} transY={transY}>
      2019년 2월 기준
    </LogoWapper>
  )
}

export default Logo
