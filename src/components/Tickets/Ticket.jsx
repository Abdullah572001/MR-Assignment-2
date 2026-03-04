import React from 'react';
import dateIcon from '../../assets/Vector.png'
import { toast } from 'react-toastify';

const Ticket = ({ticket, task, setTask}) => {

    // console.log(ticket);
    const {issue_title, issue_description, id, priority_level, name, date} = ticket;

    const showToast = () => {
        if(task.includes(issue_title)){
            toast("Already added to task status")
        return '';
        }
        else{
            toast("Added to task status")
            return [issue_title];
        }
        
    }
    const showProgress = () => {
        if (task.includes(issue_title)) {
            return <span className='text-[#9C7700] font-medium text-sm bg-[#F8F3B9] p-2 rounded-3xl flex items-center gap-2'><div className='w-4 h-4 bg-[#FEBB0C] rounded-full'></div>In- Progress</span>
        }
        return <span className='text-[#02A53B] font-medium text-sm bg-[#B9F8CF] p-2 rounded-3xl flex items-center gap-2'><div className='w-4 h-4 bg-[#02A53B] rounded-full'></div>Open</span>
    }
    

    return (
        <div
        onClick={()=> setTask([...task, ...(showToast())])}
         className=' p-3 bg-white rounded space-y-3 cursor-alias'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-xl'>{issue_title}</h2>
                {
                    showProgress()
                }
            </div>
            <p className='text-gray-400'>{issue_description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <p className='text-gray-400'>{id}</p>
                    <p className={`font-medium ${priority_level === "High Priority" ? 'text-[#F83044]': 'text-[#FEBB0C]'}`}>{priority_level}</p>
                </div>
                <div className='flex gap-3 text-gray-400'>
                    <p className=''>{name}</p>
                    <p className='flex items-center gap-2'><img className='opacity-50' src={dateIcon} alt="" />{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;