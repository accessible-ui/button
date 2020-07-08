import * as React from 'react'
export declare function useA11yButton<T extends Window>(
  target: Window | null,
  onClick: (event: WindowEventMap['click']) => any
): void
export declare function useA11yButton<T extends Document>(
  target: Document | null,
  onClick: (event: DocumentEventMap['click']) => any
): void
export declare function useA11yButton<T extends HTMLElement>(
  target: React.RefObject<T> | T | null,
  onClick: (event: HTMLElementEventMap['click']) => any
): void
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
