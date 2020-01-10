// Get visible expenses
import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // if the typeof startDate is not number this will be filtered if not expense.createdAt(ex:1) will be checked if it is bigger then startDate
    // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const createdAtMoment = moment(expense.createdAt);
    // isSameOrBefore checks to see if our start date is the same or before the createdAttime if not then the start date is after createdAt time and don't show expense
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; 
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') :  true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    // if all of these are true and the item will be in the array if the result is false it will not show 
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => { 
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1
    }
  });
};

export default getVisibleExpenses;