import React, {useEffect, useState} from "react";

export const InputField = ({
                               outText='',
                               innerText='',
                               isDisabled=false,
                               id='',
                               name='',
                               typeName='text',
                               valueName,
                               changeHandler,
                               step,
                               className=''
                           }) => {
        return (
            <div className='input-field-wrapper' id={id}>
                <label htmlFor={name} className="out-text">{outText}</label>
                <div className={'input-field-wrap '+className}>
                    <input
                        disabled={isDisabled}
                        id={id}
                        name={name}
                        type={typeName}
                        value={valueName}
                        onChange={changeHandler}
                        placeholder={innerText}
                        step={step}
                    />
                </div>
            </div>
        )
}