import * as React from 'react'
export declare function useA11yButton<
  T extends HTMLElement,
  E extends React.MouseEvent<T, MouseEvent>
>(
  target: React.RefObject<T> | T | null,
  onClick: (event: E) => any
): {
  readonly onClick: (event: E) => void
  readonly role: 'button'
  readonly tabIndex: 0
}
export declare const Button: {
  ({children}: ButtonProps): React.ReactElement<
    any,
    | string
    | ((
        props: any
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      > | null)
    | (new (props: any) => React.Component<any, any, any>)
  >
  displayName: string
}
export interface ButtonProps {
  children: JSX.Element | React.ReactElement
}
