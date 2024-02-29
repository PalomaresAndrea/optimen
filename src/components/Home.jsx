/* Schoenstantt Andrea Palomares */

import React from "react";
import Navigate from "./NavigationBar";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { CardActionArea, Grid, Stack } from "@mui/material";
import data from '../data/employees 2.json'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 150,
        height: 150,
        fontSize: 80
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  

const Home = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
        <div>
            <Navigate/>
            <Grid container spacing={2}>
            {
                data.Employees.map(employee => (
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                    <Stack direction="row" spacing={2} sx={{display:'flex', justifyContent:'center',pt:2}}>
                        <Avatar {...stringAvatar(employee.Name)} />
                    </Stack>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {employee.Name}
                    </Typography>
                    {
                        employee.Skills.map(skill => (
                            <Typography gutterBottom variant="body1" component="div">
                        Skills: {skill}
                        </Typography>
                        ))
                    }
                    <Typography gutterBottom variant="body2" component="div">
                        Spot: {employee.Spot}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        Contract: {employee.Contract.Name}
                    </Typography>
                    {
                        employee.Documents.map(document =>(
                            <Typography gutterBottom variant="body2" component="div">
                      {document.Name},Expiration:{document.Expiration}
                    </Typography>
                        ))

                    }
                </CardContent>
                </CardActionArea>
            </Card>
                    </Grid>
                ))
            }
            </Grid>
            
        </div>
    )
}

export default Home
