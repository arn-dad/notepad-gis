import moment from 'moment';

export default function durationDiff(start, end) {
  const source = moment(start);
  const target = moment(end);
  return  moment.duration(source.diff(target));
}