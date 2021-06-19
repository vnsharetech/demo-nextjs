import React from 'react';

const SignupCard: React.FC = ({ children }) => {
  return (
    <>
      <div className='md:p-10 p-6 bg-signup-card overflow-x-hidden'>{children}</div>
    </>
  );
};

export default SignupCard;
