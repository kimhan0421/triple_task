import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import sleep from './sleep'

const ContetnsSpan = styled.span`
  font-weight: bold;
`

interface CountProps {
  targets: number
}

function Count({ targets }: CountProps) {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const SLEEP_TIME = 40
    const DURATION_TIME = 900
    const upartingDration = DURATION_TIME / 90
    const allDuration = Math.floor(DURATION_TIME / upartingDration)

    function animationEaseInOut(time: number, cnt: number) {
      if (cnt >= 86) {
        sleep(SLEEP_TIME)
        return Math.pow(time, 1 - time * time)
      }
      return Math.pow(time, 1 - time * time)
    }

    let cnt = 0
    const counter = setInterval(() => {
      cnt++
      const progress = animationEaseInOut(cnt / allDuration, cnt)

      let currentCount = Math.floor(targets * progress)
      if (currentCount < 0) {
        currentCount = 0
      }
      if (cnt === allDuration) {
        clearInterval(counter)
      }
      if (targets >= currentCount) {
        setNum(currentCount)
      }
    }, upartingDration)
  }, [targets])

  return <ContetnsSpan>{num}만</ContetnsSpan>
}

export default Count
