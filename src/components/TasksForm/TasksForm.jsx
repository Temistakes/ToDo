import React, { memo } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Button from "../utils/Button/Button";
import InputGroup from "../utils/InputGroup/InputGroup";
import cl from "./TasksForm.module.css";

const TasksForm = ({ addTask }) => {
    const validationSchema = yup.object().shape({
        name: yup.string().required("This field is required"),
    });

    const handleSubmit = values => {
        addTask(values.name, values.descr);
    };

    return (
        <Formik
            initialValues={{
                name: "",
                descr: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ values, touched, errors }) => (
                <Form className={cl.form}>
                    <InputGroup
                        groupName="Имя:"
                        name="name"
                        className={touched.name && errors.name && "error"}
                        value={values.name}
                        id="name"
                    />
                    <InputGroup
                        groupName="Описание:"
                        name="descr"
                        className={touched.descr && errors.descr && "error"}
                        value={values.descr}
                        id="descr"
                    />
                    <Button type="submit" />
                </Form>
            )}
        </Formik>
    );
};

export default memo(TasksForm);
