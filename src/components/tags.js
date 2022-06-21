import React from "react";


// Gets the tags for the respective item and maps them
const Tags = ({ tags }) => {
    return (
        <div className="tags">
            {
                tags.map((tag) => {
                    return (
                        <div className='tag'>
                            {tag}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Tags;