import PropTypes from "prop-types";
import css from '../transactionHistory/TransactionHistory.module.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

export const TransactionHistory = ({items}) => (
  <table className={css.transaction_history}>
    <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
    </thead>

    <tbody>
    {items.map((element) => {
      return (
        <tr className={css.item} key={element.id}>
          <td className={css.type}>{capitalizeFirstLetter(element.type)}</td>
          <td className={css.amount}>{element.amount}</td>
          <td className={css.currency}>{element.currency}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
)
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  )
}
