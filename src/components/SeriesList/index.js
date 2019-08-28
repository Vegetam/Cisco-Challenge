import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import noimage from '../../utils/no_image';
const SeriesListItem = ({series}) =>(
    <Link to={`/series/${series.show.id}`}>
        <ListItem button>
      
        <img alt="Show" src={series.show.image? series.show.image.medium: noimage}/>
        <ListItemText primary={series.show.name} />
        </ListItem>
    </Link>
)

const SeriesList = (props)=>{
    return(
        <div style={{
            display:'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <List component="nav">
               
                {props.list.map(series=>(
                     
                     <SeriesListItem series={series} key={series.show.id}/>
                ))}
            </List>

        </div>
    )
}

export default SeriesList;