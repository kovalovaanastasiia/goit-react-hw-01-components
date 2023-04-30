import PropTypes from "prop-types";
import css from '../statistics/Statistics.module.css'
 export const Statistics = ({title, stats}) => (
   <section className={css.statistics}>
     {title !== undefined && (
       <h2 className={css.title}>{title.toUpperCase()}</h2>
     )}
     <ul className={css.stat_list}>
       {stats.map((element) => {
         return (
           <li key={element.id}  className={`${css.item} ${css[element.label.substring(1)]}`}>
             <span className={css.label}>{element.label}</span>
             <span className={css.percentage}>{element.percentage}%</span>
           </li>
         )
       })}
     </ul>
   </section>
)
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  )
}
