//letting JEST know react is the framework being used,
import React from 'react'
//the following are helper/utility methods from @testing-lirary/react
import {fireEvent, render, screen, within} from '@testing-library/react'
//since GraphDescriptionPage is default export, the name can be anything
//using same name to be consistant
import GraphDecriptionPage from './index'

// IT is one TEST CASE
it('should show Graph Decryption Page', async () => {
    // most important utility render()
    // think of it as ReactDOM.render
    render(<GraphDecriptionPage/>)
    // screen.logTestingPlaygroundURL() // think this as console.log
    // HELPER method for developers, will log a URL inside terminal, and copy/paste it in a browser
    // screen.getByRole is a query selector, like document.querySelectorById etc..
    // line 18 and 21 are used to ZHAO DAO element
    const encryptedLabel = screen.getByRole('heading', {
        name: /encrypted picture/i
    })
    const encryptButton = screen.getByRole('button', {
        name: /decrypt/i
    })

    // expect SOMETHING to EXIST
    expect(encryptedLabel).toBeInTheDocument()

    //fireEvent is to trigger some interaction
    fireEvent.click(encryptButton)

    // screen.logTestingPlaygroundURL() // to see the updated UI
    const dialog = screen.getByRole('dialog', {
        name: /decrypt info/i
    })

    const submitButton = within(dialog).getByRole('button', {
        name: /decrypt/i
    });
    expect(dialog).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

})

// with npm test
// will always run all .test, .spec files, anytime you save, it'll update
