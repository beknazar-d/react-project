import './search.css'
const Searchpanel = () => {
    return (
        <div className="search-panel">

            <input type="text" placeholder='Найти сотрудника' />
            <div>

            <button>Все сотрудники</button>
            <button>На повышение</button>
            <button>З/П больше 1000$</button>
            </div>
        </div>
    )
}
export default Searchpanel