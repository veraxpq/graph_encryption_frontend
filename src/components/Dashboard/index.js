import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div>
                <Link to={"/home/encrypt"}>
                    <button>Encrypt</button>
                </Link>
            </div>
            <div>
                <Link to={"/home/decrypt"}>
                    <button>Decrypt</button>
                </Link>
            </div>
            <div>
                <Link to={"/home/graph-list"}>
                    <button>Graph list</button>
                </Link>
            </div>
        </>
    )
}

export default Dashboard;