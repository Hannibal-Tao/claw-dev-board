import React, { type ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Kanban App</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">Board</li>
            <li>Backlog</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <div className="main-content-wrapper">
        <header className="app-header">
          <div className="header-left">
            <h3>Project: Frontend UI</h3>
          </div>
          <div className="header-right">
            <span className="user-profile">User</span>
          </div>
        </header>
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
