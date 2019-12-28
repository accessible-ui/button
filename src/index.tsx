import React, {cloneElement, useRef, useCallback} from 'react'
import {useKeycodes} from '@accessible/use-keycode'
import useMergedRef from '@react-hook/merged-ref'

export interface ButtonProps {
  children: JSX.Element | React.ReactElement
}

const Button: React.FC<ButtonProps> = ({children}) => {
  const {props} = children
  // Tracking the pressed value ensures that the onClick event won't fire
  // twice when the child component is an actual <button> element.
  const pressed = useRef<boolean>(false)
  const handleInterop = useCallback(
    (e: KeyboardEvent) => {
      props.onClick?.(e)
      pressed.current = true
    },
    [props.onClick]
  )

  return cloneElement(children, {
    role: props.hasOwnProperty('role') ? props.role : 'button',
    tabIndex: props.hasOwnProperty('tabIndex') ? props.tabIndex : 0,
    onMouseDown: e => {
      // Resets the pressed variable when a user starts clicking w/ the mouse
      pressed.current = false
      props.onMouseDown?.(e)
    },
    onClick: e => {
      // Only fire onClick if the keyboard was not used to initiate the
      // click
      !pressed.current && props.onClick?.(e)
    },
    ref: useMergedRef(
      // @ts-ignore
      children.ref,
      useKeycodes({
        // enter
        13: handleInterop,
        // space bar
        32: handleInterop,
      })
    ),
  })
}

export default Button

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  Button.displayName = 'AccessibleButton'
}
