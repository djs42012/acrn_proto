import React, { useState, createContext } from 'react';
import LoginContainer from './LoginContainer';

export const LoginStateContext = React.createContext({});

const LoginStateProvider = (props: any) => {
    const state = {
        passwordValue: '',
        isFocused: true,
        passwordFocus: false,
    }

    return (
        <LoginStateContext.Provider value={state}>
            <LoginContainer/>
        </LoginStateContext.Provider>

    );
};

