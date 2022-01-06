import styled from '@emotion/styled'
import type { NextPage } from 'next'

import AppDescription from '../components/AppDescription'
import { GRAY70, GRAY100 } from '../styles/colors'

const Self = styled.div`
  position: relative;
  width: 1040px;
  margin: 0 auto;
`

const LogoWapper = styled.div`
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
`

const InformationWapper = styled.div`
  padding-top: 150px;
  margin-left: 623px;
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

const Home: NextPage = () => {
  return (
    <Self>
      <LogoWapper>2019년 2월 기준</LogoWapper>
      <InformationWapper>
        <InformationDiv>
          <InformationStrong>700만 명</InformationStrong>의 여행자
        </InformationDiv>
        <InformationDiv>
          <InformationStrong>21만 개</InformationStrong>의 여행 리뷰
        </InformationDiv>
        <InformationDiv>
          <InformationStrong>650만 개</InformationStrong>의 저장
        </InformationDiv>
      </InformationWapper>
      <AppDescription />
    </Self>
  )
}

export default Home
