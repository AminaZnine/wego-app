import { Home, User, Settings, Car, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ userType }: { userType: "driver" | "passenger" }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center">
          <NavItem path="/" icon={<Home />} label="Home" isActive={isActive("/")} />
          <NavItem 
            path={`/${userType}/rides`} 
            icon={<Car />} 
            label="Rides" 
            isActive={isActive(`/${userType}/rides`)} 
          />
          <NavItem 
            path="/messages" 
            icon={<MessageSquare />} 
            label="Messages" 
            isActive={isActive("/messages")} 
          />
          <NavItem 
            path="/profile" 
            icon={<User />} 
            label="Profile" 
            isActive={isActive("/profile")} 
          />
          <NavItem 
            path="/settings" 
            icon={<Settings />} 
            label="Settings" 
            isActive={isActive("/settings")} 
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ 
  path, 
  icon, 
  label, 
  isActive 
}: { 
  path: string; 
  icon: React.ReactNode; 
  label: string; 
  isActive: boolean;
}) => (
  <Link
    to={path}
    className={`flex flex-col items-center p-2 ${
      isActive ? "text-wego-purple" : "text-gray-500"
    }`}
  >
    <div className="w-6 h-6">{icon}</div>
    <span className="text-xs mt-1">{label}</span>
  </Link>
);

export default Navigation;