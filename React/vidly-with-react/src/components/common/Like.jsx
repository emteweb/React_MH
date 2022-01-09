import React from 'react';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = (props) => {
    if (!props.liked) {
        return <FontAwesomeIcon
            icon={faHeart}
            onClick={this.props.onClick}
            style={{ cursor: 'pointer' }} />;
    } else {
        return <FontAwesomeIcon icon={faHeartSolid} onClick={props.onClick} />;
    }

}

export default Like;
