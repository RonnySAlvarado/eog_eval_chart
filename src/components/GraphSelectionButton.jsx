import React from 'react';
import { GraphSelectionButtonStyle } from '../styles/GraphSelectionButtonStyles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  value: {
    fontSize: 32,
  },
  pos: {
    marginBottom: 12,
  },
});

const GraphSelectionButton = ({ type, value, view, setView }) => {
  const classes = useStyles();

  const toggle = e => {
    e.preventDefault();
    if (view.includes(type)) {
      const filteredArr = view.filter(el => {
        return el !== type;
      });
      setView(filteredArr);
    } else {
      setView([...view, type]);
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {type}
        </Typography>
        <Typography variant="body2" className={classes.value}>
          {value}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={e => toggle(e)}>
          Toggle View
        </Button>
      </CardActions>
    </Card>
  );
};

export default GraphSelectionButton;
