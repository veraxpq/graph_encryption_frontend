import TopBar from "../topBar";

const BaseFrame = ({children}) => {
    return (
        <>
            <TopBar />
            {children}
        </>
    )
}

export default BaseFrame;