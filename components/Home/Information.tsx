import styled from '@emotion/styled'

import { GRAY100 } from '../../styles/colors'
import { RisingProps } from '../common/animationInterface'

const Self = styled.div<RisingProps>`
  padding-top: 150px;
  margin-left: 623px;
  opacity: ${(props) => (props.opacityControl ? '1' : '0')};
  transform: translateY(${(props) => (props.transY ? '0px' : '12px')});
  transition: all 700ms ease-in-out 200ms;
`

const InformationDiv = styled.div`
  color: ${GRAY100};
  font-size: 36px;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 20px;
`

const InformationStrong = styled.span`
  font-weight: bold;
`

function Information({ opacityControl, transY }: RisingProps) {
  return (
    <Self opacityControl={opacityControl} transY={transY}>
      <InformationDiv>
        <InformationStrong>700만 명</InformationStrong>의 여행자
      </InformationDiv>
      <InformationDiv>
        <InformationStrong>21만 개</InformationStrong>의 여행 리뷰
      </InformationDiv>
      <InformationDiv>
        <InformationStrong>650만 개</InformationStrong>의 저장
      </InformationDiv>
    </Self>
  )
}
export default Information
