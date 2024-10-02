function Service({title, imgUrl, description}) {
    return (
        <>
            <div className="col-md-6">
                <div className="icon-box service-card" data-aos="fade-up">
                    <div className="icon service-card-image">
                        <img src={imgUrl} alt={title} />
                    </div>
                    {/* <div className="icon"><img src="assets/img/features-1.jpg"/></div> */}
                    <div className="service-card-content">
                        <h4 className="title">{title}</h4>
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;