import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const ContetnsSpan = styled.span`
  font-weight: bold;
`

interface CountProps {
  targets: number
}

function Count({ targets }: CountProps) {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const duration = 800
    const upartingDration = duration / 50
    const allDuration = Math.floor(duration / upartingDration)

    function sleep(delay: number): void {
      const start = new Date().getTime()
      // eslint-disable-next-line no-empty
      while (new Date().getTime() < start + delay) {}
    }

    function animationEaseInOut(time: number, cnt: number) {
      if (cnt === 50) {
        sleep(130)
        return time
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
