/* jest */
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Button from './index'

describe('<Button>', () => {
  it(`should fire click event once for buttons on click`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <button onClick={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.click(getByTestId('btn'))
    expect(cb).toBeCalledTimes(1)
  })

  it(`should fire click event once for buttons on space`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <button onClick={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.keyDown(getByTestId('btn'), {which: 32})
    expect(cb).toBeCalledTimes(1)
  })

  it(`should fire click event once for buttons on enter`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <button onClick={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.keyDown(getByTestId('btn'), {which: 13})
    expect(cb).toBeCalledTimes(1)
  })

  it(`should fire click event once for divs on click`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <div onClick={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.click(getByTestId('btn'))
    expect(cb).toBeCalledTimes(1)
  })

  it(`should fire click event once for divs on space`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <div onClick={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.keyDown(getByTestId('btn'), {which: 32})
    expect(cb).toBeCalledTimes(1)
  })

  it(`should fire click event once for divs on enter`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <div onClick={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.keyDown(getByTestId('btn'), {which: 13})
    expect(cb).toBeCalledTimes(1)
  })

  it(`should fire user-defined onMouseDown`, () => {
    const cb = jest.fn()
    const {getByTestId} = render(
      <Button>
        <div onMouseDown={cb} data-testid="btn" />
      </Button>
    )

    fireEvent.mouseDown(getByTestId('btn'))
    expect(cb).toBeCalledTimes(1)
  })

  it(`should add accessible roles`, () => {
    expect(
      render(
        <Button>
          <div />
        </Button>
      ).asFragment()
    ).toMatchSnapshot('role=button, tabIndex=0')
  })

  it(`should allow roles to be overridden`, () => {
    expect(
      render(
        <Button>
          <div role="menu" tabIndex={-1} />
        </Button>
      ).asFragment()
    ).toMatchSnapshot('role=menu, tabIndex=-1')
  })
})
