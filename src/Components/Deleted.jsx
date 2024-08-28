import { useSelector } from "react-redux"
import { Navbars } from "./Navbars"

export const Deleted = () => {
    const deletedData = useSelector((state) => state.storeName.deleted)
    return (
        <>
            <Navbars />
            <div className="deleted">
                <h1 style={{ textAlign: "center", margin: 15 }}>Deleted Data!</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {deletedData.length > 0 && deletedData.map((e, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.user}</td>
                                <td>{e.email}</td>
                                <td>{e.num}</td>
                                <td>{e.gender}</td>
                                <td>{e.designation}</td>
                                <td>{e.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}