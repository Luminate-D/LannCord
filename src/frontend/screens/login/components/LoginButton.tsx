import React, { RefObject, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { validateEmail } from '../../../util';
import { useDispatch } from 'react-redux';
import { error } from '../../../state/slices/auth';

interface ILoginButton {
    name: string;
    emailRef: RefObject<HTMLInputElement>;
    passwordRef: RefObject<HTMLInputElement>;
}

enum State { Idle, Processing }

export function LoginButton(props: ILoginButton) {
    const [ state, setState ] = useState(State.Idle);

    const dispatch = useDispatch();

    return <Button w={'100%'} isLoading={state == State.Processing} onClick={() => {
        const email = props.emailRef.current!.value;
        const password = props.passwordRef.current!.value;
        if(!validateEmail(email)) {
            dispatch(error('Invalid E-Mail format provided'));
            return;
        }

        if(password.length < 8) {
            dispatch(error('Password must contain at least 8 characters'));
            return;
        }

        dispatch(error(''));
        setState(State.Processing);

        // TODO: process authorization
    }}>{props.name}</Button>
}