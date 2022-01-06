import styled from '@emotion/styled'
import type { NextPage } from 'next'

import AppDescription from '../components/AppDescription'
import { GRAY70, GRAY100 } from '../styles/colors'

const Self = styled.div`
  margin: 0px auto;
  position: relative;
  width: 1040px;
`

const LogoWapper = styled.div`
  background: url('/images/ic-triple.png') center no-repeat;
  background-size: 400px 338px;
  width: 400px;
  height: 338px;
  box-sizing: border-box;
  color: ${GRAY70};
  padding-top: 280px;
  position: absolute;
  top: 150px;
  text-align: center;
  font-size: 15px;
`

const InformationWapper = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`

const InformationDiv = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${GRAY100};
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
