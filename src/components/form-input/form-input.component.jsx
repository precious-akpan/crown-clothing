import "./form-input.style.scss";

const FormInputComponent = ({ label, ...otherProps }) => {
  let shrink = false;
  otherProps = { ...otherProps, id: otherProps.name };
  console.log(shrink);
  return (
    <div className={"group"}>
      <input
        className={`form-input`}
        {...otherProps}
        onFocus={() => (shrink = true)}
      />

      {label && (
        <>
          <label
            htmlFor={otherProps.name}
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};
export default FormInputComponent;
