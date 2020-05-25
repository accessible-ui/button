import React, {cloneElement, useRef} from 'react'
import {useKeycodes} from '@accessible/use-keycode'
import useMergedRef from '@react-hook/merged-ref'

export interface ButtonProps {
  children: JSX.Element | React.ReactElement
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const Button: React.FC<ButtonProps> = ({children}) => {
  const {props} = children
  // Tracking the pressed value ensures that the onClick event won't fire
  // twice when the child component is an actual <button> element.
  const clicked = useRef<boolean>(false)
  const onClick = props.onClick || noop

  return cloneElement(children, {
    role: props.hasOwnProperty('role') ? props.role : 'button',
    tabIndex: props.hasOwnProperty('tabIndex') ? props.tabIndex : 0,
    onTouchStart: e => {
      // Resets the pressed variable when a user starts clicking w/ touch devices
      clicked.current = true
      props.onTouchStart?.(e)
    },
    onMouseDown: e => {
      // Resets the pressed variable when a user starts clicking w/ the mouse
      clicked.current = true
      props.onMouseDown?.(e)
    },
    onClick: e => {
      // Only fire onClick if the keyboard was not used to initiate the
      // click
      clicked.current && onClick(e)
      clicked.current = false
    },
    ref: useMergedRef(
      // @ts-ignore
      children.ref,
      useKeycodes({
        // enter
        13: onClick,
        // space bar
        32: onClick,
      })
    ),
  })
}

export default Button

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  Button.displayName = 'AccessibleButton'
}
