interface KeyProps {
  text: string;
  action: () => void;
}

const Action = ({ text, action }: KeyProps): JSX.Element => {
  return <button onClick={action}>{text}</button>;
};

export default Action;
