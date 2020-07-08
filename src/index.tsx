import * as React from 'react'
import useKey from '@accessible/use-key'
import useEvent from '@react-hook/event'
import useMergedRef from '@react-hook/merged-ref'

export function useA11yButton<
  T extends HTMLElement,
  E extends React.MouseEvent<T, MouseEvent>
>(target: React.RefObject<T> | T | null, onClick: (event: E) => any) {
  const clickedMouse = React.useRef(false)
  const setClickedMouse = () => (clickedMouse.current = true)
  useEvent(target, 'touchstart', setClickedMouse)
  useEvent(target, 'mousedown', setClickedMouse)
  // @ts-expect-error
  useKey(target, {
    Enter: onClick,
    ' ': onClick,
  })

  return {
    onClick: (event: E) => {
      // Only fire onClick if the keyboard was not used to initiate the click
      clickedMouse.current && onClick(event)
      clickedMouse.current = false
    },
    role: 'button',
    tabIndex: 0,
  } as const
}

export const Button = ({children}: ButtonProps) => {
  const ref = React.useRef(null)
  const {props} = children
  const {onClick, role, tabIndex} = useA11yButton(ref, props.onClick)

  return React.cloneElement(children, {
    onClick,
    role: props.hasOwnProperty('role') ? props.role : role,
    tabIndex: props.hasOwnProperty('tabIndex') ? props.tabIndex : tabIndex,
    // @ts-expect-error
    ref: useMergedRef(ref, children.ref),
  })
}

export interface ButtonProps {
  children: JSX.Element | React.ReactElement
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  Button.displayName = 'AccessibleButton'
}
