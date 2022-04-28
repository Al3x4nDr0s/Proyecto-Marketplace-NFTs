import styled from "styled-components";



const StyledInput = styled.input`
  background-color: var(--secondFontColor);
  border-radius: 5px;
//   padding: 10px 40px;
  outline: none;
  border: 1.5px solid #01022f;
`;

export default function Input(props) {
  const { placeholder, value, type, name, label, onChange } = props;
  const Format = () => (
    <StyledInput
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      label={label}
      onChange={onChange}
      id={name}
    />
  );
  return (
    <If
      condition={label}
      Then={
        <div>
          {label && (
            <label>
              {label}: {<Format />}
            </label>
          )}
        </div>
      }
      Else={<Format />}
    />
  );
}

function If(props) {
  const { condition, Then = null, Else = null, children = null } = props;
  if (condition) {
    if (children) return <>{children}</>;
    else return <>{Then}</>;
  } else {
    if (Else) return <>{Else}</>;
    return null;
  }
}
