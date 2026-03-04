import React from 'react';

const Task = ({title}) => {
    return (
        <div className='p-4 bg-white rounded space-y-3'>
            <h2>{title}</h2>
            <button className='btn w-full bg-[#02A53B]'>Complete</button>
        </div>
    );
};

export default Task;