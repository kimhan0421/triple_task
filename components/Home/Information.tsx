import styled from '@emotion/styled'
import React from 'react'

import { RisingProps } from '../common/animation'
import Count from '../common/Count'

const Self = styled.div<RisingProps>`
  transform: translateY(${(props) => (props.transY ? '0px' : '12px')});
  padding-top: 150px;
  margin-left: 623px;
  opacity: ${(props) => (props.opacityControl ? '1' : '0')};
  transition: all 700ms ease-in-out 200ms;
`

const InformationDiv = styled.div`
  color: ${(props) => props.theme.colors.gray100};
  font-size: 36px;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 20px;
`

const InformationStrong = styled.span`
  font-weight: bold;
`

function Information({ opacityControl, transY }: RisingProps) {
  const user = 350
  const review = 21
  const save = 650
  return (
    <Self opacityControl={opacityControl} transY={transY}>
      <InformationDiv>
        <InformationStrong>
          <Count targets={user} /> 명
        </InformationStrong>
        의 여행자
      </InformationDiv>
      <InformationDiv>
        <InformationStrong>
          <Count targets={review} /> 개
        </InformationStrong>
        의 여행 리뷰
      </InformationDiv>
      <InformationDiv>
        <InformationStrong>
          <Count targets={save} /> 개
        </InformationStrong>
        의 저장
      </InformationDiv>
    </Self>
  )
}
export default Information
