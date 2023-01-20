import { Column, Row } from "components/grid";
import Message from "components/icons/message";
import Input from "components/input";
import Stack from "components/stack";
import Typography from "components/Typography";
import { useState } from "react";
import { Color } from "utils/constants/color";

const ContactEmail = () => {
  const [value, setValue] = useState<"email" | "alternative">("email");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value as "email" | "alternative");
  };
  return (
    <Row>
      <Column md="30%" padding="0">
        <Stack margin="19px 0" gap="5px">
          <Typography size="14px" color={Color.grey900} as="p" weight="500">
            Contact email
          </Typography>
          <Typography color={Color.grey500} weight="400" size="14px" as="span">
            Where should invoices be sent?
          </Typography>
        </Stack>
      </Column>
      <Column md="70%" padding="0">
        <Stack
          alignItems="flex-start"
          direction="row"
          margin="19px 0"
          gap="10px"
        >
          <input
            style={{accentColor:Color.primary600}}
            checked={value === "email"}
            onChange={handleChange}
            value="email"
            type="radio"
          />
          <Stack gap="5px">
            <Typography
              lHeight="20px"
              size="14px"
              color={Color.grey900}
              as="p"
              weight="500"
            >
              Send to my account email
            </Typography>
            <Typography
              color={Color.grey500}
              weight="400"
              size="14px"
              as="span"
            >
              olivia@untitledui.com
            </Typography>
          </Stack>
        </Stack>
        <Stack
          alignItems="flex-start"
          direction="row"
          margin="4px 0"
          gap="10px"
        >
          <input
           style={{accentColor:Color.primary600}}
            onChange={handleChange}
            checked={value === 'alternative'}
            value="alternative"
            type="radio"
          />
          <Stack gap="5px">
            <Typography
              lHeight="20px"
              size="14px"
              color={Color.grey900}
              as="p"
              weight="500"
            >
              Send to an alternative email
            </Typography>
            <Input
              onChange={() => {}}
              icon={<Message />}
              value="billing@untitledui.com"
              maxWidth="500px"
            />
          </Stack>
        </Stack>
      </Column>
    </Row>
  );
};

export default ContactEmail;
