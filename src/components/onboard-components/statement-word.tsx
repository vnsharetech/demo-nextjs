import React from 'react';
import CheckMark from '../icons/onboarding/check-mark';

type Props = {
  word: {
    selected: string;
    name: string;
  };
};

const StatementWord: React.FC<Props> = ({ word }) => {
  return (
    <>
      {word.selected ? (
        <div
          className={`bg-bt-cerulean p-2 focus:outline-none shadow-cerulean text-white mb-2 h-15 mr-2 font-sans text-sm flex items-center justify-center rounded-4px`}>
          <CheckMark />
          {word.name}
        </div>
      ) : (
        <div className='bg-bt-defaultcl p-2 focus:outline-none shadow-defaultcl text-white mb-2  mr-2 font-sans text-sm h-15 flex items-center h-15 justify-center rounded-4px'>
          {word.name}
        </div>
      )}
    </>
  );
};

export default StatementWord;
