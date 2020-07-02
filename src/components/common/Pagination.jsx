import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationComponent = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        right: "0px",
        position: "fixed",
        bottom: "60px",
        marginRight: "50px",
      }}
    >
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
};

export default PaginationComponent;
