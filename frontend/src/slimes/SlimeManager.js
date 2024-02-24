import React from 'react';
import Slime from './Slime';

function SlimeManager({ slimes, assignToResource }) {
  return (
    <div>
      {slimes.map(slime => (
        <Slime key={slime.id} slime={slime} assignToResource={assignToResource} />
      ))}
    </div>
  );
}

export default SlimeManager;