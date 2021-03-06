import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Editor from "./components/Editor";
import { useDispatch, useSelector } from "react-redux";
import menusModules, { MenusState, MainMenu1 } from "./modules/menusModule";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    addButton: {
      padding: 0,
      minWidth: 0
    },
    editButton: {
      display: "block",
      marginTop: theme.spacing(1)
    }
  })
);
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const menuList = useSelector(
    (state: any): MainMenu1[] => state.menus.menuList
  );
  const addMenu = () => dispatch(menusModules.actions.addMainMenu1(""));
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <List>
          {menuList.map((menu, index) => (
            <ListItem button key={menu.id}>
              <ListItemText primary={menu.title} />
              <Button
                className={classes.addButton}
                variant="outlined"
                onClick={() => addMenu()}
              >
                <AddIcon />
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Editor></Editor>
      </main>
    </div>
  );
};
export default App;
