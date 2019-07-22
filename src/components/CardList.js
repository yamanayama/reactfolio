import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  // Cards
  root: {
    marginBottom: 20,
  },
  card: {
    width: '100%',
    margin: theme.spacing(1),
    [theme.breakpoints.up('md')]: {//ブレークポイントで制御
      maxWidth: 345,
      width: '46%',
    },
  },
  media: {
    height: 140,
  },

});

class CardList extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea href={this.props.url} target="_blank">
          <CardMedia
            component="img"
            alt={this.props.title}
            height="140"
            className={classes.media}
            image={`../asetts/images/${this.props.img}`}
            title={this.props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={this.props.github} target="_blank">
            code
          </Button>
          <Button size="small" color="primary" href={this.props.url} target="_blank">
            Learn More
        </Button>
        </CardActions>
      </Card>
    );
  }
}


CardList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardList);
