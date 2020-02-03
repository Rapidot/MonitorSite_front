import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent, cleanup } from '@testing-library/react'

import SimpleBlog  from './SimpleBlog'

describe('SimpleBlog', () => {
  afterEach(cleanup)

  const blog = {
    title: 'title',
    author: 'author',
    likes: 2
  }

  const component = render(
    <SimpleBlog  blog={blog} />
  )

  test('renders content', () => {
    //component.debug()
    expect(component.container).toHaveTextContent(
      'title'
    )
    expect(component.container).toHaveTextContent(
      'author'
    )
    expect(component.container).toHaveTextContent(
      '2'
    )
  })

  test('clicking the button calls event handler twice', async () => {

    const mockHandler = jest.fn()
    const { getByText } = render(
      <SimpleBlog  blog={blog} onClick={mockHandler} />
    )
    const button = getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})