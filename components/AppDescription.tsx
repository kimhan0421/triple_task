import styled from '@emotion/styled'

import { GRAY80 } from '../styles/colors'

const Self = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 50px 0 140px 623px;
`

const PlayAwardWapper = styled.div`
  display: inline-block;
  background-image: url('/images/ic-play-store.png');
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  padding: 5px 0 5px 62px;
  margin-right: 39px;
`

const DescriptionDiv = styled.div`
  color: ${GRAY80};
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`

const AppSelectedWapper = styled(PlayAwardWapper)`
  background-image: url('/images/ic-app-store.png');
  margin-right: 0;
`

function AppDescription() {
  return (
    <Self>
      <PlayAwardWapper>
        <DescriptionDiv>2018 구글 플레이스토어</DescriptionDiv>
        <DescriptionDiv>올해의 앱 최우수상 수상</DescriptionDiv>
      </PlayAwardWapper>
      <AppSelectedWapper>
        <DescriptionDiv>2018 애플 앱스토어</DescriptionDiv>
        <DescriptionDiv>오늘의 여행햅 선정</DescriptionDiv>
      </AppSelectedWapper>
    </Self>
  )
}
export default AppDescription
