/** @jsx jsx */
import React from 'react'

import styled from 'styled-components'
import { jsx, css } from '@emotion/core'

import './index.css'

export const JuiceSheet = () => {

  return (
    <div className="juiceBox">
      <p className="juiceContent">Juice CSS Sheet</p>
    </div>
  )
}

export const JuiceInlineStyling = () => {

  const juiceBoxStyle = {
    margin: '40px',
    border: '5px dotted pink'
  }

  const juiceBoxContentStyle = {
    fontSize: '15px',
    textAlign: 'center'
  }

  return (
    <div style={juiceBoxStyle}>
      <p style={juiceBoxContentStyle}>Juice Inline Style</p>
    </div>
  )
}

export const JuiceStyledComponent = () => {

  const Box = styled.div`
    margin: 40px;
    border: 5px dotted pink;
  `

  const Content = styled.p`
    font-size: 15px;
    text-align: center;
  `

  return (
    <Box>
      <Content>Juice Styled Components</Content>
    </Box>
  )
}

export const JuiceEmotion = () => {
  const juiceBoxStyle = css({
    margin: '40px',
    border: '5px dotted pink'
  })

  const juiceContentStyle = css({
    fontSize: '15px',
    textAlign: 'center'
  })

  return (
    <div css={juiceBoxStyle}>
      <p css={juiceContentStyle}>Juice Emotion</p>
    </div>
  )
}
