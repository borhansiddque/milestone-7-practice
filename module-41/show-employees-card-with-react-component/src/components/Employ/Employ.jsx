import React from 'react';

const Employ = ({employ}) => {
  console.log(employ);
  const {name, imageUrl, email, position, salary} = employ;
  
  return (
    <div className='border rounded-3xl p-5 flex items-center gap-8'>
      <img src={imageUrl} alt={name} className='w-30 h-30 rounded-full' />
      <div className="space-y-2">
        <h2 className='text-3xl font-bold'>{name}</h2>
        <h3 className='text-lg font-medium'>{email}</h3>
        <h3 className='text-lg font-medium'>Job Title: {position}</h3>
        <p className=''>Salary: {salary}</p>
      </div>
    </div>
  );
};

export default Employ;