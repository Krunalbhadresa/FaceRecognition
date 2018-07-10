import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3 o-80'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f2 o-80'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;