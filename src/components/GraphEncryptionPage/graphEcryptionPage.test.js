//letting JEST know react is the framework being used,
import React from 'react'
//the following are helper/utility methods from @testing-lirary/react
import {fireEvent, render, screen, within} from '@testing-library/react'
//since GraphDescriptionPage is default export, the name can be anything
//using same name to be consistant
import GraphEncryptionPage from "./index";

// IT is one TEST CASE
it('should show Graph Encryption Page', async () => {
    // most important utility render()
    // think of it as ReactDOM.render
    render(<GraphEncryptionPage/>)
    // screen.logTestingPlaygroundURL() // think this as console.log

    // HELPER method for developers, will log a URL inside terminal, and copy/paste it in a browser
    // screen.getByRole is a query selector, like document.querySelectorById etc..
    // line 18 and 21 are used to ZHAO DAO element
    const graphHeading = screen.getByRole('heading', {
        name: /graph encryption/i
    })

    const originalPicture = screen.getByRole('heading', {
        name: /original picture/i
    })
    const encryptedPicture = screen.getByRole('heading', {
        name: /encrypted picture/i
    })
    const encryptButton = screen.getByRole('button', {
        name: /encrypt/i
    })
    //
    // // expect SOMETHING to EXIST
    expect(graphHeading).toBeInTheDocument()
    expect(originalPicture).toBeInTheDocument()
    expect(encryptedPicture).toBeInTheDocument()

    //
    // fireEvent is to trigger some interaction
    fireEvent.click(encryptButton)
    expect(encryptButton).toBeInTheDocument()
    //

    screen.logTestingPlaygroundURL() // to see the updated UI
    const dialog = screen.getByRole('dialog', {
        name: /encrypt info/i
    })
    const EncryptButton = within(dialog).getByRole('button', {
        name: /encrypt/i
    });
    expect(dialog).toBeInTheDocument()
    expect(EncryptButton).toBeInTheDocument()

})

// with npm test
// will always run all .test, .spec files, anytime you save, it'll update
