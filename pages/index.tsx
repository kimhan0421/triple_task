import styled from '@emotion/styled'
import type { NextPage } from 'next'

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
  color: rgba(58, 58, 58, 0.7);
  padding-top: 280px;
  position: absolute;
  top: 150px;
  text-align: center;
`

const Home: NextPage = () => {
  return (
    <Self>
      <LogoWapper>2019년 2월 기준</LogoWapper>
    </Self>
  )
}

export default Home
