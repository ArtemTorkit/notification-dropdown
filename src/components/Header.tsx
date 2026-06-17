import NotificationDropdownContainer from "./notifications/NotificationDropdownContainer";

const Header = () => {

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Remains empty for now */}
        <div>
        </div>

        <div className="flex items-center justify-end gap-6">
            <NotificationDropdownContainer />
          
            <span className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            John Doe
            </span>
        </div>

      </div>
    </header>
  )
}

export default Header