import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


// @withStyles(styles, { name: "HomePageFeatured" })
// class HomePageFeatured extends Component {
//     render() {

//         const { classes, featuredProducts } = this.props;
//         return (
//             <div className={classes.root}>
//                 <div>HomePage Featured</div>
//                 {!!featuredProducts && featuredProducts.map((product) => {
//                     return (
//                         <div className="featured-product-box" key={product.product.slug} style={{ border: "1px solid black", width: "350px" }}>
//                             <div className="featured-product-title"><a href={`/product/${product.product.slug}`}>{product.product.title}</a></div>
//                         </div>
//                     )
//                 })}
//             </div>
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

const HomePage = () => (
    <Typography variant="caption">
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        {/* const { classes, featuredProducts} = this.props;

        <div className={classes.root}>
            <div>HomePage Featured</div>
            {!!featuredProducts && featuredProducts.map((product) => {
                return (
                    <div className="featured-product-box" key={product.product.slug} style={{ border: "1px solid black", width: "350px" }}>
                        <div className="featured-product-title"><a href={`/product/${product.product.slug}`}>{product.product.title}</a></div>
                    </div>
                )
            })}
        </div> */}
        {/* <div className="homepage">
            <p>This is out placeholder text</p>
        </div> */}
    </Typography>
);

HomePage.propTypes = {
    classes: PropTypes.object
};

// export default compose(
//     withShop,
//     withFeatured,
//     withStyles(styles)
// )(HomePageFeatured);



export default withStyles(styles)(HomePage);