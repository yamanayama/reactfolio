import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//gallery
import image01 from '../asetts/images/alex-pavlou-2UBwWeXlQKg-unsplash.jpg';
import image02 from '../asetts/images/alexander-possingham-CeWNEEsHPbA-unsplash.jpg';
import image03 from '../asetts/images/anton-darius-thesollers-eeOplg75V6Q-unsplash.jpg';
import image04 from '../asetts/images/asique-alam-HaMYaR9J-Zg-unsplash.jpg';
import image05 from '../asetts/images/cat-778315_1920.jpg';



// import tileData from '../components/tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


const tileData = [
  {
    img: image01,
    title: 'Image',
    author: 'author',
    featured: true,
    col: 2,
  },
  {
    img: image02,
    title: 'Image',
    author: 'author',
    featured: true,
    col: 1,
  },
  {
    img: image03,
    title: 'Image',
    author: 'author',
    featured: true,
    col: 3,
  },
  {
    img: image04,
    title: 'Image',
    author: 'author',
    featured: true,
    col: 2,
  },
  {
    img: image05,
    title: 'Image',
    author: 'author',
    featured: true,
    col: 2,
  },

];

class Gallery extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <section> <h2>登壇の思い出とか</h2>
        <p>間に合いませんでした・・＞＜　後日追加</p></section>

        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

// Material-ui関連
Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Gallery);
