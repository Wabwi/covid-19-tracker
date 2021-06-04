import React from 'react';
import "./infoBox.css";
import { Card, CardContent, Typography} from '@material-ui/core';

const InfoBox = ({title, cases, casesType, active, total, ...props}) => {
    return (
        <Card 
        onClick={props.onClick}
        className={`infoBox ${active && `infoBox--selected--${casesType}`}`}>
            <CardContent className="infoBoxContent">
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className={ `infoBox__cases ${(title === 'Recovered') && "infoBox__cases--green"}` }>{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
            
        </Card>
    )
}

export default InfoBox
