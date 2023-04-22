import css from './StatisticsBoard.module.css'
import Statistics from './Statistics';
import data from '../Statistics/data.json'


export default function StatisticsTitle({title}) {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <Statistics stats={data} />
        </section>
  )
    
    
    
}