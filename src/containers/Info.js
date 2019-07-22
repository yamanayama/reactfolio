import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// スタイル
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
  },
  textLeft: {
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
  },
});


class Info extends React.Component {

  render() {

    // Material-ui関連
    const { classes } = this.props;

    return (
      <div>
        <h2>このサイトについて</h2>
        <div className={classes.textLeft}>

          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              むらかみのさいきんのがんばり
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              JS/SPA初心者デザイナーの村上が、Reactでつくった色々をアップする目的で作った簡易WEBアプリです。
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              本WEBアプリではReact、Material-UI、Firebaseを使用しています。
            </Typography>

            <Typography component="p" className={classes.paragraph}>
            </Typography>
            <Typography component="p" className={classes.paragraph}>
            </Typography>
            <Typography component="p" className={classes.paragraph}>
            </Typography>
          </Paper>

          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              本アプリの構成
            </Typography>
            <Typography component="div" className={classes.paragraph}>
              <ol>
                <li>Firebase Hosting</li>
                <li>React・Material-UI</li>
              </ol>
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              自己紹介
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              ソース系：
              <a href="https://github.com/yamanayama" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              Twitter:
              <a href="https://twitter.com/yamanayama" target="_blank" rel="noopener noreferrer">
                @yamanayama
              </a>
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              登壇履歴
            </Typography>
            <ul>
              <li>2019.02 Design Hack Nagoya - LT</li>
              <li>2019.06 Ateam Design Meetup - Session</li>
              <li>2019.07 名古屋　デザイナーLT夏祭り（兼主催） - LT</li>
              <li>2019.08 Wordpress Meetup Nagoya（調整中） - LT</li>
            </ul>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              主催イベント
            </Typography>
            <ul>
              <li>2019.05 デザインわくわく会</li>
              <li>2019.06 デザ開合同LT大会</li>
              <li>2019.07 名古屋　デザイナーLT夏祭り（兼LT）</li>
            </ul>
          </Paper>
        </div>
      </div>
    );
  }
}

// Material-ui関連
Info.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Info);