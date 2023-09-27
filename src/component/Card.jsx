const Card = ({ cardInfo, anotherData }) => {

    const { name, age, employee } = cardInfo

    console.log(cardInfo)
    // First Sitauation
    // props= props->cardinfo->name,age= {props.cardInfo.name}

    // SecondSitauation
    // {cardInfo}
    // cardInfo.name cardInfo.age
    return (
        <div>
            <div className="card" style={{ width: "18rem", height: "200px", backgroundColor: "red" }}>
                {
                    cardInfo.name == "Ashik" ? "" : anotherData
                }
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{age}</p>
                    <a href="#" className="btn btn-primary">{employee}</a>
                </div>
            </div>
        </div>
    )
}

export default Card