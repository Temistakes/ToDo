import React from "react";
import { Field } from "formik";
import cl from "./InputGroup.module.css";

export default function InputGroup({ groupName, id, className, ...props }) {
    return (
        <div className={cl.inputGroup}>
            <label htmlFor={id} className={cl.label}>
                {groupName}
            </label>
            <Field id={id} {...props} className={className} />
        </div>
    );
}
