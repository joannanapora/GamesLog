import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const ListCard = ({
    wanttoplay,
    inprogress,
    popularity,
    played,
    name,
    rate,
    image,
    platforms,
    info, 
    from, 
    to,
    status,
    platformList
  }: {
    wanttoplay: boolean;
    inprogress: boolean;
    popularity: number;
    played: boolean;
    name: string;
    rate: number;
    image: any;
    platforms: any;
    info: string;
    from: string;
    to: string;
    status: string;
    platformList: string[];
  }) => {

    return (
        <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img width='50px' alt="complex" src={image}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary="Jan 9, 2014" />
      </ListItem>
    )
}

export default ListCard;