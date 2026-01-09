import DynamicBreadcrumb from "@/components/BreadCrumb";
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white border-b boder-gray-300 flex items-center p-4 justify-between">
      <DynamicBreadcrumb />
      {/* User Actions */}
      <div className="flex items-center space-x-5">
        <Bell size={18} />
      </div>
    </div>
  );
}
