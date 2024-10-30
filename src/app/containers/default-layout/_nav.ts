import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Available Rewards'
  },
  {
    name: 'Redeem Reward',
    url: '/base/make-request',
    iconComponent: { name: 'cil-pencil' }
  },
  // {
  //   name: 'Previous Rewards',
  //   url:'/base/every-requests',
  //   iconComponent: { name: 'cil-list' }
  // },
  // {
  //   name: 'Messages',
  //   url: '/',
  //   iconComponent: { name: 'cil-envelopeClosed' },
  //   children: [
  //     {
  //       name: 'Incoming Responses',
  //       url: '/base/inbox',
  //       iconComponent: {name: 'cilBell'}
  //     },
  //     {
  //       name: 'Anonymous Reports',
  //       url: '/base/anonymous-reports',
  //       iconComponent: {name: 'cilUserUnfollow'}
  //     },
  //   ]
  // },
  {
    name: 'User Info',
    title: true
  },
  {
    name: ' My  Account',
    url: '/base/every-requests',
    iconComponent: {name: 'cilPeople'}
  },
  // {
  //   name: ' Add User',
  //   url: '/base/add-user',
  //   iconComponent: {name: 'cilUser'}
  // },
  {
    name: 'Notifications',
    title: true,
  },
  // {
  //   name: ' Manage Organisations',
  //   url: '/base/manage-orgs',
  //   iconComponent: {name: 'cilPeople'}
  // },
  {
    name: 'News and Updates',
    url: 'https://mail.google.com/mail/u/0/#inbox/',
    iconComponent: {name: 'cilList'}
  },
  //
  // {
  //   name: 'Messages',
  //   url: '/',
  //   iconComponent: { name: 'cil-envelopeClosed' },
  //   children: [
  //     {
  //       name: 'Inbox',
  //       url: '/base/inbox',
  //       iconComponent: {name: 'cilBell'}
  //     },
  //     {
  //       name: 'Anonymous Reports',
  //       url: '/base/anonymous-reports',
  //     },
  //   ]
  // },
  // {
  //   name: 'Settings',
  //   url: '/forms',
  //   iconComponent: { name: 'cilSettings' },
  //   children: [
  //
  //     {
  //       name: 'Sign Out',
  //       url: '/login',
  //     },
  //   ],
  // },
  // {
  //   name: 'System Reports',
  //   iconComponent: { name: 'cil-file' },
  //   url: 'icons'
  // },
  // {
  //   name: 'Sign Out',
  //   url: '/signout',
  //   iconComponent: {name: 'cilDrop'},

  // },

];
