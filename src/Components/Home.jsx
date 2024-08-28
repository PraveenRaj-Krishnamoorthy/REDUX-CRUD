import { useDispatch, useSelector } from "react-redux"
import { Navbars } from "./Navbars"
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/Slices";

export const Home = () => {
    const allData = useSelector(state => state.storeName.allUser)
    const dispatch = useDispatch()
    const deleteIt = (i) => {
        dispatch(deleteUser(i))
    }
    return (
        <>
            <Navbars />
            <div className="home">
                <h1 style={{ textAlign: "center", margin: 15 }}>All Data!</h1>
                <table>
                    <thead>
                        <tr key={1}>
                            <th>id.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Gender</th>
                            <th>Position</th>
                            <th>Course</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData.length > 0 && allData.map((e, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.user}</td>
                                <td>{e.email}</td>
                                <td>{e.num}</td>
                                <td>{e.gender}</td>
                                <td>{e.designation}</td>
                                <td>{e.course}</td>
                                <td><button className="edit"><Link to={`/edit/${i}`}>Edit</Link></button></td>
                                <td> <button onClick={() => { deleteIt(i) }} className="delete">delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}