import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const styles = (theme) => ({
    samudrika: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing.unit * 2
    }
});

const Samudrika = () => (
    <Typography variant="caption">
        <h1> This is in dev</h1>
    </Typography>
);

Samudrika.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Samudrika);