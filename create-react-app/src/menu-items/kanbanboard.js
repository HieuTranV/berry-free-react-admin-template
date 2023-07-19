// assets
import { IconLayoutKanban } from '@tabler/icons';

// constant
const icons = { IconLayoutKanban };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const kanbanboard = {
  id: 'kanbanboard',
  title: 'Kanban Board',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Kanban Board',
      type: 'item',
      url: '/kanbanboard/default',
      icon: icons.IconLayoutKanban,
      breadcrumbs: false
    }
  ]
};

export default kanbanboard;
