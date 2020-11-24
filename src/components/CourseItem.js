import React from "react";

class CourseItem extends React.Component {
    render() {


        return <li className = "course-item" >
            <
            input type = "checkbox"
        checked = { this.props.course.completed }
        onChange = {
            () => this.props.handleChangeProps(this.props.course.id)
        }
        / > { this.props.course.title } <
        button onClick = {
            () => this.props.deleteCourseProps(this.props.course.id)
        } > DELETE < /button> 

        <
        /
        li >

    };
}

export default CourseItem