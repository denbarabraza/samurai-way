import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

export type PostFormDataType = {
    post: string
}

const maxLength10 = maxLengthCreator(10)

export const PostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'post'}
                    component={Textarea}
                    placeholder={'Post message'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}