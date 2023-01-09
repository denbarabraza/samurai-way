import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export type DialogsFormDataType = {
    message: string
}

const maxLength50 = maxLengthCreator(50)

export const DialogForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'message'}
                    placeholder={'Enter your message'}
                    component={Textarea}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button > Send </button>
            </div>
        </form>
    )
}