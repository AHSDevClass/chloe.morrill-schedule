import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Dummy text. Lots and lots of dummy text so that I can fill the space. I'm really excited for this dummy text to be read. Are you going to read it all or are you going to be lazy and skip it all? What? Just wondering. Also, what's your favorite Netflix show?</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;