import styled from "styled-components";
import { Color } from "utils/constants/color";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  position: relative;
  gap: 4px;
  height: 100px;
  background: ${Color.base};
  border: 1px solid ${Color.grey200};
  border-radius: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 15px;
  cursor: pointer;
  .check_mark {
    position: absolute;
    right: 14px;
    top: 16px;
    bottom: 18.75%;
    width: 16px;
    height: 16px;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    display:flex;
    justify-content: center;
    align-items: center;
  };
  :hover {
    background: ${Color.primary50};
    border: 1px solid ${Color.primary300};
    .card-type {
      color: ${Color.primary800};
    }
    .expire-date {
      color: ${Color.primary600};
    }
    .as-default {
      color: ${Color.primary500};
    }
    .check_mark{
        background: ${Color.primary600}
    }
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  height: 68px;
  flex: none;
  flex-grow: 1;
`;

export const PaymentIcon = styled.div`
  width: 46px;
  height: 32px;
  justify-content: center;
  display: flex;
  align-items: center;
  background: ${Color.base};
  border: 1px solid ${Color.grey100};
  border-radius: 6px;
`;
