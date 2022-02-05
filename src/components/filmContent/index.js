import  "./style.css"
export function FilmContent(props){
    const {title, subtitle, description, list}=props;
    function renderFarm(){
        return list.map(function(item){
            const {image, faTitle, enTitle, id, isFree}= item;

            return(
                <li key={id}>
                <a>
                {isFree ? <p className="free-badge">رایکان</p> :""}
                <img src={image} />
                <p>{faTitle}</p>
                <p>{enTitle}</p>
                </a>
                </li>
            )
        })
    }
    return (
        <div className="film-content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p className="desc">{description}</p>
        <ul>
        {renderFarm()}
        </ul>
        </div>
    )
}
export default FilmContent;