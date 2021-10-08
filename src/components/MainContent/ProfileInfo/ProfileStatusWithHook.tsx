import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropTypes = {
    status: string,
    updateStatus: (status: string) => void,
}

export const ProfileStatusWithHook: React.FC<ProfileStatusPropTypes> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }


    return (

        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} onChange={onStatusChange} autoFocus={true}
                       onBlur={deActivateEditMode}/>
            </div>

            }
        </div>
    );

}

export default ProfileStatusWithHook;