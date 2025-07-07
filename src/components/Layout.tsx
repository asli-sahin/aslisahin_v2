import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <main className="w-full">{children}</main>;
}

export default Layout;
