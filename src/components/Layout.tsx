import { type ReactNode } from "react";
import { DownloadCVButton } from "./DownloadCVButton";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full">
      <DownloadCVButton />
      {children}
    </main>
  );
}

export default Layout;
