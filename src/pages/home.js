import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import { withStyles } from "@material-ui/core/styles";

// import HomePage from "../custom/HomePage"

// @inject("routingStore")
// @observer
// class Home extends Component {
//     static propTypes = {
//         routingStore: PropTypes.object,
//         shop: PropTypes.shape({
//             currency: PropTypes.shape({
//                 code: PropTypes.string.isRequired
//             })
//         })
//     };


//     render() {
//         const { shop } = this.props;

//         return (
//             <Fragment>
//                 <Helmet>
//                     <title>{shop && shop.name}</title>
//                     <meta name="description" content={shop && shop.description} />
//                 </Helmet>
//                 <HomePage />
//             </Fragment>
//         );
//     }
// }

const styles = (theme) => ({
    homepage: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing.unit * 2
    }
});

@withStyles(styles, { name: "HomePageFeatured" })
class HomePageFeatured extends Component {
    render() {

        const { classes, featuredProducts } = this.props;
        return (
            <div className={classes.root}>
                <div>HomePage Featured</div>
                {!!featuredProducts && featuredProducts.map((product) => {
                    return (
                        <div className="featured-product-box" key={product.product.slug} style={{ border: "1px solid black", width: "350px" }}>
                            <div className="featured-product-title"><a href={`/product/${product.product.slug}`}>{product.product.title}</a></div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default HomePageFeatured;