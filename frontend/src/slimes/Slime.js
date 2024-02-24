import React from 'react';
import ActionButton from '../components/ActionButton';

function Slime({ slime, assignToResource }) {
  return (
    <div>
      <h3>Slime {slime.id}</h3>
      <ActionButton onClick={() => assignToResource(slime.id, 'food')} text="Assign to Gather Food" />
      <ActionButton onClick={() => assignToResource(slime.id, 'wood')} text="Assign to Gather Wood" />
      <ActionButton onClick={() => assignToResource(slime.id, 'metal')} text="Assign to Produce Metal" />
      <ActionButton onClick={() => assignToResource(slime.id, 'research')} text="Assign to Research" />
    </div>
  );
}

export default Slime;