import * as React from 'react';


export const NavigationMenu = ()=> {
    return (
        <div className="navigation">
            <nav className="navigationMenu">
                <li className="navigationLinkHome">Home</li>
                <li className="navigationLinkLogo"><img src="/barberLogo1.png" alt="image" /></li>
                <li className="navigationLinkMenu">Menu</li>
                <li className="navigationLinkReservation">Reservation</li>
            </nav>
        </div>
    )
}

