import moment from 'moment';

export default function toDateFormat(date, format) {
  return moment(date).format(format);
}