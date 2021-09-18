import moment from 'moment';
import { TIME_FORMAT } from './constants';

export const showTimeDifference = (actualTime, userDate, timeFormat) => {
  return moment(actualTime, TIME_FORMAT).diff(moment(userDate), timeFormat);
};
