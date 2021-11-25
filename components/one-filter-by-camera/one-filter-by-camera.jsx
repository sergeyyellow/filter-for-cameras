const OneFilterByCamera = ({ title }) => {
    return (
        <li className="item">
            <input type="checkbox" id={title} name={title} />
            <label htmlFor={title}>{title}</label>
        </li>
    );
};

export default OneFilterByCamera;