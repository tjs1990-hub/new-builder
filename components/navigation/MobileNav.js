import {Menu} from '@headlessui/react'
import {MenuIcon, PhoneIcon} from '@heroicons/react/solid'
import {useState} from 'react'



const MobileNav = (props) => {


 








    return(
        <>
        
      <div className='w-w-full h-h-auto flex justify-between p-5 items-center bg-blue-dark'>
          <Menu>
              <Menu.Button>
              <MenuIcon className='h-h-3 p-1 text-white' />
              </Menu.Button>

              <Menu.Items className='flex flex-col h-h-200 z-50'>


              <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'text-white'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>

              <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-dark text-white'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>


              </Menu.Items>
          </Menu>

      <PhoneIcon className='h-h-3 p-2 text-white'/>
      </div>
        </>
    )
}


export default MobileNav