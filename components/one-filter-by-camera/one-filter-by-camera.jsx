// Component containing one specific filter by brand
const OneFilterByCamera = ({ title, value, setPseudoBrands }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        id={title}
        name={title}
        onClick={() => setPseudoBrands(value)}
      />
      <label htmlFor={title}>{title}</label>
    </li>
  )
}

export default OneFilterByCamera
