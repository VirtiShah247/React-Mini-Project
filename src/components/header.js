import React from 'react';

function Header()
{
    return <header><h3 className="reactclass">this is {true?<p>true</p>:<p>false</p>} header</h3></header>;
}

export default Header;