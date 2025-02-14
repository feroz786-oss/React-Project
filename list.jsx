import PageHeader from "../header/pageheader";

function CourseList() {
    return (
        <>
            <PageHeader />
            <h3>✒️List of Courses</h3>

            <div className="container-fluid">
                <table className="table table-success table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Price</th>
                            <th scope="col">Trainer Name</th>
                            <th scope="col">Level</th>
                            <th scope="col">Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>JAVA</td>
                            <td>4 Years</td>
                            <td>4000</td>
                            <td>JK</td>
                            <td>Low</td>
                            <td>It is a very easy course</td>
                            <td><a href="/react/src/Course/view_course.jsx" className="btn btn-success">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CourseList;
