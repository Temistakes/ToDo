import React from "react";
import { Field } from "formik";
import "./InputGroup.scss";

export default function InputGroup({ groupName, id, className, ...props }) {
    return (
        <div className="input-group">
            <label htmlFor={id} className="input-group__label">
                {groupName}
            </label>
            <Field id={id} {...props} className={`input ${className}`} />
        </div>
    );
}
