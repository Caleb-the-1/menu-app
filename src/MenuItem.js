import './MenuItem.css';

function MenuItem({ title, description, price, image }) {
  return (
    <div className="menu-item">
      <h2>{title}</h2>
      <p>{description}</p>

      {image && (
        <img src={image} alt={title} />
      )}

      <h3>₦{price}</h3>
    </div>
  );
}

export default MenuItem;
