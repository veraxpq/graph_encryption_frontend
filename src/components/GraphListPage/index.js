
import {graphs} from "../../constant/mockData";

const GraphListPage = () => {

    return <div>
        <div>
            <h1>Graphs</h1>
        </div>
        <table>
            <thead>
            <tr>
                <td>Date</td>
                <td>Url</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {graphs.map((graph, index) => (
                <tr key={index}>
                    <td>{graph.date}</td>
                    <td>{graph.link}</td>
                    <td><button>download</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default GraphListPage;