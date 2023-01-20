import AvatarStack from "components/avartar-stack";
import Button from "components/button";
import { Row } from "components/grid";
import CheckMark from "components/icons/checkmark";
import Download from "components/icons/download";
import Stack from "components/stack";
import Table from "components/table";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";
import TableList from "utils/dummies/table-data-list";

const BillingHistory = () => {
  return (
    <Row>
      <Stack
        alignItems="center"
        margin="2rem 0"
        direction="row"
        justifyContent="space-between"
      >
        <Typography color={Color.grey900} size="18px" weight="500">
          Billing history
        </Typography>
        <Button gap="8px" borderRadius="8px">
          <Download /> Download all
        </Button>
      </Stack>
      <Table
        tableHeaders={["Invoice", "Amount", "Date", "Status", "Users on plan"]}
        tableData={TableList.map((item) => ({
          title: (
            <Typography weight="500" color={Color.primary900}>
              {item.title}
            </Typography>
          ),
          amount: (
            <Typography weight="400" color={Color.grey500}>
              {item.amount}
            </Typography>
          ),
          date: (
            <Typography weight="400" color={Color.grey500}>
              {item.date}
            </Typography>
          ),
          status: <Status />,
          users: <AvatarStack images={item.user} />,
        }))}
      />
       
    </Row>
  );
};



export default BillingHistory;

function Status() {
  return (
    <Stack
      gap="3px"
      direction="row"
      borderRadius="16px"
      padding="0.4rem 0"
      justifyContent="center"
      alignItems="center"
      background={Color.success50}
    >
      <CheckMark color={Color.success500} />
      <Typography weight="500" color={Color.success700}>
        Paid
      </Typography>
    </Stack>
  );
}
