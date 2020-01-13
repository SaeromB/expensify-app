const moment = require.requireActual('moment');

// grab the origin of moment\
// the test will make a new moment createdAt witch it will be different from the original moment
export default (timestamp = 0) => {
  return moment(timestamp);
}