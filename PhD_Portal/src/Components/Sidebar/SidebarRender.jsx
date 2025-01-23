import {React, useState} from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css';
import CollapsedSidebar from './CollapsedSidebar';
import './CollapsedSidebar.css';

const SidebarRender = () => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };
    return (
        <>
            {collapsed ? <CollapsedSidebar CollapseState={handleToggleSidebar} /> : <Sidebar CollapseState={handleToggleSidebar} />}
        </>
    );
}

export default SidebarRender;