import React from "react";
import CourseList from "./CourseList";
import Header from "./Header";
import InputCourse from "./InputCourse";
import ChangeStyle from "./ChangeStyle";
import { v4 as uuidv4 } from "uuid";



class CourseContainer extends React.Component {


    state = {
        courses: [{
                id: uuidv4(),
                title: "CNIT 103 - Hardware - 3 units",
                completed: true
            },
            {
                id: uuidv4(),
                title: "CNIT 131 - Internet & Intro to HTML and, CSS - units",
                completed: false
            },
            {
                id: uuidv4(),
                title: "CNIT 106 - Introduction to Networks - 3 units",
                completed: false
            },

            {
                id: uuidv4(),
                title: "CNIT 120 - Network Security - 3 units",
                completed: false
            }



        ]
    };

    handleChange = (id) => {
        this.setState({
            courses: this.state.courses.map(course => {
                if (course.id === id) {
                    course.completed = !course.completed;
                }
                return course;
            })
        });
    };


    deleteCourse = id => {
        this.setState({
            courses: [
                ...this.state.courses.filter(course => {
                    return course.id !== id;
                })
            ]


        });
    };

    addCourseItem = title => {
        const newCourse = {
            id: uuidv4(),
            title: title,
            completed: false
        };

        this.setState({
            courses: [...this.state.courses, newCourse]
        });
    };




    addCourseItem = title => {
        const newCourse = {
            id: uuidv4(),
            title: title,
            completed: false
        };


        this.setState({
            courses: [...this.state.courses, newCourse]
        });
    };










    render() {
        return ( <
            div className = "container" >

            <
            Header / >
            <
            InputCourse addCourseProps = { this.addCourseItem }
            / > <
            CourseList courses = { this.state.courses }
            handleChangeProps = { this.handleChange }
            deleteCourseProps = { this.deleteCourse }
            /> <
            ChangeStyle / > < /
            div >
        );
    }
}
export default CourseContainer