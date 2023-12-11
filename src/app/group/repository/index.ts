import { customHttp } from '../../core/client';
import { groupById, Group } from '../types';

const group: Group = {
  id: '',
  create() {},
  remove({ id = '' }) {},
  addUser() {},
  usersIds: [],
  getBalance() {},
  getGroups: () => {
    return customHttp.find('');
  },
  getGroupById: () => {
    return customHttp.find('');
  },
};

export { group };
