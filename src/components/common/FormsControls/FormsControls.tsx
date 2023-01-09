import {FC} from "react";
import s from "../FormsControls/FormsControls.module.css";

export const Textarea: FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div >
                <textarea {...input} {...props} className={hasError ? s.itemError: ''}/>
            </div>
            {hasError && <span className={s.textError}>{meta.error}</span>}
        </div>
    )
}

export const Input: FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                <input {...input} {...props} className={hasError ? s.itemError: ''}/>
            </div>
            {hasError && <span className={s.textError}>{meta.error}</span>}
        </div>
    )
}