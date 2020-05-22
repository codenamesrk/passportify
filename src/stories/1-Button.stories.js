import React from 'react'
import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'


export default {
  title: 'Button',
  component: Button,
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

export const AllButtons = () => (
  <>
    <Button variant="primary" onClick={action('gotcha')}>Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button> <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
  </>
)
