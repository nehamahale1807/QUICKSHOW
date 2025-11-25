import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboard, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {

  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  }

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
  ]

  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 md:w-60 w-full border-r border-gray-300/20 text-sm'>
      
      {/* Profile */}
      <img 
        className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' 
        src={user.imageUrl} 
        alt="sidebar"
      />
      <p className='mt-2 text-base max-md:hidden'>
        {user.firstName} {user.lastName}
      </p>

      {/* Nav Links */}
      <div className='w-full'>
        {adminNavlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.path === '/admin'}
            className={({ isActive }) =>
              `relative flex items-center gap-2 w-full py-2.5 md:pl-10 text-gray-400 
              ${isActive ? 'bg-primary/15 text-primary' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <p className='max-md:hidden'>{link.name}</p>

                {/* Right highlight bar */}
                <span
                  className={`absolute right-0 w-1.5 h-10 rounded-l 
                  ${isActive ? 'bg-primary' : ''}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar

