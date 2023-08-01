import { styled } from "styled-components";

export type ALERT_VARIANT = "danger" | "warning" | "success";

interface AlertContainerProps {
  variant: ALERT_VARIANT;
}

const ALERT_COLOR = {
  danger: "red-500",
  warning: "yellow-500",
  success: "green-500",
} as const;

export const AlertContainer = styled.div<AlertContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 0.5rem;

  border-radius: 8px;

  font-size: 0.875rem;

  color: ${(props) => props.theme[ALERT_COLOR[props.variant]]};
  border-bottom: 1px solid ${(props) => props.theme[ALERT_COLOR[props.variant]]};

`;
