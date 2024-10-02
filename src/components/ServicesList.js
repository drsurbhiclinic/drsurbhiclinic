import Service from './Service.js';
function ServicesList({services}) {
    return(
        <div className="row service-list">
            {
                services.map(({title, imgUrl, description}, i) => {
                    return <Service key={i} imgUrl = {imgUrl} title = {title} description={description} />
                })
            } 
        </div>
    ) 
}

export default ServicesList;