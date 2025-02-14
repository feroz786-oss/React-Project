import CourseList from "./Course/list_course";
import CourseCreate from "./Course/create_course";
import CourseView from "./Course/view_course";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CourseList />} />
                        <Route path="/react/src/Course/list_course.jsx" element={<CourseList />} />
                        <Route path="/react/src/Course/create_course.jsx" element={<CourseCreate />} />
                        <Route path="/react/src/Course/view_course.jsx" element={<CourseView />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
