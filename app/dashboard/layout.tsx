// components/Layout.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClientAuth } from '@/components/hooks/ClientAuth';
import DashboardHeader from '@/components/Dashboard/Header';

const Layout = ({ children }: {
    children: React.ReactNode;
  }) => {
  const router = useRouter();
  const { user, loading } = useClientAuth(); // Assuming you have an auth hook

  useEffect(() => {
    if (!user?.user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Render the layout with protected routes
  return <div className=" py-8 ">
            <DashboardHeader />
            {children}
    </div>;
};

export default Layout;
