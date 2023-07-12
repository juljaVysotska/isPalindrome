import { Button, Form, Badge } from 'react-bootstrap';
import { isPalindrome } from '../../helpers/isPalindrome';
import { useState } from 'react';

export const Field = () => {
    const [value, setValue] = useState('');
    const [isPal, setIsPal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handlerOnChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handlerOnClick = () => {
        setIsPal(isPalindrome(value));
        setIsVisible(true);
    }

    return (
        <>
        <Form>
            <Form.Label>Check is your data is palindrome: </Form.Label>
            <Form.Control type='text' placeholder='Normal text' onChange={handlerOnChange}/>
            <Button variant='secondary' onClick={handlerOnClick}>Check is palindrome</Button>
        </Form>

        {isVisible  && <Badge bg={isPal ? 'success' : 'danger'}>Your data {isPal ? 'is' : 'is not' } palindrome</Badge>}
        </>
    )
}