export const dayRate = (ratePerHour) => ratePerHour * 8

export const daysInBudget = (budget, ratePerHour) => Math.floor(budget / dayRate(ratePerHour))

export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => Math.ceil(numDays * dayRate(ratePerHour) - (numDays - (numDays % 22)) * dayRate(ratePerHour) * discount)
