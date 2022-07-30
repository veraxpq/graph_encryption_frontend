import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllImages} from "../../services/graphService";

const GraphListPage = () => {
    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("token");
    const dispatch = useDispatch();

    const {graphs} = useSelector(state => state.ImagesInfo);

    useEffect(() => {
        fetchAllImages(dispatch, userId, userToken);
    }, [])

    return <div>
        <div>
            <h1>Graphs</h1>
        </div>
        <table>
            <thead>
            <tr>
                <td>Date</td>
                <td>Origin Url</td>
                <td>Encrypted Url</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {graphs.map((graph, index) => (
                <tr key={index}>
                    <td>{graph.date}</td>
                    <td>{graph.originalImageUrl}</td>
                    <td>{graph.encryptedImageUrl}</td>
                    <td>
                        <button>download</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default GraphListPage;