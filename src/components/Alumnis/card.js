import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  subheader:{
   color:'#000',
   fontSize: '14px',
  },
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typo:{
    color:'#9CA9B3',
   fontSize:'18px',
  },
  avatar: {
resize:'contain',
height:'60px',
width:'60px',
  },
}));

export default function  UserCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setvisible]= React.useState("inline");
  const handleExpandClick = () => {
      setvisible("none");
   
  };
  const handlecontract = () => {
    setvisible("inline");
};
  return (
    <div>
      
    <Card className={classes.root} style={{backgroundColor:"#fdce68",color:"#fff"}} elevation={3}>
      <CardHeader
        avatar={
          <Avatar aria-label="image" className={classes.avatar} src={props.user.image}>
          </Avatar>
        }
        action={
          <a href={props.user.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} size="1.8x" color="#24e5af"/>
          </a>
        }
        title={props.user.name}
        subheader={<Typography className={classes.typo} color="textSecondary" fontSize='18'>{props.user.position}</Typography>}
      />
      <CardContent>
        <Typography variant="body2"  component="p" className={classes.subheader}>
        I started my interview preparation journey from the first seminar of O(1). Things were explained very well in detail, from tips and tricks for interviews to resources for DSA and core subjects.
          <Button onClick={handleExpandClick} style={{display:`${visible}`,color:"#24e5af",fontFamily:"sans-serif"}}variant="body2"  component="p" >
            Read more
          </Button>
          <Typography style={{display:`${visible === 'none' ? 'inline' : 'none'}`}}variant="body2"  component="p" className={classes.subheader}> 
           CPL was one of the highlights for me as I was able to improve my problem solving skills significantly. I would recommend O(1) to every fresher looking for mentorship, guidance and a productive atmosphere to learn and grow.
          </Typography>
          <Button onClick={handlecontract} style={{display:`${visible === 'none' ? 'inline' : 'none'}`,color:"#24e5af"}}variant="body2"  component="p">
            Read Less
          </Button>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
