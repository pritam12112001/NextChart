"use client"
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { useAppLayout } from '../layouts/app-layout/AppLayoutProvider';

interface MenuItem {
  title: string;
  iconClass?: LucideIcon; // Lucide icon type
  submenu?: MenuItem[]; // Nested submenu items
}




function AppSidebar() {
  const { appMenus } = useAppLayout();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (index: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderMenu = (items: MenuItem[], parentIndex: string = ''): JSX.Element => {
    return (
      <ul className="">
        {items.map((item, index) => {
          const currentIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <li key={currentIndex} className='lg:pl-2'>
              <a
                href="#submenu"
                className="flex items-center gap-1 p-2 justify-between hover:bg-secondary rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  if (hasSubmenu) {
                    toggleSubmenu(currentIndex);
                  }
                }}
              >
                <span className='flex items-center gap-1'>
                  {item.iconClass && <item.iconClass className="w-4 h-4" />}
                  <span className="hidden lg:inline">{item.title}</span>
                </span>
                {hasSubmenu && (
                  <span>
                    {openSubmenus[currentIndex] ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </span>
                )}
              </a>

              {hasSubmenu && openSubmenus[currentIndex] && renderMenu(item.submenu, currentIndex)}
            </li>
          );
        })}
      </ul>
    );
  };

  if (!appMenus || appMenus?.length == 0) {
    return null
  }

  return (
    <div className="lg:w-64 border-r h-full p-1 lg:pr-2 lg:pl-0 lg:py-2">
      {renderMenu(appMenus)}
    </div>
  );
};

export default AppSidebar;
