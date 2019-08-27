import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import noimage from './utils/no_image';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SingleSeries extends Component{
    constructor(props) {
    super(props);

     this.state= {
        open:false,
        show:null
    };
    
  }

handleClose = () => {
        this.setState({ open: false });
};
    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response)=> response.json())
            .then(json => this.setState({show:json,open:true}))
    }
    render(){
        const {show} =this.state;
        return(
            <div >
                { show !== null &&
                    <Dialog
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar style={styles.appBar}>
                            <Toolbar>
                                <Link to={'/'}>
                                    <IconButton color="default" onClick={this.handleClose} aria-label="Close">
                                        <CloseIcon />
                                    </IconButton>
                                </Link>
                                <Typography variant="title" color="inherit" style={styles.flex}>
                                    {show.name}
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <div style={{
                            flex: 1,
                            display:'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div>
                                <ListItem button>
                                    {
                                        show.image != null &&
                                        <img alt="Show" src={show.image? show.image.medium: noimage}/>
                                    }
                                </ListItem>
                            </div>

                            <div>
                                <List>
                                 <ListItem button>
                                        <ListItemText primary="Summary" secondary={show.summary.replace(/<\/?[a-z]+>/gi, '')} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Name First episode" secondary={show._embedded.episodes[0].name} />
                                    </ListItem>
                                    <Divider />
                                     <ListItem button>
                                        <ListItemText primary="Name Last episode" secondary={show._embedded.episodes[show._embedded.episodes.length-1].name} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Season" secondary={show._embedded.episodes[0].season}/>
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Last Season" secondary={show._embedded.episodes[show._embedded.episodes.length-1].season} />
                                    </ListItem>
                                    <Divider />
                                      <ListItem button>
                                        <ListItemText primary="Number" secondary={show._embedded.episodes[0].number} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Last Number episode" secondary={show._embedded.episodes[show._embedded.episodes.length-1].number} />
                                    </ListItem>
                                    <Divider />
                                     <ListItem button>
                                     <ListItemText primary="Url First episode"  />
                                        <a href={show._embedded.episodes[0].url} target="_blank">{show._embedded.episodes[0].name}</a>
                                    </ListItem>
                                    <Divider />
                                     <ListItem button>
                                      <ListItemText primary="Url last episode"  />
                                        <a href={show._embedded.episodes[show._embedded.episodes.length-1].url} target="_blank">{show._embedded.episodes[show._embedded.episodes.length-1].name}</a>
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Total Episodes" secondary={show._embedded.episodes.length} />
                                    </ListItem>
                                    <Divider />
                                   
                                </List>
                            </div>
                        </div>
                    </Dialog>
            }
            </div>
        )
    }

}

export default SingleSeries;
