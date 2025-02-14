import PageHeader from "../header/pageheader";

function CourseView() {
    return (
        <>
            <PageHeader />
            <h3>
                <a href="/react/src/Course/list_course.jsx" className="btn btn-dark">Go Back</a> View Course
            </h3>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Id</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="???" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="???" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="???" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">Trainer Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="???" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput5" className="form-label">Level</label>
                    <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="???" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput6" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput6" placeholder="???" />
                </div>
                <button type="button" className="btn btn-primary">Create Course</button>
            </div>
        </>
    );
}

export default CourseView;
