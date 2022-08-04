//letting JEST know react is the framework being used,
import React from 'react'
//the following are helper/utility methods from @testing-lirary/react
import {fireEvent, render, screen} from '@testing-library/react'
//since GraphDescriptionPage is default export, the name can be anything
//using same name to be consistent
import LoginComponent from "./LoginComponent.js"
import {MemoryRouter} from "react-router-dom";

// IT is one TEST CASE
it('should show Login Page', async () => {
    // most important utility render()
    // think of it as ReactDOM.render
    render(<LoginComponent/>, {wrapper: MemoryRouter});
    const emailInput = screen.getByRole('textbox', {
        name: /email address/i
    })
    const passwordInput = screen.getByLabelText(/password/i)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    fireEvent.change(emailInput, {target: {value: 'hello'}})

    fireEvent.change(passwordInput, {target: {value: 'world'}})
    expect(emailInput.value).toBe('hello')
    expect(passwordInput.value).toBe('world')
    const submitHandler = screen.getByRole('button', {
        name: /submit/i
    })
    expect(submitHandler).toBeInTheDocument()
    fireEvent.click(submitHandler)
    // HELPER method for developers, will log a URL inside terminal, and copy/paste it in a browser
    // screen.getByRole is a query selector, like document.querySelectorById etc..
    // line 18 and 21 are used to ZHAO DAO element
})