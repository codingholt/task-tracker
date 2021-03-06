import PropTypes from 'prop-types'

const Button = ({color, text, textColor, onClick}) => {
  return (
    <button
    onClick={onClick} 
    style={{backgroundColor: color, color: textColor}}
    className="btn btn-default">
      {text}
    </button>
  )
}

Button.defaultProps ={
  color: 'steelblue',
  textColor: 'white'

}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}



export default Button