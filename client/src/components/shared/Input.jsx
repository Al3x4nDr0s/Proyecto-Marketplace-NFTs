import styled from "styled-components";

const StyledInput = styled.input`
  background-color: var(--backgroundInput);
  border-radius: 10px;
  width: ${(props) => props.width || "30%"};
  padding: 5px;
  font-size: var(--medium);
  height: ${(props) => props.height || "40px"};
  outline: none;
  border: none;
`;

export default function Input(props) {
  const { placeholder, value, type, name, label, onChange, onBlur, width, height } = props;
  // const Format = () => (
  //   <StyledInput
  //     placeholder={placeholder}
  //     value={value}
  //     type={type}
  //     name={name}
  //     label={label}
  //     onChange={onChange}
  //     onBlur={onBlur}
  //     id={name}
  //   />
  // );
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      type={type}
      width={width}
      height={height}
      name={name}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      id={name}
    />
  )
  // return (
  //   <If
  //     condition={label}
  //     Then={
  //       <div>
  //         {label && (
  //           <label>
  //             {label}: 
  //             {<Format />}
  //           </label>
  //         )}
  //       </div>
  //     }
  //     Else={<Format />}
  //   />
  // );
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
