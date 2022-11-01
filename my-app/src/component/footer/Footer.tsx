import React from 'react';
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return ( 
        <footer>
            <ol>
                <li><a href="https://nl-nl.facebook.com/"><SocialIcon network='facebook'/></a></li>
                <li><a href="https://www.instagram.com/"><SocialIcon network='instagram'/></a></li>
                <li><a href="https://nl.linkedin.com/"><SocialIcon network='linkedin'/></a></li>
            </ol>
        </footer>
     );
}

export default Footer;