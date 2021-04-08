function MinorDataInputComponent({ title, amount, toAge, fromAge }) {
  return (
    <div>
      <label>{title}:</label>
      <input type="text" value={amount} placeholder={`Enter your annual ${title}...`} required />
      <label>From Age:</label>
      <input type="text" value={fromAge} placeholder="Enter age..." required />
      <label>To Age:</label>
      <input type="text" value={toAge} placeholder="Enter age..." required />
    </div>
  );
}
export default MinorDataInputComponent;
