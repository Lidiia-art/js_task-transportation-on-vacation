/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const total = days * PRICE_PER_DAY;
  let discount = 0;

  if (days >= LONG_TERM) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    discount = SHORT_TERM_DISCOUNT;
  }

  return total - discount;
}

module.exports = calculateRentalCost;
