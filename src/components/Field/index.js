import { useState } from "react";
import { Button, Form, Badge, Stack } from "react-bootstrap";
import { isPalindrome } from "../../helpers/isPalindrome";

export const Field = () => {
  const [value, setValue] = useState("");
  const [isPal, setIsPal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handlerOnChange = (e) => {
    if (!e.target.value.length) {
      setIsVisible(false);
    }
    setValue(e.target.value);
  };

  const handlerOnClick = () => {
    setIsPal(isPalindrome(value));
    setIsVisible(true);
  };

  return (
    <Stack gap={3}>
      <Form.Label>Check is your data is palindrome: </Form.Label>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="me-auto"
          placeholder="Add your text here..."
          type="text"
          onChange={handlerOnChange}
        />
        <Button variant="secondary" onClick={handlerOnClick}>
          Check
        </Button>
      </Stack>
      {isVisible && (
        <Badge bg={isPal ? "success" : "danger"}>
          Your data {isPal ? "is" : "is not"} palindrome
        </Badge>
      )}
    </Stack>
  );
};
