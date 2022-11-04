import { useEffect, useState } from "react";
import './Progressbar.css';

export var ProgressBar = ({ width, percent }) => {

    const [value, setValue] = useState(0);

    // useEffect(() => {
    //   setValue(percent * width);
    // });

    useEffect(() => {
        setValue(percent * width);
    }, [percent, width])

    return (
        <div>
            <div className="progress-div" style={{ width: width }}>
                <div style={{ width: `${value}px` }} className="progress" />
            </div>
        </div>
    );
};