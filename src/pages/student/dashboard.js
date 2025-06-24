import StudentNavbar from "@/components/StudentNavbar";
import CoreNavbar from "@/components/CoreNavbar"
import StudentMain from "@/components/StudentMain";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (!savedRole) {
      router.push('/');
    } else {
      setRole(savedRole);
    }
  }, []);


  return (
    <div className="min-h-screen bg-gray-200">
      <StudentNavbar />
      <StudentMain />
      <Footer />
    </div>
  );
}
