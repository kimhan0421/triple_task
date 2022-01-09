import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import AppDescription from '../components/Home/AppDescription'
import Logo from '../components/Home/Logo'
import Information from '../components/Home/Information'

const Self = styled.div`
  position: relative;
  width: 1040px;
  margin: 0 auto;
`

const Home: NextPage = () => {
  const [opacityControl, setOpacityControl] = useState(false)
  const [transY, setTransY] = useState(false)

  useEffect(() => {
    setOpacityControl(true)
    setTransY(true)
  }, [opacityControl, transY])

  return (
    <Self>
      <Logo opacityControl={opacityControl} transY={transY} />
      <Information opacityControl={opacityControl} transY={transY} />
      <AppDescription opacityControl={opacityControl} transY={transY} />
    </Self>
  )
}

export default Home
