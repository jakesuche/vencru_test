import Visa from "components/icons/visa"
import MasterCard from "components/icons/master-card"

export const CardDetailsList = [
  {
    type: "Visa",
    expiry: "Expiry 06/2024",
    icon:Visa()
  },
  {
    title: "Mastercard",
    expiry: "Expiry 06/2024",
    icon:MasterCard()
  },
];

export default CardDetailsList;
