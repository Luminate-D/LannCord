import React, { useRef } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { NamedInput } from './components/NamedInput';
import { LoginButton } from './components/LoginButton';
import { useSelector } from 'react-redux';
import { IRootState } from '../../state/store';

export function LoginScreen() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const errorText = useSelector((state: IRootState) => state.auth.error);

    return <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'}>
        <Flex direction={'column'} align={'center'} bgColor={'gray.700'} p={5} width={'33%'}>
            <Text fontSize={'2em'} fontWeight={'bold'}>LannCord</Text>
            {errorText ? <Text color={'danger'} fontWeight={'bold'}>{errorText}</Text> : ''}
            <Flex direction={'column'} gap={2} width={'100%'} my={5}>
                <NamedInput ref={emailRef} name={'E-Mail'} placeholder={'account@lanncord.com'} />
                <NamedInput ref={passwordRef} name={'Password'} placeholder={'●●●●●●●●'} hide />
            </Flex>

            <LoginButton name={'Login'} emailRef={emailRef} passwordRef={passwordRef} />
        </Flex>
    </Flex>
}