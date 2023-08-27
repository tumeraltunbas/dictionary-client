export const Button = (props) => {
  return (
    <button 
    type={props.type} 
    className="btn btn-outline-primary">
      {props.children}
    </button>
  );
};
