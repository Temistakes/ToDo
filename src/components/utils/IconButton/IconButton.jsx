import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function IconButton({ icon, ...props }) {
    return (
        <button className="icon-btn" {...props}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}
