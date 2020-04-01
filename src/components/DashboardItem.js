import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function DashboardItem(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [timelineStart, setTimelineStart] = React.useState(null);
    const [timelineEnd, setTimelineEnd] = React.useState(null);
    const handleChange = (date) => {
        setSelectedDate(date);
        setTimeline(date);
    };
    const setTimeline = (selectedDate) => {
        setTimelineStart(null);
        setTimelineEnd(null);
        selectedDate.setHours(0, 0, 0, 0);
        console.log(selectedDate);
        const timelineData = props.person.activity_periods.map(p => {
            const time = p.start_time.split(' ');
            const date = new Date(`${time[0]} ${time[1]} ${time[2]}`);
            console.log(date);
            if (selectedDate.valueOf() == date.valueOf()) {
                console.log('active');
                setTimelineStart(time[4]);
                setTimelineEnd(p.end_time.split(' ')[3]);
            }
            return {
                date: date,
                startTime: time[4],
                endTime: p.end_time.split(' ')[3]
            }
        });
        console.log(timelineData);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.person.real_name}</h5>
                    <p className="card-text">{`Location: ${props.person.tz}`}</p>
                    <button onClick={handleOpen} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">View Timeline</button>

                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Timeline for {props.person.real_name}</h2>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleChange}
                    />
                    {
                        timelineStart && timelineEnd?
                        <div>Person was active from {timelineStart} to {timelineEnd}</div> :
                        <div>Oops! No activity...</div>
                    }
                </div>
            </Modal>
        </div>
    );
}
