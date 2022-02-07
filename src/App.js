import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListIcon from '@material-ui/icons/List';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
  p0: {
    padding: '0px !important',

  },
  bRadius: {
    borderRadius: '0px'
  },
  pli: {
    fontSize: '13px',
    color: '#0000009c',
    fontWeight: '300',
    paddingTop: '3px',
    paddingBottom: '6px',
    margin: '0px'
  },
  displayScore: {
    display: 'flex'
  },
  pStyle: {
    marginTop: '2px',
    marginBottom: '0px',
    marginLeft: '2px',
    fontSize: '13px'
  },
  iconSize: {
    width: '16px'
  },
  iconSpacing: {
    paddingLeft: '16px',
    paddingRight: '16px'
  },
  textAlignNum: {
    textAlign: 'center'
  },
  h6Style: {
    fontWeight: '600',
    marginBottom: '0px'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2} className={clsx(classes.p0)}>
          <div className={clsx(classes.bRadius)}>
          </div>
        </Grid>
        <Grid item xs={10} className={clsx(classes.p0)}>
          <div className={clsx(classes.bRadius)}>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText>
                  <div>
                    <Typography variant="h6" gutterBottom className={clsx(classes.h6Style)}>
                      Lorem Ipsum
                    </Typography>
                    <p className={clsx(classes.pli)}>Lorem Ipsum texts are the most commently used text</p>
                  </div>
                  <div className={clsx(classes.displayScore)}>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>120min</div>
                      <div className={clsx(classes.displayScore)}>
                        <div>< AccessTimeIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Duration</p></div>
                      </div>
                    </div>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>3</div>
                      <div className={clsx(classes.displayScore)}>
                        <div><  ListIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Question</p></div>
                      </div>
                    </div>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>4</div>
                      <div className={clsx(classes.displayScore)}>
                        <div><TrendingUpIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Score</p></div>
                      </div>
                    </div>


                  </div>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <div>
                    <Typography variant="h6" gutterBottom className={clsx(classes.h6Style)}>
                      Lorem Ipsum
                    </Typography>
                    <p className={clsx(classes.pli)}>Lorem Ipsum texts are the most commently used text</p>
                  </div>
                  <div className={clsx(classes.displayScore)}>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>120min</div>
                      <div className={clsx(classes.displayScore)}>
                        <div>< AccessTimeIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Duration</p></div>
                      </div>
                    </div>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>3</div>
                      <div className={clsx(classes.displayScore)}>
                        <div><  ListIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Question</p></div>
                      </div>
                    </div>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>4</div>
                      <div className={clsx(classes.displayScore)}>
                        <div><TrendingUpIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Score</p></div>
                      </div>
                    </div>


                  </div>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <div>
                    <Typography variant="h6" gutterBottom className={clsx(classes.h6Style)}>
                      Lorem Ipsum
                    </Typography>
                    <p className={clsx(classes.pli)}>Lorem Ipsum texts are the most commently used text</p>
                  </div>
                  <div className={clsx(classes.displayScore)}>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>120min</div>
                      <div className={clsx(classes.displayScore)}>
                        <div>< AccessTimeIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Duration</p></div>
                      </div>
                    </div>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>3</div>
                      <div className={clsx(classes.displayScore)}>
                        <div><  ListIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Question</p></div>
                      </div>
                    </div>
                    <div className={clsx(classes.iconSpacing)}>
                      <div className={clsx(classes.textAlignNum)}>4</div>
                      <div className={clsx(classes.displayScore)}>
                        <div><TrendingUpIcon className={clsx(classes.iconSize)} /></div>
                        <div><p className={clsx(classes.pStyle)}>Score</p></div>
                      </div>
                    </div>


                  </div>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}
