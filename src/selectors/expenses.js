// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // if the typeof startDate is not number this will be filtered if not expense.createdAt(ex:1) will be checked if it is bigger then startDate
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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