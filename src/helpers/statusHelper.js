import statuses from '@/lib/statuses';

const getStatusByCode = (code) => statuses.filter(
  (statusItem) => statusItem.id === code,
)[0] || {};

export default getStatusByCode;
