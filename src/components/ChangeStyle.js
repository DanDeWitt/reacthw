import React from "react";




function ChangeStyle() {
    const [isOn, setLight] = React.useState(true);
    const luminosity = isOn ? "light" : "dark";

    return ( <
        div className = { `${luminosity}` } >
        <
        button onClick = {
            () => setLight(!isOn)
        } > Change Style < /button>


        <
        /div>
    );
}


export default ChangeStyle