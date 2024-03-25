import React, { ReactNode } from "react";
import "./index.css";

interface DashboardLayoutProps {
  title_page: string;
  children: ReactNode;
}

const DashboardLayouts: React.FC<DashboardLayoutProps> = ({
  title_page,
  children,
}) => {
  return (
    <main className="main dashboard-layouts px-5 py-4">
      <h1 className="fw-bold fs-1 my-5">{title_page}</h1>
      {children}
    </main>
  );
};

export default DashboardLayouts;
