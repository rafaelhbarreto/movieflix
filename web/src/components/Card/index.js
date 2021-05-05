import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { CardStyle, HeaderStyle, SubHeaderStyle } from './styles';

const CardSlide = ({ item }) => {
  return (
    <CardStyle>
      <Card className="card">
        <CardHeader
          title={<HeaderStyle>{item.title}</HeaderStyle>}
          subheader={<SubHeaderStyle>{item.subHeader}</SubHeaderStyle>}
          avatar={
            <Avatar aria-label="rate" className="rate">
              {item.rate}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" className="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia image={item.image} title={item.title} className="media" />
        <CardContent></CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" className="IconStyle">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" className="IconStyle">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </CardStyle>
  );
};

export default CardSlide;
