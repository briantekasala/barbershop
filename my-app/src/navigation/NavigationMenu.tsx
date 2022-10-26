import * as React from 'react';


export const NavigationMenu = ()=> {
    const [openMenu,setOpenMenu] = React.useState<boolean>(false);
    return (
        <div className="navigation">
            <nav className="navigationMenu">
                <li className="navigationLinkHome">Home</li>
                <li className="navigationLinkLogo"><img src="/barberLogo1.png" alt='baber logo'/></li>
                <li className="navigationLinkMenu" onClick={()=> {setOpenMenu(true) ;console.log(openMenu)}}>Menu</li>
                <li className="navigationLinkReservation">Reservation</li>
            </nav>
        </div>
    )
}

