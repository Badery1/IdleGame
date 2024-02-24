import React from 'react';
import ActionButton from '../components/ActionButton';

function UpgradeManager({ onUpgrade }) {
  return (
    <div>
      <h2>Upgrades</h2>
      <ActionButton onClick={() => onUpgrade('food')} text="Upgrade Food" />
    </div>
  );
}

export default UpgradeManager;