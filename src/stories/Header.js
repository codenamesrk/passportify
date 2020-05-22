import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { color } from '../shared/styles'

const HeaderBar = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${rgba(color.primary,1)};
  color: #141515;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  border: 0

  &::before {
    content: '';
    height: env(safe-area-inset-top);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99999;
    background: #1e74fd;
  }
`
const Slot = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  position: absolute;
`
const LeftSlot = styled(Slot)`
  left: 8px;
  top: 0;
`
const RightSlot = styled(Slot)`
  right: 8px;
  top: 0;
`
const HeaderButton = styled.a`
  min-width: 36px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${(props) => (props.textLight ? '#fff' : '#141515')};
  position: relative;
`

const Header = (props) => (
  <HeaderBar>
    <LeftSlot>
      <HeaderButton textLight />
    </LeftSlot>
    <div className="pageTitle">App Header</div>
    <RightSlot />
  </HeaderBar>
)

export default Header
