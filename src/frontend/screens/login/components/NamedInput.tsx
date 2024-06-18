import React from 'react';
import { Flex, forwardRef, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

interface INamedInput {
    name: string;
    placeholder: string;
    hide?: boolean;
}

export const NamedInput = forwardRef((props: INamedInput, ref) => {
    return <Flex direction={'column'}>
        <InputGroup>
            <InputLeftAddon>{props.name}</InputLeftAddon>
            <Input ref={ref} type={props.hide ? 'password' : 'text'} placeholder={props.placeholder} variant={'filled'}></Input>
        </InputGroup>
    </Flex>
});