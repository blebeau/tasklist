import React from "react";

const Tags = ({ tags }) => {
    const initials = (name) => {
        // let inital = '';
        const nameSplit = name.split(' ');
        return nameSplit[0][0] + nameSplit[1][0];
    }
    return (
        <div>
            {tags.length > 0 ?
                tags.map((tag) => {
                    return (
                        <div className='tag'>
                            {tag}
                        </div>
                    );
                }) :
                <h3>Loading tags!</h3>
            }
        </div>
    )
}

export default Tags;