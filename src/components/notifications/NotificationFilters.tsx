import { useState } from "react";

interface NotificationFiltersProps {
  onToggleFilter: () => void;
}

const NotificationFilters = ({ onToggleFilter }: NotificationFiltersProps) => {
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const handleTabChange = (tab: "all" | "unread") => {
    // Guard: If clicked the tab that's already active, stop immediately!
    if (tab === activeTab) return;

    setActiveTab(tab);
    onToggleFilter();
  };

  return (
    <div className="p-1.5 bg-gray-100 rounded-xl flex relative w-full border border-gray-200/50">
      <div
        className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-lg shadow-sm transition-transform duration-300 ease-out z-0 ${
          activeTab === "unread" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <button
        type="button"
        onClick={() => handleTabChange("all")}
        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg relative z-10 transition-colors duration-200 ${
          activeTab === "all"
            ? "text-gray-900"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        All Notifications
      </button>

      <button
        type="button"
        onClick={() => handleTabChange("unread")}
        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg relative z-10 transition-colors duration-200 ${
          activeTab === "unread"
            ? "text-gray-900"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        Unread
      </button>
    </div>
  );
};

export default NotificationFilters;
