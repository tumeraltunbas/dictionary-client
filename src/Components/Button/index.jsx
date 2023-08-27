export const Button = (props) => {
  return (
    <button 
    type={props.type} 
    style={props.style}
    className={`btn btn-outline-primary ` + props.className}>
      {props.children}
    </button>
  );
};
