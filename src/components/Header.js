import React from 'react';
import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/location-searching'; 
import { LocationMarker } from './LocationMarker';

export const Header = () => {
    return (
      <header className="header">
          <h1><Icon icon={LocationIcon} /> <span>NASA WildFire Tracker -OrionCySec</span>)</h1> 
      </header>

    )
}
