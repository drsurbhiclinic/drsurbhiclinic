import {Helmet} from "react-helmet";

const MetaDecorator = (title, description) => {
    return (
    <Helmet title={title}>
        <meta name="description" content={description}/> 
    </Helmet>
    )
}

export default MetaDecorator;