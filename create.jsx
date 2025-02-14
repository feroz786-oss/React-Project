import PageHeader from "../header/pageheader";

function CourseCreate() {
    return (
        <>
            <PageHeader />
            <h3>
                <a href="/react/src/Course/list_course.jsx" className="btn btn-dark">Go Back</a> Add Course
            </h3>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="courseId" className="form-label">Id</label>
                    <input type="text" className="form-control" id="courseId" placeholder="please enter course id" />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="courseName" placeholder="please enter course name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDuration" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="courseDuration" placeholder="please enter course duration" />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseTrainer" className="form-label">Trainer Name</label>
                    <input type="text" className="form-control" id="courseTrainer" placeholder="please enter course trainer name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseLevel" className="form-label">Level</label>
                    <input type="text" className="form-control" id="courseLevel" placeholder="please enter course level" />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="courseDescription" placeholder="please enter course description" />
                </div>
                <button type="button" className="btn btn-primary">Create Course</button>
            </div>
        </>
    );
}

export default CourseCreate;
