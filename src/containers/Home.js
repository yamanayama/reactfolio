import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Search from '@material-ui/icons/Search';

// コンポーネントの準備
import CardList from '../components/CardList';

/*============================================================ */

// styles を定義
// theme を使わない場合は関数ではなく object でもよい
const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  root: {
  },
  box: {
    marginBottom: 100,
  },
  block: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

//HeroImg
class HeroArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;

    return (
      <section className={classes.root}>
        <Container className={classes.container}>
          <img
            src="/static/themes/onepirate/productHeroWonder.png"
            alt="wonder"
            width="147"
            height="80"
          />
          <div className={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <Typography color="inherit" align="center" variant="h2" marked="center">
              hogehoge
      </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
              hogehogepiyopiyohogehogepiyopiyohogehogepiyopiyohogehogepiyopiyohogehogepiyopiyo
      </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
              href="/premium-themes/onepirate/sign-up/"
            >
              Register
      </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
              Discover the experience
      </Typography>
          </div>
          <div className={classes.backdrop} />
          <div className={clsx(classes.background)} />
          <img
            className={classes.arrowDown}
            src="/static/themes/onepirate/productHeroArrowDown.png"
            height="16"
            width="12"
            alt="arrow down"
          />
        </Container>
      </section>
    );
  }
}

class Home extends React.Component {
  // 初期state
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          name: 'React Todo',
          img: 'thum_todo.png',
          url: 'https://todoapp-f2780.firebaseapp.com/',
          github: 'https://github.com/yamanayama/react.todo',
          desc: 'Reactで簡易TODOアプリを作りました',
        },
        {
          id: 2,
          name: 'React UI slider&tab',
          img: 'thum_slide.png',
          url: 'https://react-e97a6.firebaseapp.com/',
          github: 'https://github.com/yamanayama/reactUIcompornent',
          desc: 'Reactでスライダーとタブを作りました。landing/rankingで使おうと思ったのになあ・・',
        },
        {
          id: 3,
          name: 'React modal',
          img: 'thum_popup.png',
          url: 'https://github.com/yamanayama/react_modal',
          github: 'https://github.com/yamanayama/react_modal',
          desc: 'ライフの志水さんからのReact課題。デザイナで一番早くできたと褒められました！',
        },
        {
          id: 4,
          name: 'React WebApp',
          img: 'thum_folio.png',
          url: '/',
          desc: 'このサイトです。materiul UIとfirebaseとReactです。ディレクトリ構造、構成把握。小規模静的WEBサイトなら制作可能。',
        },
      ],

      slides: [
        {
          id: 11,
          name: '元イラストレーターの私がコーディングを勉強してみた',
          img: 'thum_coding.png',
          url: '',
          desc: '2月 Design Hack Nagoya LT登壇資料',
        },
        {
          id: 15,
          name: '制作会社と事業会社、これからのデザイナー',
          img: 'thum_vs.png',
          url: '',
          desc: '5月 デザイナーLT大会 LT登壇資料（急遽出られず・・）',
        },
        {
          id: 12,
          name: 'インハウスデザイナーとして４ヶ月働いて気づいたこと',
          img: 'thum_slide_Ateamdesignmeetup.png',
          url: 'https://docs.google.com/presentation/d/1_vvjBQp9UpEhBHZSBE2fz-zOg892ehYHgD_UkOEiXoE/edit#slide=id.p4',
          desc: '6月Ateam Meetup セッション登壇資料',
        },
        {
          id: 13,
          name: 'どうする？ReactとCSS設計',
          img: 'thum_slide_reactcss.png',
          url: 'https://docs.google.com/presentation/d/1EGVEDJBuD9qpkOEbrSKeP0Cq0Js1IoikYkElLHigVHg/edit#slide=id.p4',
          desc: '7月開発LT　React　LT資料（8月にリスケ）',
        },
        {
          id: 14,
          name: 'Atomic Designで行うコンポーネント設計',
          img: 'thum_slide_atomicdesign.png',
          url: 'https://docs.google.com/presentation/d/1UtuydztPJEB-v-PQtiH7Rk3-g8SqPiNgYGZVL7RLY4Y/edit#slide=id.p4',
          github: 'https://github.com/yamanayama/react-webapp',
          desc: '7月　名古屋デザイナーLT大会　LT登壇資料',
        },
      ],
    };
  }

  render() {
    // Material-ui関連
    const { classes } = this.props;
    const { cardList } = this.props;

    return (
      <div className={classes.root}>
        <section className={classes.box}>
          <h2>React app</h2>
          <div className={classes.block}>
            {this.state.cards.map((card) => (
              <CardList
                {...card} />
            ))}
          </div>
        </section>
        <section className={classes.box}>
          <h2>LT & Settion slide</h2>
          <div className={classes.block}>
            {this.state.slides.map((slide) => (
              <CardList
                {...slide} />
            ))}
          </div>
        </section>
      </div >
    );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

HeroArea.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(Home);
